# Streak System

## Title
90-Day Brain Rewiring Streak Tracker

## Description
The Streak System is the central progress tracking mechanism in Alex Friend. It counts consecutive days without pornography use, building toward the science-backed 90-day goal for neural pathway rewiring. Unlike generic habit trackers, this system is specifically designed for addiction recovery, handling relapses compassionately, providing milestone celebrations, and connecting streak data to other app features for contextual support.

## Problem Statement

People trying to quit porn face several tracking challenges:

1. **No Concrete Goal**: "Quit forever" feels overwhelming and abstract. Users need a tangible milestone to work toward.

2. **Binary Thinking**: Traditional counters frame any slip as complete failure, discouraging users who relapse.

3. **Lack of Context**: Generic counters don't explain WHY the number matters or what's happening neurologically.

4. **Isolation of Progress**: Streak exists in a vacuum, not connected to mood, triggers, or other recovery data.

5. **Motivation Decay**: Initial motivation fades over time. Users need ongoing reinforcement and celebration.

6. **Shame After Relapse**: Resetting to zero feels devastating, making users more likely to give up entirely.

## Solution

Alex Friend's streak system addresses these issues through:

### 1. Science-Backed 90-Day Goal
Research indicates that approximately 90 days is required for significant rewiring of neural pathways related to porn addiction. This gives users a concrete, meaningful target backed by neuroscience.

### 2. Recovery Percentage
In addition to day count, show a "Recovery %" metric that increases even after relapses (based on total clean days vs time in program), reinforcing that progress isn't lost.

### 3. Milestone Celebrations
Key days trigger special celebrations:
- Day 1: "You've started! That's the hardest step."
- Day 7: "One week! Your brain is already changing."
- Day 14: "Two weeks! Dopamine receptors recovering."
- Day 30: "One month! Major milestone achieved."
- Day 60: "Two months! You're past the hardest part."
- Day 90: "90 DAYS! Neural rewiring complete!"

### 4. Streak History
Keep records of all past streaks, showing:
- Current streak
- Longest streak ever
- Total clean days (cumulative)
- Average streak length
- Recent streak history

### 5. Compassionate Reset
When users relapse, the system:
- Saves the streak before resetting
- Shows encouraging messages
- Prompts for optional journaling
- Explains that progress isn't lost
- Calculates time to "beat" previous streak

## Screen Content

### Dashboard Streak Display

**Main Visualization**
```
┌─────────────────────────────────────────────┐
│                                             │
│              [Life Tree Image]              │
│                 "Sprout"                    │
│                                             │
│                12 days                      │
│                                             │
└─────────────────────────────────────────────┘

       Relapses    Porn Free For    Til Sober
          2           12d 5h           78d
```

**Elements**
- Life Tree visual (changes with progress - see gamification doc)
- Current stage name (e.g., "Sprout", "Pioneer")
- Days counter (large, central)
- Three stats below:
  - Total relapses this journey
  - Time porn-free (days + hours)
  - Days until 90-day goal

### Analytics Streak View

**Ring/Radar Toggle**
Users can switch between two visualization modes:

**Ring View**
```
┌─────────────────────────────────────────────┐
│  Analytics                    [Ring] Radar  │
│                                             │
│                  ●                          │
│              ╱       ╲                      │
│            ╱           ╲                    │
│           │  Recovery   │                   │
│           │     45%     │                   │
│           │             │                   │
│            ╲  45 Days   ╱                   │
│              ╲ Streak ╱                     │
│                  ●                          │
│                                             │
│           Quit By: Mar 31, 2026             │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │ Level 1                       10% > │   │
│   │ "You don't have urges anymore,      │   │
│   │  mind is clear and physical form    │   │
│   │  is almost at it's peak."           │   │
│   └─────────────────────────────────────┘   │
│                                             │
│         [0d]                    [0d]        │
│   Longest Streak           Avg Streak      │
│                                             │
└─────────────────────────────────────────────┘
```

**Radar View**
Multi-axis chart showing:
- Streak length (days)
- Recovery percentage
- Check-in consistency
- Community engagement
- Education progress

### Streak History Screen

```
┌─────────────────────────────────────────────┐
│  ← Back         Streak History              │
│                                             │
│  Current Streak                             │
│  ───────────────────────────────────        │
│  12 days  •  Started Dec 20, 2025           │
│                                             │
│  All-Time Stats                             │
│  ───────────────────────────────────        │
│  Longest streak:        45 days             │
│  Total clean days:      127 days            │
│  Total time in app:     6 months            │
│  Recovery percentage:   71%                 │
│  Average streak:        14 days             │
│                                             │
│  Previous Streaks                           │
│  ───────────────────────────────────        │
│  45 days  •  Ended Nov 15, 2025  🏆        │
│  8 days   •  Ended Sep 30, 2025             │
│  21 days  •  Ended Sep 22, 2025             │
│  3 days   •  Ended Sep 1, 2025              │
│  14 days  •  Ended Aug 29, 2025             │
│                                             │
│  [Export Data]                              │
│                                             │
└─────────────────────────────────────────────┘
```

### Milestone Celebration Screens

**Day 1 Celebration**
```
┌─────────────────────────────────────────────┐
│                                             │
│               🌱                            │
│                                             │
│          Day 1 Complete!                    │
│                                             │
│    "The journey of a thousand miles         │
│     begins with a single step."             │
│                                             │
│    You've taken the hardest step -          │
│    you've started. Your brain is already    │
│    beginning to heal.                       │
│                                             │
│    What's happening in your brain:          │
│    Dopamine system starting to recalibrate  │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

**Day 7 Celebration**
```
┌─────────────────────────────────────────────┐
│                                             │
│               🌿                            │
│                                             │
│          1 Week Strong!                     │
│                                             │
│    You've made it through 7 days.           │
│    This is when most people give up -       │
│    but not you.                             │
│                                             │
│    What's happening in your brain:          │
│    Dopamine receptors beginning to          │
│    upregulate (become more sensitive)       │
│                                             │
│    Achievement Unlocked: "First Week" 🏅    │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

**Day 30 Celebration**
```
┌─────────────────────────────────────────────┐
│                                             │
│               🌳                            │
│                                             │
│          30 Days - One Month!               │
│                                             │
│    This is a MASSIVE milestone. Only 15%    │
│    of people make it this far.              │
│                                             │
│    You're experiencing:                     │
│    • Improved focus & concentration         │
│    • Better emotional regulation            │
│    • Reduced brain fog                      │
│    • More stable energy levels              │
│                                             │
│    What's happening in your brain:          │
│    Significant reduction in ΔFosB           │
│    (addiction protein) levels               │
│                                             │
│    Achievement Unlocked: "Month Master" 🏆  │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

**Day 90 Celebration (Final)**
```
┌─────────────────────────────────────────────┐
│                                             │
│           🎆  90 DAYS  🎆                   │
│                                             │
│       NEURAL REWIRING COMPLETE              │
│                                             │
│    You've done it. 90 days of freedom.      │
│                                             │
│    Your brain has fundamentally changed:    │
│    • ΔFosB levels normalized                │
│    • Dopamine sensitivity restored          │
│    • New neural pathways established        │
│    • Prefrontal cortex strengthened         │
│                                             │
│    This doesn't mean you're "cured" -       │
│    staying vigilant is still important.     │
│    But you've proven you can do this.       │
│                                             │
│    Achievement Unlocked: "Rewired" 👑       │
│                                             │
│    [Continue Your Journey →]                │
│                                             │
└─────────────────────────────────────────────┘
```

## Streak Calculation Logic

### Basic Streak Counter
```
Current Streak = Days since last_relapse_date
If never relapsed: Days since account_created OR quit_date set in onboarding
```

### Recovery Percentage
```
Recovery % = (Total Clean Days / Total Days in Program) × 100

Example:
- User joined 100 days ago
- Had 2 relapses (10-day and 45-day streaks lost)
- Total clean days: 10 + 45 + 30 (current) = 85
- Recovery %: 85/100 = 85%
```

### "Til Sober" Calculation
```
Days to 90 = 90 - Current Streak
If Current Streak >= 90: Show "Achieved!"
```

### Streak Milestones

| Day | Stage Name | Description |
|-----|------------|-------------|
| 0 | Seed | Just planted, starting the journey |
| 1-4 | Sprout | First days, emerging from the ground |
| 5-6 | Pioneer | Pushing through initial resistance |
| 7-13 | Momentum | Building consistent habits |
| 14-29 | Fortress | Strengthening defenses |
| 30-44 | Flourishing | Visible growth and change |
| 45-59 | Thriving | Resilience established |
| 60-89 | Enlightened | Deep understanding and control |
| 90+ | Nirvana | Full rewiring achieved |

## Data Model

### Streak Record
```
user_streaks {
  id: UUID
  user_id: UUID
  started_at: DateTime
  ended_at: DateTime (nullable - current streak is null)
  days: Integer (computed)
  end_reason: Enum (relapse, manual_reset, account_restart)
  notes: Text (optional journal entry on end)
}
```

### User Streak Summary
```
user_streak_summary {
  user_id: UUID
  current_streak_id: UUID (FK)
  current_streak_days: Integer
  longest_streak_days: Integer
  total_clean_days: Integer
  total_relapses: Integer
  quit_date: DateTime
  last_updated: DateTime
}
```

### Milestone Events
```
milestone_events {
  id: UUID
  user_id: UUID
  milestone_type: Enum (day_1, day_7, day_14, day_30, day_60, day_90, day_100, day_180, day_365)
  achieved_at: DateTime
  streak_id: UUID (FK)
  celebrated: Boolean (has user seen celebration screen)
}
```

## User Flows

### Daily Streak Update
```
App opens / midnight trigger
         ↓
Check if user has active streak
         ↓
Calculate current_streak_days
         ↓
Check for new milestones
         ↓
If milestone achieved && !celebrated:
├── Show celebration screen
├── Grant achievement
└── Mark milestone as celebrated
         ↓
Update dashboard display
```

### Relapse Flow
```
User taps "I Relapsed" in panic button/reset
         ↓
Show compassionate message
         ↓
Prompt for optional reflection/journal
         ↓
Save current streak record (ended_at = now)
         ↓
Create new streak record (started_at = now)
         ↓
Update summary stats
         ↓
Show "start fresh" encouragement
         ↓
Return to dashboard with new streak
```

### Streak Recovery Notification
```
User relapsed (had 20-day streak)
         ↓
New streak started
         ↓
At day 10: "You're halfway to beating your last streak!"
         ↓
At day 19: "Tomorrow you could beat your previous record!"
         ↓
At day 21: "New personal best! 21 days - you're growing!"
```

## Notification Content

### Daily Streak Updates
- Morning: "Day [X] begins! You're [90-X] days from your goal."
- Evening: "Another day down! Day [X] complete."

### Milestone Approach
- 1 day before milestone: "Tomorrow is day [X]! One more day and you hit a milestone."

### Streak at Risk (Based on check-in data)
- If no check-in by evening: "How was your day? Check in to keep your streak strong."
- If mood marked as struggling: "Tough day? Remember, this urge will pass. You're on day [X]."

### Post-Relapse Encouragement
- Day after relapse: "Yesterday was a setback, not an ending. Day 1 is still progress."
- 1 week after relapse: "One week back on track! You're building momentum again."

## Integration Points

### With Gamification
- Streak length determines Life Tree stage
- Milestones unlock achievements
- Progress affects visual representation

### With Check-ins
- Check-in completion contributes to streak "strength"
- Mood data shows correlation with streak length
- Missing check-ins trigger reminders but don't break streak

### With Alex
- AI knows current streak and provides context-aware support
- "You're on day [X]" references in conversation
- Different support strategies based on streak stage

### With Analytics
- Streak history feeds pattern analysis
- Relapse triggers linked to streak data
- Recovery percentage calculation

### With Panic Button
- Streak display on panic button as motivation
- Relapse logging updates streak system
- "Survived urge" tracking (didn't relapse)

## Agent Implementation Guide

### foundation-agent Tasks
- Create user_streaks table with indexes
- Create user_streak_summary table
- Create milestone_events table
- Add streak columns to users table (current_streak_days for fast access)
- Set up database triggers for streak calculations

### backend-agent Tasks
- GET /api/streak/current - Current streak and summary
- POST /api/streak/relapse - Handle relapse, create new streak
- GET /api/streak/history - All past streaks
- GET /api/streak/milestones - Check pending milestones
- POST /api/streak/celebrate - Mark milestone as celebrated
- Scheduled job: Update streak days at midnight (timezone-aware)

### ui-agent Tasks
- StreakDisplay component for dashboard
- StreakRing component for analytics
- MilestoneCelebration modal component
- StreakHistory list component
- StreakStats summary component

### pages-agent Tasks
- Dashboard integration with streak display
- Analytics page with streak visualizations
- Streak history detail page
- Milestone celebration overlay routing

## Success Metrics

**Engagement Metrics**
- Average streak length (by cohort)
- 7-day retention rate
- 30-day retention rate
- 90-day completion rate

**Recovery Metrics**
- Relapse frequency over time (should decrease)
- Average time between relapses
- Streak length improvement per user
- Recovery percentage trend

**Feature Metrics**
- Milestone celebration view rate
- Time spent on celebration screens
- Achievement claim rate

## Edge Cases

### Timezone Handling
- Streak days calculated in user's local timezone
- Day boundary is midnight local time
- Traveling users: streak day based on device timezone

### Account Start vs Quit Date
- User sets "quit date" in onboarding
- If quit date in past: streak starts from that date (honor system)
- If quit date in future: countdown until start, then streak begins

### Multiple Relapses Same Day
- Only one streak break per day
- If user relapsed and reports another same day: keep current day 0

### Manual Streak Edit (Admin/Support)
- Support can adjust streaks for edge cases
- All changes logged with reason
- User notified of adjustment

## Accessibility

- Streak numbers readable at large font sizes
- Color not sole indicator of progress (use shapes, numbers)
- Celebration animations have reduced motion alternative
- VoiceOver announces streak updates

## Privacy

- Streak data synced to cloud for backup (encrypted)
- Local storage for offline access
- Data export includes streak history
- Account deletion removes all streak data
