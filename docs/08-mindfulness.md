# Phase 8: Mindfulness

## Steps 50-54

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const mindfulnessActivities = pgTable('mindfulness_activities', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  activityType: text('activity_type').notNull(), // 'breathing' | 'meditation' | 'sounds'
  durationSeconds: integer('duration_seconds').notNull(),
  completedAt: timestamp('completed_at').defaultNow().notNull(),
})

export const reminders = pgTable('reminders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  type: text('type').notNull(), // 'checkin' | 'motivation' | 'mindfulness'
  time: text('time').notNull(), // HH:mm format
  enabled: boolean('enabled').default(true),
  days: text('days').array(), // ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const pushTokens = pgTable('push_tokens', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  token: text('token').notNull().unique(),
  platform: text('platform').notNull(), // 'ios' | 'android'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### 50. Breathing Exercises

```typescript
// packages/shared/src/breathing.ts
export const BREATHING_EXERCISES = [
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Calm your mind with a 4-4-4-4 pattern',
    phases: [
      { name: 'Inhale', duration: 4 },
      { name: 'Hold', duration: 4 },
      { name: 'Exhale', duration: 4 },
      { name: 'Hold', duration: 4 },
    ],
    totalCycles: 4,
  },
  {
    id: '478',
    name: '4-7-8 Relaxation',
    description: 'Deep relaxation technique',
    phases: [
      { name: 'Inhale', duration: 4 },
      { name: 'Hold', duration: 7 },
      { name: 'Exhale', duration: 8 },
    ],
    totalCycles: 4,
  },
  {
    id: 'calm',
    name: 'Calming Breath',
    description: 'Simple 2-4 pattern for quick relief',
    phases: [
      { name: 'Inhale', duration: 2 },
      { name: 'Exhale', duration: 4 },
    ],
    totalCycles: 6,
  },
  {
    id: 'energize',
    name: 'Energizing Breath',
    description: 'Quick breaths to boost alertness',
    phases: [
      { name: 'Inhale', duration: 1 },
      { name: 'Exhale', duration: 1 },
    ],
    totalCycles: 20,
  },
]
```

```typescript
// packages/ui/src/BreathingExercise.tsx
import { View, Text, Pressable } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'

interface BreathingPhase {
  name: string
  duration: number
}

interface BreathingExerciseProps {
  name: string
  phases: BreathingPhase[]
  totalCycles: number
  onComplete: (durationSeconds: number) => void
}

export function BreathingExercise({
  name,
  phases,
  totalCycles,
  onComplete,
}: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [currentCycle, setCurrentCycle] = useState(1)
  const [countdown, setCountdown] = useState(0)
  const startTimeRef = useRef<number>(0)

  const scale = useSharedValue(1)
  const currentPhase = phases[currentPhaseIndex]

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  useEffect(() => {
    if (!isActive) return

    const phaseName = currentPhase.name.toLowerCase()

    // Animate based on phase
    if (phaseName === 'inhale') {
      scale.value = withTiming(1.5, {
        duration: currentPhase.duration * 1000,
        easing: Easing.inOut(Easing.ease),
      })
    } else if (phaseName === 'exhale') {
      scale.value = withTiming(1, {
        duration: currentPhase.duration * 1000,
        easing: Easing.inOut(Easing.ease),
      })
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

    // Countdown timer
    setCountdown(currentPhase.duration)
    const countdownInterval = setInterval(() => {
      setCountdown((c) => (c > 0 ? c - 1 : 0))
    }, 1000)

    // Phase timer
    const timer = setTimeout(() => {
      const nextPhaseIndex = (currentPhaseIndex + 1) % phases.length

      if (nextPhaseIndex === 0) {
        // Completed a cycle
        if (currentCycle >= totalCycles) {
          // Exercise complete
          setIsActive(false)
          const duration = Math.round((Date.now() - startTimeRef.current) / 1000)
          onComplete(duration)
          return
        }
        setCurrentCycle((c) => c + 1)
      }

      setCurrentPhaseIndex(nextPhaseIndex)
    }, currentPhase.duration * 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(countdownInterval)
    }
  }, [isActive, currentPhaseIndex, currentCycle])

  const handleStart = () => {
    startTimeRef.current = Date.now()
    setCurrentPhaseIndex(0)
    setCurrentCycle(1)
    setIsActive(true)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  }

  const handleStop = () => {
    setIsActive(false)
    scale.value = 1
  }

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-white text-2xl font-bold mb-2">{name}</Text>
      <Text className="text-gray-400 mb-8">
        Cycle {currentCycle} of {totalCycles}
      </Text>

      <Animated.View
        style={animatedStyle}
        className="w-48 h-48 rounded-full bg-purple-600/30 items-center justify-center mb-8"
      >
        <View className="w-36 h-36 rounded-full bg-purple-600/50 items-center justify-center">
          <View className="w-24 h-24 rounded-full bg-purple-600 items-center justify-center">
            {isActive ? (
              <>
                <Text className="text-white text-4xl font-bold">{countdown}</Text>
                <Text className="text-white/80">{currentPhase.name}</Text>
              </>
            ) : (
              <Text className="text-white text-lg">Ready</Text>
            )}
          </View>
        </View>
      </Animated.View>

      <Pressable
        onPress={isActive ? handleStop : handleStart}
        className={`px-12 py-4 rounded-full ${
          isActive ? 'bg-red-600' : 'bg-purple-600'
        }`}
      >
        <Text className="text-white text-lg font-medium">
          {isActive ? 'Stop' : 'Start'}
        </Text>
      </Pressable>
    </View>
  )
}
```

### 51. Meditation Timer

```typescript
// packages/ui/src/MeditationTimer.tsx
import { View, Text, Pressable } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { Audio } from 'expo-av'
import * as Haptics from 'expo-haptics'

const DURATION_OPTIONS = [5, 10, 15, 20, 30] // minutes

interface MeditationTimerProps {
  onComplete: (durationSeconds: number) => void
}

export function MeditationTimer({ onComplete }: MeditationTimerProps) {
  const [selectedDuration, setSelectedDuration] = useState(10)
  const [isActive, setIsActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [sound, setSound] = useState<Audio.Sound>()
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    return () => {
      if (sound) sound.unloadAsync()
    }
  }, [sound])

  useEffect(() => {
    if (!isActive || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 1) {
          handleComplete()
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, timeRemaining])

  const playBell = async () => {
    const { sound: bellSound } = await Audio.Sound.createAsync(
      require('../assets/sounds/bell.mp3')
    )
    setSound(bellSound)
    await bellSound.playAsync()
  }

  const handleStart = async () => {
    startTimeRef.current = Date.now()
    setTimeRemaining(selectedDuration * 60)
    setIsActive(true)
    await playBell()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  }

  const handleComplete = async () => {
    setIsActive(false)
    await playBell()
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    const duration = Math.round((Date.now() - startTimeRef.current) / 1000)
    onComplete(duration)
  }

  const handleStop = () => {
    setIsActive(false)
    const duration = Math.round((Date.now() - startTimeRef.current) / 1000)
    if (duration > 60) onComplete(duration) // Only count if > 1 min
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-white text-2xl font-bold mb-8">Meditation</Text>

      {!isActive ? (
        <>
          <Text className="text-gray-400 mb-4">Select duration (minutes)</Text>
          <View className="flex-row gap-3 mb-8">
            {DURATION_OPTIONS.map((mins) => (
              <Pressable
                key={mins}
                onPress={() => setSelectedDuration(mins)}
                className={`w-14 h-14 rounded-full items-center justify-center ${
                  selectedDuration === mins ? 'bg-purple-600' : 'bg-gray-700'
                }`}
              >
                <Text className="text-white text-lg">{mins}</Text>
              </Pressable>
            ))}
          </View>
        </>
      ) : (
        <View className="items-center mb-8">
          <Text className="text-gray-400 mb-2">Time Remaining</Text>
          <Text className="text-white text-6xl font-light">
            {formatTime(timeRemaining)}
          </Text>
        </View>
      )}

      <View className="w-64 h-64 rounded-full bg-purple-600/20 items-center justify-center mb-8">
        <View className="w-48 h-48 rounded-full bg-purple-600/30 items-center justify-center">
          <View className="w-32 h-32 rounded-full bg-purple-600/50 items-center justify-center">
            <Text className="text-white text-4xl">🧘</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={isActive ? handleStop : handleStart}
        className={`px-12 py-4 rounded-full ${
          isActive ? 'bg-red-600' : 'bg-purple-600'
        }`}
      >
        <Text className="text-white text-lg font-medium">
          {isActive ? 'End Session' : 'Begin'}
        </Text>
      </Pressable>
    </View>
  )
}
```

### 52. Relaxing Sounds

```typescript
// packages/shared/src/sounds.ts
export const AMBIENT_SOUNDS = [
  { id: 'rain', name: 'Rain', icon: '🌧️', file: 'rain.mp3' },
  { id: 'ocean', name: 'Ocean Waves', icon: '🌊', file: 'ocean.mp3' },
  { id: 'forest', name: 'Forest', icon: '🌲', file: 'forest.mp3' },
  { id: 'fire', name: 'Fireplace', icon: '🔥', file: 'fire.mp3' },
  { id: 'wind', name: 'Wind', icon: '💨', file: 'wind.mp3' },
  { id: 'birds', name: 'Birds', icon: '🐦', file: 'birds.mp3' },
  { id: 'thunder', name: 'Thunderstorm', icon: '⛈️', file: 'thunder.mp3' },
  { id: 'river', name: 'River', icon: '🏞️', file: 'river.mp3' },
]
```

```typescript
// packages/ui/src/AmbientSounds.tsx
import { View, Text, Pressable, ScrollView } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { Audio } from 'expo-av'
import Slider from '@react-native-community/slider'
import { AMBIENT_SOUNDS } from '@quitpo/shared'

export function AmbientSounds() {
  const [activeSounds, setActiveSounds] = useState<Set<string>>(new Set())
  const [volumes, setVolumes] = useState<Record<string, number>>({})
  const soundRefs = useRef<Record<string, Audio.Sound>>({})

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    })

    return () => {
      // Cleanup all sounds
      Object.values(soundRefs.current).forEach((sound) => sound.unloadAsync())
    }
  }, [])

  const toggleSound = async (soundId: string) => {
    if (activeSounds.has(soundId)) {
      // Stop sound
      const sound = soundRefs.current[soundId]
      if (sound) {
        await sound.stopAsync()
        await sound.unloadAsync()
        delete soundRefs.current[soundId]
      }
      setActiveSounds((prev) => {
        const next = new Set(prev)
        next.delete(soundId)
        return next
      })
    } else {
      // Start sound
      const soundConfig = AMBIENT_SOUNDS.find((s) => s.id === soundId)
      if (!soundConfig) return

      const { sound } = await Audio.Sound.createAsync(
        { uri: `https://assets.quitpo.app/sounds/${soundConfig.file}` },
        { isLooping: true, volume: volumes[soundId] ?? 0.7 }
      )

      soundRefs.current[soundId] = sound
      await sound.playAsync()

      setActiveSounds((prev) => new Set([...prev, soundId]))
    }
  }

  const updateVolume = async (soundId: string, volume: number) => {
    setVolumes((prev) => ({ ...prev, [soundId]: volume }))
    const sound = soundRefs.current[soundId]
    if (sound) {
      await sound.setVolumeAsync(volume)
    }
  }

  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-white text-2xl font-bold mb-6">
        Ambient Sounds
      </Text>

      <View className="gap-4">
        {AMBIENT_SOUNDS.map((sound) => {
          const isActive = activeSounds.has(sound.id)

          return (
            <View
              key={sound.id}
              className={`p-4 rounded-xl ${
                isActive ? 'bg-purple-600/30' : 'bg-gray-800'
              }`}
            >
              <Pressable
                onPress={() => toggleSound(sound.id)}
                className="flex-row items-center"
              >
                <Text className="text-3xl mr-4">{sound.icon}</Text>
                <Text className="text-white text-lg flex-1">{sound.name}</Text>
                <View
                  className={`w-12 h-6 rounded-full ${
                    isActive ? 'bg-purple-600' : 'bg-gray-600'
                  } justify-center`}
                >
                  <View
                    className={`w-5 h-5 rounded-full bg-white ${
                      isActive ? 'self-end mr-0.5' : 'self-start ml-0.5'
                    }`}
                  />
                </View>
              </Pressable>

              {isActive && (
                <View className="mt-4 flex-row items-center">
                  <Text className="text-gray-400 mr-3">🔉</Text>
                  <Slider
                    style={{ flex: 1 }}
                    minimumValue={0}
                    maximumValue={1}
                    value={volumes[sound.id] ?? 0.7}
                    onValueChange={(v) => updateVolume(sound.id, v)}
                    minimumTrackTintColor="#8B5CF6"
                    maximumTrackTintColor="#4B5563"
                    thumbTintColor="#8B5CF6"
                  />
                  <Text className="text-gray-400 ml-3">🔊</Text>
                </View>
              )}
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
```

### 53. Scheduled Reminders

```typescript
// packages/api/src/routers/reminders.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { reminders } from '@quitpo/db'
import { eq, and } from 'drizzle-orm'

export const remindersRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(reminders)
      .where(eq(reminders.userId, ctx.userId))
  }),

  create: protectedProcedure
    .input(z.object({
      type: z.enum(['checkin', 'motivation', 'mindfulness']),
      time: z.string().regex(/^\d{2}:\d{2}$/), // HH:mm
      days: z.array(z.enum(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])),
    }))
    .mutation(async ({ ctx, input }) => {
      const [reminder] = await ctx.db
        .insert(reminders)
        .values({
          userId: ctx.userId,
          type: input.type,
          time: input.time,
          days: input.days,
        })
        .returning()

      return reminder
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      time: z.string().regex(/^\d{2}:\d{2}$/).optional(),
      days: z.array(z.enum(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'])).optional(),
      enabled: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(reminders)
        .set({
          time: input.time,
          days: input.days,
          enabled: input.enabled,
        })
        .where(and(
          eq(reminders.id, input.id),
          eq(reminders.userId, ctx.userId)
        ))
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(reminders)
        .where(and(
          eq(reminders.id, input.id),
          eq(reminders.userId, ctx.userId)
        ))
    }),
})
```

### 54. Push Notifications

```typescript
// apps/mobile/lib/notifications.ts
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { Platform } from 'react-native'
import { api } from './api'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export async function registerForPushNotifications() {
  if (!Device.isDevice) {
    console.log('Push notifications only work on physical devices')
    return null
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  if (finalStatus !== 'granted') {
    console.log('Push notification permission not granted')
    return null
  }

  const token = await Notifications.getExpoPushTokenAsync({
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  })

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#8B5CF6',
    })
  }

  // Save token to backend
  await api.notifications.registerToken.mutate({
    token: token.data,
    platform: Platform.OS,
  })

  return token.data
}

export async function scheduleLocalNotification(
  title: string,
  body: string,
  trigger: Notifications.NotificationTriggerInput
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger,
  })
}

// Schedule motivational notifications
export async function scheduleMotivationalNotifications() {
  const messages = [
    "You're doing great! One day at a time.",
    "Remember your reasons for change.",
    "Stay strong. You've got this!",
    "Every moment of resistance makes you stronger.",
    "Your future self will thank you.",
  ]

  // Cancel existing scheduled notifications
  await Notifications.cancelAllScheduledNotificationsAsync()

  // Schedule random motivational notifications throughout the day
  const hours = [9, 13, 18, 21]

  for (const hour of hours) {
    const message = messages[Math.floor(Math.random() * messages.length)]

    await scheduleLocalNotification('QuitPo', message, {
      hour,
      minute: Math.floor(Math.random() * 60),
      repeats: true,
    })
  }
}
```

```typescript
// packages/api/src/routers/notifications.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { pushTokens } from '@quitpo/db'
import { eq, and } from 'drizzle-orm'

export const notificationsRouter = router({
  registerToken: protectedProcedure
    .input(z.object({
      token: z.string(),
      platform: z.enum(['ios', 'android']),
    }))
    .mutation(async ({ ctx, input }) => {
      // Upsert token
      await ctx.db
        .insert(pushTokens)
        .values({
          userId: ctx.userId,
          token: input.token,
          platform: input.platform,
        })
        .onConflictDoUpdate({
          target: pushTokens.token,
          set: { userId: ctx.userId, platform: input.platform },
        })
    }),

  removeToken: protectedProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(pushTokens)
        .where(and(
          eq(pushTokens.userId, ctx.userId),
          eq(pushTokens.token, input.token)
        ))
    }),
})

// Server-side push notification sending (for webhooks, cron jobs, etc.)
export async function sendPushNotification(
  userId: string,
  title: string,
  body: string
) {
  const tokens = await db
    .select()
    .from(pushTokens)
    .where(eq(pushTokens.userId, userId))

  for (const { token } of tokens) {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: token,
        title,
        body,
        sound: 'default',
      }),
    })
  }
}
```

### Mindfulness Router

```typescript
// packages/api/src/routers/mindfulness.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { mindfulnessActivities } from '@quitpo/db'
import { eq, gte, desc, and } from 'drizzle-orm'
import { startOfDay, subDays } from 'date-fns'

export const mindfulnessRouter = router({
  logActivity: protectedProcedure
    .input(z.object({
      activityType: z.enum(['breathing', 'meditation', 'sounds']),
      durationSeconds: z.number().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      const [activity] = await ctx.db
        .insert(mindfulnessActivities)
        .values({
          userId: ctx.userId,
          activityType: input.activityType,
          durationSeconds: input.durationSeconds,
        })
        .returning()

      // Award points
      if (input.activityType === 'breathing') {
        await awardPoints(ctx.userId, POINTS_CONFIG.BREATHING_EXERCISE)

        // Check achievement
        const count = await ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(mindfulnessActivities)
          .where(and(
            eq(mindfulnessActivities.userId, ctx.userId),
            eq(mindfulnessActivities.activityType, 'breathing')
          ))

        if (count[0].count >= 10) {
          await unlockAchievement(ctx.userId, 'MINDFUL')
        }
      } else if (input.activityType === 'meditation') {
        await awardPoints(ctx.userId, POINTS_CONFIG.MEDITATION_COMPLETE)
      }

      return activity
    }),

  getStats: protectedProcedure
    .input(z.object({ days: z.number().min(1).max(90).default(7) }))
    .query(async ({ ctx, input }) => {
      const since = subDays(new Date(), input.days)

      const activities = await ctx.db
        .select()
        .from(mindfulnessActivities)
        .where(and(
          eq(mindfulnessActivities.userId, ctx.userId),
          gte(mindfulnessActivities.completedAt, since)
        ))

      const totalTime = activities.reduce((sum, a) => sum + a.durationSeconds, 0)
      const byType = activities.reduce((acc, a) => {
        acc[a.activityType] = (acc[a.activityType] || 0) + a.durationSeconds
        return acc
      }, {} as Record<string, number>)

      return {
        totalSessions: activities.length,
        totalMinutes: Math.round(totalTime / 60),
        byType,
      }
    }),

  getRecent: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(mindfulnessActivities)
      .where(eq(mindfulnessActivities.userId, ctx.userId))
      .orderBy(desc(mindfulnessActivities.completedAt))
      .limit(10)
  }),
})
```
