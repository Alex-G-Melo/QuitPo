# Phase 3: AI & Engagement

## Objective

Build the AI companion (Alex) and gamification systems (Life Tree, achievements) that differentiate the app and drive long-term engagement.

## Prerequisites

- Phase 2 completed
- Core loop (dashboard, streaks, check-ins) working
- OpenAI API key configured
- DeepSeek API key configured (fallback)

## Features in This Phase

| Feature | Doc Reference | Priority |
|---------|---------------|----------|
| Alex AI Companion | `/docs/features/02-alex-friend-ai-agent/` | Critical |
| Life Tree | `/docs/features/04-gamification/` | High |
| Achievements | `/docs/features/04-gamification/` | High |

---

## Tasks

### 3.1 Alex AI Companion - Backend

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Create AI service | Not Started | `packages/api/services/ai.ts` |
| Setup GPT-5 Mini integration | Not Started | `packages/api/services/openai.ts` |
| Setup DeepSeek fallback | Not Started | `packages/api/services/deepseek.ts` |
| Create chat tRPC router | Not Started | `packages/api/routers/chat.ts` |
| Implement context builder | Not Started | `packages/api/services/context.ts` |
| Create chat history table | Not Started | `packages/db/schema/chat.ts` |
| Setup pgvector for semantic search | Not Started | `packages/db/schema/embeddings.ts` |

**AI Service Architecture:**
```typescript
// packages/api/services/ai.ts
export class AIService {
  private primaryModel = 'gpt-5-mini';
  private fallbackModel = 'deepseek-chat';

  async chat(messages: Message[], context: UserContext): Promise<string> {
    try {
      return await this.callOpenAI(messages, context);
    } catch (error) {
      console.error('OpenAI failed, falling back to DeepSeek');
      return await this.callDeepSeek(messages, context);
    }
  }

  private buildSystemPrompt(context: UserContext): string {
    return `You are Alex, a supportive recovery companion for ${context.addictionType} addiction.

User Context:
- Current streak: ${context.currentStreak} days
- Longest streak: ${context.longestStreak} days
- Recent mood: ${context.recentMood}
- Time of day: ${context.timeOfDay}

Guidelines:
- Be warm, empathetic, and non-judgmental
- Use evidence-based recovery techniques
- Celebrate small wins
- Never shame or criticize
- If user mentions self-harm, provide crisis resources`;
  }
}
```

**Chat Database Schema:**
```typescript
// packages/db/schema/chat.ts
export const chatMessages = pgTable('chat_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  role: varchar('role', { length: 20 }).notNull(), // 'user' | 'assistant'
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// For semantic search with pgvector
export const chatEmbeddings = pgTable('chat_embeddings', {
  id: uuid('id').primaryKey().defaultRandom(),
  messageId: uuid('message_id').references(() => chatMessages.id).notNull(),
  embedding: vector('embedding', { dimensions: 1536 }), // text-embedding-3-small
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

---

### 3.2 Alex AI Companion - Frontend

**Agent**: ui-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create chat UI components | Not Started | `packages/ui/src/chat/` |
| Build message bubble | Not Started | `packages/ui/src/chat/message.tsx` |
| Create typing indicator | Not Started | `packages/ui/src/chat/typing.tsx` |
| Build chat input | Not Started | `packages/ui/src/chat/input.tsx` |
| Create chat screen | Not Started | `apps/mobile/app/chat/` |
| Add suggested prompts | Not Started | `packages/ui/src/chat/suggestions.tsx` |

**Chat UI Layout:**
```
┌─────────────────────────────────────┐
│  ← Alex                        •••  │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Hey! How are you feeling    │   │
│  │ today? 😊                   │   │
│  └─────────────────────────────┘   │
│                                     │
│       ┌─────────────────────────┐   │
│       │ I'm struggling with     │   │
│       │ urges today...          │   │
│       └─────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ I hear you. Let's work      │   │
│  │ through this together...    │   │
│  │ ●●●                         │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│ Suggested: "I need help" "Tips"    │
├─────────────────────────────────────┤
│ [Message input...          ] [Send] │
└─────────────────────────────────────┘
```

**Suggested Prompts (Addiction-Specific):**
```typescript
// packages/shared/constants/chat-suggestions.ts
export const CHAT_SUGGESTIONS = {
  porn: [
    "I'm having urges right now",
    "How do I block content?",
    "Tell me about brain rewiring",
    "I need encouragement",
  ],
  gambling: [
    "I want to place a bet",
    "How do I self-exclude?",
    "I lost money again",
    "Help me with finances",
  ],
  social_media: [
    "I can't stop scrolling",
    "How do I set limits?",
    "I feel anxious without my phone",
    "Help me be present",
  ],
  gaming: [
    "I played all night again",
    "How do I set time limits?",
    "I'm neglecting responsibilities",
    "Find me other hobbies",
  ],
};
```

---

### 3.3 Life Tree Gamification

**Agent**: backend-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create Rive animation setup | Not Started | `packages/ui/src/life-tree/` |
| Design Life Tree states | Not Started | Design assets |
| Build Life Tree component | Not Started | `packages/ui/src/life-tree/tree.tsx` |
| Create gamification router | Not Started | `packages/api/routers/gamification.ts` |
| Implement XP system | Not Started | `packages/db/schema/gamification.ts` |
| Add stage progression logic | Not Started | `packages/shared/utils/tree-stage.ts` |

**Life Tree Stages:**
```typescript
// packages/shared/constants/tree-stages.ts
export const TREE_STAGES = [
  { stage: 1, name: 'Seed', minDays: 0, xpRequired: 0 },
  { stage: 2, name: 'Sprout', minDays: 3, xpRequired: 100 },
  { stage: 3, name: 'Pioneer', minDays: 7, xpRequired: 300 },
  { stage: 4, name: 'Momentum', minDays: 14, xpRequired: 700 },
  { stage: 5, name: 'Fortress', minDays: 30, xpRequired: 1500 },
  { stage: 6, name: 'Flourishing', minDays: 45, xpRequired: 2500 },
  { stage: 7, name: 'Thriving', minDays: 60, xpRequired: 4000 },
  { stage: 8, name: 'Enlightened', minDays: 75, xpRequired: 6000 },
  { stage: 9, name: 'Nirvana', minDays: 90, xpRequired: 9000 },
];
```

**XP Actions:**
```typescript
// packages/shared/constants/xp-actions.ts
export const XP_ACTIONS = {
  daily_checkin: 10,
  streak_day: 5,
  complete_lesson: 25,
  community_post: 15,
  help_someone: 20,
  complete_challenge: 50,
  milestone_reached: 100,
};
```

**Gamification Schema:**
```typescript
// packages/db/schema/gamification.ts
export const userProgress = pgTable('user_progress', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull().unique(),
  totalXp: integer('total_xp').default(0).notNull(),
  currentStage: integer('current_stage').default(1).notNull(),
  achievementsUnlocked: json('achievements_unlocked').$type<string[]>().default([]),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const xpTransactions = pgTable('xp_transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  amount: integer('amount').notNull(),
  action: varchar('action', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

---

### 3.4 Achievements System

**Agent**: backend-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Define achievements list | Not Started | `packages/shared/constants/achievements.ts` |
| Create achievements UI | Not Started | `packages/ui/src/achievements/` |
| Build achievement card | Not Started | `packages/ui/src/achievements/card.tsx` |
| Create achievements page | Not Started | `apps/mobile/app/achievements/` |
| Implement unlock logic | Not Started | `packages/api/services/achievements.ts` |
| Add achievement notifications | Not Started | Push notifications |

**Achievements Structure:**
```typescript
// packages/shared/constants/achievements.ts
export const ACHIEVEMENTS = [
  // Streak achievements
  { id: 'first_day', name: 'First Step', description: 'Complete your first day', icon: '🌱', xp: 50 },
  { id: 'week_warrior', name: 'Week Warrior', description: '7-day streak', icon: '⚔️', xp: 100 },
  { id: 'month_master', name: 'Month Master', description: '30-day streak', icon: '🏆', xp: 250 },
  { id: 'rewired', name: 'Rewired', description: '90-day streak', icon: '🧠', xp: 500 },

  // Engagement achievements
  { id: 'check_in_streak_7', name: 'Consistent', description: '7 check-ins in a row', icon: '📅', xp: 75 },
  { id: 'chatty', name: 'Open Book', description: 'Chat with Alex 10 times', icon: '💬', xp: 50 },
  { id: 'learner', name: 'Knowledge Seeker', description: 'Complete 5 lessons', icon: '📚', xp: 100 },

  // Community achievements
  { id: 'first_post', name: 'Shared Story', description: 'Make your first post', icon: '✍️', xp: 25 },
  { id: 'helper', name: 'Helping Hand', description: 'Reply to 10 posts', icon: '🤝', xp: 100 },

  // Special achievements
  { id: 'night_owl', name: 'Night Owl', description: 'Check in at 3 AM', icon: '🦉', xp: 25 },
  { id: 'early_bird', name: 'Early Bird', description: 'Check in at 5 AM', icon: '🐦', xp: 25 },
  { id: 'panic_survivor', name: 'Urge Crusher', description: 'Use panic button and stay strong', icon: '💪', xp: 50 },
];
```

---

### 3.5 Proactive Alex Notifications

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Setup push notifications | Not Started | `packages/api/services/notifications.ts` |
| Create notification triggers | Not Started | `packages/api/jobs/notifications.ts` |
| Implement smart timing | Not Started | Based on user patterns |
| Add notification preferences | Not Started | User settings |

**Proactive Notification Triggers:**
```typescript
// packages/api/jobs/notifications.ts
export const NOTIFICATION_TRIGGERS = [
  {
    type: 'morning_checkin',
    condition: 'user_timezone_9am && !checked_in_today',
    message: "Good morning! How are you feeling today? 🌅",
  },
  {
    type: 'high_risk_time',
    condition: 'approaching_usual_relapse_time',
    message: "Hey, I noticed this can be a challenging time. I'm here if you need me. 💙",
  },
  {
    type: 'streak_milestone',
    condition: 'streak_milestone_approaching',
    message: "You're almost at {days} days! Keep going! 🎉",
  },
  {
    type: 'missed_checkin',
    condition: 'no_checkin_yesterday && streak > 7',
    message: "I missed you yesterday. Everything okay? 💭",
  },
];
```

---

## Completion Checklist

Before moving to Phase 4, verify:

- [ ] Alex chat works with GPT-5 Mini
- [ ] DeepSeek fallback activates when OpenAI fails
- [ ] Chat history persists across sessions
- [ ] Suggested prompts are addiction-specific
- [ ] Life Tree displays correct stage based on progress
- [ ] XP is awarded for actions (check-in, lessons, etc.)
- [ ] Tree animates when stage changes
- [ ] Achievements unlock correctly
- [ ] Achievement notifications appear
- [ ] Proactive notifications send at appropriate times

## Next Phase

Once all checklist items pass, proceed to [Phase 4: Community & Content](../04-community-content/README.md).
