# Mindfulness & Meditation

## Overview

The mindfulness feature provides a suite of tools to help users manage urges, reduce stress, and build emotional resilience through breathing exercises, guided meditations, and ambient soundscapes. These evidence-based techniques activate the parasympathetic nervous system, reducing the fight-or-flight response that often precedes relapse.

This feature's core mechanics are shared across all addiction types. Only **meditation scripts** and some **Alex integration context** differ per addiction.

## Addiction-Specific Content

| Addiction | Content File |
|-----------|--------------|
| Pornography | [porn.md](porn.md) |
| Gambling | [gambling.md](gambling.md) |
| Social Media | [social-media.md](social-media.md) |
| Gaming | [gaming.md](gaming.md) |

---

## Title
Breathing Exercises, Guided Meditation, and Calming Soundscapes

## Problem Statement

Users experiencing urges or stress need immediate coping tools:

1. **Urge Intensity**: Strong urges create physical sensations (racing heart, tension) that feel overwhelming.
2. **Stress as Trigger**: Stress is the #1 reported trigger for relapse, yet users lack quick stress-relief tools.
3. **Insomnia Risk**: Sleep issues increase relapse risk, but users struggle with relaxation.
4. **Impulsive State**: During urges, users need something that requires active engagement to interrupt automatic behavior.
5. **Accessibility**: Users need tools available immediately, without equipment or special conditions.

## Solution

### 1. Breathing Exercises
Quick, guided breathing patterns that physiologically calm the nervous system:
- **4-7-8 Breathing**: Inhale 4s, hold 7s, exhale 8s (sleep/calm)
- **Box Breathing**: 4s each - inhale, hold, exhale, hold (focus)
- **Quick Calm**: 3s inhale, 6s exhale (urge management)

### 2. Guided Meditations
Short audio-guided sessions for specific situations:
- Urge surfing meditation
- Body scan for sleep
- Self-compassion after relapse
- Morning intention setting

### 3. Ambient Soundscapes
Calming background audio for relaxation or focus:
- Nature sounds (rain, ocean, forest)
- White/brown/pink noise
- Binaural beats (optional)

---

## Screen Content

### Mindfulness Hub (From Dashboard)

```
┌─────────────────────────────────────────────┐
│  ← Back           Meditate                  │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │    🌬️ Breathing Exercises          │   │
│  │                                     │   │
│  │    Quick ways to calm your mind     │   │
│  │                                     │   │
│  │    [Quick Calm]  [Box]  [4-7-8]     │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │    🧘 Guided Meditations           │   │
│  │                                     │   │
│  │    [Urge Surfing]     5 min        │   │
│  │    [Body Scan]       10 min        │   │
│  │    [Self-Compassion]  7 min        │   │
│  │    [Morning Start]    3 min   🔒   │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │    🎵 Soundscapes                   │   │
│  │                                     │   │
│  │    [Rain] [Ocean] [Forest] [White]  │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Breathing Exercise Screen

```
┌─────────────────────────────────────────────┐
│  ← Back           4-7-8 Breathing           │
│                                             │
│                                             │
│                                             │
│              ╭──────────────╮               │
│             ╱                ╲              │
│            │                  │             │
│            │    Breathe In    │             │
│            │                  │             │
│             ╲                ╱              │
│              ╰──────────────╯               │
│                                             │
│                   4                         │
│              (countdown)                    │
│                                             │
│                                             │
│              ○ ○ ● ○ ○                      │
│            (cycle 3 of 5)                   │
│                                             │
│                                             │
│             [End Session]                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Breathing Exercise Phases

**Phase Indicators**
- Circle expands during inhale
- Circle holds steady during hold
- Circle contracts during exhale
- Color shifts (blue for calm phases)

**Text Instructions**
- "Breathe In..." (during inhale)
- "Hold..." (during hold)
- "Breathe Out..." (during exhale)

**Haptic Feedback**
- Gentle pulse at phase transitions
- Optional vibration pattern

### Guided Meditation Player

```
┌─────────────────────────────────────────────┐
│  ← Back           Urge Surfing              │
│                                             │
│                                             │
│              [Calming Visual]               │
│           (animated background)             │
│                                             │
│                                             │
│     "Notice the urge without judging it.    │
│      It's like a wave - it rises,           │
│      peaks, and falls away..."              │
│                                             │
│                                             │
│           ━━━━━━●━━━━━━━━━━━━━              │
│           2:34 / 5:00                       │
│                                             │
│                                             │
│        ⏮️    ▶️/⏸️    ⏭️                  │
│        -15s   play    +15s                  │
│                                             │
│                                             │
│     Background Sound: [Rain ▼]              │
│                                             │
└─────────────────────────────────────────────┘
```

### Soundscape Player

```
┌─────────────────────────────────────────────┐
│  ← Back           Soundscapes               │
│                                             │
│              [Ocean Visual]                 │
│          (animated wave scene)              │
│                                             │
│               🌊 Ocean                       │
│                                             │
│              ━━━━━━━━━━━━━━━━               │
│              Volume: 70%                    │
│                                             │
│              Timer: 30 min                  │
│              ○ 15  ● 30  ○ 60  ○ ∞          │
│                                             │
│              Mix Sounds                     │
│              [+ Rain] [+ Birds]             │
│                                             │
│             [Stop]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Breathing Exercise Specifications

### Quick Calm (Urge Management)
| Phase | Duration | Purpose |
|-------|----------|---------|
| Inhale | 3 seconds | Activate |
| Exhale | 6 seconds | Calm vagus nerve |
| Repeat | 6 cycles | Total ~1 minute |

**Best for**: Immediate urge management, quick reset

### Box Breathing (Focus)
| Phase | Duration | Purpose |
|-------|----------|---------|
| Inhale | 4 seconds | Energize |
| Hold | 4 seconds | Focus |
| Exhale | 4 seconds | Release |
| Hold | 4 seconds | Ground |
| Repeat | 4 cycles | Total ~1 minute |

**Best for**: Building focus, pre-meditation

### 4-7-8 Breathing (Sleep/Deep Calm)
| Phase | Duration | Purpose |
|-------|----------|---------|
| Inhale | 4 seconds | Prepare |
| Hold | 7 seconds | Pause |
| Exhale | 8 seconds | Deep release |
| Repeat | 4 cycles | Total ~75 seconds |

**Best for**: Sleep preparation, deep anxiety relief

---

## Guided Meditation Library

### Free Meditations (Universal)

**Urge Surfing (5 min)**
- Purpose: Observe urges without acting
- Script: Guide user to notice physical sensations, label the urge, watch it rise and fall
- Background: Ocean waves metaphor
- Voice: Calm male/female option

Note: Script content varies by addiction type. See addiction-specific files.

**Body Scan (10 min)**
- Purpose: Release tension, prepare for sleep
- Script: Progressive focus from feet to head
- Background: Soft ambient
- Voice: Slow, soothing

**Self-Compassion After Slip (7 min)**
- Purpose: Process relapse without shame
- Script: Self-forgiveness, acknowledging struggle, recommitting
- Background: Gentle piano
- Voice: Warm, understanding

Note: Script content varies by addiction type. See addiction-specific files.

### Premium Meditations (Universal)

**Morning Intention (3 min)**
- Purpose: Set daily intentions
- Script: Visualize successful day, affirm commitment
- Background: Sunrise sounds
- Voice: Energizing

**Evening Wind-Down (8 min)**
- Purpose: Process day, prepare for rest
- Script: Release tension, gratitude, peaceful rest
- Background: Night sounds
- Voice: Soft, sleepy

**Dealing with Triggers (6 min)**
- Purpose: Build trigger resilience
- Script: Identify trigger, create space, choose response
- Background: Forest sounds
- Voice: Empowering

Note: Script content varies by addiction type. See addiction-specific files.

**Emergency Meditation (2 min)**
- Purpose: Ultra-quick urge intervention
- Script: Rapid grounding, body awareness, decision point
- Background: Minimal
- Voice: Direct but calm

---

## Soundscape Library

### Free Sounds
| Sound | Description | Duration |
|-------|-------------|----------|
| Rain | Gentle rainfall | Loop |
| Ocean | Waves on shore | Loop |
| Forest | Birds, leaves | Loop |
| White Noise | Static | Loop |

### Premium Sounds
| Sound | Description | Duration |
|-------|-------------|----------|
| Thunderstorm | Rain + thunder | Loop |
| Campfire | Crackling fire | Loop |
| Stream | Flowing water | Loop |
| Brown Noise | Deeper static | Loop |
| Pink Noise | Balanced static | Loop |
| Wind | Mountain breeze | Loop |
| Night | Crickets, owls | Loop |

### Sound Mixing (Premium)
Allow users to combine sounds:
- Primary sound + optional overlay
- Individual volume control
- Save custom mixes

---

## User Flows

### Breathing Exercise Flow
```
User taps "Meditate" on dashboard
              ↓
Mindfulness hub opens
              ↓
User selects breathing exercise type
              ↓
Brief intro screen (what to expect)
              ↓
Exercise begins with visual + audio cues
              ↓
Cycles complete
              ↓
Completion screen with encouragement
              ↓
Option: Continue with meditation?
```

### Panic Button → Breathing Flow
```
User in panic button screen
              ↓
Taps "Breathing Exercise" option
              ↓
Quick Calm starts immediately (no intro)
              ↓
After completion
              ↓
Returns to panic button
              ↓
Prompt: "Feeling better? You can close or continue."
```

### Sleep Soundscape Flow
```
User opens app before bed
              ↓
Selects soundscape
              ↓
Sets sleep timer (30/60 min)
              ↓
Audio plays
              ↓
Timer expires, audio fades out
              ↓
Phone can be locked during playback
```

---

## Animation Specifications

### Breathing Circle
- **Rive animation** preferred for smooth performance
- Circle diameter: Expands 1.5x on inhale, contracts on exhale
- Color: Soft blue gradient
- Glow effect on expansion
- Particle effects optional

### Phase Transitions
- Smooth easing between phases
- Text fades in/out
- Counter animates

### Completion Celebration
- Success checkmark animation
- Confetti or gentle particles
- Streak display (if applicable)

---

## Audio Requirements

### Breathing Exercise Audio
- Optional ambient background
- Phase change chimes (toggleable)
- Voice guidance option (toggleable)

### Meditation Audio
- High-quality voice recording
- Background music/sounds mixed
- Downloadable for offline (premium)

### Soundscape Audio
- Seamless loop points
- Multiple variations to prevent repetition
- High bitrate for quality

---

## Data Model

### Mindfulness Sessions
```
mindfulness_sessions {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  type: Enum (breathing, meditation, soundscape)
  subtype: String (e.g., "4-7-8", "urge_surfing", "rain")
  started_at: DateTime
  completed_at: DateTime (null if abandoned)
  duration_seconds: Integer
  cycles_completed: Integer (for breathing)
  completion_percentage: Decimal (for meditation)
  triggered_by: Enum (manual, panic_button, notification)
}
```

Note: addiction_type determines which meditation script version is played.

### User Preferences
```
mindfulness_preferences {
  user_id: UUID
  default_breathing: String
  default_meditation: String
  voice_gender: Enum (male, female, neutral)
  haptic_enabled: Boolean
  audio_cues_enabled: Boolean
  default_timer_minutes: Integer
  custom_sound_mixes: JSON
}
```

---

## Integration Points

### With Panic Button
- Direct launch to Quick Calm breathing
- Return to panic button after completion
- Track "calmed down via breathing" outcomes

### With Check-ins
- "Did you try breathing today?" prompt
- Post-breathing check-in for urge reduction

### With Alex
- AI can suggest specific meditations based on addiction type
- "Have you tried the Urge Surfing meditation?"
- Context-aware suggestions (see addiction-specific files)

### With Gamification
- "Zen Master" achievement for 50 sessions
- "Mindful" achievement for 10 sessions
- Session streak tracking

### With Notifications
- "Stressed? Try a quick breathing exercise."
- Evening reminder: "Wind down with tonight's meditation"

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create mindfulness_sessions table with addiction_type
- Create mindfulness_preferences table
- Seed meditation content metadata per addiction type
- Set up audio file storage

### backend-agent Tasks
- POST /api/mindfulness/session - Log session start
- PATCH /api/mindfulness/session/:id - Update completion
- GET /api/mindfulness/stats - Usage statistics
- GET /api/mindfulness/content/:addictionType - Available meditations for addiction
- Audio streaming endpoints with addiction-aware content

### ui-agent Tasks
- BreathingCircle animated component
- MeditationPlayer component
- SoundscapePlayer component
- TimerSelector component
- VolumeSlider component
- PhaseIndicator component

### pages-agent Tasks
- Mindfulness hub page
- Breathing exercise full-screen
- Meditation player page (addiction-aware)
- Soundscape player page
- Background audio handling

---

## Success Metrics

**Usage Metrics**
- Sessions per user per week
- Completion rate (started vs finished)
- Most popular exercises/meditations
- Average session duration

**Outcome Metrics**
- Urge reduction after breathing (check-in data)
- Correlation: mindfulness usage vs streak length
- Sleep quality improvement (self-reported)

**Content Metrics**
- Which meditations have highest completion
- Soundscape usage patterns
- Voice preference distribution

---

## Free vs Premium Content

### Free Tier
- All breathing exercises
- 3 guided meditations (Urge Surfing, Body Scan, Self-Compassion)
- 4 basic soundscapes
- No mixing
- 30-min max timer

### Premium Tier
- All content
- Full meditation library (10+ sessions)
- All soundscapes (12+)
- Sound mixing feature
- Unlimited timer
- Offline download
- New content monthly

---

## Accessibility

- Voice guidance available
- Visual-only mode (for deaf users)
- Haptic feedback option
- Screen reader support for all controls
- Reduced motion mode (simplified animations)

---

## Offline Support

### Free Users
- Breathing exercises work offline (no audio needed)
- Basic soundscapes cached

### Premium Users
- Download meditations for offline
- All soundscapes available offline
- Progress syncs when online
