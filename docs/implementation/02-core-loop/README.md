# Phase 2: Core Loop

## Objective

Build the daily engagement loop that keeps users returning: dashboard, streak tracking, daily check-ins, and the panic button emergency intervention.

## Prerequisites

- Phase 1 completed
- Database running with user/streak/checkin tables
- Authentication working
- tRPC setup complete

## Features in This Phase

| Feature | Doc Reference | Priority |
|---------|---------------|----------|
| Dashboard | New | Critical |
| Streak System | `/docs/features/03-streak-system/` | Critical |
| Daily Check-ins | `/docs/features/05-daily-checkins/` | Critical |
| Panic Button | `/docs/features/01-panic-button/` | Critical |

---

## Tasks

### 2.1 Dashboard / Home Screen

**Agent**: pages-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create dashboard layout | Not Started | `apps/mobile/app/(tabs)/index.tsx` |
| Create web dashboard | Not Started | `apps/web/app/(dashboard)/page.tsx` |
| Build streak display card | Not Started | `packages/ui/src/streak-card.tsx` |
| Build quick action buttons | Not Started | `packages/ui/src/quick-actions.tsx` |
| Add daily quote widget | Not Started | `packages/ui/src/daily-quote.tsx` |

**Dashboard Components:**

```
┌─────────────────────────────────────┐
│  Good morning, Alex                 │
│  Day 12 of your journey            │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐   │
│  │     🔥 12 Days              │   │
│  │     Current Streak          │   │
│  │     ────────────────        │   │
│  │     Best: 45 days           │   │
│  └─────────────────────────────┘   │
├─────────────────────────────────────┤
│  Quick Actions                      │
│  ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ Check  │ │ Panic  │ │  Talk  │  │
│  │   In   │ │ Button │ │ to Alex│  │
│  └────────┘ └────────┘ └────────┘  │
├─────────────────────────────────────┤
│  "Recovery is not a race..."       │
│  - Daily motivational quote        │
└─────────────────────────────────────┘
```

---

### 2.2 Streak System

**Agent**: backend-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create streak tRPC router | Not Started | `packages/api/routers/streak.ts` |
| Implement streak calculation | Not Started | `packages/shared/utils/streak.ts` |
| Build streak visualization | Not Started | `packages/ui/src/streak-ring.tsx` |
| Create relapse flow | Not Started | `apps/mobile/app/relapse/` |
| Add streak milestones | Not Started | `packages/shared/constants/milestones.ts` |

**Streak Router:**
```typescript
// packages/api/routers/streak.ts
export const streakRouter = router({
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    const streak = await ctx.db.query.streaks.findFirst({
      where: and(
        eq(streaks.userId, ctx.user.id),
        eq(streaks.isActive, true)
      ),
    });
    return streak;
  }),

  recordRelapse: protectedProcedure
    .input(z.object({
      trigger: z.string().optional(),
      notes: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // End current streak
      // Create new streak
      // Log relapse for analytics
    }),

  getMilestones: protectedProcedure.query(async ({ ctx }) => {
    // Return achieved and upcoming milestones
  }),
});
```

**Milestone Structure:**
```typescript
// packages/shared/constants/milestones.ts
export const MILESTONES = [
  { days: 1, name: 'First Step', icon: '🌱' },
  { days: 3, name: 'Building Momentum', icon: '🔥' },
  { days: 7, name: 'One Week Strong', icon: '💪' },
  { days: 14, name: 'Two Weeks', icon: '⭐' },
  { days: 30, name: 'One Month', icon: '🏆' },
  { days: 60, name: 'Two Months', icon: '💎' },
  { days: 90, name: 'Rewired', icon: '🧠' },
];
```

---

### 2.3 Daily Check-ins

**Agent**: backend-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create check-in tRPC router | Not Started | `packages/api/routers/checkin.ts` |
| Build check-in form UI | Not Started | `packages/ui/src/checkin-form.tsx` |
| Create mood selector | Not Started | `packages/ui/src/mood-selector.tsx` |
| Create urge level slider | Not Started | `packages/ui/src/urge-slider.tsx` |
| Build check-in page | Not Started | `apps/mobile/app/checkin/` |
| Add check-in reminders | Not Started | Push notification setup |

**Check-in Flow:**
```
1. Mood Selection (1-5 scale with emojis)
   😢 😕 😐 🙂 😊

2. Urge Level (1-5 scale)
   "How strong were your urges today?"
   Low ─────●───── High

3. Optional Notes
   "Anything you want to share?"
   [Text input]

4. Confirmation
   "Check-in complete! Keep going 💪"
```

**Check-in Router:**
```typescript
// packages/api/routers/checkin.ts
export const checkinRouter = router({
  create: protectedProcedure
    .input(z.object({
      mood: z.number().min(1).max(5),
      urgeLevel: z.number().min(1).max(5),
      notes: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const today = new Date().toISOString().split('T')[0];

      // Check if already checked in today
      const existing = await ctx.db.query.checkins.findFirst({
        where: and(
          eq(checkins.userId, ctx.user.id),
          eq(checkins.date, today)
        ),
      });

      if (existing) {
        throw new TRPCError({ code: 'CONFLICT', message: 'Already checked in today' });
      }

      return ctx.db.insert(checkins).values({
        userId: ctx.user.id,
        date: today,
        ...input,
      });
    }),

  getHistory: protectedProcedure
    .input(z.object({ days: z.number().default(30) }))
    .query(async ({ ctx, input }) => {
      // Return last N days of check-ins
    }),

  getTodayStatus: protectedProcedure.query(async ({ ctx }) => {
    // Return if user has checked in today
  }),
});
```

---

### 2.4 Panic Button

**Agent**: ui-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create panic button component | Not Started | `packages/ui/src/panic-button.tsx` |
| Build camera overlay screen | Not Started | `apps/mobile/app/panic/` |
| Add haptic feedback | Not Started | `packages/shared/utils/haptics.ts` |
| Create motivational messages | Not Started | `packages/shared/constants/panic-messages.ts` |
| Implement breathing exercise | Not Started | `packages/ui/src/breathing-circle.tsx` |
| Log panic button usage | Not Started | `packages/api/routers/panic.ts` |

**Panic Button UX Flow:**
```
1. User taps PANIC BUTTON (large, prominent)
2. Haptic feedback (strong vibration)
3. Full-screen camera overlay appears
   - Shows user's own face
   - Motivational message overlay
   - "Is this who you want to be?"
4. Options shown:
   - "I'm okay now" → Return to app
   - "I need help" → Opens Alex chat
   - "Call someone" → Emergency contact
5. Auto-dismiss after 60 seconds if no action
```

**Addiction-Specific Messages:**
```typescript
// packages/shared/constants/panic-messages.ts
export const PANIC_MESSAGES = {
  porn: [
    "This urge will pass. You are stronger than this moment.",
    "Remember why you started this journey.",
    "Your future self will thank you for staying strong.",
  ],
  gambling: [
    "The house always wins. But today, you win by walking away.",
    "Think of what you could lose. Is it worth it?",
    "One bet leads to another. Break the cycle now.",
  ],
  social_media: [
    "Real life is happening right now. Don't miss it.",
    "This scroll won't make you feel better.",
    "Put down the phone. Be present.",
  ],
  gaming: [
    "The game will still be there tomorrow.",
    "What could you accomplish with this time?",
    "Your real life needs you more than this game does.",
  ],
};
```

---

### 2.5 Navigation & Tab Bar

**Agent**: pages-agent

| Task | Status | Files |
|------|--------|-------|
| Configure mobile tab bar | Not Started | `apps/mobile/app/(tabs)/_layout.tsx` |
| Create web sidebar/nav | Not Started | `apps/web/app/(dashboard)/layout.tsx` |
| Add navigation icons | Not Started | `packages/ui/src/icons/` |

**Tab Structure (Mobile):**
```
┌────────┬────────┬────────┬────────┬────────┐
│  Home  │ Learn  │ Panic  │Community│Profile │
│   🏠   │   📚   │   🆘   │   👥   │   👤   │
└────────┴────────┴────────┴────────┴────────┘
```

---

## Database Additions

Add these tables if not already in Phase 1:

```typescript
// packages/db/schema/panic-logs.ts
export const panicLogs = pgTable('panic_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  triggeredAt: timestamp('triggered_at').defaultNow().notNull(),
  duration: integer('duration'), // seconds spent on panic screen
  outcome: varchar('outcome', { length: 50 }), // 'okay' | 'chatted' | 'called' | 'dismissed'
});
```

---

## Completion Checklist

Before moving to Phase 3, verify:

- [ ] Dashboard shows current streak and quick actions
- [ ] Streak counter updates correctly each day
- [ ] Relapse flow works and resets streak
- [ ] Daily check-in can be completed once per day
- [ ] Check-in history displays correctly
- [ ] Panic button opens camera overlay
- [ ] Haptic feedback works on panic button press
- [ ] Motivational messages display on panic screen
- [ ] All screens work on both web and mobile
- [ ] Tab navigation works correctly

## Next Phase

Once all checklist items pass, proceed to [Phase 3: AI & Engagement](../03-ai-engagement/README.md).
