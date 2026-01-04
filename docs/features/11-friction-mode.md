# Friction Mode

## Title
Breathing Exercise Intervention Before Opening Risky Apps

## Description
Friction Mode is an opt-in feature that displays a breathing exercise with Alex (the astronaut) and journey-aware motivational content before opening apps the user has marked as "risky." Inspired by the "one sec" app approach, which has peer-reviewed research showing a **57% reduction in unconscious app opens** (Max Planck Institute study). This creates a pause between impulse and action, allowing the prefrontal cortex to re-engage before mindless scrolling begins.

**Alex Integration**: The friction overlay features Alex floating in space, reinforcing the shared journey narrative. Messages reference the user's current stage ("We're in the Asteroid Field — one wrong move sets us back") and use "we" language to emphasize that user and Alex are navigating this together.

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

The overlay features Alex floating in space with a breathing animation that syncs with the user's breath. The background shows the current journey stage (stars, nebula, Earth in distance, etc.).

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
│  "We're on Day 15. The Asteroid Field       │
│   is tricky — one wrong move and we         │
│   drift. Do you really need this app?"      │
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

### Stage-Specific Overlay Backgrounds

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
│       [Alex giving thumbs up, smiling]      │
│                                             │
│            Nice flying, navigator.          │
│                                             │
│  We just dodged an asteroid together.       │
│  The ship stays on course.                  │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  What would you like to do instead?         │
│                                             │
│  [🌬️ Breathing Exercise]                   │
│                                             │
│  [🧘 Quick Meditation]                      │
│                                             │
│  [💬 Talk to Alex]                          │
│                                             │
│  [🚶 Just go do something else]             │
│                                             │
└─────────────────────────────────────────────┘
```

### Stage-Specific Success Messages

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

### Journey-Aware Messages (Primary — Use These First)

These messages reference the user's current stage and use "we" language. The system selects from this pool first, falling back to generic messages if needed.

**The Void (Days 0-4)**
- "We just got the signal. Let's not lose it by drifting into this app."
- "The ship is still damaged. We need to focus on repairs, not scrolling."
- "Day {X}. We're still finding our way. Do we really need this distraction?"

**First Light (Days 5-6)**
- "Systems are coming online. Let's keep the momentum going."
- "We're making progress on repairs. This app won't help with that."
- "The ship needs us focused right now. Maybe later?"

**Leaving the Drift (Days 7-13)**
- "Engines are firing. Let's not stall them now."
- "We've got momentum. This app could slow us down."
- "Day {X} — we're finally moving. Stay with me."

**Asteroid Field (Days 14-29)**
- "We're in the Asteroid Field. One wrong move and we drift. Is this app worth the risk?"
- "Debris everywhere. Stay focused — we need to navigate carefully."
- "This is a dangerous zone. Maybe not the best time for {app_name}."
- "I need you alert right now. The asteroids don't care about your scroll."

**The Nebula (Days 30-44)**
- "It's beautiful in here, but easy to get lost. Let's stay on course."
- "The fog can be disorienting. Do we need another distraction?"
- "We're trusting the instruments now. Trust the process — skip this app."
- "Day {X}. We've come so far. Don't get lost in the nebula of {app_name}."

**Clear Space (Days 45-59)**
- "I can see Earth now. Just a dot, but it's real. Let's keep moving toward it."
- "Clear skies ahead. Why cloud them with {app_name}?"
- "We've made it through the hard parts. Stay strong."
- "The destination is visible. Every choice matters now."

**Moon's Shadow (Days 60-74)**
- "The Moon is right there. Earth is so close. We can't lose focus now."
- "Almost home. This is not the time to drift."
- "Day {X}. We're in the final approach. Is {app_name} worth the risk?"
- "I can almost feel Earth's pull. Stay with me."

**Earth Orbit (Days 75-89)**
- "We made it to orbit. The view is incredible. Don't look away now."
- "Earth fills the whole viewport. We're preparing to land. Focus."
- "So close to home. Every choice is a choice to land safely."
- "Day {X}. We didn't come this far to drift at the last moment."

**Homecoming (Day 90+)**
- "We're home now, but the journey continues. Old habits can pull us back to space."
- "Remember how far we traveled. Is this app worth undoing that?"
- "We know the way now. Let's not forget the lessons of the journey."
- "Life on Earth has its own challenges. Stay grounded."

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
1. **Journey-aware first**: Always try to show a stage-appropriate message from the Journey-Aware pool first
2. **Never repeat** same message twice in a row
3. **Time-aware**: Use late-night messages between 10 PM - 6 AM (higher vulnerability)
4. **Streak-aware**: Inject current streak ({X}) and app name ({app_name}) into templates
5. **Stage context**: Pull user's current journey stage to select correct message pool
6. **Category fallback**: If journey message was shown recently, fall back to generic categories based on user preferences
7. **Effectiveness tracking**: Track which messages lead to deflection

### Selection Priority Order
```
1. Late Night Override (10 PM - 6 AM)
   └── Late Night Messages pool (highest urgency)

2. Journey-Aware Messages (Primary)
   └── Select from current stage's message pool
   └── Replace {X} with current day
   └── Replace {app_name} with target app

3. User-Enabled Categories (Fallback)
   └── Weighted by deflection effectiveness
   └── Rotate through enabled categories

4. Progress Reminder (Periodic)
   └── Show streak-based message every ~5th friction event
```

### Category Weights
Track and update based on user behavior:
- If "Do Something Else" clicked after physical message → increase weight
- If "Continue to App" clicked → decrease weight for that category
- Journey-aware messages tracked separately (always prioritized but also optimized)
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
  message_type: Enum (journey_aware, generic, late_night)
  journey_stage: String (current stage when shown)
  streak_day: Integer (current streak day when shown)
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
  message_type: Enum (journey_aware, generic, late_night)
  journey_stage: String (for journey-aware messages)
  times_shown: Integer
  times_deflected: Integer
  deflection_rate: Decimal
}
```

### Journey Message Templates
```
journey_messages {
  id: UUID
  stage: String (the_void, first_light, leaving_drift, asteroid_field, nebula, clear_space, moons_shadow, earth_orbit, homecoming)
  template: Text (with {X} for day and {app_name} placeholders)
  is_active: Boolean
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
- Offer: "Talk to Alex" option
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

### With Alex (Deep Integration)
Alex IS the astronaut on the friction overlay. The connection is narrative, not just data:

**Visual**: Alex appears floating in space on every friction screen, sharing the moment with the user. The background reflects the current journey stage.

**Messaging**: Alex speaks directly to the user through friction messages using "we" language:
- "We're in the Asteroid Field — one wrong move and we drift."
- "I can see Earth from here. Let's not lose focus now."

**AI Chat Context**: Alex references friction events in conversations:
- "I noticed you deflected from Instagram 3 times today. That takes real strength."
- "We've been encountering a lot of asteroids lately. Want to talk about what's triggering these urges?"
- "Remember when you chose to breathe instead of scroll earlier? That's the kind of navigator we need."

**Emotional Continuity**: After a deflection, user can immediately "Talk to Alex" — the AI already knows what just happened and continues the supportive conversation.

**Pattern Awareness**: If user opens friction 3+ times for same app in short period, Alex proactively offers support in the friction overlay: "You keep coming back here. Something on your mind?"

### With Analytics
- Track deflection rates over time
- Identify high-friction times
- Measure feature effectiveness

## Agent Implementation Guide

### foundation-agent Tasks
- Create friction_settings table
- Create friction_events table (with journey_stage, message_type fields)
- Create message_effectiveness table (with stage tracking)
- Create journey_messages table
- Seed motivational messages library (all categories)
- Seed journey-aware messages for all 9 stages

### backend-agent Tasks
- GET /api/friction/settings - Get settings
- PATCH /api/friction/settings - Update settings
- POST /api/friction/event - Log friction event (include stage context, follow-up action)
- GET /api/friction/stats - Get effectiveness stats (by stage, by message type)
- GET /api/friction/message - Smart message selection endpoint:
  - Accept current stage, streak day, app name, hour of day
  - Apply selection priority algorithm
  - Return templated message with {X} and {app_name} replaced
- Journey stage lookup integration (from streak system)

### ui-agent Tasks
- FrictionOverlay component with Rive animation
- BreathingCircle animated component (syncs with Alex animation)
- AlexFloating Rive component (astronaut floating in space)
- StageBackground component (dynamic backgrounds per stage)
- MessageDisplay component (journey-aware message rendering)
- FrictionSettings screen
- AppSelector component
- DeflectionSuccess component (with Alex thumbs up, stage-specific message)
- "Talk to Alex" quick action button

### pages-agent Tasks
- Friction settings page
- Friction overlay (system-level integration)
- Stats and effectiveness page (show journey message performance)
- Deflection success → Alex chat transition flow

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
