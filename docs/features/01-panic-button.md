# Panic Button

## Table of Contents

| Section | Lines | Description |
|---------|-------|-------------|
| [Title](#title) | 27-28 | Emergency Urge Intervention System |
| [Description](#description) | 30-31 | Core feature overview and purpose |
| [Problem Statement](#problem-statement) | 33-46 | User challenges and why traditional approaches fail |
| [Solution](#solution) | 48-80 | Multi-layered intervention strategy |
| [Screen Content](#screen-content) | 82-171 | UI mockups for main screen, support modal, relapse flow |
| [User Flow](#user-flow) | 193-223 | Flowchart from urge to outcome |
| [Motivational Content Library](#motivational-content-library) | 225-321 | Message categories and tone guidelines |
| [Implementation Details](#implementation-details) | 323-371 | Technical requirements (camera, haptics, typewriter) |
| [Quick Access Methods](#quick-access-methods) | 373-443 | iOS/Android shortcuts, widgets, voice assistants |
| [Notification Integration](#notification-integration) | 445-453 | Follow-up notifications after panic button use |
| [Example Scenarios](#example-scenarios) | 455-540 | 5 detailed usage scenarios |
| [Agent Implementation Guide](#agent-implementation-guide) | 542-589 | Tasks for foundation, backend, ui, pages agents |
| [Success Metrics](#success-metrics) | 591-602 | Primary and secondary metrics |
| [Accessibility](#accessibility) | 604-610 | VoiceOver, contrast, haptic alternatives |
| [Privacy Considerations](#privacy-considerations) | 612-618 | Camera privacy, encryption, analytics |
| [Data Model](#data-model) | 620-690 | Database tables, relationships, indexes, enums |

---

## Title
Emergency Urge Intervention System

## Description
The Panic Button is the most critical feature in Alex Friend - a one-tap emergency intervention that activates when users feel an overwhelming urge to view pornography. It creates an immediate pattern interrupt by opening the device camera as a full-screen overlay, showing the user their own face alongside motivational messages and grounding exercises. This leverages the psychological phenomenon of self-confrontation to break the dissociative state that often precedes relapse.

## Problem Statement

When users experience strong urges to view pornography, they enter a compromised mental state characterized by:

1. **Tunnel Vision**: Focus narrows to obtaining the reward, ignoring consequences
2. **Dissociation**: Users feel disconnected from their "rational self"
3. **Urgency**: The urge feels overwhelming and immediate
4. **Autopilot Behavior**: Users may navigate to content without conscious decision-making

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
A scrollable section shows "Side Effects of Relapsing":
- Brain fog and poor concentration
- Shame and guilt spiral
- Reset of neurological progress
- Relationship impacts
- Energy and motivation loss

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

**Quote Examples** (short format for typewriter effect - warm, supportive tone)
```
"Hey. Look at yourself."

"This is who you really are."

"You are not the urge."

"You are stronger than this."

"Take a deep breath."

"This feeling will pass."

"It always does."

"Your brain is playing tricks."

"This is just dopamine talking."

"Come back to the moment."

"Stay with me."

"Feel your breath."

"You've got this."

"[X] days of healing."

"Don't throw that away."

"Your future self is cheering."

"Make yourself proud."

"You know how this ends."

"Choose differently this time."

"One moment at a time."

"You are not alone."

"This urge will fade."

"Your brain is healing."

"Every 'no' makes you stronger."
```

**Side Effects Section**
Title: "Side effects of Relapsing:"
Scrollable list of consequences with icons

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
- Quote: "Every time you say no to porn, you say yes to a brighter future."

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

## User Flow

```
User feels urge
       ↓
Opens Alex Friend app (or uses widget)
       ↓
Taps large "Panic Button" on dashboard
       ↓
Camera overlay appears immediately
       ↓
User sees their face + motivational quote
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

## Motivational Content Library

Messages are designed for typewriter animation - short, warm, supportive. They cycle through categories, starting with grounding messages to gently bring the user back to awareness. The tone is like a caring friend, not a drill sergeant.

### Message Tone Guidelines
- Use lowercase for warmth (not ALL CAPS which feels aggressive)
- Start with connection ("Hey", "Stay with me")
- Be encouraging, not commanding
- Educate gently about neural science
- Acknowledge the struggle while empowering

### Categories

**Grounding/Self-Awareness** (shown first - gently brings awareness back)
- "Hey. Look at yourself."
- "See your face right now."
- "This is who you really are."
- "You are not the urge."
- "Come back to the moment."
- "Stay with me."
- "Take a deep breath."
- "Feel your feet on the ground."
- "You are here. Right now."
- "Breathe in... breathe out."
- "Ground yourself."

**Neural Science** (educates gently while supporting)
- "Your brain is playing tricks."
- "This is just dopamine talking."
- "It's a chemical reaction, not you."
- "Your rational mind will return."
- "Urges peak, then they fade."
- "90 days to rewire. You're healing."
- "Every 'no' builds new pathways."
- "Your brain can heal from this."
- "Neuroplasticity is on your side."
- "You're retraining your brain."
- "This feeling is temporary."

**Progress-Based** (uses streak data - celebrates progress)
- "[X] days of healing."
- "Don't throw that away."
- "[X] days strong. Keep going."
- "You promised yourself this."
- "Honor your journey."
- "Just one more day."
- "Look how far you've come."

**Identity-Based** (uses onboarding data - connects to values)
- "This isn't who you want to be."
- "Be the person you're becoming."
- "Remember why you started."
- "Think of [person you care about]."
- "Make yourself proud."
- "Your future self is cheering."
- "You're becoming someone new."

**Consequence-Based** (gentle reminder, not fear-based)
- "You know how this story ends."
- "The regret isn't worth it."
- "Minutes of relief, days of regret."
- "You've felt this shame before."
- "Choose differently this time."
- "There's a better path forward."

**Empowerment-Based** (encouraging strength)
- "You are stronger than this urge."
- "This feeling will pass."
- "It always does."
- "You've got this."
- "You can do hard things."
- "One moment at a time."
- "You are not alone in this."
- "Thousands are fighting with you."

**Time-Based** (contextual, still warm)
- Late night: "It's late. Rest is healing."
- Late night: "Sleep is the best choice now."
- Late night: "Your willpower recharges with rest."
- Morning: "New day, fresh start."
- Morning: "Today is yours."
- Weekend: "Weekends can be tough. Stay close."
- Weekend: "Free time is high-risk. Stay aware."

### Relapse Side Effects List

1. **Brain Fog** - Difficulty concentrating and thinking clearly for days
2. **Dopamine Crash** - Nothing else feels rewarding; motivation plummets
3. **Shame Spiral** - Negative self-talk and self-esteem damage
4. **Progress Reset** - Neural rewiring progress is partially undone
5. **Chaser Effect** - Strong urges continue for days after relapse
6. **Sleep Disruption** - Late night use destroys sleep quality
7. **Time Waste** - Hours lost to seeking and viewing
8. **Escalation Risk** - Tolerance builds, requiring more extreme content
9. **Relationship Impact** - Emotional unavailability, unrealistic expectations
10. **Anxiety/Depression** - Correlation with mental health decline

## Implementation Details

### Technical Requirements

**Camera Access**
- Request camera permission during onboarding with clear explanation
- Graceful fallback if permission denied (show mirror-like UI instead)
- Low-resolution is fine - this is for self-reflection, not photos
- Camera preview should be fast to load (<500ms)

**Haptic Feedback**
- Strong haptic on button press (immediate feedback)
- **Typewriter haptics**: Light tap (UIImpactFeedbackGenerator.light / HapticFeedbackConstants.KEYBOARD_TAP) for each letter
- Slightly stronger haptic on punctuation (period, exclamation)
- Brief pause in haptics during delete animation (or softer pattern)
- Success haptic when user closes without relapsing

**Typewriter Animation System**
- **Typing speed**: ~50ms per character (adjustable for readability)
- **Delete speed**: ~30ms per character (faster than typing)
- **Pause after complete message**: 1.5-2 seconds
- **Pause after delete**: 0.3 seconds before next message
- Tap anywhere to skip current animation and start next message
- Never repeat same message twice in session
- Messages grouped into sequences (2-3 related short messages can flow together)
- Weight message selection based on user context (streak length, time of day)
- Prioritize grounding messages first, then motivational

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
- `panic_button_opened` - with time_of_day, streak_length
- `panic_button_closed` - with duration, outcome (survived/relapsed/support)
- `support_option_selected` - which option chosen
- `relapse_logged` - with trigger data if journaled

### Quick Access Methods

The Panic Button must be accessible instantly without navigating through the app. Users in crisis need one-tap access from anywhere on their device.

**URL Scheme (Foundation)**
- Register `alexfriend://panic` deep link
- All quick access methods route through this URL scheme
- Opens directly to full-screen panic button overlay

#### iOS Quick Access

**Action Button (iPhone 15 Pro+)**
- User creates a Shortcut that opens `alexfriend://panic`
- Assigns Shortcut to Action Button in Settings
- One physical button press → Panic Button opens instantly
- Setup guide provided during onboarding for compatible devices

**Back Tap (iPhone 8+)**
- Double or triple tap on back of phone triggers Shortcut
- Same `alexfriend://panic` Shortcut integration
- Works even with phone locked (if Shortcut allows)

**Lock Screen Widget**
- Small widget: Single "Panic Button" icon
- Medium widget: Panic button + streak display
- Tapping widget opens directly to panic button screen

**Siri Shortcuts**
- Donate shortcut action during app usage
- "Hey Siri, panic button" or "Hey Siri, I need help"
- Appears in Shortcuts app for user customization

**Control Center**
- Custom Shortcut can be added to Control Center
- Accessible from any screen with swipe gesture

#### Android Quick Access

**App Shortcuts (Long-press menu)**
- Define in `shortcuts.xml` manifest
- Long-press app icon shows "Panic Button" quick action
- Can be dragged to home screen as standalone shortcut

**Quick Settings Tile**
- Custom tile added to notification shade
- Pull down from any screen → tap tile → Panic Button
- Requires `TileService` implementation

**Home Screen Widget**
- Small (1x1): Panic button icon only
- Medium (2x1): Panic button + current streak
- Can be added to lock screen on Android 12+

**Google Assistant**
- App Actions integration
- "Hey Google, open Alex Friend panic button"
- "Hey Google, I need help with Alex Friend"

**Samsung-Specific**
- Side key double-press can open app via Routines
- Edge Panel shortcut support
- Good Lock customization options

#### Setup Flow

During onboarding, guide users to set up at least one quick access method:
1. Detect device type and available options
2. Show recommended quick access method for their device
3. Step-by-step setup wizard with screenshots
4. Test confirmation ("Press your Action Button now to test")
5. Reminder in settings to configure additional methods

### Notification Integration

After panic button use (survived):
- 30 minutes later: "Great job pushing through that urge! How are you feeling now?"
- If opened 3+ times in a day: "You're fighting hard today. Consider talking to Alex."

After relapse:
- 24 hours later: "Yesterday was tough. Today is a new day. You've got this."
- Track if user engages with follow-up

## Example Scenarios

### Scenario 1: Late Night Urge (Success)
```
Time: 11:45 PM
User streak: 7 days
User opens panic button
→ Camera shows tired face
→ Typewriter begins: "Hey. Look at yourself." (haptic per letter)
→ Pause, then deletes letter by letter
→ Types: "This is who you really are."
→ Deletes...
→ Types: "It's late. Rest is healing."
→ Deletes...
→ Types: "7 days of healing. Don't throw that away."
→ User watches their tired reflection
→ Scrolls to see side effects list
→ After 2 minutes, closes panic button
→ Success haptic + "You did it!" toast
→ Streak continues
```

### Scenario 2: Weekend Afternoon (Needs Support)
```
Time: 2:30 PM Saturday
User streak: 3 days
User opens panic button
→ Camera activates
→ Quote: "Weekends are high-risk. Stay vigilant."
→ User taps "I'm thinking of relapsing"
→ Selects "Start Breathing Exercise"
→ Completes 2-minute breathing
→ Urge passes
→ Closes and continues day
```

### Scenario 3: Relapse
```
Time: 8:00 PM
User streak: 12 days
User opens panic button
→ After viewing, taps "I Relapsed"
→ Compassionate message appears
→ User journals: "Stressed about work, was alone at home"
→ Taps "Reset Counter"
→ Streak resets to 0, but 12-day record saved
→ Next day reminder: "Yesterday was tough. Today is fresh."
```

### Scenario 4: Quick Access via Action Button (iPhone)
```
Time: 9:30 PM
User streak: 21 days
User is browsing social media, sees triggering content
→ Without unlocking or opening app
→ Presses Action Button on side of iPhone
→ Panic Button screen appears instantly (<1 second)
→ Camera shows their face immediately
→ Typewriter: "Stay with me." (haptic pulses)
→ Deletes...
→ Types: "This is just dopamine talking."
→ Deletes...
→ Types: "21 days of healing."
→ Deletes...
→ Types: "Look how far you've come."
→ User watches typing, feels each haptic pulse
→ Takes a breath, closes the panic screen
→ Returns to home screen instead of social media
→ Streak continues
```

### Scenario 5: Quick Access via Quick Settings (Android)
```
Time: 1:00 AM
User streak: 5 days
User wakes up, reaches for phone, feels urge
→ Pulls down notification shade
→ Taps Alex Friend Panic Button tile
→ Full-screen panic overlay appears
→ Camera shows tired, sleepy face
→ Typewriter: "Hey. Look at yourself."
→ Types: "Sleep is the best choice now."
→ Types: "Your willpower recharges with rest."
→ User puts phone down, goes back to sleep
→ Streak continues
```

## Agent Implementation Guide

### foundation-agent Tasks
- Create database table for panic_button_events
- Add columns: user_id, opened_at, closed_at, outcome, duration_seconds, quote_shown, time_of_day
- Create relapse_logs table: user_id, relapsed_at, streak_at_relapse, trigger_notes, journal_entry

### backend-agent Tasks
- API endpoint: POST /api/panic-button/open
- API endpoint: POST /api/panic-button/close (with outcome)
- API endpoint: POST /api/relapse (handle reset + logging)
- Quote selection algorithm considering user context

### ui-agent Tasks
- PanicButtonScreen component with camera integration
- **TypewriterText component**:
  - Animates text letter by letter (typing effect)
  - Supports delete animation (reverse typing)
  - Configurable typing speed, delete speed, pause durations
  - Triggers haptic callback per character
  - Handles tap-to-skip gesture
- **TypewriterHaptics hook**:
  - Light haptic per letter (UIImpactFeedbackGenerator.light / KEYBOARD_TAP)
  - Stronger haptic on punctuation
  - Manages haptic timing synchronized with animation
- QuoteOverlay component integrating TypewriterText
- MessageSequencer - manages message queue and category rotation
- SideEffectsList scrollable component
- RelapseFlow multi-step modal
- JournalInput component for relapse reflection

### pages-agent Tasks
- Integrate panic button on home dashboard
- Full-screen panic button route/modal
- Relapse flow navigation
- Deep link handling for `alexfriend://panic` URL scheme
- Quick access setup wizard screens
- Device-specific setup instructions (Action Button, Back Tap, etc.)

### mobile-specific Tasks
- Configure URL scheme `alexfriend://panic` in app.json/app.config.js
- iOS: Siri Shortcuts integration (donate shortcut action)
- iOS: Lock Screen and Home Screen widget (WidgetKit via expo-widgets or native module)
- Android: App Shortcuts in shortcuts.xml
- Android: Quick Settings Tile service
- Android: Home Screen widget (AppWidgetProvider)
- Android: Google Assistant App Actions integration

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

## Accessibility

- VoiceOver support for all elements
- Quote text readable at large font sizes
- High contrast mode for overlay
- Haptic feedback has visual alternatives
- Camera can be disabled while retaining other features

## Privacy Considerations

- Camera feed is never recorded or transmitted
- No screenshots of panic button screen (blocked)
- Relapse data is stored locally with option to sync
- Journal entries are encrypted on device
- Analytics are anonymized before transmission

## Data Model

This section defines the database schema for this feature. Use this for implementation and to ensure consistency across features.

### Tables

#### panic_button_events
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique event identifier |
| user_id | uuid | NOT NULL | users.id | User who triggered panic button |
| opened_at | timestamp | NOT NULL | | When panic button was opened |
| closed_at | timestamp | | | When panic button was closed |
| outcome | enum | NOT NULL | | 'survived', 'relapsed', 'support_requested' |
| duration_seconds | integer | | | Time spent on panic screen |
| messages_shown | text[] | | | Array of message IDs shown |
| time_of_day | enum | NOT NULL | | 'morning', 'afternoon', 'evening', 'late_night' |
| day_of_week | integer | NOT NULL | | 0-6 (Sunday-Saturday) |
| streak_at_open | integer | NOT NULL | | User's streak when opened |
| support_option | text | | | If support requested, which option |
| created_at | timestamp | NOT NULL, DEFAULT now() | | Record creation time |

#### relapse_logs
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique relapse identifier |
| user_id | uuid | NOT NULL | users.id | User who relapsed |
| relapsed_at | timestamp | NOT NULL | | When relapse was logged |
| streak_at_relapse | integer | NOT NULL | | Days lost |
| panic_event_id | uuid | | panic_button_events.id | If logged from panic button |
| trigger_category | enum | | | 'stress', 'boredom', 'loneliness', 'late_night', 'other' |
| trigger_notes | text | | | User's description of trigger |
| journal_entry | text | | | User's reflection (encrypted) |
| created_at | timestamp | NOT NULL, DEFAULT now() | | Record creation time |

#### motivational_messages
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique message identifier |
| content | text | NOT NULL | | The message text |
| category | enum | NOT NULL | | 'grounding', 'neural_science', 'progress', 'identity', 'consequence', 'empowerment', 'time_based' |
| time_context | enum | | | 'late_night', 'morning', 'weekend', null for any |
| requires_streak | boolean | DEFAULT false | | If message uses [X] placeholder |
| requires_person | boolean | DEFAULT false | | If message uses [person] placeholder |
| effectiveness_score | float | DEFAULT 0.5 | | Updated based on survival rate |
| is_active | boolean | DEFAULT true | | Can be disabled without deletion |
| created_at | timestamp | NOT NULL, DEFAULT now() | | Record creation time |

### Relationships

```
users (1) ─────< (many) panic_button_events
users (1) ─────< (many) relapse_logs
panic_button_events (1) ────< (0..1) relapse_logs
motivational_messages (many) ────< (many) panic_button_events.messages_shown
```

### Indexes

- `panic_button_events`: user_id, opened_at DESC
- `panic_button_events`: user_id, outcome (for survival rate analysis)
- `relapse_logs`: user_id, relapsed_at DESC
- `motivational_messages`: category, is_active

### Enums

```sql
CREATE TYPE panic_outcome AS ENUM ('survived', 'relapsed', 'support_requested');
CREATE TYPE time_of_day AS ENUM ('morning', 'afternoon', 'evening', 'late_night');
CREATE TYPE trigger_category AS ENUM ('stress', 'boredom', 'loneliness', 'late_night', 'other');
CREATE TYPE message_category AS ENUM ('grounding', 'neural_science', 'progress', 'identity', 'consequence', 'empowerment', 'time_based');
```