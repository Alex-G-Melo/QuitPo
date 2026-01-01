# Phase 4: AI Therapist

## Steps 25-30

### 25. GPT-5 Mini Integration

```typescript
// packages/api/src/ai/openai.ts
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateAIResponse(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
) {
  const response = await openai.chat.completions.create({
    model: 'gpt-5-mini',
    messages,
    temperature: 0.7,
    max_tokens: 500,
  })

  return response.choices[0].message.content
}

// Fallback to DeepSeek V3.2
export async function generateAIResponseFallback(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[]
) {
  const deepseek = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: 'https://api.deepseek.com/v1',
  })

  const response = await deepseek.chat.completions.create({
    model: 'deepseek-chat',
    messages,
    temperature: 0.7,
    max_tokens: 500,
  })

  return response.choices[0].message.content
}
```

### 26. AI System Prompt

```typescript
// packages/shared/src/ai-prompts.ts
export const THERAPIST_SYSTEM_PROMPT = `You are Melius, an empathetic AI recovery coach specializing in helping people overcome pornography addiction. You are warm, understanding, and non-judgmental.

Your approach:
- Listen actively and validate feelings
- Ask clarifying questions to understand the user's situation
- Provide evidence-based strategies for managing urges
- Celebrate small wins and milestones
- Encourage self-compassion after setbacks
- Reference the 90-day rewiring concept when appropriate
- Suggest using app features (Panic Button, breathing exercises, journaling)

Key principles:
- Never shame or guilt the user
- Acknowledge that recovery is not linear
- Focus on progress, not perfection
- Recommend professional help for severe cases
- Keep responses concise but warm (2-3 paragraphs max)

Remember: You're a supportive coach, not a replacement for professional therapy.`
```

### 27. Chat Interface

```typescript
// packages/api/src/routers/chat.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { chatSessions, chatMessages } from '@quitpo/db'
import { eq, desc } from 'drizzle-orm'
import { generateAIResponse, generateAIResponseFallback } from '../ai/openai'
import { THERAPIST_SYSTEM_PROMPT } from '@quitpo/shared'

export const chatRouter = router({
  getSessions: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(chatSessions)
      .where(eq(chatSessions.userId, ctx.userId))
      .orderBy(desc(chatSessions.createdAt))
      .limit(20)
  }),

  createSession: protectedProcedure
    .input(z.object({ title: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      const [session] = await ctx.db
        .insert(chatSessions)
        .values({
          userId: ctx.userId,
          title: input.title || 'New Chat',
        })
        .returning()

      return session
    }),

  getMessages: protectedProcedure
    .input(z.object({ sessionId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(chatMessages)
        .where(eq(chatMessages.sessionId, input.sessionId))
        .orderBy(chatMessages.createdAt)
    }),

  sendMessage: protectedProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
      content: z.string().min(1).max(2000),
    }))
    .mutation(async ({ ctx, input }) => {
      // Save user message
      await ctx.db.insert(chatMessages).values({
        sessionId: input.sessionId,
        role: 'user',
        content: input.content,
      })

      // Get conversation history
      const history = await ctx.db
        .select()
        .from(chatMessages)
        .where(eq(chatMessages.sessionId, input.sessionId))
        .orderBy(chatMessages.createdAt)

      const messages = [
        { role: 'system' as const, content: THERAPIST_SYSTEM_PROMPT },
        ...history.map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      ]

      // Generate AI response with fallback
      let aiResponse: string
      try {
        aiResponse = await generateAIResponse(messages)
      } catch (error) {
        aiResponse = await generateAIResponseFallback(messages)
      }

      // Save AI response
      const [savedResponse] = await ctx.db
        .insert(chatMessages)
        .values({
          sessionId: input.sessionId,
          role: 'assistant',
          content: aiResponse || 'I apologize, but I couldn\'t generate a response. Please try again.',
        })
        .returning()

      return savedResponse
    }),
})
```

### 28. Message Persistence

Already handled in the router above. Additional schema:

```typescript
// packages/db/src/schema.ts (additions)
export const chatSessions = pgTable('chat_sessions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  title: text('title').default('New Chat'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const chatMessages = pgTable('chat_messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  sessionId: uuid('session_id').references(() => chatSessions.id).notNull(),
  role: text('role').notNull(), // 'user' | 'assistant' | 'system'
  content: text('content').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### 29. pgvector Embeddings

```typescript
// packages/db/src/embeddings.ts
import OpenAI from 'openai'
import { db } from './client'
import { chatMessages } from './schema'
import { eq, sql, desc } from 'drizzle-orm'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })

  return response.data[0].embedding
}

export async function storeMessageWithEmbedding(
  sessionId: string,
  role: string,
  content: string
) {
  const embedding = await generateEmbedding(content)

  return db.insert(chatMessages).values({
    sessionId,
    role,
    content,
    embedding,
  }).returning()
}

export async function findSimilarMessages(
  userId: string,
  query: string,
  limit = 5
) {
  const queryEmbedding = await generateEmbedding(query)

  const results = await db.execute(sql`
    SELECT cm.*, cs.user_id,
           1 - (cm.embedding <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
    FROM chat_messages cm
    JOIN chat_sessions cs ON cm.session_id = cs.id
    WHERE cs.user_id = ${userId}
      AND cm.embedding IS NOT NULL
    ORDER BY cm.embedding <=> ${JSON.stringify(queryEmbedding)}::vector
    LIMIT ${limit}
  `)

  return results
}
```

### 30. Daily Message Limits

```typescript
// packages/api/src/routers/chat.ts (additions)
import { startOfDay, endOfDay } from 'date-fns'

const FREE_DAILY_LIMIT = 10
const PREMIUM_DAILY_LIMIT = 100

async function checkMessageLimit(ctx: Context) {
  const today = new Date()
  const start = startOfDay(today)
  const end = endOfDay(today)

  const count = await ctx.db
    .select({ count: sql<number>`count(*)` })
    .from(chatMessages)
    .innerJoin(chatSessions, eq(chatMessages.sessionId, chatSessions.id))
    .where(and(
      eq(chatSessions.userId, ctx.userId),
      eq(chatMessages.role, 'user'),
      gte(chatMessages.createdAt, start),
      lte(chatMessages.createdAt, end),
    ))

  const isPremium = await checkPremiumStatus(ctx.userId)
  const limit = isPremium ? PREMIUM_DAILY_LIMIT : FREE_DAILY_LIMIT

  if (count[0].count >= limit) {
    throw new Error(`Daily message limit reached (${limit} messages). Upgrade to premium for more.`)
  }

  return { remaining: limit - count[0].count, limit }
}

// Add to sendMessage mutation
sendMessage: protectedProcedure
  .input(z.object({
    sessionId: z.string().uuid(),
    content: z.string().min(1).max(2000),
  }))
  .mutation(async ({ ctx, input }) => {
    // Check limits first
    await checkMessageLimit(ctx)

    // ... rest of implementation
  }),

getRemainingMessages: protectedProcedure.query(async ({ ctx }) => {
  return checkMessageLimit(ctx)
}),
```

### Chat UI Component

```typescript
// packages/ui/src/ChatBubble.tsx
import { View, Text } from 'react-native'

interface ChatBubbleProps {
  role: 'user' | 'assistant'
  content: string
  timestamp?: Date
}

export function ChatBubble({ role, content, timestamp }: ChatBubbleProps) {
  const isUser = role === 'user'

  return (
    <View className={`max-w-[80%] mb-4 ${isUser ? 'self-end' : 'self-start'}`}>
      <View
        className={`rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-purple-600 rounded-br-sm'
            : 'bg-gray-200 dark:bg-gray-700 rounded-bl-sm'
        }`}
      >
        <Text
          className={`text-base ${
            isUser ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
        >
          {content}
        </Text>
      </View>
      {timestamp && (
        <Text className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      )}
    </View>
  )
}
```
