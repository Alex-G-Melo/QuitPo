# Phase 4: Community & Content

## Objective

Build the community features (anonymous posts, peer support, challenges) and educational content (modules, lessons, quizzes) that provide social accountability and knowledge.

## Prerequisites

- Phase 2 completed (can run in parallel with Phase 3)
- User authentication working
- XP system from Phase 3 (for rewards)

## Features in This Phase

| Feature | Doc Reference | Priority |
|---------|---------------|----------|
| Community Feed | `/docs/features/07-community/` | High |
| Education Modules | `/docs/features/08-education/` | High |
| Group Challenges | `/docs/features/07-community/` | Medium |

---

## Tasks

### 4.1 Community Database Schema

**Agent**: foundation-agent

| Task | Status | Files |
|------|--------|-------|
| Create posts table | Not Started | `packages/db/schema/community.ts` |
| Create comments table | Not Started | `packages/db/schema/community.ts` |
| Create reactions table | Not Started | `packages/db/schema/community.ts` |
| Create challenges table | Not Started | `packages/db/schema/challenges.ts` |
| Setup content moderation flags | Not Started | `packages/db/schema/moderation.ts` |

**Community Schema:**
```typescript
// packages/db/schema/community.ts
export const posts = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(),
  content: text('content').notNull(),
  isAnonymous: boolean('is_anonymous').default(true).notNull(),
  displayName: varchar('display_name', { length: 50 }), // Generated if anonymous
  reactionCount: integer('reaction_count').default(0).notNull(),
  commentCount: integer('comment_count').default(0).notNull(),
  isHidden: boolean('is_hidden').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  isAnonymous: boolean('is_anonymous').default(true).notNull(),
  displayName: varchar('display_name', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const reactions = pgTable('reactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  postId: uuid('post_id').references(() => posts.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  type: varchar('type', { length: 20 }).notNull(), // 'support' | 'relate' | 'proud'
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

**Anonymous Name Generator:**
```typescript
// packages/shared/utils/anonymous-name.ts
const adjectives = ['Brave', 'Strong', 'Hopeful', 'Resilient', 'Rising', 'Healing'];
const animals = ['Phoenix', 'Eagle', 'Lion', 'Wolf', 'Bear', 'Hawk'];

export function generateAnonymousName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const num = Math.floor(Math.random() * 999);
  return `${adj}${animal}${num}`;
}
```

---

### 4.2 Community Feed

**Agent**: backend-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create community tRPC router | Not Started | `packages/api/routers/community.ts` |
| Build post card component | Not Started | `packages/ui/src/community/post-card.tsx` |
| Create feed list | Not Started | `packages/ui/src/community/feed.tsx` |
| Build create post modal | Not Started | `packages/ui/src/community/create-post.tsx` |
| Create community page | Not Started | `apps/mobile/app/(tabs)/community.tsx` |
| Add reaction animations | Not Started | `packages/ui/src/community/reactions.tsx` |

**Feed UI Layout:**
```
┌─────────────────────────────────────┐
│  Community               [+ Post]   │
├─────────────────────────────────────┤
│  Filter: [All] [My Posts] [Popular] │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐   │
│  │ BravePhoenix42 • 2h ago     │   │
│  │ ─────────────────────────   │   │
│  │ Day 15 and feeling strong!  │   │
│  │ The urges are getting       │   │
│  │ easier to manage...         │   │
│  │                             │   │
│  │ 💪 12  💬 3                  │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ HealingWolf88 • 5h ago      │   │
│  │ ─────────────────────────   │   │
│  │ Relapsed yesterday but I'm  │   │
│  │ not giving up. Day 1 again. │   │
│  │                             │   │
│  │ 💪 28  💬 7                  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Reaction Types:**
```typescript
// packages/shared/constants/reactions.ts
export const REACTION_TYPES = [
  { type: 'support', emoji: '💪', label: 'Support' },
  { type: 'relate', emoji: '🤝', label: 'I relate' },
  { type: 'proud', emoji: '🎉', label: 'Proud of you' },
];
```

---

### 4.3 Content Moderation

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Setup AI moderation | Not Started | `packages/api/services/moderation.ts` |
| Create report system | Not Started | `packages/api/routers/moderation.ts` |
| Add banned words filter | Not Started | `packages/shared/constants/banned-words.ts` |
| Create moderation queue | Not Started | Admin dashboard (future) |

**Moderation Flow:**
```typescript
// packages/api/services/moderation.ts
export async function moderateContent(content: string): Promise<ModerationResult> {
  // 1. Check banned words
  if (containsBannedWords(content)) {
    return { approved: false, reason: 'inappropriate_language' };
  }

  // 2. AI moderation for harmful content
  const aiResult = await callModerationAPI(content);
  if (aiResult.flagged) {
    return { approved: false, reason: aiResult.category };
  }

  // 3. Check for triggering content (addiction-specific)
  if (containsTriggeringContent(content)) {
    return { approved: true, warning: 'trigger_warning_added' };
  }

  return { approved: true };
}
```

---

### 4.4 Education Modules

**Agent**: backend-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create lessons schema | Not Started | `packages/db/schema/education.ts` |
| Build lesson card UI | Not Started | `packages/ui/src/education/lesson-card.tsx` |
| Create lesson viewer | Not Started | `packages/ui/src/education/lesson-viewer.tsx` |
| Build quiz component | Not Started | `packages/ui/src/education/quiz.tsx` |
| Create education page | Not Started | `apps/mobile/app/(tabs)/learn.tsx` |
| Add lesson completion tracking | Not Started | `packages/api/routers/education.ts` |

**Education Schema:**
```typescript
// packages/db/schema/education.ts
export const modules = pgTable('modules', {
  id: uuid('id').primaryKey().defaultRandom(),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(),
  order: integer('order').notNull(),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description'),
  icon: varchar('icon', { length: 10 }),
  lessonCount: integer('lesson_count').notNull(),
});

export const lessons = pgTable('lessons', {
  id: uuid('id').primaryKey().defaultRandom(),
  moduleId: uuid('module_id').references(() => modules.id).notNull(),
  order: integer('order').notNull(),
  title: varchar('title', { length: 100 }).notNull(),
  content: text('content').notNull(), // Markdown
  estimatedMinutes: integer('estimated_minutes').default(5),
  xpReward: integer('xp_reward').default(25),
});

export const quizzes = pgTable('quizzes', {
  id: uuid('id').primaryKey().defaultRandom(),
  lessonId: uuid('lesson_id').references(() => lessons.id).notNull(),
  questions: json('questions').$type<QuizQuestion[]>().notNull(),
  passingScore: integer('passing_score').default(70),
});

export const userLessonProgress = pgTable('user_lesson_progress', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  lessonId: uuid('lesson_id').references(() => lessons.id).notNull(),
  completed: boolean('completed').default(false).notNull(),
  quizScore: integer('quiz_score'),
  completedAt: timestamp('completed_at'),
});
```

**Module Structure (Example for Porn):**
```typescript
// Content defined in docs/features/08-education/porn.md
export const PORN_MODULES = [
  {
    order: 1,
    title: 'Understanding the Brain',
    icon: '🧠',
    lessons: [
      'The Dopamine System',
      'How Addiction Hijacks Your Brain',
      'The 90-Day Rewiring Process',
      'Neuroplasticity and Recovery',
    ],
  },
  {
    order: 2,
    title: 'Triggers & Urges',
    icon: '⚡',
    lessons: [
      'Identifying Your Triggers',
      'The HALT Method',
      'Urge Surfing Technique',
      'Building Your Trigger Plan',
    ],
  },
  {
    order: 3,
    title: 'Healthy Habits',
    icon: '🌱',
    lessons: [
      'Sleep and Recovery',
      'Exercise as Medicine',
      'Mindfulness Basics',
      'Building New Routines',
    ],
  },
  {
    order: 4,
    title: 'Relationships & Intimacy',
    icon: '💕',
    lessons: [
      'Rebuilding Trust',
      'Healthy Intimacy',
      'Communication Skills',
      'Long-term Recovery',
    ],
  },
];
```

---

### 4.5 Group Challenges

**Agent**: backend-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create challenges schema | Not Started | `packages/db/schema/challenges.ts` |
| Build challenge card | Not Started | `packages/ui/src/challenges/card.tsx` |
| Create challenge detail page | Not Started | `apps/mobile/app/challenges/[id].tsx` |
| Add challenge progress tracking | Not Started | `packages/api/routers/challenges.ts` |
| Implement leaderboard | Not Started | `packages/ui/src/challenges/leaderboard.tsx` |

**Challenge Schema:**
```typescript
// packages/db/schema/challenges.ts
export const challenges = pgTable('challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(),
  title: varchar('title', { length: 100 }).notNull(),
  description: text('description').notNull(),
  type: varchar('type', { length: 50 }).notNull(), // 'streak' | 'checkin' | 'education' | 'custom'
  goal: integer('goal').notNull(), // e.g., 7 days, 10 check-ins
  xpReward: integer('xp_reward').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  participantCount: integer('participant_count').default(0),
  isActive: boolean('is_active').default(true),
});

export const challengeParticipants = pgTable('challenge_participants', {
  id: uuid('id').primaryKey().defaultRandom(),
  challengeId: uuid('challenge_id').references(() => challenges.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  progress: integer('progress').default(0).notNull(),
  completed: boolean('completed').default(false).notNull(),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
  completedAt: timestamp('completed_at'),
});
```

**Sample Challenges:**
```typescript
// packages/shared/constants/challenges.ts
export const SAMPLE_CHALLENGES = [
  {
    title: '7-Day Warrior',
    description: 'Maintain your streak for 7 consecutive days',
    type: 'streak',
    goal: 7,
    xpReward: 150,
  },
  {
    title: 'Check-in Champion',
    description: 'Complete 14 daily check-ins',
    type: 'checkin',
    goal: 14,
    xpReward: 100,
  },
  {
    title: 'Knowledge Seeker',
    description: 'Complete all lessons in Module 1',
    type: 'education',
    goal: 4,
    xpReward: 200,
  },
  {
    title: 'Community Builder',
    description: 'Make 5 supportive comments on posts',
    type: 'custom',
    goal: 5,
    xpReward: 75,
  },
];
```

---

## Completion Checklist

Before moving to Phase 5, verify:

- [ ] Community feed shows posts filtered by addiction type
- [ ] Anonymous posting works with generated names
- [ ] Reactions update counts correctly
- [ ] Comments can be added to posts
- [ ] Content moderation catches inappropriate content
- [ ] Education modules display with lesson list
- [ ] Lessons render markdown content correctly
- [ ] Quizzes work with scoring
- [ ] Lesson completion awards XP
- [ ] Challenges display with participant count
- [ ] Challenge progress tracks correctly
- [ ] Leaderboard shows top participants

## Next Phase

Once all checklist items pass, proceed to [Phase 5: Safety Features](../05-safety-features/README.md).
