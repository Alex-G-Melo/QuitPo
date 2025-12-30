# Phase 3: Core Features

## Steps 18-24

### Database Schema (packages/db/src/schema.ts)

```typescript
import { pgTable, text, timestamp, integer, boolean, uuid, vector } from 'drizzle-orm/pg-core'

// Users (Firebase UID as primary key)
export const users = pgTable('users', {
  id: text('id').primaryKey(), // Firebase UID
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Profiles
export const profiles = pgTable('profiles', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  displayName: text('display_name'),
  avatarUrl: text('avatar_url'),
  dependencyScore: integer('dependency_score'),
  dependencyLevel: text('dependency_level'),
  onboardingComplete: boolean('onboarding_complete').default(false),
  timezone: text('timezone').default('UTC'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Streaks
export const streaks = pgTable('streaks', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  currentDays: integer('current_days').default(0),
  longestDays: integer('longest_days').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Daily Check-ins
export const checkIns = pgTable('check_ins', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  streakId: uuid('streak_id').references(() => streaks.id).notNull(),
  date: timestamp('date').notNull(),
  mood: integer('mood'), // 1-5
  urgeLevel: integer('urge_level'), // 1-10
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Pledges
export const pledges = pgTable('pledges', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  pledgeType: text('pledge_type').notNull(), // '24h', '7d', '30d', '90d'
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  status: text('status').default('active'), // 'active', 'completed', 'broken'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Reasons for Change
export const reasons = pgTable('reasons', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  reason: text('reason').notNull(),
  priority: integer('priority').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### 18. Streak Tracking System

```typescript
// packages/api/src/routers/streak.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { streaks, checkIns } from '@quitpo/db'
import { eq, and, desc } from 'drizzle-orm'

export const streakRouter = router({
  getCurrent: protectedProcedure.query(async ({ ctx }) => {
    const streak = await ctx.db
      .select()
      .from(streaks)
      .where(and(eq(streaks.userId, ctx.userId), eq(streaks.isActive, true)))
      .limit(1)
    return streak[0] || null
  }),

  startNew: protectedProcedure.mutation(async ({ ctx }) => {
    // End any active streaks
    await ctx.db
      .update(streaks)
      .set({ isActive: false, endDate: new Date() })
      .where(and(eq(streaks.userId, ctx.userId), eq(streaks.isActive, true)))

    // Start new streak
    const [newStreak] = await ctx.db
      .insert(streaks)
      .values({
        userId: ctx.userId,
        startDate: new Date(),
        currentDays: 0,
        isActive: true,
      })
      .returning()

    return newStreak
  }),

  recordRelapse: protectedProcedure.mutation(async ({ ctx }) => {
    const current = await ctx.db
      .select()
      .from(streaks)
      .where(and(eq(streaks.userId, ctx.userId), eq(streaks.isActive, true)))
      .limit(1)

    if (current[0]) {
      await ctx.db
        .update(streaks)
        .set({
          isActive: false,
          endDate: new Date(),
          longestDays: Math.max(current[0].longestDays, current[0].currentDays),
        })
        .where(eq(streaks.id, current[0].id))
    }

    // Auto-start new streak
    const [newStreak] = await ctx.db
      .insert(streaks)
      .values({
        userId: ctx.userId,
        startDate: new Date(),
        currentDays: 0,
        isActive: true,
      })
      .returning()

    return newStreak
  }),

  getHistory: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(streaks)
      .where(eq(streaks.userId, ctx.userId))
      .orderBy(desc(streaks.startDate))
      .limit(20)
  }),
})
```

### 19. Streak Dashboard UI

```typescript
// packages/ui/src/StreakCounter.tsx
import { View, Text } from 'react-native'

interface StreakCounterProps {
  days: number
  longestDays: number
  startDate: Date
}

export function StreakCounter({ days, longestDays, startDate }: StreakCounterProps) {
  const milestone = days >= 90 ? '90 days!' : days >= 30 ? '30 days!' : days >= 7 ? '1 week!' : null

  return (
    <View className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 items-center">
      <Text className="text-white/80 text-lg mb-2">Current Streak</Text>
      <Text className="text-white text-7xl font-bold">{days}</Text>
      <Text className="text-white/80 text-xl">days</Text>

      {milestone && (
        <View className="bg-yellow-400 rounded-full px-4 py-1 mt-4">
          <Text className="text-yellow-900 font-bold">{milestone}</Text>
        </View>
      )}

      <View className="flex-row mt-6 gap-8">
        <View className="items-center">
          <Text className="text-white/60 text-sm">Longest</Text>
          <Text className="text-white text-2xl font-bold">{longestDays}</Text>
        </View>
        <View className="items-center">
          <Text className="text-white/60 text-sm">Started</Text>
          <Text className="text-white text-lg">{startDate.toLocaleDateString()}</Text>
        </View>
      </View>
    </View>
  )
}
```

### 20. Panic Button (Camera + Overlay)

```typescript
// packages/ui/src/PanicButton.tsx
import { useState, useRef } from 'react'
import { View, Text, Pressable, Modal, Vibration } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as Haptics from 'expo-haptics'

const MESSAGES = [
  "You are stronger than this urge.",
  "This feeling will pass in minutes.",
  "Think about why you started.",
  "Your future self will thank you.",
  "You've come too far to give up now.",
  "Remember your reasons.",
  "One day at a time.",
  "You are not alone in this fight.",
]

export function PanicButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [permission, requestPermission] = useCameraPermissions()
  const [messageIndex, setMessageIndex] = useState(0)

  const handlePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    Vibration.vibrate([0, 100, 50, 100, 50, 100])

    if (!permission?.granted) {
      await requestPermission()
    }

    setMessageIndex(Math.floor(Math.random() * MESSAGES.length))
    setIsOpen(true)
  }

  const cycleMessage = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    setMessageIndex((i) => (i + 1) % MESSAGES.length)
  }

  return (
    <>
      <Pressable
        onPress={handlePress}
        className="bg-red-600 w-32 h-32 rounded-full items-center justify-center shadow-2xl"
      >
        <Text className="text-white text-xl font-bold">PANIC</Text>
        <Text className="text-white/80 text-sm">Press if urging</Text>
      </Pressable>

      <Modal visible={isOpen} animationType="fade">
        <View className="flex-1 bg-black">
          {permission?.granted && (
            <CameraView
              style={{ flex: 1 }}
              facing="front"
              mirror={true}
            />
          )}

          <View className="absolute inset-0 bg-black/70 justify-center items-center p-8">
            <Pressable onPress={cycleMessage} className="items-center">
              <Text className="text-red-500 text-4xl font-bold text-center mb-8">
                STOP
              </Text>
              <Text className="text-white text-2xl text-center font-medium">
                {MESSAGES[messageIndex]}
              </Text>
              <Text className="text-white/60 mt-4">Tap for another message</Text>
            </Pressable>
          </View>

          <Pressable
            onPress={() => setIsOpen(false)}
            className="absolute bottom-12 left-0 right-0 items-center"
          >
            <View className="bg-white/20 rounded-full px-8 py-4">
              <Text className="text-white text-lg">I'm in control now</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </>
  )
}
```

### 21. Haptic Feedback + Messages

Already integrated in PanicButton above. Additional utilities:

```typescript
// packages/shared/src/messages.ts
export const motivationalMessages = {
  urge: [
    "You are stronger than this urge.",
    "This feeling will pass in minutes.",
    "Think about why you started.",
    "Your future self will thank you.",
    "You've come too far to give up now.",
    "Remember your reasons.",
    "One day at a time.",
    "You are not alone in this fight.",
  ],
  morning: [
    "New day, new strength.",
    "You've got this.",
    "Stay focused today.",
  ],
  milestone: {
    7: "One week! Your brain is already healing.",
    14: "Two weeks! Dopamine receptors recovering.",
    30: "One month! Major milestone achieved.",
    60: "Two months! New habits forming.",
    90: "90 days! You've rewired your brain.",
  },
}
```

### 22. Daily Check-in System

```typescript
// packages/api/src/routers/checkIn.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { checkIns, streaks } from '@quitpo/db'
import { eq, and, gte, lte } from 'drizzle-orm'

export const checkInRouter = router({
  create: protectedProcedure
    .input(z.object({
      mood: z.number().min(1).max(5),
      urgeLevel: z.number().min(1).max(10),
      notes: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const activeStreak = await ctx.db
        .select()
        .from(streaks)
        .where(and(eq(streaks.userId, ctx.userId), eq(streaks.isActive, true)))
        .limit(1)

      if (!activeStreak[0]) {
        throw new Error('No active streak')
      }

      const today = new Date()
      today.setHours(0, 0, 0, 0)

      // Check if already checked in today
      const existing = await ctx.db
        .select()
        .from(checkIns)
        .where(and(
          eq(checkIns.userId, ctx.userId),
          gte(checkIns.date, today),
        ))
        .limit(1)

      if (existing[0]) {
        throw new Error('Already checked in today')
      }

      const [checkIn] = await ctx.db
        .insert(checkIns)
        .values({
          userId: ctx.userId,
          streakId: activeStreak[0].id,
          date: new Date(),
          mood: input.mood,
          urgeLevel: input.urgeLevel,
          notes: input.notes,
        })
        .returning()

      // Update streak days
      await ctx.db
        .update(streaks)
        .set({ currentDays: activeStreak[0].currentDays + 1 })
        .where(eq(streaks.id, activeStreak[0].id))

      return checkIn
    }),

  getTodayStatus: protectedProcedure.query(async ({ ctx }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const checkIn = await ctx.db
      .select()
      .from(checkIns)
      .where(and(
        eq(checkIns.userId, ctx.userId),
        gte(checkIns.date, today),
      ))
      .limit(1)

    return { checkedIn: !!checkIn[0], checkIn: checkIn[0] || null }
  }),
})
```

### 23. Pledge System

```typescript
// packages/api/src/routers/pledge.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { pledges } from '@quitpo/db'
import { eq, and, gt } from 'drizzle-orm'

const PLEDGE_DURATIONS = {
  '24h': 24 * 60 * 60 * 1000,
  '7d': 7 * 24 * 60 * 60 * 1000,
  '30d': 30 * 24 * 60 * 60 * 1000,
  '90d': 90 * 24 * 60 * 60 * 1000,
}

export const pledgeRouter = router({
  create: protectedProcedure
    .input(z.object({
      type: z.enum(['24h', '7d', '30d', '90d']),
    }))
    .mutation(async ({ ctx, input }) => {
      const now = new Date()
      const endTime = new Date(now.getTime() + PLEDGE_DURATIONS[input.type])

      const [pledge] = await ctx.db
        .insert(pledges)
        .values({
          userId: ctx.userId,
          pledgeType: input.type,
          startTime: now,
          endTime,
          status: 'active',
        })
        .returning()

      return pledge
    }),

  getActive: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(pledges)
      .where(and(
        eq(pledges.userId, ctx.userId),
        eq(pledges.status, 'active'),
        gt(pledges.endTime, new Date()),
      ))
  }),

  complete: protectedProcedure
    .input(z.object({ pledgeId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(pledges)
        .set({ status: 'completed' })
        .where(and(
          eq(pledges.id, input.pledgeId),
          eq(pledges.userId, ctx.userId),
        ))
    }),
})
```

### 24. Reasons for Change Feature

```typescript
// packages/api/src/routers/reasons.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { reasons } from '@quitpo/db'
import { eq, asc } from 'drizzle-orm'

export const reasonsRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(reasons)
      .where(eq(reasons.userId, ctx.userId))
      .orderBy(asc(reasons.priority))
  }),

  add: protectedProcedure
    .input(z.object({ reason: z.string().min(1).max(500) }))
    .mutation(async ({ ctx, input }) => {
      const [newReason] = await ctx.db
        .insert(reasons)
        .values({
          userId: ctx.userId,
          reason: input.reason,
        })
        .returning()

      return newReason
    }),

  delete: protectedProcedure
    .input(z.object({ reasonId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(reasons)
        .where(and(
          eq(reasons.id, input.reasonId),
          eq(reasons.userId, ctx.userId),
        ))
    }),

  reorder: protectedProcedure
    .input(z.object({
      orderedIds: z.array(z.string().uuid()),
    }))
    .mutation(async ({ ctx, input }) => {
      for (let i = 0; i < input.orderedIds.length; i++) {
        await ctx.db
          .update(reasons)
          .set({ priority: i })
          .where(and(
            eq(reasons.id, input.orderedIds[i]),
            eq(reasons.userId, ctx.userId),
          ))
      }
    }),
})
```
