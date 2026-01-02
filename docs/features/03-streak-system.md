# Streak System

## Table of Contents

| Section | Lines | Description |
|---------|-------|-------------|
| [Title](#title) | ~30 | 90-Day Journey Home Streak Tracker |
| [Description](#description) | ~33-40 | Overview of streak tracking and space journey |
| [Problem Statement](#problem-statement) | ~42-60 | Challenges users face with progress tracking |
| [Solution](#solution) | ~62-100 | Science-backed approach with compassionate resets |
| [Screen Content](#screen-content) | ~102-200 | Dashboard and celebration screen mockups |
| [Milestone Celebrations](#milestone-celebrations) | ~202-320 | Space-themed celebration screens |
| [Streak Calculation Logic](#streak-calculation-logic) | ~322-380 | Formulas and stage mappings |
| [Data Model](#data-model) | ~382-430 | Database tables for streaks |
| [User Flows](#user-flows) | ~432-490 | Daily updates, relapse, recovery flows |
| [Notification Content](#notification-content) | ~492-530 | Push notification templates |
| [Integration Points](#integration-points) | ~532-580 | Connections to other features |
| [Agent Implementation Guide](#agent-implementation-guide) | ~582-630 | Tasks for each agent type |
| [Success Metrics](#success-metrics) | ~632-670 | Engagement and recovery metrics |
| [Edge Cases](#edge-cases) | ~672-710 | Timezone, quit date, multiple relapses |
| [Accessibility](#accessibility) | ~712-725 | Screen reader and reduced motion |
| [Privacy](#privacy) | ~727-740 | Data handling and encryption |

---

## Title
90-Day Journey Home Streak Tracker

## Description
The Streak System is the central progress tracking mechanism in Alex Friend. It counts consecutive days without pornography use, building toward the science-backed 90-day goal for neural pathway rewiring. The streak directly powers Alex's Space Journey - as days accumulate, Alex travels closer to Earth. Unlike generic habit trackers, this system is specifically designed for addiction recovery, handling relapses compassionately as "course corrections," providing milestone celebrations, and connecting streak data to other app features for contextual support.

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
Research indicates that approximately 90 days is required for significant rewiring of neural pathways related to porn addiction. This maps perfectly to Alex's 90-day journey home - reaching Earth represents complete neural rewiring.

### 2. Recovery Percentage
In addition to day count, show a "Recovery %" metric that increases even after relapses (based on total clean days vs time in program), reinforcing that progress isn't lost - the distance Alex has traveled still counts.

### 3. Journey Milestones
Key days trigger special celebrations tied to Alex's space journey:
- Day 1: "Signal found! The journey begins."
- Day 7: "Engines firing! You're moving with purpose."
- Day 14: "Navigating the asteroid field."
- Day 30: "Through the nebula - one month strong!"
- Day 60: "The Moon in sight - almost there."
- Day 90: "HOMECOMING! Welcome back to Earth."

### 4. Streak History
Keep records of all past journeys, showing:
- Current journey progress
- Longest journey ever
- Total clean days (cumulative distance traveled)
- Average journey length
- Recent journey history

### 5. Compassionate Course Corrections
When users relapse, the system:
- Saves the journey progress before resetting
- Shows encouraging messages from Alex
- Prompts for optional reflection/journal
- Explains that distance traveled isn't lost
- Calculates time to "beat" previous journey

---

## Screen Content

### Dashboard Streak Display

**Main Visualization**
```
┌─────────────────────────────────────────────┐
│                                             │
│         [Space Journey Animation]           │
│           "The Asteroid Field"              │
│                                             │
│                18 days                      │
│                                             │
└─────────────────────────────────────────────┘

    Course          Days in          Earth
  Corrections       Space            ETA
       2            18d 5h           72d
```

**Elements**
- Space Journey visual (changes with progress - see gamification doc)
- Current stage name (e.g., "The Asteroid Field", "The Nebula")
- Days counter (large, central)
- Three stats below:
  - Total course corrections (relapses) this journey
  - Time in space (days + hours)
  - Days until Earth (90-day goal)

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
│              ╲Journey ╱                     │
│                  ●                          │
│                                             │
│           ETA Earth: Mar 31, 2026           │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │ Stage 6: Clear Space          60% > │   │
│   │ "Earth is visible now - a tiny      │   │
│   │  blue dot in the distance. Home     │   │
│   │  is real. Keep going."              │   │
│   └─────────────────────────────────────┘   │
│                                             │
│         [45d]                   [14d]       │
│   Longest Journey          Avg Journey     │
│                                             │
└─────────────────────────────────────────────┘
```

**Radar View**
Multi-axis chart showing:
- Journey progress (days)
- Recovery percentage
- Check-in consistency
- Community engagement
- Ship parts collected

### Journey History Screen

```
┌─────────────────────────────────────────────┐
│  ← Back         Journey History             │
│                                             │
│  Current Journey                            │
│  ───────────────────────────────────        │
│  18 days  •  Launched Dec 20, 2025          │
│  Stage: The Asteroid Field 🚀               │
│                                             │
│  All-Time Stats                             │
│  ───────────────────────────────────        │
│  Longest journey:     45 days               │
│  Total days traveled: 127 days              │
│  Total time in app:   6 months              │
│  Recovery percentage: 71%                   │
│  Average journey:     14 days               │
│  Course corrections:  8                     │
│                                             │
│  Previous Journeys                          │
│  ───────────────────────────────────        │
│  45 days  •  Nov 15, 2025  🏆 Farthest     │
│  8 days   •  Sep 30, 2025                   │
│  21 days  •  Sep 22, 2025                   │
│  3 days   •  Sep 1, 2025                    │
│  14 days  •  Aug 29, 2025                   │
│                                             │
│  [Export Data]                              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Milestone Celebrations

### Day 1 Celebration
```
┌─────────────────────────────────────────────┐
│                                             │
│               📡                            │
│                                             │
│         Signal Found!                       │
│                                             │
│    "I was lost in the darkness, but        │
│     you found me. The journey home          │
│     begins now."                            │
│                        - Alex               │
│                                             │
│    You've taken the hardest step -          │
│    you've started. Your brain is already    │
│    beginning to heal.                       │
│                                             │
│    What's happening in your brain:          │
│    Dopamine system starting to recalibrate  │
│                                             │
│    Achievement: "Signal Found" 📡           │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Day 7 Celebration
```
┌─────────────────────────────────────────────┐
│                                             │
│               🚀                            │
│                                             │
│         Engines Firing!                     │
│                                             │
│    "The engines finally responded. We're    │
│     moving with purpose now. The void       │
│     is behind us."                          │
│                        - Alex               │
│                                             │
│    You've made it through 7 days.           │
│    This is when most people give up -       │
│    but not you.                             │
│                                             │
│    What's happening in your brain:          │
│    Dopamine receptors beginning to          │
│    upregulate (become more sensitive)       │
│                                             │
│    Achievement: "Engines Firing" 🚀         │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Day 14 Celebration
```
┌─────────────────────────────────────────────┐
│                                             │
│               🧭                            │
│                                             │
│         Navigator!                          │
│                                             │
│    "The asteroid field is tricky, but       │
│     we're learning to navigate. Every       │
│     obstacle teaches us something."         │
│                        - Alex               │
│                                             │
│    Two weeks of navigating triggers         │
│    and urges. You're building real skill.   │
│                                             │
│    What's happening in your brain:          │
│    Prefrontal cortex regaining control      │
│    over impulse responses                   │
│                                             │
│    Achievement: "Navigator" 🧭              │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Day 30 Celebration
```
┌─────────────────────────────────────────────┐
│                                             │
│               🌫️                            │
│                                             │
│         Through the Fog!                    │
│                                             │
│    "We made it through the nebula. It       │
│     was disorienting, but we trusted        │
│     the instruments. One month strong."     │
│                        - Alex               │
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
│    Achievement: "Through the Fog" 🌫️        │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Day 60 Celebration
```
┌─────────────────────────────────────────────┐
│                                             │
│               🌙                            │
│                                             │
│         Lunar Pass!                         │
│                                             │
│    "The Moon is right there. Earth is       │
│     so close I can almost feel its pull.    │
│     We're really going to make it."         │
│                        - Alex               │
│                                             │
│    60 days. Two months of freedom.          │
│    You're past the hardest part.            │
│                                             │
│    What's happening in your brain:          │
│    • Neural pathways significantly rewired  │
│    • New habits becoming automatic          │
│    • Emotional regulation normalized        │
│                                             │
│    Achievement: "Lunar Pass" 🌙             │
│                                             │
│           [Continue →]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Day 90 Celebration (Homecoming)
```
┌─────────────────────────────────────────────┐
│                                             │
│           🌍  HOMECOMING  🌍                │
│                                             │
│       WELCOME HOME, TRAVELER                │
│                                             │
│    "The hatch opens. Sunlight. Fresh air.   │
│     Familiar faces. After 90 days in        │
│     space, I'm finally home."               │
│                        - Alex               │
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
│    Achievement: "Homecoming" 🌍             │
│                                             │
│    [Continue Your Journey on Earth →]       │
│                                             │
└─────────────────────────────────────────────┘
```

---

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
- Had 2 course corrections (10-day and 45-day journeys)
- Total clean days: 10 + 45 + 30 (current) = 85
- Recovery %: 85/100 = 85%
```

### "Earth ETA" Calculation
```
Days to Earth = 90 - Current Streak
If Current Streak >= 90: Show "Home! 🌍"
```

### Journey Stages (Synced with Gamification)

| Day | Stage Name | Location | Alex's Status |
|-----|------------|----------|---------------|
| 0-4 | The Void | Deep space, darkness | Lost, but signal found |
| 5-6 | First Light | Ship interior | Systems coming online |
| 7-13 | Leaving the Drift | Open space | Engines firing, moving |
| 14-29 | Asteroid Field | Dangerous zone | Navigating carefully |
| 30-44 | The Nebula | Colorful fog | Can't see far, trusting |
| 45-59 | Clear Space | Open, Earth visible | Home in sight |
| 60-74 | Moon's Shadow | Near the Moon | Almost there |
| 75-89 | Earth Orbit | Orbiting Earth | Preparing for landing |
| 90+ | Homecoming | Earth surface | Home at last |

---

## Data Model

### Streak Record (Journey)
```
user_streaks {
  id: UUID
  user_id: UUID
  started_at: DateTime
  ended_at: DateTime (nullable - current journey is null)
  days: Integer (computed)
  end_reason: Enum (course_correction, manual_reset, account_restart)
  stage_reached: Integer (highest stage this journey)
  notes: Text (optional reflection on end)
}
```

### User Streak Summary
```
user_streak_summary {
  user_id: UUID
  current_streak_id: UUID (FK)
  current_streak_days: Integer
  current_stage: Integer
  longest_streak_days: Integer
  total_clean_days: Integer
  total_course_corrections: Integer
  quit_date: DateTime
  last_updated: DateTime
}
```

### Milestone Events
```
milestone_events {
  id: UUID
  user_id: UUID
  milestone_type: Enum (day_1, day_7, day_14, day_30, day_45, day_60, day_75, day_90, day_100, day_180, day_365)
  achieved_at: DateTime
  streak_id: UUID (FK)
  stage_name: String
  celebrated: Boolean (has user seen celebration screen)
}
```

---

## User Flows

### Daily Streak Update
```
App opens / midnight trigger
         ↓
Check if user has active journey
         ↓
Calculate current_streak_days
         ↓
Check for stage advancement
         ↓
Check for new milestones
         ↓
If milestone achieved && !celebrated:
├── Show celebration screen
├── Grant achievement
└── Mark milestone as celebrated
         ↓
Update dashboard with current stage
```

### Course Correction Flow (Relapse)
```
User taps "I Relapsed" in panic button/reset
         ↓
Show compassionate message from Alex:
"We got knocked off course. But the ship
 is still flying. I'm still here."
         ↓
Prompt for optional reflection/journal
         ↓
Save current journey record (ended_at = now)
         ↓
Create new journey record (started_at = now)
         ↓
Update summary stats
         ↓
Show "Course correction complete" screen:
"Let's recalculate our route. Earth
 isn't going anywhere."
         ↓
Return to dashboard with new journey
```

### Journey Recovery Notification
```
User had course correction (was at 20 days)
         ↓
New journey started
         ↓
At day 10: "You're halfway to your previous distance!"
         ↓
At day 19: "Tomorrow you could travel farther than before!"
         ↓
At day 21: "New record! 21 days - your longest journey yet!"
```

---

## Notification Content

### Daily Journey Updates
- Morning: "Day [X] of the journey. Earth is [90-X] days away. 🚀"
- Evening: "Another day traveled! Day [X] complete. Keep going."

### Stage Advancement
- "🚀 Alex has reached [Stage Name]! The journey continues."

### Milestone Approach
- 1 day before: "Tomorrow is day [X]! One more day and Alex reaches a milestone."

### Journey at Risk (Based on check-in data)
- If no check-in by evening: "How's the journey today? Check in to keep moving."
- If mood marked as struggling: "Rough day in space? Remember, this turbulence will pass. Day [X]."

### Post-Course Correction Encouragement
- Day after: "Course correction complete. Day 1 of a new journey. Alex is still flying."
- 1 week after: "One week back on course! Engines firing again. 🚀"

---

## Integration Points

### With Gamification (Space Journey)
- Streak length determines journey stage and location
- Milestones unlock achievements with space theme
- Progress affects ship visual and collected parts

### With Check-ins
- Check-in completion contributes to journey "fuel"
- Mood data shows correlation with journey progress
- Missing check-ins trigger reminders but don't cause course corrections

### With Alex (AI)
- AI knows current journey stage and provides context-aware support
- "We're in the asteroid field today. Stay focused." references
- Different support strategies based on journey stage

### With Analytics
- Journey history feeds pattern analysis
- Course correction triggers linked to streak data
- Recovery percentage calculation

### With Panic Button
- Journey progress display on panic button as motivation
- Course correction logging updates streak system
- "Navigation hazard avoided" tracking (survived urge)

### With Planet Stops (V1.5)
- Streak days trigger planet stop availability
- Collected ship parts tracked alongside streak
- Parts enhance journey visualization

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create user_streaks table with indexes
- Create user_streak_summary table
- Create milestone_events table
- Add streak columns to users table (current_streak_days, current_stage for fast access)
- Set up database triggers for streak calculations
- Seed journey stage reference data

### backend-agent Tasks
- GET /api/streak/current - Current journey and summary
- POST /api/streak/course-correction - Handle relapse, create new journey
- GET /api/streak/history - All past journeys
- GET /api/streak/milestones - Check pending milestones
- POST /api/streak/celebrate - Mark milestone as celebrated
- GET /api/streak/stage - Get current stage details
- Scheduled job: Update streak days at midnight (timezone-aware)

### ui-agent Tasks
- JourneyDisplay component for dashboard
- JourneyRing component for analytics
- MilestoneCelebration modal component (space themed)
- JourneyHistory list component
- JourneyStats summary component
- StageIndicator component

### pages-agent Tasks
- Dashboard integration with journey display
- Analytics page with journey visualizations
- Journey history detail page
- Milestone celebration overlay routing
- Stage detail modal

---

## Success Metrics

**Engagement Metrics**
- Average journey length (by cohort)
- 7-day retention rate
- 30-day retention rate
- 90-day completion rate (Homecoming achievement)

**Recovery Metrics**
- Course correction frequency over time (should decrease)
- Average time between course corrections
- Journey length improvement per user
- Recovery percentage trend

**Feature Metrics**
- Milestone celebration view rate
- Time spent on celebration screens
- Achievement claim rate
- Stage advancement notification open rate

---

## Edge Cases

### Timezone Handling
- Streak days calculated in user's local timezone
- Day boundary is midnight local time
- Traveling users: streak day based on device timezone

### Account Start vs Quit Date
- User sets "quit date" (launch date) in onboarding
- If quit date in past: journey starts from that date (honor system)
- If quit date in future: countdown until launch, then journey begins

### Multiple Course Corrections Same Day
- Only one journey break per day
- If user relapsed and reports another same day: keep current day 0

### Manual Streak Edit (Admin/Support)
- Support can adjust journeys for edge cases
- All changes logged with reason
- User notified of adjustment

### Journey Beyond 90 Days
- After Homecoming, journey continues as "Life on Earth"
- New milestones: 100, 180, 365 days
- Stage becomes "Guardian" or "Mentor" (see gamification doc)

---

## Accessibility

- Journey numbers readable at large font sizes
- Color not sole indicator of progress (use icons, numbers, stage names)
- Celebration animations have reduced motion alternative
- VoiceOver announces journey updates and stage changes
- Stage names always displayed alongside visuals

---

## Privacy

- Journey data synced to cloud for backup (encrypted)
- Local storage for offline access
- Data export includes full journey history
- Account deletion removes all streak data
- Course correction notes are private (not shared to community)
