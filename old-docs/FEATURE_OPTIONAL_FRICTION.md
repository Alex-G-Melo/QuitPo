# Feature: Optional Friction Mode (Breathing Exercise Before Risky Apps)

## Overview

An **opt-in** feature that displays a breathing exercise and motivational content before opening apps the user has marked as "risky." Inspired by the "one sec" app approach, which has peer-reviewed research showing a **57% reduction in unconscious app opens** (Max Planck Institute study).

## Key Principles

1. **OPTIONAL by default** - User must explicitly enable this feature
2. **User-controlled** - User chooses which apps trigger the friction
3. **Positive messaging** - Focus on motivation, not shame
4. **Quick but effective** - 5-15 second intervention, not a barrier

---

## User Flow

### 1. Feature Discovery & Activation

```
Settings > Safety Features > Friction Mode

┌─────────────────────────────────────────────┐
│  🌬️ Breathing Mode                         │
│                                             │
│  Add a moment of calm before opening        │
│  apps that might trigger you.               │
│                                             │
│  When enabled, you'll see a brief           │
│  breathing exercise before the app opens.   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  ○ Off (default)                    │   │
│  │  ● Enabled                          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Select Apps to Monitor]                   │
│                                             │
└─────────────────────────────────────────────┘
```

### 2. App Selection

```
┌─────────────────────────────────────────────┐
│  Select Apps                          Done  │
│                                             │
│  Choose apps where you'd like a             │
│  breathing moment before opening:           │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ☐ Instagram                         │   │
│  │ ☐ TikTok                            │   │
│  │ ☐ Twitter/X                         │   │
│  │ ☐ Reddit                            │   │
│  │ ☐ Safari                            │   │
│  │ ☐ Chrome                            │   │
│  │ ☐ YouTube                           │   │
│  │ ☐ Snapchat                          │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### 3. Friction Screen (When Opening a Monitored App)

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              ○                              │
│           (breathing                        │
│            animation)                       │
│                                             │
│         Breathe in...                       │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│   💡 "What if you went for a walk           │
│       instead? Fresh air helps."            │
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

---

## Breathing Exercise Specifications

### Animation Phases

| Phase | Duration | Visual | Haptic |
|-------|----------|--------|--------|
| Breathe In | 4 seconds | Circle expands | Gentle pulse at start |
| Hold | 2 seconds | Circle holds | None |
| Breathe Out | 4 seconds | Circle contracts | Soft pulse at end |

**Total duration: 10 seconds (one cycle)**

### Visual Design

- **Background**: Soft gradient (calming blues/greens)
- **Circle**: Pulsing animation with glow effect
- **Text**: Large, centered, easy to read
- **Rive animation preferred** for smooth performance

### Accessibility

- VoiceOver support for all phases
- Reduced motion option (static circle with timer)
- High contrast mode support

---

## Motivational Sentences

### Categories & Examples

**Physical Activity**
- "What if you went for a walk instead? Fresh air clears the mind."
- "10 push-ups might feel better than scrolling right now."
- "A quick stretch can reset your mood."

**Creative Pursuits**
- "Why not pick up that book you've been meaning to read?"
- "Maybe now's a good time to learn something new?"
- "Your hobbies miss you. What's one thing you enjoy?"

**Connection**
- "Who haven't you talked to in a while? Give them a call."
- "Sending a message to a friend could make both your days."
- "Real connection beats virtual every time."

**Self-Care**
- "A glass of water might be what you really need."
- "When did you last step outside today?"
- "Your future self will thank you for this moment of pause."

**Progress Reminders**
- "You're on a [X] day streak. Keep going!"
- "Remember why you started this journey."
- "Every time you choose differently, you grow stronger."

**Humor/Light**
- "Plot twist: you do something productive instead."
- "Your plants need watering more than your phone needs scrolling."
- "What would your best self do right now?"

### Sentence Selection Logic

1. **Randomized** within categories
2. **Weighted** toward categories user engages with (track which lead to "Do Something Else")
3. **Time-aware**: Different messages for morning/afternoon/evening/late night
4. **Streak-aware**: Reference current streak when relevant
5. **Never repeat** same message twice in a row

### Late Night Messages (10 PM - 6 AM)

- "It's late. Your brain is tired and more vulnerable. Maybe sleep instead?"
- "Night scrolling rarely leads anywhere good. How about some rest?"
- "Tomorrow-you will appreciate going to bed now."

---

## Technical Implementation

### iOS (Screen Time API)

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
        // User must wait or dismiss to proceed
    }
}
```

### Shared Logic (packages/shared)

```typescript
// packages/shared/src/friction/messages.ts

export interface MotivationalMessage {
  id: string;
  category: 'physical' | 'creative' | 'connection' | 'self-care' | 'progress' | 'humor';
  text: string;
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'night' | 'any';
  requiresStreak?: boolean;
}

export function getMotivationalMessage(
  currentStreak: number,
  timeOfDay: string,
  previousMessageId: string | null
): MotivationalMessage {
  // Selection logic
}
```

---

## Data & Analytics

### Track (anonymized)

| Event | Data Points |
|-------|-------------|
| Friction shown | App name, time of day, message shown |
| User action | "Continue" vs "Do Something Else" |
| Time spent | Duration on breathing screen |
| Streak correlation | Current streak when shown |

### Success Metrics

- **Deflection rate**: % of times user chooses "Do Something Else"
- **Average deflection rate by time of day**
- **Messages that lead to highest deflection**
- **Long-term correlation with streak maintenance**

---

## Settings & Customization

```typescript
interface FrictionSettings {
  enabled: boolean;
  selectedApps: string[];  // Package names / bundle IDs
  breathingDuration: 'short' | 'medium' | 'long';  // 5s, 10s, 15s
  showMotivationalMessages: boolean;
  messageCategories: string[];  // Which categories to show
  lateNightMode: boolean;  // Extra warnings 10pm-6am
  skipAfterDeflection: boolean;  // Skip friction if deflected recently
}
```

---

## Edge Cases

1. **Repeated attempts**: If user hits "Continue" 3+ times in 10 minutes, show a gentler "We noticed you're trying a lot. Everything okay?" with option to chat with AI therapist.

2. **Panic button integration**: If user opened panic button in last hour, friction messages should reference it: "Great job using the panic button earlier. Stay strong!"

3. **Streak at risk**: If user is late on daily check-in, message can reference: "You haven't checked in today yet. Maybe do that first?"

4. **Disable temporarily**: Allow 1-hour "focus mode" disable for legitimate app use (but log it).

---

## Privacy Considerations

- All processing happens **on-device**
- No screenshots or content analysis
- Only app open events are tracked
- User can export/delete all friction data

---

## Implementation Priority

### Phase 1 (MVP)
- Basic breathing animation
- 5 static motivational messages
- Single "Continue" button (no timer)
- iOS only

### Phase 2
- Full message library
- Time-aware messages
- Streak-aware messages
- Android support

### Phase 3
- Message effectiveness tracking
- Personalized message selection
- Late night mode
- Integration with other features

---

## Research References

- [Max Planck Institute Study on "one sec"](https://one-sec.app/max-planck-study/) - 57% reduction in app opens
- [PMC Study on Friction-Based Interventions](https://pmc.ncbi.nlm.nih.gov/articles/PMC10498313/)
- [State of Screen Time API 2024](https://riedel.wtf/state-of-the-screen-time-api-2024/)
