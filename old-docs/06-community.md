# Phase 6: Community

## Steps 37-43

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const posts = pgTable('posts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
  isAnonymous: boolean('is_anonymous').default(false),
  upvotes: integer('upvotes').default(0),
  downvotes: integer('downvotes').default(0),
  commentCount: integer('comment_count').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const comments = pgTable('comments', {
  id: uuid('id').defaultRandom().primaryKey(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  parentId: uuid('parent_id').references(() => comments.id),
  content: text('content').notNull(),
  isAnonymous: boolean('is_anonymous').default(false),
  upvotes: integer('upvotes').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const postVotes = pgTable('post_votes', {
  id: uuid('id').defaultRandom().primaryKey(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  voteType: text('vote_type').notNull(), // 'up' | 'down'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const directMessages = pgTable('direct_messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  senderId: text('sender_id').references(() => users.id).notNull(),
  receiverId: text('receiver_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  isRead: boolean('is_read').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const reports = pgTable('reports', {
  id: uuid('id').defaultRandom().primaryKey(),
  reporterId: text('reporter_id').references(() => users.id).notNull(),
  targetType: text('target_type').notNull(), // 'post' | 'comment' | 'user'
  targetId: text('target_id').notNull(),
  reason: text('reason').notNull(),
  status: text('status').default('pending'), // 'pending' | 'reviewed' | 'resolved'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### 37. Post Feed

```typescript
// packages/api/src/routers/community.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { posts, comments, postVotes, profiles } from '@quitpo/db'
import { eq, desc, and, sql } from 'drizzle-orm'
import { generateEmbedding } from '../embeddings'

export const communityRouter = router({
  getFeed: protectedProcedure
    .input(z.object({
      cursor: z.string().uuid().optional(),
      limit: z.number().min(1).max(50).default(20),
      sort: z.enum(['recent', 'popular']).default('recent'),
    }))
    .query(async ({ ctx, input }) => {
      const orderBy = input.sort === 'popular'
        ? desc(sql`${posts.upvotes} - ${posts.downvotes}`)
        : desc(posts.createdAt)

      const result = await ctx.db
        .select({
          post: posts,
          author: {
            id: profiles.userId,
            displayName: profiles.displayName,
            avatarUrl: profiles.avatarUrl,
          },
          userVote: postVotes.voteType,
        })
        .from(posts)
        .leftJoin(profiles, and(
          eq(posts.userId, profiles.userId),
          eq(posts.isAnonymous, false)
        ))
        .leftJoin(postVotes, and(
          eq(posts.id, postVotes.postId),
          eq(postVotes.userId, ctx.userId)
        ))
        .orderBy(orderBy)
        .limit(input.limit + 1)

      const hasMore = result.length > input.limit
      const items = result.slice(0, input.limit)

      return {
        items: items.map((r) => ({
          ...r.post,
          author: r.post.isAnonymous ? null : r.author,
          userVote: r.userVote,
        })),
        nextCursor: hasMore ? items[items.length - 1].post.id : undefined,
      }
    }),

  createPost: protectedProcedure
    .input(z.object({
      content: z.string().min(1).max(2000),
      isAnonymous: z.boolean().default(false),
    }))
    .mutation(async ({ ctx, input }) => {
      const embedding = await generateEmbedding(input.content)

      const [post] = await ctx.db
        .insert(posts)
        .values({
          userId: ctx.userId,
          content: input.content,
          isAnonymous: input.isAnonymous,
          embedding,
        })
        .returning()

      return post
    }),

  getPost: protectedProcedure
    .input(z.object({ postId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const result = await ctx.db
        .select({
          post: posts,
          author: {
            id: profiles.userId,
            displayName: profiles.displayName,
            avatarUrl: profiles.avatarUrl,
          },
          userVote: postVotes.voteType,
        })
        .from(posts)
        .leftJoin(profiles, and(
          eq(posts.userId, profiles.userId),
          eq(posts.isAnonymous, false)
        ))
        .leftJoin(postVotes, and(
          eq(posts.id, postVotes.postId),
          eq(postVotes.userId, ctx.userId)
        ))
        .where(eq(posts.id, input.postId))
        .limit(1)

      if (!result[0]) throw new Error('Post not found')

      return {
        ...result[0].post,
        author: result[0].post.isAnonymous ? null : result[0].author,
        userVote: result[0].userVote,
      }
    }),
})
```

### 38. Comments + Threading

```typescript
// packages/api/src/routers/community.ts (additions)
getComments: protectedProcedure
  .input(z.object({ postId: z.string().uuid() }))
  .query(async ({ ctx, input }) => {
    const result = await ctx.db
      .select({
        comment: comments,
        author: {
          id: profiles.userId,
          displayName: profiles.displayName,
          avatarUrl: profiles.avatarUrl,
        },
      })
      .from(comments)
      .leftJoin(profiles, and(
        eq(comments.userId, profiles.userId),
        eq(comments.isAnonymous, false)
      ))
      .where(eq(comments.postId, input.postId))
      .orderBy(comments.createdAt)

    // Build threaded structure
    const commentMap = new Map()
    const topLevel: any[] = []

    for (const r of result) {
      const comment = {
        ...r.comment,
        author: r.comment.isAnonymous ? null : r.author,
        replies: [],
      }
      commentMap.set(comment.id, comment)

      if (!comment.parentId) {
        topLevel.push(comment)
      }
    }

    for (const r of result) {
      if (r.comment.parentId) {
        const parent = commentMap.get(r.comment.parentId)
        if (parent) {
          parent.replies.push(commentMap.get(r.comment.id))
        }
      }
    }

    return topLevel
  }),

createComment: protectedProcedure
  .input(z.object({
    postId: z.string().uuid(),
    content: z.string().min(1).max(1000),
    parentId: z.string().uuid().optional(),
    isAnonymous: z.boolean().default(false),
  }))
  .mutation(async ({ ctx, input }) => {
    const [comment] = await ctx.db
      .insert(comments)
      .values({
        postId: input.postId,
        userId: ctx.userId,
        content: input.content,
        parentId: input.parentId,
        isAnonymous: input.isAnonymous,
      })
      .returning()

    // Update comment count
    await ctx.db
      .update(posts)
      .set({ commentCount: sql`${posts.commentCount} + 1` })
      .where(eq(posts.id, input.postId))

    return comment
  }),
```

### 39. Upvote/Downvote

```typescript
// packages/api/src/routers/community.ts (additions)
vote: protectedProcedure
  .input(z.object({
    postId: z.string().uuid(),
    voteType: z.enum(['up', 'down']),
  }))
  .mutation(async ({ ctx, input }) => {
    // Check existing vote
    const existing = await ctx.db
      .select()
      .from(postVotes)
      .where(and(
        eq(postVotes.postId, input.postId),
        eq(postVotes.userId, ctx.userId)
      ))
      .limit(1)

    if (existing[0]) {
      if (existing[0].voteType === input.voteType) {
        // Remove vote
        await ctx.db
          .delete(postVotes)
          .where(eq(postVotes.id, existing[0].id))

        const field = input.voteType === 'up' ? 'upvotes' : 'downvotes'
        await ctx.db
          .update(posts)
          .set({ [field]: sql`${posts[field]} - 1` })
          .where(eq(posts.id, input.postId))

        return { action: 'removed' }
      } else {
        // Change vote
        await ctx.db
          .update(postVotes)
          .set({ voteType: input.voteType })
          .where(eq(postVotes.id, existing[0].id))

        const increment = input.voteType === 'up' ? 'upvotes' : 'downvotes'
        const decrement = input.voteType === 'up' ? 'downvotes' : 'upvotes'

        await ctx.db
          .update(posts)
          .set({
            [increment]: sql`${posts[increment]} + 1`,
            [decrement]: sql`${posts[decrement]} - 1`,
          })
          .where(eq(posts.id, input.postId))

        return { action: 'changed' }
      }
    } else {
      // New vote
      await ctx.db
        .insert(postVotes)
        .values({
          postId: input.postId,
          userId: ctx.userId,
          voteType: input.voteType,
        })

      const field = input.voteType === 'up' ? 'upvotes' : 'downvotes'
      await ctx.db
        .update(posts)
        .set({ [field]: sql`${posts[field]} + 1` })
        .where(eq(posts.id, input.postId))

      return { action: 'added' }
    }
  }),
```

### 40. Anonymous Posting

Already integrated in createPost and createComment above via `isAnonymous` field.

### 41. 28-Day Challenge Leaderboard

```typescript
// packages/api/src/routers/challenges.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { challenges, challengeParticipants, profiles, streaks } from '@quitpo/db'
import { eq, and, desc, gte } from 'drizzle-orm'

export const challengesRouter = router({
  getActive: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date()

    return ctx.db
      .select()
      .from(challenges)
      .where(and(
        eq(challenges.isActive, true),
        gte(challenges.endDate, now)
      ))
      .orderBy(desc(challenges.startDate))
  }),

  getLeaderboard: protectedProcedure
    .input(z.object({ challengeId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const participants = await ctx.db
        .select({
          userId: challengeParticipants.userId,
          progress: challengeParticipants.progress,
          joinedAt: challengeParticipants.joinedAt,
          displayName: profiles.displayName,
          avatarUrl: profiles.avatarUrl,
          currentStreak: streaks.currentDays,
        })
        .from(challengeParticipants)
        .leftJoin(profiles, eq(challengeParticipants.userId, profiles.userId))
        .leftJoin(streaks, and(
          eq(challengeParticipants.userId, streaks.userId),
          eq(streaks.isActive, true)
        ))
        .where(eq(challengeParticipants.challengeId, input.challengeId))
        .orderBy(desc(challengeParticipants.progress))
        .limit(100)

      // Add rank
      return participants.map((p, index) => ({
        rank: index + 1,
        ...p,
        isCurrentUser: p.userId === ctx.userId,
      }))
    }),

  join: protectedProcedure
    .input(z.object({ challengeId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      // Check if already participating
      const existing = await ctx.db
        .select()
        .from(challengeParticipants)
        .where(and(
          eq(challengeParticipants.challengeId, input.challengeId),
          eq(challengeParticipants.userId, ctx.userId)
        ))
        .limit(1)

      if (existing[0]) {
        throw new Error('Already participating in this challenge')
      }

      const [participant] = await ctx.db
        .insert(challengeParticipants)
        .values({
          challengeId: input.challengeId,
          userId: ctx.userId,
          progress: 0,
        })
        .returning()

      return participant
    }),

  updateProgress: protectedProcedure
    .input(z.object({
      challengeId: z.string().uuid(),
      progress: z.number().min(0),
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(challengeParticipants)
        .set({ progress: input.progress })
        .where(and(
          eq(challengeParticipants.challengeId, input.challengeId),
          eq(challengeParticipants.userId, ctx.userId)
        ))
    }),
})
```

### 42. Direct Messaging

```typescript
// packages/api/src/routers/messages.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { directMessages, profiles } from '@quitpo/db'
import { eq, or, and, desc } from 'drizzle-orm'

export const messagesRouter = router({
  getConversations: protectedProcedure.query(async ({ ctx }) => {
    // Get unique conversation partners
    const messages = await ctx.db
      .selectDistinct({
        partnerId: sql`CASE
          WHEN ${directMessages.senderId} = ${ctx.userId} THEN ${directMessages.receiverId}
          ELSE ${directMessages.senderId}
        END`,
      })
      .from(directMessages)
      .where(or(
        eq(directMessages.senderId, ctx.userId),
        eq(directMessages.receiverId, ctx.userId)
      ))

    // Get partner profiles and last message
    const conversations = await Promise.all(
      messages.map(async (m) => {
        const [profile] = await ctx.db
          .select()
          .from(profiles)
          .where(eq(profiles.userId, m.partnerId))
          .limit(1)

        const [lastMessage] = await ctx.db
          .select()
          .from(directMessages)
          .where(or(
            and(eq(directMessages.senderId, ctx.userId), eq(directMessages.receiverId, m.partnerId)),
            and(eq(directMessages.senderId, m.partnerId), eq(directMessages.receiverId, ctx.userId))
          ))
          .orderBy(desc(directMessages.createdAt))
          .limit(1)

        const unreadCount = await ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(directMessages)
          .where(and(
            eq(directMessages.senderId, m.partnerId),
            eq(directMessages.receiverId, ctx.userId),
            eq(directMessages.isRead, false)
          ))

        return {
          partnerId: m.partnerId,
          profile,
          lastMessage,
          unreadCount: unreadCount[0].count,
        }
      })
    )

    return conversations.sort((a, b) =>
      new Date(b.lastMessage?.createdAt || 0).getTime() -
      new Date(a.lastMessage?.createdAt || 0).getTime()
    )
  }),

  getMessages: protectedProcedure
    .input(z.object({ partnerId: z.string() }))
    .query(async ({ ctx, input }) => {
      // Mark as read
      await ctx.db
        .update(directMessages)
        .set({ isRead: true })
        .where(and(
          eq(directMessages.senderId, input.partnerId),
          eq(directMessages.receiverId, ctx.userId)
        ))

      return ctx.db
        .select()
        .from(directMessages)
        .where(or(
          and(eq(directMessages.senderId, ctx.userId), eq(directMessages.receiverId, input.partnerId)),
          and(eq(directMessages.senderId, input.partnerId), eq(directMessages.receiverId, ctx.userId))
        ))
        .orderBy(directMessages.createdAt)
    }),

  send: protectedProcedure
    .input(z.object({
      receiverId: z.string(),
      content: z.string().min(1).max(1000),
    }))
    .mutation(async ({ ctx, input }) => {
      const [message] = await ctx.db
        .insert(directMessages)
        .values({
          senderId: ctx.userId,
          receiverId: input.receiverId,
          content: input.content,
        })
        .returning()

      return message
    }),
})
```

### 43. Moderation Tools

```typescript
// packages/api/src/routers/moderation.ts
import { z } from 'zod'
import { router, protectedProcedure, adminProcedure } from '../trpc'
import { reports, posts, comments, users } from '@quitpo/db'
import { eq, and } from 'drizzle-orm'

export const moderationRouter = router({
  report: protectedProcedure
    .input(z.object({
      targetType: z.enum(['post', 'comment', 'user']),
      targetId: z.string(),
      reason: z.string().min(10).max(500),
    }))
    .mutation(async ({ ctx, input }) => {
      const [report] = await ctx.db
        .insert(reports)
        .values({
          reporterId: ctx.userId,
          targetType: input.targetType,
          targetId: input.targetId,
          reason: input.reason,
        })
        .returning()

      return report
    }),

  // Admin-only routes
  getReports: adminProcedure
    .input(z.object({
      status: z.enum(['pending', 'reviewed', 'resolved']).optional(),
    }))
    .query(async ({ ctx, input }) => {
      const where = input.status
        ? eq(reports.status, input.status)
        : undefined

      return ctx.db
        .select()
        .from(reports)
        .where(where)
        .orderBy(desc(reports.createdAt))
    }),

  resolveReport: adminProcedure
    .input(z.object({
      reportId: z.string().uuid(),
      action: z.enum(['dismiss', 'warn', 'remove', 'ban']),
    }))
    .mutation(async ({ ctx, input }) => {
      const [report] = await ctx.db
        .select()
        .from(reports)
        .where(eq(reports.id, input.reportId))
        .limit(1)

      if (!report) throw new Error('Report not found')

      // Take action based on type
      switch (input.action) {
        case 'remove':
          if (report.targetType === 'post') {
            await ctx.db.delete(posts).where(eq(posts.id, report.targetId))
          } else if (report.targetType === 'comment') {
            await ctx.db.delete(comments).where(eq(comments.id, report.targetId))
          }
          break
        case 'ban':
          await ctx.db
            .update(users)
            .set({ isBanned: true })
            .where(eq(users.id, report.targetId))
          break
      }

      // Mark as resolved
      await ctx.db
        .update(reports)
        .set({ status: 'resolved' })
        .where(eq(reports.id, input.reportId))

      return { success: true }
    }),
})
```

### UI Components

```typescript
// packages/ui/src/PostCard.tsx
import { View, Text, Pressable } from 'react-native'
import { formatDistanceToNow } from 'date-fns'

interface PostCardProps {
  post: {
    id: string
    content: string
    upvotes: number
    downvotes: number
    commentCount: number
    createdAt: Date
    author: { displayName: string; avatarUrl?: string } | null
  }
  userVote?: 'up' | 'down' | null
  onUpvote: () => void
  onDownvote: () => void
  onPress: () => void
}

export function PostCard({
  post,
  userVote,
  onUpvote,
  onDownvote,
  onPress,
}: PostCardProps) {
  const score = post.upvotes - post.downvotes

  return (
    <Pressable onPress={onPress} className="bg-gray-800 rounded-xl p-4 mb-3">
      <View className="flex-row items-center mb-3">
        <View className="w-8 h-8 rounded-full bg-gray-600 mr-2" />
        <Text className="text-gray-400">
          {post.author?.displayName || 'Anonymous'}
        </Text>
        <Text className="text-gray-500 ml-2">
          {formatDistanceToNow(post.createdAt, { addSuffix: true })}
        </Text>
      </View>

      <Text className="text-white text-base mb-4">{post.content}</Text>

      <View className="flex-row items-center gap-4">
        <View className="flex-row items-center">
          <Pressable onPress={onUpvote} className="p-2">
            <Text className={userVote === 'up' ? 'text-green-500' : 'text-gray-400'}>
              ▲
            </Text>
          </Pressable>
          <Text className={`text-base font-medium ${
            score > 0 ? 'text-green-500' : score < 0 ? 'text-red-500' : 'text-gray-400'
          }`}>
            {score}
          </Text>
          <Pressable onPress={onDownvote} className="p-2">
            <Text className={userVote === 'down' ? 'text-red-500' : 'text-gray-400'}>
              ▼
            </Text>
          </Pressable>
        </View>

        <View className="flex-row items-center">
          <Text className="text-gray-400">{post.commentCount} comments</Text>
        </View>
      </View>
    </Pressable>
  )
}
```
