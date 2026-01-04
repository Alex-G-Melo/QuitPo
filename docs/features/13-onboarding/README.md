# Onboarding

## Title
Personalized Setup Quiz and Goal Configuration

## Description
The onboarding flow guides new users through account creation, addiction type selection, a personalization quiz, and goal setting to customize their recovery experience. It collects information about their addiction history, triggers, motivations, and preferences to personalize the app from day one.

## Addiction-Specific Content

| Addiction | Content File | Focus |
|-----------|--------------|-------|
| Pornography | [porn.md](porn.md) | Triggers, shame prevention, relationship focus |
| Gambling | [gambling.md](gambling.md) | Financial impact, sports triggers, debt awareness |
| Social Media | [social-media.md](social-media.md) | Usage patterns, FOMO, attention recovery |
| Gaming | [gaming.md](gaming.md) | Time investment, social gaming, real-life goals |

---

## Problem Statement

Generic onboarding fails addiction recovery apps:

1. **One-Size-Fits-All**: Users have different addiction severities, triggers, and goals.

2. **Missed Commitment**: Not asking users to commit reduces accountability.

3. **Cold Start**: Without initial data, app can't personalize from day one.

4. **Overwhelming Options**: Too many features shown at once confuses users.

5. **Shame Barrier**: Clinical or judgmental language discourages completion.

6. **Motivation Loss**: Long onboarding without value delivery loses users.

## Solution

### 1. Warm Welcome
Opening screens that:
- Acknowledge the courage to seek help
- Promise judgment-free support
- Set expectations for the journey

### 2. Quick Account Setup
Minimal friction authentication:
- Email/password
- Google Sign-In
- Apple Sign-In
- Anonymous option (limited features)

### 3. Addiction Type Selection
Users select what they're recovering from:
- Pornography
- Gambling/Betting
- Social Media/Phone Addiction
- Gaming
- Multiple (select all that apply)

### 4. Personalization Quiz
5 addiction-specific questions covering:
- Addiction severity (how often, how long)
- Primary triggers (addiction-specific options)
- Personal reasons for quitting (addiction-specific options)
- Previous quit attempts
- Notification preferences

### 5. Goal Setting
Explicit commitment:
- Set quit date (now or future)
- Define personal "why"
- Choose accountability level

### 6. App Tour
Brief introduction to key features:
- Dashboard overview
- Panic button location
- Alex availability
- Community access

---

## Shared Screen Flow

### Screen 1: Welcome

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│                                             │
│            Welcome to Alex Friend           │
│                                             │
│     Your companion on the journey to        │
│     freedom and recovery.                   │
│                                             │
│                                             │
│     ─────────────────────────────────       │
│                                             │
│     "The fact that you're here shows        │
│      incredible strength and courage."      │
│                                             │
│                                             │
│                                             │
│                                             │
│             [Get Started]                   │
│                                             │
│          Already have an account?           │
│               [Sign In]                     │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen 2: Promise

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              Our Promise to You             │
│                                             │
│                                             │
│     Complete Privacy                        │
│        Your data stays yours. No            │
│        judgment, ever.                      │
│                                             │
│     Science-Based                           │
│        Tools grounded in addiction          │
│        psychology and neuroscience.         │
│                                             │
│     24/7 Support                            │
│        Alex and community available         │
│        whenever you need.                   │
│                                             │
│     Progress, Not Perfection                │
│        Slips happen. We help you            │
│        get back up.                         │
│                                             │
│                                             │
│             [Continue]                      │
│                                             │
│             ○ ● ○ ○ ○ ○ ○                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen 3: Account Creation

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│            Create Your Account              │
│                                             │
│                                             │
│     [  Continue with Google  ]              │
│                                             │
│     [  Continue with Apple   ]              │
│                                             │
│     ────────── or ──────────                │
│                                             │
│     Email                                   │
│     ┌─────────────────────────────────┐    │
│     │ your@email.com                  │    │
│     └─────────────────────────────────┘    │
│                                             │
│     Password                                │
│     ┌─────────────────────────────────┐    │
│     │ ••••••••••••                    │    │
│     └─────────────────────────────────┘    │
│                                             │
│             [Create Account]                │
│                                             │
│                                             │
│     [Continue Anonymously]                  │
│     (Some features limited)                 │
│                                             │
│             ○ ○ ● ○ ○ ○ ○                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen 4: Addiction Type Selection

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│          What Brings You Here?              │
│                                             │
│     Select what you'd like to work on.      │
│     (You can select multiple)               │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Pornography                     │   │
│  │     Compulsive porn use             │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Gambling & Betting              │   │
│  │     Sports betting, casino, etc.    │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Social Media & Phone            │   │
│  │     Compulsive scrolling, FOMO      │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Gaming                          │   │
│  │     Video games, mobile games       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│             [Continue]                      │
│                                             │
│             ○ ○ ○ ● ○ ○ ○                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen 5: Quiz Introduction

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│         Let's Personalize Your              │
│              Journey                        │
│                                             │
│                                             │
│     A few questions will help us            │
│     customize Alex Friend for you.          │
│                                             │
│     • Takes about 2 minutes                 │
│     • Your answers are private              │
│     • You can update these anytime          │
│                                             │
│                                             │
│                                             │
│             [Start Quiz]                    │
│                                             │
│             [Skip for Now]                  │
│                                             │
│             ○ ○ ○ ○ ● ○ ○                   │
│                                             │
└─────────────────────────────────────────────┘
```

**Note**: Quiz questions are addiction-specific. See addiction files for questions.

### Screen: Set Your Quit Date

```
┌─────────────────────────────────────────────┐
│                                             │
│            Set Your Quit Date               │
│                                             │
│     When do you want to start your          │
│     90-day journey?                         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ● Today - January 1, 2026           │   │
│  │   Start now and build momentum      │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ○ Choose a date                     │   │
│  │   Pick a specific day to begin      │   │
│  │   [  Select Date  ]                 │   │
│  └─────────────────────────────────────┘   │
│                                             │
│                                             │
│     Starting today means your counter       │
│     begins immediately. Every day counts!   │
│                                             │
│                                             │
│             [Set Quit Date]                 │
│                                             │
│             ○ ○ ○ ○ ○ ● ○                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen: Your Why

```
┌─────────────────────────────────────────────┐
│                                             │
│            Write Your "Why"                 │
│                                             │
│     In your own words, why are you          │
│     committing to this journey?             │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │  [User writes their personal        │   │
│  │   motivation here]                  │   │
│  │                                     │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│     We'll show you this when you need       │
│     motivation most - during urges.         │
│                                             │
│                                             │
│             [Save & Continue]               │
│                                             │
│             [Skip for Now]                  │
│                                             │
│             ○ ○ ○ ○ ○ ○ ●                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Screen: Setup Complete

```
┌─────────────────────────────────────────────┐
│                                             │
│               You're Ready!                 │
│                                             │
│                                             │
│     Your journey begins now.                │
│                                             │
│     ─────────────────────────────────       │
│                                             │
│     Based on your answers, we recommend:    │
│                                             │
│     [Personalized recommendations           │
│      based on quiz answers and              │
│      addiction type]                        │
│                                             │
│     ─────────────────────────────────       │
│                                             │
│     "Day 1 is the hardest step.             │
│      You've already taken it."              │
│                                             │
│                                             │
│         [Go to Dashboard]                   │
│                                             │
│         [Take a Quick Tour First]           │
│                                             │
└─────────────────────────────────────────────┘
```

### Quick Tour (Optional)

```
┌─────────────────────────────────────────────┐
│                                             │
│               Quick Tour                    │
│               1 of 4                        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │    [Highlighted Dashboard Image]    │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│            Your Dashboard                   │
│                                             │
│  This is your home base. You'll see:        │
│                                             │
│  • Your Life Tree - growing with your       │
│    progress                                 │
│  • Current streak - your days of freedom    │
│  • Quick actions - Pledge, Meditate,        │
│    Reset, AI Chat                           │
│                                             │
│                                             │
│             [Next →]                        │
│                                             │
│             ● ○ ○ ○                         │
│                                             │
│             [Skip Tour]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Data Model

### User Addiction Profiles
```
user_addiction_profiles {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  is_primary: Boolean (one must be primary for dashboard display)
  created_at: DateTime
  UNIQUE(user_id, addiction_type)
}
```

Note: Users select their addiction type(s) during onboarding. They can recover from multiple addictions simultaneously.

### Onboarding Progress
```
onboarding_progress {
  user_id: UUID
  started_at: DateTime
  completed_at: DateTime
  addiction_selection_completed: Boolean
  quiz_completed: Boolean
  tour_completed: Boolean
  current_step: String
}
```

### User Profile (from quiz)
```
user_profile {
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  addiction_duration: Enum
  usage_frequency: Enum
  triggers: JSON Array
  reasons_to_quit: JSON Array
  previous_attempts: Boolean
  longest_streak: Enum
  personal_why: Text
  quit_date: Date
  notification_preferences: JSON
  created_at: DateTime
  updated_at: DateTime
  PRIMARY KEY (user_id, addiction_type)
}
```

Note: Users with multiple addictions have separate profiles for each, as triggers, duration, and reasons may differ per addiction.

---

## User Flows

### First-Time User
```
App launch (first time)
          ↓
Welcome screen
          ↓
Promise screen
          ↓
Account creation
          ↓
Addiction type selection
(What brings you here?)
├── Pornography
├── Gambling/Betting
├── Social Media/Phone
├── Gaming
└── Multiple (select all that apply)
          ↓
Quiz introduction
          ↓
5 quiz questions (per addiction if multiple)
          ↓
Set quit date (per addiction)
          ↓
Write personal "why" (per addiction)
          ↓
Setup complete
          ↓
Optional tour
          ↓
Dashboard (shows primary addiction)
```

### Anonymous User
```
App launch → Welcome → Promise
          ↓
[Continue Anonymously]
          ↓
Addiction type selection
          ↓
Quiz (optional)
          ↓
Limited dashboard access
          ↓
Prompts to create account for full features
```

### Returning User (Incomplete Onboarding)
```
App launch
          ↓
Check onboarding_progress
          ↓
Resume at current_step
          ↓
Complete remaining steps
          ↓
Dashboard
```

### Multiple Addiction Flow
```
User selects: Pornography + Gambling
          ↓
Primary addiction selection:
"Which would you like to focus on first?"
          ↓
Quiz for primary addiction (5 questions)
          ↓
"Do you want to set up Gambling recovery too?"
          ↓
[Yes] → Quiz for secondary addiction
[Later] → Can add from Settings
          ↓
Dashboard shows primary addiction
Switcher in settings for other addictions
```

---

## Integration Points

### With Panic Button
- User's "reasons" shown in panic button
- User's "why" displayed during urges

### With Alex
- AI knows triggers, duration, previous attempts
- Personalized conversation from day one

### With Check-ins
- Check-in prompts based on triggers
- Notification times based on preferences

### With Notifications
- Timing preferences from onboarding
- Content based on triggers and reasons

### With Analytics
- Track onboarding completion rates
- Identify drop-off points

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create onboarding_progress table
- Create user_addiction_profiles table
- Create user_profile table
- Set up quiz question content (per addiction type)
- Configure default feature recommendations

### backend-agent Tasks
- POST /api/onboarding/start - Begin onboarding
- PATCH /api/onboarding/progress - Update step
- POST /api/onboarding/addiction-types - Save selected addictions
- POST /api/onboarding/quiz - Save quiz responses (per addiction)
- POST /api/onboarding/profile - Save profile data
- POST /api/onboarding/complete - Mark complete

### ui-agent Tasks
- WelcomeScreen component
- AddictionTypeSelector component
- QuizQuestion component
- MultiSelectQuestion component
- QuitDatePicker component
- PersonalWhyInput component
- SetupComplete component
- TourCarousel component

### pages-agent Tasks
- Onboarding flow navigation
- Addiction type routing
- Quiz step routing (per addiction)
- Tour modal system
- Skip handling

---

## Success Metrics

**Completion Metrics**
- Onboarding start rate
- Addiction selection completion rate
- Quiz completion rate (per addiction type)
- Tour completion rate
- Drop-off by step

**Quality Metrics**
- "Why" field completion rate
- Average triggers selected
- Date selection (today vs future)
- Multiple addiction selection rate

**Outcome Metrics**
- Day 1 retention by onboarding completion
- 7-day retention by quiz completion
- Feature usage by tour completion

---

## Privacy Considerations

### Data Collection
- All quiz data optional
- Clear explanation of data use
- Anonymous option available

### Data Usage
- Only used for personalization
- Not shared with third parties
- User can view/edit anytime
- Deletable with account

---

## Accessibility

- All screens support VoiceOver
- High contrast text
- Adjustable font sizes
- Touch targets ≥ 44pt
- Progress indicators visible
