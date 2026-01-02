# Daily Check-ins

## Title
Morning & Evening Mood and Urge Tracking System

## Description
Daily check-ins are brief, structured self-assessments that help users monitor their emotional state, urge levels, and triggers throughout their recovery journey. By consistently tracking this data, users develop self-awareness, identify patterns, and can proactively address high-risk situations. The check-in system also provides valuable data for Alex and analytics features.

## Problem Statement

Users in addiction recovery often struggle with:

1. **Lack of Self-Awareness**: Many users don't recognize patterns in their behavior until after relapse.

2. **Trigger Blindness**: Users often can't identify what triggers their urges without systematic tracking.

3. **Time-of-Day Patterns**: Evening and nighttime present higher risks, but users may not realize this without data.

4. **Mood-Urge Connection**: The link between emotional states (stress, boredom, loneliness) and urges isn't always obvious.

5. **No Early Warning System**: By the time users notice they're struggling, they may already be in a compromised state.

6. **Inconsistent Reflection**: Without prompting, users rarely pause to assess their state proactively.

## Solution

Alex Friend's check-in system provides:

### 1. Structured Daily Prompts
- Morning check-in: Set intentions, assess starting mood
- Evening check-in: Reflect on the day, log urge intensity
- Optional mid-day check-in for high-risk users

### 2. Quick, Frictionless Design
- Complete in under 30 seconds
- Slider-based inputs for speed
- Optional text fields for notes
- Skip option (with gentle nudge)

### 3. Pattern Recognition
- Weekly/monthly trend analysis
- Time-of-day risk identification
- Trigger correlation discovery
- Mood-urge relationship mapping

### 4. Proactive Intervention
- High urge triggers check-in follow-up
- AI suggestions based on patterns
- Notification adjustments based on risk times

## Screen Content

### Morning Check-in

**Trigger**: First app open of the day, or notification at configured time (default 8 AM)

```
┌─────────────────────────────────────────────┐
│                                   X (close) │
│                                             │
│            ☀️ Good Morning                  │
│                                             │
│     How are you feeling this morning?       │
│                                             │
│   😔 ─────────●───────────── 😊            │
│              (7/10)                         │
│                                             │
│     Any urges when you woke up?             │
│                                             │
│   🔥 ─●────────────────────── ❄️           │
│       (2/10)                                │
│                                             │
│     What's your intention for today?        │
│     ┌─────────────────────────────────┐    │
│     │ Stay strong, focus on work...   │    │
│     └─────────────────────────────────┘    │
│            (optional)                       │
│                                             │
│           [Submit Check-in]                 │
│                                             │
│            Skip for now                     │
│                                             │
└─────────────────────────────────────────────┘
```

### Evening Check-in

**Trigger**: Notification at configured time (default 9 PM), or manual

```
┌─────────────────────────────────────────────┐
│                                   X (close) │
│                                             │
│            🌙 Evening Reflection            │
│                                             │
│     How did today go overall?               │
│                                             │
│   😔 ─────────────●───────── 😊            │
│                  (8/10)                     │
│                                             │
│     Strongest urge today?                   │
│                                             │
│   🔥 ───────●──────────────── ❄️           │
│            (4/10)                           │
│                                             │
│     What triggered it? (select all)         │
│     ┌─────────────────────────────────┐    │
│     │ [x] Stress     [ ] Social media │    │
│     │ [ ] Boredom    [ ] Loneliness   │    │
│     │ [ ] HALT*      [ ] Late night   │    │
│     │ [ ] Other: _____________        │    │
│     └─────────────────────────────────┘    │
│                                             │
│     Anything you want to note?              │
│     ┌─────────────────────────────────┐    │
│     │ Good day, stayed busy...        │    │
│     └─────────────────────────────────┘    │
│            (optional)                       │
│                                             │
│           [Submit Check-in]                 │
│                                             │
└─────────────────────────────────────────────┘

*HALT = Hungry, Angry, Lonely, Tired
```

### Quick Urge Check-in

**Trigger**: Available anytime from dashboard, or after panic button survives urge

```
┌─────────────────────────────────────────────┐
│                                   X (close) │
│                                             │
│         🔥 Quick Urge Check                 │
│                                             │
│     How strong is the urge right now?       │
│                                             │
│   1  2  3  4  5  6  7  8  9  10            │
│   ○  ○  ○  ○  ●  ○  ○  ○  ○  ○             │
│                                             │
│     What's triggering it?                   │
│     ┌─────────────────────────────────┐    │
│     │ [x] Stress     [ ] Social media │    │
│     │ [ ] Boredom    [ ] Loneliness   │    │
│     │ [ ] HALT       [ ] Late night   │    │
│     └─────────────────────────────────┘    │
│                                             │
│           [Log Urge]                        │
│                                             │
│     Need help?                              │
│     [Talk to AI]  [Breathing Exercise]      │
│                                             │
└─────────────────────────────────────────────┘
```

### Check-in Complete Feedback

```
┌─────────────────────────────────────────────┐
│                                             │
│               ✓ Logged!                     │
│                                             │
│     Day 12 check-in complete.               │
│                                             │
│     💡 Insight: You've checked in           │
│     7 days straight! Self-awareness         │
│     is building.                            │
│                                             │
│           [Continue]                        │
│                                             │
└─────────────────────────────────────────────┘
```

### Missed Check-in Prompt

```
┌─────────────────────────────────────────────┐
│                                             │
│     📝 You missed yesterday's check-in      │
│                                             │
│     That's okay! Want to log how            │
│     yesterday went now?                     │
│                                             │
│     [Log Yesterday]  [Skip]                 │
│                                             │
└─────────────────────────────────────────────┘
```

## Check-in Components

### Mood Scale (1-10)
Visual slider with emoji anchors:
- 1-3: Struggling (😔)
- 4-6: Neutral (😐)
- 7-10: Good (😊)

Default position: 5 (neutral)

### Urge Scale (1-10)
Visual slider with icons:
- 1-3: Low/None (❄️)
- 4-6: Moderate (🔥)
- 7-10: Strong (🔥🔥🔥)

Default position: 1 (low)

### Trigger Categories

**Primary Triggers**
| Category | Description | Icon |
|----------|-------------|------|
| Stress | Work, finances, responsibilities | 😰 |
| Boredom | Nothing to do, restless | 😑 |
| Loneliness | Isolated, disconnected | 😢 |
| Social Media | Instagram, TikTok, etc. | 📱 |
| Late Night | After 10 PM scrolling | 🌙 |
| HALT | Hungry, Angry, Lonely, Tired | ⚠️ |
| Relationship | Partner issues, rejection | 💔 |
| Celebration | "Treating" self after success | 🎉 |

**Custom Triggers**
Users can add their own triggers that appear in future check-ins.

### Intention/Note Fields
- Optional free text
- Max 280 characters
- Saves for journal reference
- AI can reference in conversations

## User Flows

### Morning Check-in Flow
```
User opens app first time today (or notification)
                    ↓
Morning check-in modal appears
                    ↓
User adjusts mood slider
                    ↓
User adjusts urge slider
                    ↓
Optional: Enter intention
                    ↓
Tap "Submit Check-in"
                    ↓
Confirmation + insight
                    ↓
Return to dashboard
```

### Evening Check-in Flow
```
Notification at 9 PM (configurable)
                    ↓
User opens notification
                    ↓
Evening check-in modal appears
                    ↓
User adjusts mood slider
                    ↓
User adjusts highest urge slider
                    ↓
User selects trigger categories
                    ↓
Optional: Add notes
                    ↓
Tap "Submit Check-in"
                    ↓
Confirmation + pattern insight
                    ↓
Optional: Review week's data
```

### High Urge Response Flow
```
User logs urge 7+ on check-in
                    ↓
Check-in completes with extra options:
├── "Talk to Alex now?"
├── "Try a breathing exercise?"
└── "Open panic button?"
                    ↓
Follow-up notification in 30 minutes:
"How are you feeling now?"
```

## Check-in Analytics Display

### Weekly Overview
```
┌─────────────────────────────────────────────┐
│  This Week's Check-ins                      │
│                                             │
│     M   T   W   T   F   S   S              │
│    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━            │
│     8   7   6   5   4   3   2    ← Mood    │
│     2   3   4   6   3   2   1    ← Urge    │
│                                             │
│  Average Mood: 5.6 (↑ from last week)       │
│  Average Urge: 3.0 (↓ from last week)       │
│  Check-in Streak: 12 days                   │
│                                             │
│  Top Trigger This Week: Stress (4x)         │
│                                             │
│  [View Detailed Analytics →]                │
│                                             │
└─────────────────────────────────────────────┘
```

### Trigger Breakdown
```
┌─────────────────────────────────────────────┐
│  Your Triggers (Last 30 Days)               │
│                                             │
│  Stress          ████████████░░░ 12         │
│  Late Night      ████████░░░░░░░  8         │
│  Boredom         ██████░░░░░░░░░  6         │
│  Social Media    ████░░░░░░░░░░░  4         │
│  Loneliness      ██░░░░░░░░░░░░░  2         │
│                                             │
│  💡 Insight: Your urges spike when          │
│  stressed. Consider stress management        │
│  techniques.                                │
│                                             │
└─────────────────────────────────────────────┘
```

### Time-of-Day Analysis
```
┌─────────────────────────────────────────────┐
│  Urge Patterns by Time                      │
│                                             │
│  Morning (6a-12p)    ██░░░░░░░░ Low         │
│  Afternoon (12p-6p)  ████░░░░░░ Moderate    │
│  Evening (6p-10p)    ██████████ HIGH        │
│  Night (10p-6a)      ████████░░ High        │
│                                             │
│  ⚠️ Your highest risk window:               │
│  Evenings between 8 PM - 11 PM              │
│                                             │
│  Suggestion: Enable extra friction on       │
│  risky apps during evening hours.           │
│                                             │
└─────────────────────────────────────────────┘
```

## Notification Schedule

### Check-in Reminders

**Morning (configurable, default 8 AM)**
- "☀️ Good morning! Quick check-in to start your day?"

**Evening (configurable, default 9 PM)**
- "🌙 How did today go? Take a moment to reflect."

**Missed Check-in (next morning)**
- "📝 You missed yesterday's evening check-in. Want to log it now?"

### Pattern-Based Notifications

**High-risk time approaching**
- "🔔 It's 7 PM - your urges tend to spike soon. Stay vigilant!"

**After logging high urge**
- "💙 We noticed you're struggling. Remember: this will pass. Need help?"

**Positive streak**
- "🌟 7 days of check-ins! Your self-awareness is growing."

## Data Model

### Check-in Record
```
check_ins {
  id: UUID
  user_id: UUID
  type: Enum (morning, evening, urge)
  mood_score: Integer (1-10, nullable for urge type)
  urge_score: Integer (1-10)
  triggers: JSON Array (list of trigger IDs)
  note: Text (optional)
  intention: Text (optional, morning only)
  created_at: DateTime
  for_date: Date (which day this check-in is for)
}
```

### Trigger Definitions
```
triggers {
  id: UUID
  name: String
  display_name: String
  icon: String
  is_default: Boolean
  user_id: UUID (nullable, null = default trigger)
  sort_order: Integer
}
```

### Check-in Streak
```
user_checkin_streak {
  user_id: UUID
  current_streak: Integer
  longest_streak: Integer
  total_checkins: Integer
  last_checkin_date: Date
  last_checkin_type: Enum
}
```

### Aggregated Analytics
```
checkin_analytics {
  user_id: UUID
  period_start: Date
  period_end: Date
  avg_mood: Decimal
  avg_urge: Decimal
  total_checkins: Integer
  trigger_counts: JSON
  time_distribution: JSON
}
```

## Insights Engine

### Pattern Detection Rules

**High Evening Risk**
```
IF evening urge scores > morning urge scores by 2+ points
   for 5+ days
THEN flag "Evening Risk Pattern"
AND suggest friction mode for evening apps
```

**Stress-Urge Correlation**
```
IF "Stress" trigger appears in 50%+ of check-ins
   AND those check-ins have urge > 5
THEN flag "Stress-Driven Pattern"
AND suggest stress management resources
```

**Social Media Trigger**
```
IF "Social Media" trigger appears 3+ times in 7 days
THEN flag "Social Media Risk"
AND suggest social media safety settings
```

**Consistent Checker Benefit**
```
IF user has 14+ day check-in streak
   AND average urge has decreased
THEN show "Your consistent tracking is helping!"
```

## Integration Points

### With Alex
- AI receives recent check-in data for context
- "I see you've been stressed this week. Want to talk about it?"
- AI can prompt check-in if user hasn't done one today

### With Analytics
- Check-in data feeds pattern visualizations
- Correlation with streak and relapse data
- Exportable for personal records

### With Panic Button
- Post-panic-survived check-in prompt
- Urge data helps understand what works

### With Gamification
- "Consistent" achievement for check-in streaks
- "Self-Aware" achievement for 100+ check-ins

### With Notifications
- Risk-time notifications based on check-in patterns
- Adjusted reminder timing based on when user typically checks in

## Agent Implementation Guide

### foundation-agent Tasks
- Create check_ins table with indexes
- Create triggers table with default seed data
- Create user_checkin_streak table
- Create checkin_analytics materialized view
- Set up aggregation jobs

### backend-agent Tasks
- POST /api/checkins - Submit check-in
- GET /api/checkins/today - Get today's check-ins
- GET /api/checkins/history - Paginated history
- GET /api/checkins/analytics - Pattern analysis
- POST /api/triggers/custom - Add custom trigger
- Cron job: Aggregate analytics nightly

### ui-agent Tasks
- MorningCheckin modal component
- EveningCheckin modal component
- UrgeQuickLog component
- MoodSlider component
- UrgeSlider component
- TriggerSelector component
- CheckinInsight component
- WeeklyCheckinsGraph component

### pages-agent Tasks
- Check-in modal routing
- Analytics page check-in section
- Check-in history page
- Deep link: notification to check-in

## Success Metrics

**Engagement Metrics**
- Check-in completion rate (target: 70%+ daily)
- Average check-in streak length
- Time to complete check-in (<30 seconds target)

**Insight Metrics**
- Pattern detection accuracy (validated by user feedback)
- User action after insights (did they follow suggestions?)
- Insight engagement rate (viewed, acted upon)

**Outcome Metrics**
- Correlation between check-in consistency and streak length
- Urge trend over time (should decrease)
- Relapse prediction accuracy based on check-in data

## Configuration Options

**Settings > Check-in Preferences**
- Morning check-in time (default 8 AM)
- Evening check-in time (default 9 PM)
- Enable/disable mid-day check-in
- Notification sound/vibration
- Skip reminder frequency

**Settings > Triggers**
- View default triggers
- Add custom triggers
- Hide triggers not relevant to user

## Accessibility

- Sliders work with keyboard/VoiceOver
- Numerical input alternative to sliders
- High contrast mode for mood colors
- Voice input for notes (premium)

## Privacy

- Check-in data encrypted at rest
- Notes never analyzed by AI without consent
- Data export available
- Clear all check-in data option
