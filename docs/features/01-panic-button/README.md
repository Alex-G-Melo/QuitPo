# Panic Button

## Overview

The Panic Button is the most critical feature in Alex Friend — a one-tap emergency intervention that activates when users feel an overwhelming urge. It creates an immediate pattern interrupt by opening the device camera as a full-screen overlay, showing the user their own face alongside motivational messages and grounding exercises.

This feature works identically across all addiction types. Only the **motivational messages**, **side effects list**, and **example scenarios** differ per addiction.

## Addiction-Specific Content

| Addiction | Content File |
|-----------|--------------|
| Pornography | [porn.md](porn.md) |
| Gambling | [gambling.md](gambling.md) |
| Social Media | [social-media.md](social-media.md) |
| Gaming | [gaming.md](gaming.md) |

---

## Title
Emergency Urge Intervention System

## Problem Statement

When users experience strong urges, they enter a compromised mental state characterized by:

1. **Tunnel Vision**: Focus narrows to obtaining the reward, ignoring consequences
2. **Dissociation**: Users feel disconnected from their "rational self"
3. **Urgency**: The urge feels overwhelming and immediate
4. **Autopilot Behavior**: Users may act without conscious decision-making

Traditional approaches (closing apps, waiting it out) often fail because:
- They require willpower that's depleted during urge states
- They don't address the psychological dissociation
- They leave users alone with their thoughts
- They don't provide immediate distraction or support

## Solution

The Panic Button implements a multi-layered intervention strategy:

### 1. Pattern Interrupt (Camera Overlay)
The instant the button is pressed, the front camera activates showing the user's face. Seeing themselves:
- Breaks the dissociative "trance" state
- Triggers self-awareness and self-reflection
- Creates a moment of pause before action
- Reminds them of their identity beyond the urge

### 2. Motivational Messaging
Overlaid on the camera feed, powerful quotes appear:
- Personalized messages based on user's stated reasons for quitting
- Progress reminders ("You're on a 15-day streak. Keep going!")
- Consequences reminders ("Remember how you felt after last time")
- Future self messages ("What would your best self do right now?")

### 3. Grounding Options
Below the camera overlay, users see actionable buttons:
- "I'm thinking of relapsing" → Opens reflection exercises
- "I relapsed" → Opens compassionate reset flow
- Quick access to Alex (AI companion)
- Breathing exercise launcher

### 4. Side Effects Education
A scrollable section shows addiction-specific consequences of relapsing.

---

## Screen Content

### Main Panic Button Screen

**Header Area**
- App logo (small, top center)
- "Panic Button" label
- Close button (X) in corner

**Camera Overlay Section**
- Full-width camera feed showing user's face
- Blurred/dimmed background
- Overlaid motivational text with **typewriter animation**:
  - Each letter appears one by one (typing effect)
  - Small haptic vibration accompanies each letter
  - After message completes, brief pause (1-2 seconds)
  - Message deletes letter by letter (with subtle haptics)
  - Next message begins typing immediately
  - Creates urgency and keeps attention focused
- Messages are short, punchy, readable in 3-5 seconds
- Tap to skip current message and start next one

**Side Effects Section**
Title: "Side effects of Relapsing:"
Scrollable list of consequences with icons (content varies by addiction type)

**Action Buttons**
- "I Relapsed" (red/coral button) → Reset flow
- "I'm thinking of relapsing" (purple/secondary button) → Support options

### Support Options Modal (When "I'm thinking of relapsing" tapped)

Options presented:
1. **Talk to Alex** - Opens chat immediately
2. **Start Breathing Exercise** - 4-7-8 breathing animation
3. **View My Reasons** - Shows user's personal "why" list
4. **Call an Accountability Partner** - If configured
5. **Go for a Walk** - Closes app with encouraging message

### Relapse Flow (When "I Relapsed" tapped)

**Step 1: Acknowledgment**
- Heading: "Relapsed"
- Subheading: "Don't worry about it"
- Message: "Slip-ups happen and can make you feel bad, but it's crucial not to be too hard on yourself. You're getting closer to freedom."
- Quote: "Every time you say no, you say yes to a brighter future."

**Step 2: Journal Prompt**
- "Journal Feelings" button
- Prompts user to write about:
  - What triggered the relapse?
  - What time of day was it?
  - What were you feeling before?
  - What can you do differently next time?

**Step 3: Reset Counter**
- "Reset Counter" button
- Confirms reset with streak data saved for analytics
- Shows encouraging message about starting fresh

---

## User Flow

```
User feels urge
       ↓
Opens Alex Friend app (or uses widget/shortcut)
       ↓
Taps large "Panic Button" on dashboard
       ↓
Camera overlay appears immediately
       ↓
User sees their face + motivational quote (typewriter animation)
       ↓
Scrolls to see relapse side effects
       ↓
┌─────────────────────────────────────┐
│                                     │
│  Urge passes?                       │
│  ├── YES → Close, streak continues  │
│  │                                  │
│  └── NO → Choose action:            │
│       ├── "Thinking of relapsing"   │
│       │    → Support options        │
│       │    → AI chat / breathing    │
│       │                             │
│       └── "I Relapsed"              │
│            → Compassionate reset    │
│            → Journal prompt         │
│            → Counter reset          │
│                                     │
└─────────────────────────────────────┘
```

---

## Message System

### Message Tone Guidelines

- Use lowercase for warmth (not ALL CAPS which feels aggressive)
- Start with connection ("Hey", "Stay with me")
- Be encouraging, not commanding
- Educate gently about neural science
- Acknowledge the struggle while empowering

### Universal Message Categories

These categories apply to ALL addiction types. The specific messages within each category vary by addiction (see addiction-specific files).

| Category | Purpose | When Shown |
|----------|---------|------------|
| **Grounding** | Brings awareness back to the present | First — always start here |
| **Neural Science** | Educates about brain/addiction | After grounding |
| **Progress-Based** | Celebrates streak progress | Uses `{X}` placeholder |
| **Identity-Based** | Connects to user's values | Uses onboarding data |
| **Consequence-Based** | Gentle reminder of outcomes | Not fear-based |
| **Empowerment** | Builds confidence | Throughout |
| **Time-Based** | Contextual to time of day | Late night, morning, weekend |
| **Journey-Aware** | References space journey stage | Uses current stage |

### Message Selection Algorithm

1. Start with **Grounding** messages (first 2-3)
2. Mix in **Neural Science** and **Empowerment**
3. Include **Progress-Based** if streak > 0
4. Add **Journey-Aware** based on current stage
5. Use **Time-Based** if late night (10 PM - 6 AM) or weekend
6. Never repeat same message twice in session
7. Track effectiveness per message (survival rate)

---

## Implementation Details

### Technical Requirements

**Camera Access**
- Request camera permission during onboarding with clear explanation
- Graceful fallback if permission denied (show mirror-like UI instead)
- Low-resolution is fine - this is for self-reflection, not photos
- Camera preview should be fast to load (<500ms)

**Haptic Feedback**
- Strong haptic on button press (immediate feedback)
- **Typewriter haptics**: Light tap for each letter
- Slightly stronger haptic on punctuation (period, exclamation)
- Brief pause in haptics during delete animation
- Success haptic when user closes without relapsing

**Typewriter Animation System**
- **Typing speed**: ~50ms per character (adjustable)
- **Delete speed**: ~30ms per character (faster than typing)
- **Pause after complete message**: 1.5-2 seconds
- **Pause after delete**: 0.3 seconds before next message
- Tap anywhere to skip current animation
- Messages grouped into sequences (2-3 related short messages can flow together)
- Weight message selection based on user context (streak, time, addiction type)

**Message Sequencing Example**
```
Types: "Hey. Look at yourself." (pause)
Deletes...
Types: "This is who you really are." (pause)
Deletes...
Types: "You are not the urge." (pause)
Deletes...
Types: "Your brain is playing tricks." (pause)
Deletes...
Types: "21 days of healing." (pause)
Deletes...
Types: "Don't throw that away." (pause)
...continues cycling through messages
```

**Analytics Events**
- `panic_button_opened` - with time_of_day, streak_length, addiction_type
- `panic_button_closed` - with duration, outcome (survived/relapsed/support)
- `support_option_selected` - which option chosen
- `relapse_logged` - with trigger data if journaled

---

## Quick Access Methods

The Panic Button must be accessible instantly without navigating through the app. Users in crisis need one-tap access from anywhere on their device.

**URL Scheme (Foundation)**
- Register `alexfriend://panic` deep link
- All quick access methods route through this URL scheme
- Opens directly to full-screen panic button overlay

### iOS Quick Access

**Action Button (iPhone 15 Pro+)**
- User creates a Shortcut that opens `alexfriend://panic`
- Assigns Shortcut to Action Button in Settings
- One physical button press → Panic Button opens instantly

**Back Tap (iPhone 8+)**
- Double or triple tap on back of phone triggers Shortcut
- Works even with phone locked (if Shortcut allows)

**Lock Screen Widget**
- Small widget: Single "Panic Button" icon
- Medium widget: Panic button + streak display

**Siri Shortcuts**
- "Hey Siri, panic button" or "Hey Siri, I need help"

**Control Center**
- Custom Shortcut can be added to Control Center

### Android Quick Access

**App Shortcuts (Long-press menu)**
- Long-press app icon shows "Panic Button" quick action
- Can be dragged to home screen as standalone shortcut

**Quick Settings Tile**
- Custom tile in notification shade
- Pull down from any screen → tap tile → Panic Button

**Home Screen Widget**
- Small (1x1): Panic button icon only
- Medium (2x1): Panic button + current streak

**Google Assistant**
- "Hey Google, open Alex Friend panic button"

### Setup Flow

During onboarding, guide users to set up at least one quick access method:
1. Detect device type and available options
2. Show recommended quick access method for their device
3. Step-by-step setup wizard with screenshots
4. Test confirmation ("Press your Action Button now to test")

---

## Notification Integration

**After panic button use (survived):**
- 30 minutes later: "Great job pushing through that urge! How are you feeling now?"
- If opened 3+ times in a day: "You're fighting hard today. Consider talking to Alex."

**After relapse:**
- 24 hours later: "Yesterday was tough. Today is a new day. You've got this."

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create database table for panic_button_events
- Create relapse_logs table
- Create motivational_messages table with addiction_type field
- Seed messages for each addiction type

### backend-agent Tasks
- API endpoint: POST /api/panic-button/open
- API endpoint: POST /api/panic-button/close (with outcome)
- API endpoint: POST /api/relapse (handle reset + logging)
- Quote selection algorithm considering user context and addiction_type

### ui-agent Tasks
- PanicButtonScreen component with camera integration
- **TypewriterText component**:
  - Animates text letter by letter
  - Supports delete animation
  - Configurable speeds
  - Triggers haptic callback per character
  - Handles tap-to-skip gesture
- **TypewriterHaptics hook**
- QuoteOverlay component
- MessageSequencer - manages message queue
- SideEffectsList scrollable component (content from addiction profile)
- RelapseFlow multi-step modal
- JournalInput component

### pages-agent Tasks
- Integrate panic button on home dashboard
- Full-screen panic button route/modal
- Relapse flow navigation
- Deep link handling for `alexfriend://panic`
- Quick access setup wizard screens

### mobile-specific Tasks
- Configure URL scheme in app config
- iOS: Siri Shortcuts, Widgets
- Android: App Shortcuts, Quick Settings Tile, Widgets

---

## Success Metrics

**Primary Metrics**
- Panic button to relapse ratio (lower is better)
- Average time on panic screen before closing
- Quote effectiveness (which quotes correlate with survival)

**Secondary Metrics**
- Support option usage distribution
- Journal completion rate after relapse
- Repeat panic button use same day
- Streak recovery time after relapse

---

## Accessibility

- VoiceOver support for all elements
- Quote text readable at large font sizes
- High contrast mode for overlay
- Haptic feedback has visual alternatives
- Camera can be disabled while retaining other features

---

## Privacy Considerations

- Camera feed is never recorded or transmitted
- No screenshots of panic button screen (blocked)
- Relapse data is stored locally with option to sync
- Journal entries are encrypted on device
- Analytics are anonymized before transmission

---

## Data Model

### Tables

#### panic_button_events
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PK | Unique event identifier |
| user_id | uuid | NOT NULL, FK | User who triggered panic button |
| addiction_type | enum | NOT NULL | 'porn', 'gambling', 'social_media', 'gaming' |
| opened_at | timestamp | NOT NULL | When panic button was opened |
| closed_at | timestamp | | When panic button was closed |
| outcome | enum | NOT NULL | 'survived', 'relapsed', 'support_requested' |
| duration_seconds | integer | | Time spent on panic screen |
| messages_shown | text[] | | Array of message IDs shown |
| time_of_day | enum | NOT NULL | 'morning', 'afternoon', 'evening', 'late_night' |
| day_of_week | integer | NOT NULL | 0-6 (Sunday-Saturday) |
| streak_at_open | integer | NOT NULL | User's streak when opened |
| support_option | text | | If support requested, which option |
| created_at | timestamp | NOT NULL | Record creation time |

#### relapse_logs
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PK | Unique relapse identifier |
| user_id | uuid | NOT NULL, FK | User who relapsed |
| addiction_type | enum | NOT NULL | 'porn', 'gambling', 'social_media', 'gaming' |
| relapsed_at | timestamp | NOT NULL | When relapse was logged |
| streak_at_relapse | integer | NOT NULL | Days lost |
| panic_event_id | uuid | FK | If logged from panic button |
| trigger_category | enum | | Trigger type |
| trigger_notes | text | | User's description |
| journal_entry | text | | User's reflection (encrypted) |
| created_at | timestamp | NOT NULL | Record creation time |

#### motivational_messages
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PK | Unique message identifier |
| addiction_type | enum | | null for universal messages |
| content | text | NOT NULL | The message text |
| category | enum | NOT NULL | Message category |
| journey_stage | varchar | | Stage-specific messages |
| time_context | enum | | 'late_night', 'morning', 'weekend', null |
| requires_streak | boolean | DEFAULT false | Uses {X} placeholder |
| effectiveness_score | float | DEFAULT 0.5 | Updated based on survival rate |
| is_active | boolean | DEFAULT true | Can be disabled |
| created_at | timestamp | NOT NULL | Record creation time |

### Indexes

- `panic_button_events`: (user_id, opened_at DESC)
- `panic_button_events`: (user_id, addiction_type, outcome)
- `relapse_logs`: (user_id, relapsed_at DESC)
- `motivational_messages`: (addiction_type, category, is_active)

### Enums

```sql
CREATE TYPE addiction_type AS ENUM ('porn', 'gambling', 'social_media', 'gaming');
CREATE TYPE panic_outcome AS ENUM ('survived', 'relapsed', 'support_requested');
CREATE TYPE time_of_day AS ENUM ('morning', 'afternoon', 'evening', 'late_night');
CREATE TYPE message_category AS ENUM ('grounding', 'neural_science', 'progress', 'identity', 'consequence', 'empowerment', 'time_based', 'journey_aware');
```
