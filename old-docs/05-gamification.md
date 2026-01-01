# Phase 5: Gamification

## Steps 31-36

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const achievements = pgTable('achievements', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  achievementType: text('achievement_type').notNull(),
  unlockedAt: timestamp('unlocked_at').defaultNow().notNull(),
})

export const treeProgress = pgTable('tree_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  stage: integer('stage').default(1), // 1-8
  growthPoints: integer('growth_points').default(0),
  lastUpdated: timestamp('last_updated').defaultNow().notNull(),
})

export const challenges = pgTable('challenges', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  durationDays: integer('duration_days').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  isActive: boolean('is_active').default(true),
})

export const challengeParticipants = pgTable('challenge_participants', {
  id: uuid('id').defaultRandom().primaryKey(),
  challengeId: uuid('challenge_id').references(() => challenges.id).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  progress: integer('progress').default(0),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
})
```

### 31. Life Tree Stages (8 Orbs)

```typescript
// packages/shared/src/tree.ts
export const TREE_STAGES = [
  { id: 1, name: 'Seed', minDays: 0, description: 'The beginning of your journey' },
  { id: 2, name: 'Enlightenment', minDays: 7, description: 'One week of growth' },
  { id: 3, name: 'Ascendant', minDays: 14, description: 'Two weeks strong' },
  { id: 4, name: 'Guardian', minDays: 21, description: 'Three weeks of protection' },
  { id: 5, name: 'Fortress', minDays: 30, description: 'One month milestone' },
  { id: 6, name: 'Momentum', minDays: 45, description: '45 days of momentum' },
  { id: 7, name: 'Pioneer', minDays: 60, description: 'Two months of pioneering' },
  { id: 8, name: 'Nirvana', minDays: 90, description: '90 days - Full brain rewiring' },
] as const

export function getTreeStage(days: number) {
  for (let i = TREE_STAGES.length - 1; i >= 0; i--) {
    if (days >= TREE_STAGES[i].minDays) {
      return TREE_STAGES[i]
    }
  }
  return TREE_STAGES[0]
}

export function getNextMilestone(days: number) {
  for (const stage of TREE_STAGES) {
    if (days < stage.minDays) {
      return { stage, daysRemaining: stage.minDays - days }
    }
  }
  return null // Already at max
}
```

### 32. Rive Animations

```typescript
// packages/ui/src/LifeTree.tsx
import { View, Text } from 'react-native'
import Rive, { RiveRef } from 'rive-react-native'
import { useRef, useEffect } from 'react'
import { TREE_STAGES, getTreeStage } from '@quitpo/shared'

interface LifeTreeProps {
  currentDays: number
  growthPoints: number
}

export function LifeTree({ currentDays, growthPoints }: LifeTreeProps) {
  const riveRef = useRef<RiveRef>(null)
  const stage = getTreeStage(currentDays)

  useEffect(() => {
    // Trigger animation when stage changes
    riveRef.current?.setInputState('TreeStateMachine', 'stage', stage.id)
  }, [stage.id])

  return (
    <View className="items-center">
      <View className="w-64 h-64">
        <Rive
          ref={riveRef}
          resourceName="life_tree"
          stateMachineName="TreeStateMachine"
          autoplay
        />
      </View>

      <View className="mt-4 items-center">
        <Text className="text-white text-2xl font-bold">{stage.name}</Text>
        <Text className="text-white/70 text-center mt-2">{stage.description}</Text>

        <View className="flex-row mt-4 gap-2">
          {TREE_STAGES.map((s) => (
            <View
              key={s.id}
              className={`w-3 h-3 rounded-full ${
                s.id <= stage.id ? 'bg-green-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
```

### 33. Achievement System

```typescript
// packages/shared/src/achievements.ts
export const ACHIEVEMENTS = {
  // Streak milestones
  FIRST_DAY: { id: 'first_day', name: 'Day One', description: 'Started your journey', icon: '🌱' },
  WEEK_WARRIOR: { id: 'week_warrior', name: 'Week Warrior', description: '7 days clean', icon: '⚔️' },
  TWO_WEEKS: { id: 'two_weeks', name: 'Fortnight Fighter', description: '14 days clean', icon: '🛡️' },
  MONTH_MASTER: { id: 'month_master', name: 'Month Master', description: '30 days clean', icon: '👑' },
  SIXTY_DAYS: { id: 'sixty_days', name: 'Double Down', description: '60 days clean', icon: '💎' },
  NINETY_DAYS: { id: 'ninety_days', name: 'Rewired', description: '90 days - Brain fully rewired', icon: '🧠' },

  // Activity achievements
  FIRST_CHECKIN: { id: 'first_checkin', name: 'Check In', description: 'First daily check-in', icon: '✅' },
  PANIC_SURVIVOR: { id: 'panic_survivor', name: 'Panic Survivor', description: 'Used panic button successfully', icon: '🆘' },
  COMMUNITY_MEMBER: { id: 'community_member', name: 'Community Member', description: 'Made first post', icon: '👥' },
  HELPER: { id: 'helper', name: 'Helper', description: 'Helped someone in community', icon: '🤝' },
  LEARNER: { id: 'learner', name: 'Knowledge Seeker', description: 'Completed first lesson', icon: '📚' },
  SCHOLAR: { id: 'scholar', name: 'Scholar', description: 'Completed all lessons', icon: '🎓' },
  MINDFUL: { id: 'mindful', name: 'Mindful', description: 'Completed 10 breathing exercises', icon: '🧘' },
  JOURNALER: { id: 'journaler', name: 'Journaler', description: 'Wrote 7 journal entries', icon: '📝' },

  // Challenge achievements
  CHALLENGER: { id: 'challenger', name: 'Challenger', description: 'Joined first challenge', icon: '🏆' },
  CHAMPION: { id: 'champion', name: 'Champion', description: 'Completed a challenge', icon: '🥇' },
} as const

export type AchievementType = keyof typeof ACHIEVEMENTS
```

```typescript
// packages/api/src/routers/achievements.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { achievements } from '@quitpo/db'
import { eq } from 'drizzle-orm'
import { ACHIEVEMENTS } from '@quitpo/shared'

export const achievementsRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    const unlocked = await ctx.db
      .select()
      .from(achievements)
      .where(eq(achievements.userId, ctx.userId))

    const unlockedTypes = new Set(unlocked.map((a) => a.achievementType))

    return Object.entries(ACHIEVEMENTS).map(([key, achievement]) => ({
      ...achievement,
      unlocked: unlockedTypes.has(key),
      unlockedAt: unlocked.find((a) => a.achievementType === key)?.unlockedAt,
    }))
  }),

  unlock: protectedProcedure
    .input(z.object({ type: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if already unlocked
      const existing = await ctx.db
        .select()
        .from(achievements)
        .where(and(
          eq(achievements.userId, ctx.userId),
          eq(achievements.achievementType, input.type),
        ))
        .limit(1)

      if (existing[0]) return existing[0]

      const [achievement] = await ctx.db
        .insert(achievements)
        .values({
          userId: ctx.userId,
          achievementType: input.type,
        })
        .returning()

      return achievement
    }),
})
```

### 34. Progress Visualization

```typescript
// packages/ui/src/ProgressRing.tsx
import { View, Text } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import Animated, { useAnimatedProps, withTiming } from 'react-native-reanimated'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface ProgressRingProps {
  progress: number // 0-100
  size: number
  strokeWidth: number
  targetDays: number
  currentDays: number
}

export function ProgressRing({
  progress,
  size,
  strokeWidth,
  targetDays,
  currentDays,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: withTiming(circumference * (1 - progress / 100), { duration: 1000 }),
  }))

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#8B5CF6"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>

      <View className="absolute items-center">
        <Text className="text-white text-4xl font-bold">{currentDays}</Text>
        <Text className="text-gray-400">/ {targetDays} days</Text>
      </View>
    </View>
  )
}
```

### 35. Milestone Celebrations

```typescript
// packages/ui/src/MilestoneCelebration.tsx
import { View, Text, Modal } from 'react-native'
import Rive from 'rive-react-native'
import * as Haptics from 'expo-haptics'
import { useEffect } from 'react'

interface MilestoneCelebrationProps {
  visible: boolean
  milestone: {
    name: string
    description: string
    icon: string
  }
  onDismiss: () => void
}

export function MilestoneCelebration({
  visible,
  milestone,
  onDismiss,
}: MilestoneCelebrationProps) {
  useEffect(() => {
    if (visible) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }
  }, [visible])

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View className="flex-1 bg-black/80 justify-center items-center p-8">
        {/* Confetti animation */}
        <View className="absolute inset-0">
          <Rive resourceName="confetti" autoplay />
        </View>

        <View className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 items-center">
          <Text className="text-6xl mb-4">{milestone.icon}</Text>
          <Text className="text-white text-3xl font-bold text-center">
            {milestone.name}
          </Text>
          <Text className="text-white/80 text-lg text-center mt-2">
            {milestone.description}
          </Text>

          <Pressable
            onPress={onDismiss}
            className="mt-8 bg-white/20 rounded-full px-8 py-3"
          >
            <Text className="text-white text-lg font-medium">Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
```

### 36. Growth Points Calculation

```typescript
// packages/shared/src/growth.ts
export const POINTS_CONFIG = {
  DAILY_CHECKIN: 10,
  STREAK_DAY: 5,
  PANIC_BUTTON_SUCCESS: 20,
  LESSON_COMPLETE: 15,
  POST_CREATED: 5,
  COMMENT_HELPFUL: 10,
  JOURNAL_ENTRY: 10,
  BREATHING_EXERCISE: 5,
  MEDITATION_COMPLETE: 10,
} as const

export function calculateGrowthPoints(activities: {
  checkIns: number
  streakDays: number
  panicButtonUses: number
  lessonsCompleted: number
  postsCreated: number
  helpfulComments: number
  journalEntries: number
  breathingExercises: number
  meditationsCompleted: number
}) {
  return (
    activities.checkIns * POINTS_CONFIG.DAILY_CHECKIN +
    activities.streakDays * POINTS_CONFIG.STREAK_DAY +
    activities.panicButtonUses * POINTS_CONFIG.PANIC_BUTTON_SUCCESS +
    activities.lessonsCompleted * POINTS_CONFIG.LESSON_COMPLETE +
    activities.postsCreated * POINTS_CONFIG.POST_CREATED +
    activities.helpfulComments * POINTS_CONFIG.COMMENT_HELPFUL +
    activities.journalEntries * POINTS_CONFIG.JOURNAL_ENTRY +
    activities.breathingExercises * POINTS_CONFIG.BREATHING_EXERCISE +
    activities.meditationsCompleted * POINTS_CONFIG.MEDITATION_COMPLETE
  )
}

// Thresholds for each tree stage
export const STAGE_THRESHOLDS = [
  0,     // Stage 1: Seed
  100,   // Stage 2: Enlightenment
  300,   // Stage 3: Ascendant
  600,   // Stage 4: Guardian
  1000,  // Stage 5: Fortress
  1500,  // Stage 6: Momentum
  2200,  // Stage 7: Pioneer
  3000,  // Stage 8: Nirvana
]
```

```typescript
// packages/api/src/routers/tree.ts
import { router, protectedProcedure } from '../trpc'
import { treeProgress } from '@quitpo/db'
import { eq } from 'drizzle-orm'
import { STAGE_THRESHOLDS, getTreeStage } from '@quitpo/shared'

export const treeRouter = router({
  getProgress: protectedProcedure.query(async ({ ctx }) => {
    let progress = await ctx.db
      .select()
      .from(treeProgress)
      .where(eq(treeProgress.userId, ctx.userId))
      .limit(1)

    if (!progress[0]) {
      const [newProgress] = await ctx.db
        .insert(treeProgress)
        .values({ userId: ctx.userId })
        .returning()
      progress = [newProgress]
    }

    const currentStage = progress[0].stage
    const nextThreshold = STAGE_THRESHOLDS[currentStage] || Infinity
    const prevThreshold = STAGE_THRESHOLDS[currentStage - 1] || 0

    return {
      ...progress[0],
      pointsToNextStage: nextThreshold - progress[0].growthPoints,
      stageProgress: (progress[0].growthPoints - prevThreshold) / (nextThreshold - prevThreshold),
    }
  }),

  addPoints: protectedProcedure
    .input(z.object({ points: z.number().positive() }))
    .mutation(async ({ ctx, input }) => {
      const current = await ctx.db
        .select()
        .from(treeProgress)
        .where(eq(treeProgress.userId, ctx.userId))
        .limit(1)

      const newPoints = (current[0]?.growthPoints || 0) + input.points
      const newStage = STAGE_THRESHOLDS.findIndex((t) => newPoints < t)

      await ctx.db
        .update(treeProgress)
        .set({
          growthPoints: newPoints,
          stage: Math.max(newStage, 1),
          lastUpdated: new Date(),
        })
        .where(eq(treeProgress.userId, ctx.userId))

      // Check if leveled up
      const leveledUp = newStage > (current[0]?.stage || 1)

      return { newPoints, newStage, leveledUp }
    }),
})
```
