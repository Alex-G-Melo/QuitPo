# Friction Mode

## Title
Breathing Exercise Intervention Before Opening Risky Apps

## Description
Friction Mode is an opt-in feature that displays a breathing exercise and motivational content before opening apps the user has marked as "risky." Inspired by the "one sec" app approach, which has peer-reviewed research showing a **57% reduction in unconscious app opens** (Max Planck Institute study). This creates a pause between impulse and action, allowing the prefrontal cortex to re-engage before mindless scrolling begins.

## Problem Statement

Most problematic app use happens unconsciously:

1. **Automatic Behavior**: Users open Instagram, TikTok, etc. without conscious decision.

2. **Habit Loops**: Phone → unlock → open app happens in seconds without thought.

3. **Missing the Gap**: There's no space between urge and action for rational thought.

4. **Impulsive Starts**: By the time users realize they're scrolling, they're already deep in the algorithm.

5. **Willpower Bypass**: Habits bypass the conscious mind entirely.

6. **No Pattern Interrupt**: Nothing disrupts the automatic app-opening behavior.

## Solution

Friction Mode inserts a mindful pause:

### 1. Breathing Exercise Overlay
When opening a designated app:
- Full-screen breathing animation appears
- 10-second breathing cycle (configurable)
- Must complete before app opens

### 2. Motivational Message
Alongside the breathing:
- Random motivational quote
- Alternative activity suggestion
- Progress reminder (streak)

### 3. Choice Point
After breathing:
- "Continue to App" button (with countdown)
- "Do Something Else" button
- Quick access to healthier alternatives

### 4. Pattern Learning
System tracks:
- Which messages lead to "Do Something Else"
- Time of day patterns
- App-specific deflection rates

## Screen Content

### Friction Screen (When Opening Monitored App)

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              ╭──────────────╮               │
│             ╱                ╲              │
│            │                  │             │
│            │   ○              │             │
│            │  (breathing      │             │
│            │   animation)     │             │
│             ╲                ╱              │
│              ╰──────────────╯               │
│                                             │
│            Breathe in...                    │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  💡 "What if you went for a walk            │
│      instead? Fresh air helps."             │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│         [Continue to App]                   │
│              (5s)                           │
│                                             │
│         [Do Something Else]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Friction Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings        Friction Mode            │
│                                             │
│  🌬️ Breathing Mode                          │
│                                             │
│  Add a moment of calm before opening        │
│  apps that might trigger you.               │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Enable Friction Mode          [ON]         │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  📱 Apps with Friction                      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Instagram                       │   │
│  │ [✓] TikTok                          │   │
│  │ [✓] Twitter/X                       │   │
│  │ [ ] Reddit                          │   │
│  │ [ ] Safari                          │   │
│  │ [ ] YouTube                         │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  ⏱️ Breathing Duration                      │
│                                             │
│  ○ Short (5 seconds)                        │
│  ● Medium (10 seconds)                      │
│  ○ Long (15 seconds)                        │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Message Categories                         │
│                                             │
│  [✓] Physical activity suggestions          │
│  [✓] Creative alternatives                  │
│  [✓] Connection reminders                   │
│  [✓] Self-care prompts                      │
│  [✓] Progress reminders                     │
│  [ ] Humor/light messages                   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [✓] Late night mode (stronger messages     │
│       10pm - 6am)                           │
│                                             │
│  [ ] Skip if deflected recently             │
│       (within last hour)                    │
│                                             │
└─────────────────────────────────────────────┘
```

### Deflection Success Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│               ✓ Nice choice!                │
│                                             │
│  You chose yourself over the scroll.        │
│                                             │
│  That's real strength.                      │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  What would you like to do instead?         │
│                                             │
│  [🌬️ Breathing Exercise]                   │
│                                             │
│  [🧘 Quick Meditation]                      │
│                                             │
│  [💬 Talk to AI]                            │
│                                             │
│  [🚶 Just go do something else]             │
│                                             │
└─────────────────────────────────────────────┘
```

## Breathing Exercise Specifications

### Animation Phases

| Phase | Duration | Visual | Haptic |
|-------|----------|--------|--------|
| Breathe In | 4 seconds | Circle expands | Gentle pulse at start |
| Hold | 2 seconds | Circle holds | None |
| Breathe Out | 4 seconds | Circle contracts | Soft pulse at end |

**Total: 10 seconds (one cycle)**

For 5-second mode: 2s in, 1s hold, 2s out
For 15-second mode: 5s in, 3s hold, 7s out

### Visual Design
- Background: Soft gradient (calming blues/greens)
- Circle: Pulsing animation with glow effect
- Text: Large, centered, easy to read
- Rive animation for smooth performance

### Accessibility
- VoiceOver announces phases
- Reduced motion option (static circle with timer)
- High contrast mode available
- Haptic can be disabled

## Motivational Message Library

### Physical Activity Messages
- "What if you went for a walk instead? Fresh air clears the mind."
- "10 push-ups might feel better than scrolling right now."
- "A quick stretch can reset your mood."
- "When did you last move your body today?"

### Creative Alternative Messages
- "Why not pick up that book you've been meaning to read?"
- "Maybe now's a good time to learn something new?"
- "Your hobbies miss you. What's one thing you enjoy?"
- "What creative project have you been putting off?"

### Connection Messages
- "Who haven't you talked to in a while? Give them a call."
- "Sending a message to a friend could make both your days."
- "Real connection beats virtual every time."
- "Someone in your life would love to hear from you."

### Self-Care Messages
- "A glass of water might be what you really need."
- "When did you last step outside today?"
- "Your future self will thank you for this pause."
- "What does your body actually need right now?"

### Progress Reminder Messages
- "You're on a [X] day streak. Keep going!"
- "Remember why you started this journey."
- "Every time you choose differently, you grow stronger."
- "[X] days of freedom. Don't break the chain."

### Humor/Light Messages
- "Plot twist: you do something productive instead."
- "Your plants need watering more than your phone needs scrolling."
- "What would your best self do right now?"
- "The algorithm will survive without you."

### Late Night Messages (10 PM - 6 AM)
- "It's late. Your brain is tired and more vulnerable. Maybe sleep instead?"
- "Night scrolling rarely leads anywhere good. How about some rest?"
- "Tomorrow-you will appreciate going to bed now."
- "The best thing you can do right now is sleep."

## Message Selection Logic

### Selection Algorithm
1. **Never repeat** same message twice in a row
2. **Time-aware**: Different pools for morning/afternoon/evening/night
3. **Streak-aware**: Include streak in progress messages
4. **Category weight**: Weight toward categories user responds to
5. **Effectiveness tracking**: Track which messages lead to deflection

### Category Weights
Track and update based on user behavior:
- If "Do Something Else" clicked after physical message → increase weight
- If "Continue to App" clicked → decrease weight for that category
- Personalize over time

## Technical Implementation

### iOS (Screen Time API + App Intents)

```swift
// ShieldConfigurationDataSource
class FrictionShieldConfiguration: ShieldConfigurationDataSource {
    override func configuration(
        shielding application: Application
    ) -> ShieldConfiguration {
        return ShieldConfiguration(
            backgroundBlurStyle: .systemUltraThinMaterial,
            backgroundColor: .systemBackground,
            icon: nil,
            title: ShieldConfiguration.Label(text: "Take a breath"),
            subtitle: ShieldConfiguration.Label(text: motivationalMessage),
            primaryButtonLabel: ShieldConfiguration.Label(text: "Continue to App"),
            secondaryButtonLabel: ShieldConfiguration.Label(text: "Do Something Else")
        )
    }
}
```

### Android (Accessibility Service + Overlay)

```kotlin
class FrictionOverlayService : AccessibilityService() {

    override fun onAccessibilityEvent(event: AccessibilityEvent?) {
        if (event?.eventType == TYPE_WINDOW_STATE_CHANGED) {
            val packageName = event.packageName?.toString()
            if (isMonitoredApp(packageName)) {
                showBreathingOverlay()
            }
        }
    }

    private fun showBreathingOverlay() {
        // Display breathing exercise overlay
        // User must complete or dismiss to proceed
    }
}
```

## Data Model

### Friction Settings
```
friction_settings {
  user_id: UUID
  enabled: Boolean
  selected_apps: JSON Array (app identifiers)
  breathing_duration: Enum (short, medium, long)
  message_categories: JSON Array
  late_night_mode: Boolean
  skip_after_deflection: Boolean
}
```

### Friction Events
```
friction_events {
  id: UUID
  user_id: UUID
  app: String (app identifier)
  shown_at: DateTime
  message_id: UUID
  message_category: String
  outcome: Enum (continued, deflected, dismissed)
  time_on_screen_seconds: Integer
  day_of_week: Integer
  hour_of_day: Integer
}
```

### Message Effectiveness
```
message_effectiveness {
  user_id: UUID
  message_id: UUID
  times_shown: Integer
  times_deflected: Integer
  deflection_rate: Decimal
}
```

## User Flows

### App Opening Flow
```
User taps monitored app icon
              ↓
System intercepts (Screen Time API / Accessibility)
              ↓
Friction overlay appears
              ↓
Breathing animation plays (10s)
              ↓
Motivational message displayed
              ↓
Buttons appear after breathing complete
              ↓
User choice:
├── "Continue to App" → App opens, event logged
│
└── "Do Something Else"
    ├── Success message
    ├── Alternative options shown
    └── Event logged (deflection)
```

### Setup Flow
```
User enables Friction Mode in settings
              ↓
Platform permission request
├── iOS: Screen Time API authorization
└── Android: Accessibility Service permission
              ↓
User grants permissions
              ↓
App selection screen
              ↓
Duration selection
              ↓
Message category preferences
              ↓
Setup complete
```

## Edge Cases

### Repeated Attempts
If user hits "Continue" 3+ times in 10 minutes:
- Show: "We noticed you're trying a lot. Everything okay?"
- Offer: "Talk to AI therapist" option
- Log pattern for analytics

### Panic Button Integration
If user opened panic button in last hour:
- Modified message: "Great job using the panic button earlier. Stay strong!"
- Higher urgency messaging

### Streak at Risk
If user is late on daily check-in:
- Message: "You haven't checked in today yet. Maybe do that first?"

### Focus Mode (Temporary Disable)
- Allow 1-hour "focus mode" disable for legitimate app use
- Require reason selection
- Log usage for analytics
- Auto-re-enables after 1 hour

## Integration Points

### With Screen Time
- Share app selection between features
- Coordinate notifications

### With Panic Button
- Different messaging after panic button use
- Quick access from friction screen

### With Check-ins
- Reference friction usage in check-ins
- "You deflected from Instagram 3 times today. Great work!"

### With AI Therapist
- AI knows friction patterns
- "I see you've been opening TikTok a lot today..."

### With Analytics
- Track deflection rates over time
- Identify high-friction times
- Measure feature effectiveness

## Agent Implementation Guide

### foundation-agent Tasks
- Create friction_settings table
- Create friction_events table
- Create message_effectiveness table
- Seed motivational messages library

### backend-agent Tasks
- GET /api/friction/settings - Get settings
- PATCH /api/friction/settings - Update settings
- POST /api/friction/event - Log friction event
- GET /api/friction/stats - Get effectiveness stats
- Message selection algorithm endpoint

### ui-agent Tasks
- FrictionOverlay component with Rive animation
- BreathingCircle animated component
- MessageDisplay component
- FrictionSettings screen
- AppSelector component
- DeflectionSuccess component

### pages-agent Tasks
- Friction settings page
- Friction overlay (system-level integration)
- Stats and effectiveness page

## Success Metrics

**Primary Metrics**
- Deflection rate: % of times user chooses "Do Something Else"
- Deflection rate by time of day
- Deflection rate by app

**Message Effectiveness**
- Which messages have highest deflection rates
- Category performance over time
- Personalization improvement

**Long-term Outcomes**
- Correlation: friction usage vs streak length
- App usage reduction over time
- Relapse rate: users with friction vs without

## Research References

- [Max Planck Institute Study on "one sec"](https://one-sec.app/max-planck-study/) - 57% reduction in app opens
- [PMC Study on Friction-Based Interventions](https://pmc.ncbi.nlm.nih.gov/articles/PMC10498313/)
- [State of Screen Time API 2024](https://riedel.wtf/state-of-the-screen-time-api-2024/)

## Free vs Premium

### Free Tier
- Enable for 3 apps
- Medium duration only
- Basic messages
- No effectiveness tracking

### Premium Tier
- Unlimited apps
- All duration options
- Full message library
- Effectiveness analytics
- Custom message categories
- Skip-after-deflection option

## Privacy Considerations

- All processing happens on-device
- No screenshots or content analysis
- Only app open events tracked
- User can export/delete friction data
