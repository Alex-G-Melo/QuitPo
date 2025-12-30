# Phase 7: Education

## Steps 44-49

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const modules = pgTable('modules', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  order: integer('order').notNull(),
  icon: text('icon'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const lessons = pgTable('lessons', {
  id: uuid('id').defaultRandom().primaryKey(),
  moduleId: uuid('module_id').references(() => modules.id).notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
  order: integer('order').notNull(),
  durationMinutes: integer('duration_minutes').default(5),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const quizzes = pgTable('quizzes', {
  id: uuid('id').defaultRandom().primaryKey(),
  lessonId: uuid('lesson_id').references(() => lessons.id).notNull(),
  questions: jsonb('questions').notNull(), // Array of quiz questions
})

export const userProgress = pgTable('user_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  lessonId: uuid('lesson_id').references(() => lessons.id).notNull(),
  completedAt: timestamp('completed_at').defaultNow().notNull(),
  quizScore: integer('quiz_score'),
})

export const journalEntries = pgTable('journal_entries', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  title: text('title'),
  content: text('content').notNull(),
  mood: integer('mood'), // 1-5
  triggers: text('triggers').array(),
  embedding: vector('embedding', { dimensions: 1536 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
```

### 44. Learning Modules (4 Sections)

```typescript
// packages/shared/src/education.ts
export const LEARNING_MODULES = [
  {
    id: 1,
    title: 'Understanding Addiction',
    description: 'Learn how pornography affects your brain',
    icon: '🧠',
    lessons: [
      { title: 'How Addiction Develops', duration: 5 },
      { title: 'The Dopamine System', duration: 7 },
      { title: 'Brain Plasticity & Recovery', duration: 6 },
      { title: 'Myths vs. Facts', duration: 5 },
    ],
  },
  {
    id: 2,
    title: 'Health Consequences',
    description: 'Physical and mental health impacts',
    icon: '❤️',
    lessons: [
      { title: 'Physical Effects', duration: 6 },
      { title: 'Mental Health Impact', duration: 7 },
      { title: 'Relationship Effects', duration: 6 },
      { title: 'The Recovery Timeline', duration: 5 },
    ],
  },
  {
    id: 3,
    title: 'Recovery Benefits',
    description: 'What to expect as you heal',
    icon: '✨',
    lessons: [
      { title: 'Week 1-2: Initial Changes', duration: 5 },
      { title: 'Week 3-4: Building Momentum', duration: 5 },
      { title: 'Month 2: Deeper Healing', duration: 6 },
      { title: '90 Days: Full Rewiring', duration: 7 },
    ],
  },
  {
    id: 4,
    title: 'Quitting Strategies',
    description: 'Evidence-based techniques',
    icon: '🎯',
    lessons: [
      { title: 'Identifying Triggers', duration: 6 },
      { title: 'Breaking the Cycle', duration: 7 },
      { title: 'Building New Habits', duration: 8 },
      { title: 'Handling Relapses', duration: 6 },
    ],
  },
]
```

```typescript
// packages/api/src/routers/education.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { modules, lessons, userProgress } from '@quitpo/db'
import { eq, and, asc } from 'drizzle-orm'

export const educationRouter = router({
  getModules: protectedProcedure.query(async ({ ctx }) => {
    const allModules = await ctx.db
      .select()
      .from(modules)
      .orderBy(asc(modules.order))

    // Get user progress for each module
    const progress = await ctx.db
      .select({
        lessonId: userProgress.lessonId,
        completedAt: userProgress.completedAt,
      })
      .from(userProgress)
      .where(eq(userProgress.userId, ctx.userId))

    const completedLessonIds = new Set(progress.map((p) => p.lessonId))

    // Get lesson counts per module
    const modulesWithProgress = await Promise.all(
      allModules.map(async (mod) => {
        const moduleLessons = await ctx.db
          .select()
          .from(lessons)
          .where(eq(lessons.moduleId, mod.id))

        const completedCount = moduleLessons.filter((l) =>
          completedLessonIds.has(l.id)
        ).length

        return {
          ...mod,
          totalLessons: moduleLessons.length,
          completedLessons: completedCount,
          progress: Math.round((completedCount / moduleLessons.length) * 100),
        }
      })
    )

    return modulesWithProgress
  }),

  getModuleLessons: protectedProcedure
    .input(z.object({ moduleId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const moduleLessons = await ctx.db
        .select()
        .from(lessons)
        .where(eq(lessons.moduleId, input.moduleId))
        .orderBy(asc(lessons.order))

      const progress = await ctx.db
        .select()
        .from(userProgress)
        .where(and(
          eq(userProgress.userId, ctx.userId),
        ))

      const completedIds = new Set(progress.map((p) => p.lessonId))

      return moduleLessons.map((lesson) => ({
        ...lesson,
        isCompleted: completedIds.has(lesson.id),
      }))
    }),
})
```

### 45. Lesson Viewer

```typescript
// packages/ui/src/LessonViewer.tsx
import { View, Text, ScrollView, Pressable } from 'react-native'
import { useState } from 'react'
import Markdown from 'react-native-markdown-display'

interface LessonViewerProps {
  lesson: {
    id: string
    title: string
    content: string
    durationMinutes: number
  }
  onComplete: () => void
  hasQuiz: boolean
  onStartQuiz: () => void
}

export function LessonViewer({
  lesson,
  onComplete,
  hasQuiz,
  onStartQuiz,
}: LessonViewerProps) {
  const [isRead, setIsRead] = useState(false)

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 50

    if (isEndReached) {
      setIsRead(true)
    }
  }

  return (
    <View className="flex-1 bg-gray-900">
      <ScrollView
        className="flex-1 p-4"
        onScroll={handleScroll}
        scrollEventThrottle={400}
      >
        <Text className="text-white text-2xl font-bold mb-2">
          {lesson.title}
        </Text>
        <Text className="text-gray-400 mb-6">
          {lesson.durationMinutes} min read
        </Text>

        <Markdown
          style={{
            body: { color: '#fff', fontSize: 16, lineHeight: 26 },
            heading1: { color: '#fff', fontSize: 24, marginVertical: 16 },
            heading2: { color: '#fff', fontSize: 20, marginVertical: 12 },
            paragraph: { marginBottom: 16 },
            list_item: { marginBottom: 8 },
          }}
        >
          {lesson.content}
        </Markdown>

        <View className="h-20" />
      </ScrollView>

      <View className="p-4 bg-gray-800 border-t border-gray-700">
        {hasQuiz ? (
          <Pressable
            onPress={isRead ? onStartQuiz : undefined}
            className={`py-4 rounded-xl ${
              isRead ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <Text className="text-white text-center text-lg font-medium">
              {isRead ? 'Take Quiz' : 'Read to continue'}
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={isRead ? onComplete : undefined}
            className={`py-4 rounded-xl ${
              isRead ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <Text className="text-white text-center text-lg font-medium">
              {isRead ? 'Complete Lesson' : 'Read to continue'}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}
```

### 46. Progress Tracking

```typescript
// packages/api/src/routers/education.ts (additions)
completeLesson: protectedProcedure
  .input(z.object({
    lessonId: z.string().uuid(),
    quizScore: z.number().min(0).max(100).optional(),
  }))
  .mutation(async ({ ctx, input }) => {
    // Check if already completed
    const existing = await ctx.db
      .select()
      .from(userProgress)
      .where(and(
        eq(userProgress.userId, ctx.userId),
        eq(userProgress.lessonId, input.lessonId)
      ))
      .limit(1)

    if (existing[0]) {
      // Update quiz score if provided
      if (input.quizScore !== undefined) {
        await ctx.db
          .update(userProgress)
          .set({ quizScore: input.quizScore })
          .where(eq(userProgress.id, existing[0].id))
      }
      return existing[0]
    }

    const [progress] = await ctx.db
      .insert(userProgress)
      .values({
        userId: ctx.userId,
        lessonId: input.lessonId,
        quizScore: input.quizScore,
      })
      .returning()

    // Award points
    await awardPoints(ctx.userId, POINTS_CONFIG.LESSON_COMPLETE)

    // Check for achievements
    const totalCompleted = await ctx.db
      .select({ count: sql<number>`count(*)` })
      .from(userProgress)
      .where(eq(userProgress.userId, ctx.userId))

    if (totalCompleted[0].count === 1) {
      await unlockAchievement(ctx.userId, 'LEARNER')
    }

    const allLessons = await ctx.db.select().from(lessons)
    if (totalCompleted[0].count >= allLessons.length) {
      await unlockAchievement(ctx.userId, 'SCHOLAR')
    }

    return progress
  }),

getOverallProgress: protectedProcedure.query(async ({ ctx }) => {
  const totalLessons = await ctx.db
    .select({ count: sql<number>`count(*)` })
    .from(lessons)

  const completed = await ctx.db
    .select({ count: sql<number>`count(*)` })
    .from(userProgress)
    .where(eq(userProgress.userId, ctx.userId))

  return {
    total: totalLessons[0].count,
    completed: completed[0].count,
    percentage: Math.round((completed[0].count / totalLessons[0].count) * 100),
  }
}),
```

### 47. Quizzes

```typescript
// packages/shared/src/quiz.ts
export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Quiz {
  lessonId: string
  questions: QuizQuestion[]
}
```

```typescript
// packages/ui/src/Quiz.tsx
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import type { QuizQuestion } from '@quitpo/shared'

interface QuizProps {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const currentQuestion = questions[currentIndex]
  const isCorrect = selectedAnswer === currentQuestion.correctIndex

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)

    if (index === currentQuestion.correctIndex) {
      setCorrectCount((c) => c + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      const score = Math.round((correctCount / questions.length) * 100)
      onComplete(score)
    }
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-gray-400 mb-2">
        Question {currentIndex + 1} of {questions.length}
      </Text>

      <Text className="text-white text-xl font-medium mb-6">
        {currentQuestion.question}
      </Text>

      <View className="gap-3">
        {currentQuestion.options.map((option, index) => {
          let bgColor = 'bg-gray-700'
          if (selectedAnswer !== null) {
            if (index === currentQuestion.correctIndex) {
              bgColor = 'bg-green-600'
            } else if (index === selectedAnswer) {
              bgColor = 'bg-red-600'
            }
          }

          return (
            <Pressable
              key={index}
              onPress={() => handleSelect(index)}
              className={`${bgColor} p-4 rounded-xl`}
            >
              <Text className="text-white text-base">{option}</Text>
            </Pressable>
          )
        })}
      </View>

      {showExplanation && (
        <View className="mt-6 p-4 bg-gray-800 rounded-xl">
          <Text className={`font-bold mb-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : 'Not quite'}
          </Text>
          <Text className="text-gray-300">{currentQuestion.explanation}</Text>
        </View>
      )}

      {selectedAnswer !== null && (
        <Pressable
          onPress={handleNext}
          className="mt-6 bg-purple-600 py-4 rounded-xl"
        >
          <Text className="text-white text-center text-lg font-medium">
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </Text>
        </Pressable>
      )}
    </View>
  )
}
```

### 48. Content Recommendations (pgvector)

```typescript
// packages/api/src/routers/education.ts (additions)
getRecommendations: protectedProcedure.query(async ({ ctx }) => {
  // Get user's recent journal entries and chat messages
  const recentJournal = await ctx.db
    .select()
    .from(journalEntries)
    .where(eq(journalEntries.userId, ctx.userId))
    .orderBy(desc(journalEntries.createdAt))
    .limit(5)

  if (recentJournal.length === 0) {
    // Return first uncompleted lessons
    const completed = await ctx.db
      .select({ lessonId: userProgress.lessonId })
      .from(userProgress)
      .where(eq(userProgress.userId, ctx.userId))

    const completedIds = new Set(completed.map((c) => c.lessonId))

    const uncompleted = await ctx.db
      .select()
      .from(lessons)
      .where(not(inArray(lessons.id, [...completedIds])))
      .orderBy(asc(lessons.order))
      .limit(3)

    return uncompleted
  }

  // Find similar lessons based on journal content
  const combinedText = recentJournal.map((j) => j.content).join(' ')
  const queryEmbedding = await generateEmbedding(combinedText)

  const similar = await ctx.db.execute(sql`
    SELECT l.*,
           1 - (l.embedding <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
    FROM lessons l
    LEFT JOIN user_progress up ON l.id = up.lesson_id AND up.user_id = ${ctx.userId}
    WHERE up.id IS NULL
      AND l.embedding IS NOT NULL
    ORDER BY l.embedding <=> ${JSON.stringify(queryEmbedding)}::vector
    LIMIT 3
  `)

  return similar.rows
}),
```

### 49. Recovery Journal

```typescript
// packages/api/src/routers/journal.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { journalEntries } from '@quitpo/db'
import { eq, desc, gte, lte, and } from 'drizzle-orm'
import { generateEmbedding } from '../embeddings'
import { startOfDay, endOfDay, subDays } from 'date-fns'

export const journalRouter = router({
  getEntries: protectedProcedure
    .input(z.object({
      limit: z.number().min(1).max(50).default(20),
      cursor: z.string().uuid().optional(),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db
        .select()
        .from(journalEntries)
        .where(eq(journalEntries.userId, ctx.userId))
        .orderBy(desc(journalEntries.createdAt))
        .limit(input.limit)
    }),

  create: protectedProcedure
    .input(z.object({
      title: z.string().max(200).optional(),
      content: z.string().min(1).max(5000),
      mood: z.number().min(1).max(5).optional(),
      triggers: z.array(z.string()).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const embedding = await generateEmbedding(input.content)

      const [entry] = await ctx.db
        .insert(journalEntries)
        .values({
          userId: ctx.userId,
          title: input.title,
          content: input.content,
          mood: input.mood,
          triggers: input.triggers,
          embedding,
        })
        .returning()

      // Check for achievements
      const entryCount = await ctx.db
        .select({ count: sql<number>`count(*)` })
        .from(journalEntries)
        .where(eq(journalEntries.userId, ctx.userId))

      if (entryCount[0].count >= 7) {
        await unlockAchievement(ctx.userId, 'JOURNALER')
      }

      await awardPoints(ctx.userId, POINTS_CONFIG.JOURNAL_ENTRY)

      return entry
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      title: z.string().max(200).optional(),
      content: z.string().min(1).max(5000),
      mood: z.number().min(1).max(5).optional(),
      triggers: z.array(z.string()).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const embedding = await generateEmbedding(input.content)

      await ctx.db
        .update(journalEntries)
        .set({
          title: input.title,
          content: input.content,
          mood: input.mood,
          triggers: input.triggers,
          embedding,
          updatedAt: new Date(),
        })
        .where(and(
          eq(journalEntries.id, input.id),
          eq(journalEntries.userId, ctx.userId)
        ))
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(journalEntries)
        .where(and(
          eq(journalEntries.id, input.id),
          eq(journalEntries.userId, ctx.userId)
        ))
    }),

  getMoodTrend: protectedProcedure
    .input(z.object({ days: z.number().min(7).max(90).default(30) }))
    .query(async ({ ctx, input }) => {
      const startDate = subDays(new Date(), input.days)

      const entries = await ctx.db
        .select({
          date: journalEntries.createdAt,
          mood: journalEntries.mood,
        })
        .from(journalEntries)
        .where(and(
          eq(journalEntries.userId, ctx.userId),
          gte(journalEntries.createdAt, startDate)
        ))
        .orderBy(journalEntries.createdAt)

      return entries.filter((e) => e.mood !== null)
    }),

  getCommonTriggers: protectedProcedure.query(async ({ ctx }) => {
    const entries = await ctx.db
      .select({ triggers: journalEntries.triggers })
      .from(journalEntries)
      .where(eq(journalEntries.userId, ctx.userId))

    const triggerCounts: Record<string, number> = {}

    for (const entry of entries) {
      for (const trigger of entry.triggers || []) {
        triggerCounts[trigger] = (triggerCounts[trigger] || 0) + 1
      }
    }

    return Object.entries(triggerCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([trigger, count]) => ({ trigger, count }))
  }),
})
```

```typescript
// packages/ui/src/JournalEditor.tsx
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { useState } from 'react'

const MOODS = ['😢', '😕', '😐', '🙂', '😊']
const COMMON_TRIGGERS = ['Stress', 'Boredom', 'Loneliness', 'Late night', 'Social media', 'Anxiety']

interface JournalEditorProps {
  initialData?: {
    title?: string
    content: string
    mood?: number
    triggers?: string[]
  }
  onSave: (data: { title?: string; content: string; mood?: number; triggers: string[] }) => void
}

export function JournalEditor({ initialData, onSave }: JournalEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [mood, setMood] = useState(initialData?.mood)
  const [triggers, setTriggers] = useState<string[]>(initialData?.triggers || [])

  const toggleTrigger = (trigger: string) => {
    setTriggers((prev) =>
      prev.includes(trigger)
        ? prev.filter((t) => t !== trigger)
        : [...prev, trigger]
    )
  }

  return (
    <ScrollView className="flex-1 p-4">
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title (optional)"
        placeholderTextColor="#6B7280"
        className="text-white text-xl font-medium mb-4"
      />

      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="How are you feeling today?"
        placeholderTextColor="#6B7280"
        multiline
        className="text-white text-base min-h-[200px] mb-6"
      />

      <Text className="text-gray-400 mb-3">How are you feeling?</Text>
      <View className="flex-row gap-3 mb-6">
        {MOODS.map((emoji, index) => (
          <Pressable
            key={index}
            onPress={() => setMood(index + 1)}
            className={`w-12 h-12 rounded-full items-center justify-center ${
              mood === index + 1 ? 'bg-purple-600' : 'bg-gray-700'
            }`}
          >
            <Text className="text-2xl">{emoji}</Text>
          </Pressable>
        ))}
      </View>

      <Text className="text-gray-400 mb-3">Any triggers today?</Text>
      <View className="flex-row flex-wrap gap-2 mb-8">
        {COMMON_TRIGGERS.map((trigger) => (
          <Pressable
            key={trigger}
            onPress={() => toggleTrigger(trigger)}
            className={`px-4 py-2 rounded-full ${
              triggers.includes(trigger) ? 'bg-purple-600' : 'bg-gray-700'
            }`}
          >
            <Text className="text-white">{trigger}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => onSave({ title, content, mood, triggers })}
        disabled={!content.trim()}
        className={`py-4 rounded-xl ${
          content.trim() ? 'bg-purple-600' : 'bg-gray-600'
        }`}
      >
        <Text className="text-white text-center text-lg font-medium">
          Save Entry
        </Text>
      </Pressable>
    </ScrollView>
  )
}
```
