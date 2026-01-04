# Friction Mode

## Overview

Friction Mode is an opt-in feature that displays a breathing exercise with Alex (the astronaut) and journey-aware motivational content before opening apps the user has marked as "risky." Inspired by the "one sec" app approach, which has peer-reviewed research showing a **57% reduction in unconscious app opens** (Max Planck Institute study). This creates a pause between impulse and action, allowing the prefrontal cortex to re-engage before mindless behavior begins.

**Alex Integration**: The friction overlay features Alex floating in space, reinforcing the shared journey narrative. Messages reference the user's current stage and use "we" language.

## Addiction-Specific Content

| Addiction | Content File | Focus |
|-----------|--------------|-------|
| Pornography | [porn.md](porn.md) | Browser/social media friction, NSFW-aware messages |
| Gambling | [gambling.md](gambling.md) | Betting app friction, financial protection messages |
| Social Media | [social-media.md](social-media.md) | Infinite scroll friction, presence messages |
| Gaming | [gaming.md](gaming.md) | Game launcher friction, real-life messages |

---

## Title
Breathing Exercise Intervention Before Opening Risky Apps

## Problem Statement

Most problematic app use happens unconsciously:

1. **Automatic Behavior**: Users open apps without conscious decision.
2. **Habit Loops**: Phone → unlock → open app happens in seconds without thought.
3. **Missing the Gap**: There's no space between urge and action for rational thought.
4. **Impulsive Starts**: By the time users realize, they're already engaged.
5. **Willpower Bypass**: Habits bypass the conscious mind entirely.
6. **No Pattern Interrupt**: Nothing disrupts the automatic behavior.

## Solution

Friction Mode inserts a mindful pause:

### 1. Breathing Exercise Overlay
When opening a designated app:
- Full-screen breathing animation appears
- 10-second breathing cycle (configurable)
- Must complete before app opens

### 2. Motivational Message
Alongside the breathing:
- Journey-aware messages from Alex
- Alternative activity suggestions
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

---

## Screen Content

### Friction Screen

The overlay features Alex floating in space with a breathing animation. The background shows the current journey stage.

```
┌─────────────────────────────────────────────┐
│                                             │
│       [Deep space background with           │
│        stars and current stage elements]    │
│                                             │
│              ╭──────────────╮               │
│             ╱                ╲              │
│            │   [Alex         │              │
│            │    floating     │              │
│            │    in space]    │              │
│             ╲                ╱              │
│              ╰──────────────╯               │
│         (breathing circle expands/          │
│          contracts around Alex)             │
│                                             │
│         Let's take a breath together.       │
│              Breathe in...                  │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  "[Journey-aware or addiction-specific      │
│    motivational message]"                   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│         [Yes, Open App]                     │
│              (5s)                           │
│                                             │
│         [No, Do Something Better]           │
│                                             │
└─────────────────────────────────────────────┘
```

### Stage-Specific Backgrounds

| Stage | Background Elements |
|-------|---------------------|
| The Void (Days 0-4) | Pure darkness, faint stars, damaged ship lights flickering |
| First Light (Days 5-6) | Ship interior, lights coming on, warm glow |
| Leaving the Drift (Days 7-13) | Engine thrust, stars moving, forward motion |
| Asteroid Field (Days 14-29) | Asteroids floating by, warning lights, tension |
| The Nebula (Days 30-44) | Colorful clouds, soft ethereal glow, dreamy |
| Clear Space (Days 45-59) | Open starfield, tiny Earth visible in distance |
| Moon's Shadow (Days 60-74) | Moon visible, Earth larger, almost there |
| Earth Orbit (Days 75-89) | Earth fills background, beautiful blue planet |
| Homecoming (Day 90+) | Earth surface, blue sky, sunlight, green fields |

### Friction Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings        Friction Mode            │
│                                             │
│  Breathing Mode                             │
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
│  Apps with Friction                         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [Addiction-specific app list]       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Breathing Duration                         │
│                                             │
│  ○ Short (5 seconds)                        │
│  ● Medium (10 seconds)                      │
│  ○ Long (15 seconds)                        │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [✓] Late night mode (stronger messages)    │
│  [ ] Skip if deflected recently             │
│                                             │
└─────────────────────────────────────────────┘
```

### Deflection Success Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│       [Alex giving thumbs up, smiling]      │
│                                             │
│            Nice flying, navigator.          │
│                                             │
│  [Stage-specific success message]           │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  What would you like to do instead?         │
│                                             │
│  [Breathing Exercise]                       │
│  [Quick Meditation]                         │
│  [Talk to Alex]                             │
│  [Just go do something else]                │
│                                             │
└─────────────────────────────────────────────┘
```

---

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
- Background: Soft gradient matching current stage
- Circle: Pulsing animation with glow effect
- Text: Large, centered, easy to read
- Rive animation for smooth performance

### Accessibility
- VoiceOver announces phases
- Reduced motion option (static circle with timer)
- High contrast mode available
- Haptic can be disabled

---

## Journey-Aware Messages

These messages reference the user's current stage and use "we" language.

### The Void (Days 0-4)
- "We just got the signal. Let's not lose it by drifting into this app."
- "The ship is still damaged. We need to focus on repairs, not scrolling."
- "Day {X}. We're still finding our way. Do we really need this distraction?"

### First Light (Days 5-6)
- "Systems are coming online. Let's keep the momentum going."
- "We're making progress on repairs. This app won't help with that."
- "The ship needs us focused right now. Maybe later?"

### Leaving the Drift (Days 7-13)
- "Engines are firing. Let's not stall them now."
- "We've got momentum. This app could slow us down."
- "Day {X} — we're finally moving. Stay with me."

### Asteroid Field (Days 14-29)
- "We're in the Asteroid Field. One wrong move and we drift. Is this app worth the risk?"
- "Debris everywhere. Stay focused — we need to navigate carefully."
- "This is a dangerous zone. Maybe not the best time for {app_name}."

### The Nebula (Days 30-44)
- "It's beautiful in here, but easy to get lost. Let's stay on course."
- "The fog can be disorienting. Do we need another distraction?"
- "Day {X}. We've come so far. Don't get lost in the nebula of {app_name}."

### Clear Space (Days 45-59)
- "I can see Earth now. Just a dot, but it's real. Let's keep moving toward it."
- "Clear skies ahead. Why cloud them with {app_name}?"
- "The destination is visible. Every choice matters now."

### Moon's Shadow (Days 60-74)
- "The Moon is right there. Earth is so close. We can't lose focus now."
- "Almost home. This is not the time to drift."
- "Day {X}. We're in the final approach. Is {app_name} worth the risk?"

### Earth Orbit (Days 75-89)
- "We made it to orbit. The view is incredible. Don't look away now."
- "Earth fills the whole viewport. We're preparing to land. Focus."
- "Day {X}. We didn't come this far to drift at the last moment."

### Homecoming (Day 90+)
- "We're home now, but the journey continues. Old habits can pull us back."
- "Remember how far we traveled. Is this app worth undoing that?"
- "Life on Earth has its own challenges. Stay grounded."

---

## Stage-Specific Success Messages

| Stage | Success Message |
|-------|-----------------|
| The Void | "Good call. We need to focus on getting the signal stronger first." |
| First Light | "Smart choice. The ship's systems need our attention right now." |
| Leaving the Drift | "Nice. The engines just got a little stronger." |
| Asteroid Field | "Great reflexes! We just dodged an asteroid together." |
| The Nebula | "Wise choice. It's easy to get lost in here — staying focused." |
| Clear Space | "I can see Earth a little clearer now. We're staying on course." |
| Moon's Shadow | "We're so close. Can't lose focus now. Good choice." |
| Earth Orbit | "Almost home. Every good choice brings us closer to landing." |
| Homecoming | "We made it this far by choices like this. Keep it up." |

---

## Message Selection Logic

### Selection Algorithm
1. **Journey-aware first**: Always try to show a stage-appropriate message first
2. **Never repeat** same message twice in a row
3. **Time-aware**: Use late-night messages between 10 PM - 6 AM
4. **Streak-aware**: Inject current streak ({X}) and app name ({app_name})
5. **Addiction-specific**: Use addiction-specific messages from the appropriate pool
6. **Effectiveness tracking**: Track which messages lead to deflection

### Selection Priority Order
```
1. Late Night Override (10 PM - 6 AM)
   └── Late Night Messages pool (highest urgency)

2. Journey-Aware Messages (Primary)
   └── Select from current stage's message pool
   └── Replace {X} with current day
   └── Replace {app_name} with target app

3. Addiction-Specific Messages (Secondary)
   └── Use messages from addiction-specific pool

4. Progress Reminder (Periodic)
   └── Show streak-based message every ~5th friction event
```

---

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

---

## Data Model

### Friction Settings
```
friction_settings {
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  enabled: Boolean
  selected_apps: JSON Array (app identifiers)
  breathing_duration: Enum (short, medium, long)
  late_night_mode: Boolean
  skip_after_deflection: Boolean
  PRIMARY KEY (user_id, addiction_type)
}
```

### Friction Events
```
friction_events {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  app: String (app identifier)
  shown_at: DateTime
  message_id: UUID
  message_type: Enum (journey_aware, addiction_specific, late_night)
  journey_stage: String
  streak_day: Integer
  outcome: Enum (continued, deflected, dismissed)
  followed_by: Enum (null, talk_to_alex, breathing, meditation, other)
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
  addiction_type: Enum (porn, gambling, social_media, gaming)
  message_type: Enum (journey_aware, addiction_specific, late_night)
  times_shown: Integer
  times_deflected: Integer
  deflection_rate: Decimal
}
```

---

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
App selection screen (pre-populated by addiction)
              ↓
Duration selection
              ↓
Setup complete
```

---

## Edge Cases

### Repeated Attempts
If user hits "Continue" 3+ times in 10 minutes:
- Show: "We noticed you're trying a lot. Everything okay?"
- Offer: "Talk to Alex" option
- Log pattern for analytics

### Panic Button Integration
If user opened panic button in last hour:
- Modified message: "Great job using the panic button earlier. Stay strong!"
- Higher urgency messaging

### Focus Mode (Temporary Disable)
- Allow 1-hour "focus mode" disable for legitimate app use
- Require reason selection
- Log usage for analytics
- Auto-re-enables after 1 hour

---

## Integration Points

### With Screen Time
- Share app selection between features
- Coordinate notifications

### With Panic Button
- Different messaging after panic button use
- Quick access from friction screen

### With Alex (Deep Integration)
Alex IS the astronaut on the friction overlay:

**Visual**: Alex appears floating in space on every friction screen

**Messaging**: Alex speaks directly using "we" language

**AI Chat Context**: Alex references friction events in conversations:
- "I noticed you deflected from Instagram 3 times today. That takes real strength."

**Pattern Awareness**: If user opens friction 3+ times for same app, Alex offers support

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create friction_settings table
- Create friction_events table
- Create message_effectiveness table
- Seed journey-aware messages for all 9 stages
- Seed addiction-specific messages

### backend-agent Tasks
- GET /api/friction/settings?addiction_type=X - Get settings
- PATCH /api/friction/settings - Update settings
- POST /api/friction/event - Log friction event
- GET /api/friction/stats - Get effectiveness stats
- GET /api/friction/message - Smart message selection endpoint

### ui-agent Tasks
- FrictionOverlay component with Rive animation
- BreathingCircle animated component
- AlexFloating Rive component
- StageBackground component
- DeflectionSuccess component
- FrictionSettings screen

### pages-agent Tasks
- Friction settings page
- Friction overlay (system-level integration)
- Deflection success → Alex chat transition

---

## Success Metrics

**Primary Metrics**
- Deflection rate: % choosing "Do Something Else"
- Deflection rate by time of day
- Deflection rate by app

**Message Effectiveness**
- Which messages have highest deflection rates
- Personalization improvement over time

**Long-term Outcomes**
- Correlation: friction usage vs streak length
- App usage reduction over time

---

## Research References

- [Max Planck Institute Study on "one sec"](https://one-sec.app/max-planck-study/) - 57% reduction
- [PMC Study on Friction-Based Interventions](https://pmc.ncbi.nlm.nih.gov/articles/PMC10498313/)

---

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
- Skip-after-deflection option

---

## Privacy Considerations

- All processing happens on-device
- No screenshots or content analysis
- Only app open events tracked
- User can export/delete friction data
