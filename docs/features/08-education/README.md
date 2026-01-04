# Education & Learning

## Overview

The education feature provides structured, science-based learning content about addiction, brain chemistry, recovery strategies, and healthy life patterns. Organized into progressive modules with quizzes, the content helps users understand WHY they struggle and HOW recovery works.

Each addiction type has its own complete set of 4 education modules with tailored content.

## Addiction-Specific Content

| Addiction | Content File |
|-----------|--------------|
| Pornography | [porn.md](porn.md) |
| Gambling | [gambling.md](gambling.md) |
| Social Media | [social-media.md](social-media.md) |
| Gaming | [gaming.md](gaming.md) |

---

## Title
Science-Based Recovery Education with Interactive Modules

## Problem Statement

Users recovering from addiction often lack crucial knowledge:

1. **Why They're Addicted**: Users don't understand the neurological mechanisms driving their behavior.
2. **What Happens During Recovery**: Without understanding the timeline, users get discouraged.
3. **How to Prevent Relapse**: Users repeat patterns because they don't know prevention strategies.
4. **Healthy Life Patterns**: Users need to rebuild healthy habits and relationships.
5. **Misinformation**: Internet forums spread myths that can derail recovery.
6. **Motivation Decay**: Without deeper understanding, initial motivation fades.

## Solution

### 1. Structured Learning Modules
Four progressive modules per addiction type covering:
- The science of that specific addiction
- The brain on recovery (timeline)
- Relapse prevention strategies
- Building healthy life patterns

### 2. Bite-Sized Lessons
Each module contains 5-8 lessons:
- 5-10 minutes reading time each
- Engaging visuals and diagrams
- Real-world examples
- Actionable takeaways

### 3. Knowledge Checks
Quizzes after each module:
- Multiple choice questions
- Immediate feedback
- Achievement unlocks
- Review incorrect answers

### 4. Personal Journal
Reflection prompts throughout:
- Apply concepts to personal experience
- Track insights over time
- Private, encrypted entries

---

## Screen Content

### Library Hub

```
┌─────────────────────────────────────────────┐
│  Library                        🔍          │
│                                             │
│  [Modules]  [Journal]  [Saved]              │
│                                             │
│  Your Learning Journey                      │
│  ████████░░░░░░░░░░░░░ 40%                 │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🧠 Module 1                   ✓     │   │
│  │ [Addiction-specific title]         │   │
│  │ 8 lessons • Completed               │   │
│  │ [Review Module]                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🔄 Module 2               IN PROGRESS│   │
│  │ [Addiction-specific title]         │   │
│  │ 6 lessons • 3 of 6 complete         │   │
│  │ [Continue →]                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🛡️ Module 3                🔒       │   │
│  │ [Addiction-specific title]         │   │
│  │ Complete Module 2 to unlock         │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 💕 Module 4                🔒       │   │
│  │ [Addiction-specific title]         │   │
│  │ Complete Module 3 to unlock         │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Lesson View

```
┌─────────────────────────────────────────────┐
│  ← Back           5 of 8            🔖      │
│                                             │
│  [Lesson Title]                             │
│                                             │
│  [Illustration]                             │
│                                             │
│  [Lesson content - varies by addiction]     │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  💡 Key Insight                             │
│                                             │
│  [Key insight text]                         │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  📝 Journal Prompt                          │
│                                             │
│  [Addiction-specific journal prompt]        │
│                                             │
│  [Write in Journal]                         │
│                                             │
│          [← Previous]  [Next →]             │
│                                             │
└─────────────────────────────────────────────┘
```

### Quiz Screen

```
┌─────────────────────────────────────────────┐
│  ← Back           Quiz            3 of 8    │
│                                             │
│  Module 1: Knowledge Check                  │
│                                             │
│  Question 3:                                │
│                                             │
│  [Question text - addiction-specific]       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ○ [Option A]                       │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ ○ [Option B]                       │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ ● [Option C - selected]            │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ ○ [Option D]                       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│          [Check Answer]                     │
│                                             │
└─────────────────────────────────────────────┘
```

### Journal Tab

```
┌─────────────────────────────────────────────┐
│  Library                        🔍          │
│                                             │
│  [Modules]  [Journal]  [Saved]              │
│                                             │
│  Your Journal                               │
│  23 entries                                 │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Dec 28, 2025 • Day 12               │   │
│  │ "[Preview of entry...]"             │   │
│  │ [Read More]                         │   │
│  └─────────────────────────────────────┘   │
│                                             │
│          [+ New Entry]                      │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Quiz Design

### Question Types
- Multiple choice (4 options)
- True/False
- Scenario-based ("What should you do if...")

### Scoring
- 8 questions per module quiz
- Passing: 6/8 (75%)
- Can retake unlimited times
- Best score saved

### Feedback
- Immediate answer feedback
- Explanation for correct answer
- Link to relevant lesson for incorrect

---

## Data Model

### Education Modules
```
education_modules {
  id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  order: Integer
  name: String
  description: Text
  total_lessons: Integer
  total_duration_minutes: Integer
  icon: String
  unlock_requirement: UUID (prev module ID, nullable)
}
```

Note: Each addiction type has its own set of 4 education modules with addiction-specific content.

### Lessons
```
lessons {
  id: UUID
  module_id: UUID
  order: Integer
  title: String
  content: Text (markdown)
  duration_minutes: Integer
  journal_prompt: Text (nullable)
  has_illustration: Boolean
}
```

### User Progress
```
user_lesson_progress {
  id: UUID
  user_id: UUID
  lesson_id: UUID
  started_at: DateTime
  completed_at: DateTime
  time_spent_seconds: Integer
}
```

### Quiz Questions
```
quiz_questions {
  id: UUID
  module_id: UUID
  order: Integer
  question_text: Text
  options: JSON Array
  correct_answer_index: Integer
  explanation: Text
}
```

### Quiz Attempts
```
quiz_attempts {
  id: UUID
  user_id: UUID
  module_id: UUID
  score: Integer
  max_score: Integer
  passed: Boolean
  completed_at: DateTime
  answers: JSON
}
```

### Journal Entries
```
journal_entries {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming, nullable)
  lesson_id: UUID (nullable - can be freeform)
  prompt: Text (nullable)
  content: Text (encrypted)
  streak_at_entry: Integer
  created_at: DateTime
  updated_at: DateTime
}
```

---

## User Flows

### Progressing Through Module
```
User opens Library tab
          ↓
Sees module list with progress
          ↓
Taps current module
          ↓
Module detail shows lessons
          ↓
Taps "Continue" or specific lesson
          ↓
Reads lesson content
          ↓
Optional: Responds to journal prompt
          ↓
Taps "Next" to continue
          ↓
After all lessons: Takes quiz
          ↓
Passes quiz: Module complete, next unlocks
```

### Writing Journal Entry
```
User encounters journal prompt in lesson
          ↓
Taps "Write in Journal"
          ↓
Journal editor opens with prompt
          ↓
User writes reflection
          ↓
Taps "Save"
          ↓
Entry saved with date, streak, lesson reference
```

---

## Integration Points

### With Gamification
- "Student" achievement for first module
- "Scholar" achievement for all modules
- "Quiz Ace" for 100% score

### With Alex
- AI references education content
- "In Module 2, you learned about..."
- Suggests relevant lessons

### With Check-ins
- Journal prompts appear in check-in flow
- "What did you learn in today's lesson?"

### With Analytics
- Education progress tracked
- Correlation: education completion vs streak success

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create education_modules table with seed data per addiction type
- Create lessons table with content per addiction
- Create quiz_questions table with addiction-specific questions
- Create user progress tracking tables
- Create journal_entries table with encryption

### backend-agent Tasks
- GET /api/education/modules?addiction_type=X - All modules with progress
- GET /api/education/modules/:id - Module detail with lessons
- GET /api/education/lessons/:id - Lesson content
- POST /api/education/lessons/:id/complete - Mark complete
- GET /api/education/modules/:id/quiz - Quiz questions
- POST /api/education/modules/:id/quiz - Submit quiz
- POST /api/journal - Create entry
- GET /api/journal - List entries

### ui-agent Tasks
- ModuleCard component
- ModuleDetail component
- LessonViewer component with markdown
- QuizQuestion component
- QuizResult component
- JournalEntry component
- JournalEditor component

### pages-agent Tasks
- Library hub page (tab)
- Module detail page
- Lesson viewer page
- Quiz flow pages
- Journal list and editor pages

---

## Success Metrics

**Engagement Metrics**
- Module start rate
- Lesson completion rate
- Average time per lesson
- Quiz attempt rate

**Learning Metrics**
- Quiz pass rate
- Average quiz score
- Improvement on retakes
- Journal prompt response rate

**Outcome Metrics**
- Correlation: completed modules vs streak length
- Retention of educated users vs non-educated

---

## Free vs Premium

### Free Tier
- Module 1: Full access
- Module 2: Lessons 1-3 only
- Modules 3-4: Preview only
- Journal: 10 entries max
- Quizzes: Free module only

### Premium Tier
- All modules unlocked
- Unlimited journal entries
- All quizzes
- Downloadable content
- New content monthly

---

## Accessibility

- Full screen reader support
- Adjustable text sizes
- High contrast mode
- Audio version of lessons (premium)
- Estimated reading times

---

## Privacy

- Journal entries encrypted at rest
- No AI analysis of journal without consent
- Progress data separate from content
- Export all journal entries option
