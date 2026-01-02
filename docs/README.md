# QuitPo Documentation

## Overview

QuitPo is a comprehensive porn addiction recovery app designed to help users break free from compulsive pornography use through a combination of psychological tools, community support, and behavioral interventions. The app is built on the scientific understanding that porn addiction typically requires 90 days for neural pathway rewiring.

## Core Philosophy

**Compassionate Recovery**: Unlike punitive approaches, QuitPo treats relapses as learning opportunities, not failures. The app uses positive reinforcement, gentle reminders, and evidence-based therapeutic techniques.

**Privacy First**: All sensitive data stays on-device. Chat histories are cleared after sessions. No content is ever analyzed or transmitted.

**Science-Based**: Features are grounded in addiction psychology, cognitive behavioral therapy (CBT), and neuroscience research on habit formation.

## Target Audience

- Adults struggling with compulsive porn use
- People who have tried to quit unsuccessfully
- Those seeking anonymous, judgment-free support
- Users wanting to understand and change their behavior patterns

## Feature Documentation

### Core Features

| Feature | Description | Doc |
|---------|-------------|-----|
| **Panic Button** | Emergency intervention during urge moments with camera overlay and motivational content | [01-panic-button.md](features/01-panic-button.md) |
| **AI Therapist** | 24/7 AI-powered supportive conversations using GPT-5 Mini | [02-ai-therapist.md](features/02-ai-therapist.md) |
| **Streak System** | Track porn-free days with 90-day rewiring goal | [03-streak-system.md](features/03-streak-system.md) |
| **Gamification** | Life Tree progression system with achievements | [04-gamification.md](features/04-gamification.md) |
| **Daily Check-ins** | Morning/evening mood and urge tracking | [05-daily-checkins.md](features/05-daily-checkins.md) |

### Support Features

| Feature | Description | Doc |
|---------|-------------|-----|
| **Mindfulness** | Breathing exercises, meditation, and calming sounds | [06-mindfulness.md](features/06-mindfulness.md) |
| **Community** | Anonymous posts, challenges, and peer support | [07-community.md](features/07-community.md) |
| **Education** | Science-based learning modules on addiction | [08-education.md](features/08-education.md) |

### Safety Features

| Feature | Description | Doc |
|---------|-------------|-----|
| **Content Blocker** | Block adult content across browsers and apps | [09-content-blocker.md](features/09-content-blocker.md) |
| **Screen Time** | Track time in risky apps with smart notifications | [10-screen-time.md](features/10-screen-time.md) |
| **Friction Mode** | Breathing pause before opening risky apps | [11-friction-mode.md](features/11-friction-mode.md) |
| **Social Safety** | Guides for configuring social media safety settings | [12-social-safety.md](features/12-social-safety.md) |

### User Experience

| Feature | Description | Doc |
|---------|-------------|-----|
| **Onboarding** | Personalized setup quiz and goal setting | [13-onboarding.md](features/13-onboarding.md) |
| **Monetization** | Free tier vs Premium subscription model | [14-monetization.md](features/14-monetization.md) |

## App Structure

### Navigation (Bottom Tab Bar)

```
┌────────┬───────────┬─────────┬───────────┬─────────┐
│  Home  │ Analytics │ Library │ Community │ Profile │
└────────┴───────────┴─────────┴───────────┴─────────┘
```

1. **Home**: Dashboard with streak, Life Tree, quick actions (Pledge, Meditate, Reset, AI Chat), Panic Button
2. **Analytics**: Recovery percentage, streak history, patterns, insights
3. **Library**: Education modules, journal, saved content
4. **Community**: Anonymous feed, challenges, support groups
5. **Profile**: Settings, achievements, account management

### Screen Inventory

**Home Tab**
- Dashboard (main view)
- Panic Button (full screen overlay)
- AI Therapist chat
- Pledge modal
- Meditation player
- Reset/relapse flow

**Analytics Tab**
- Ring view (recovery percentage)
- Radar view (multi-metric)
- Streak calendar
- Pattern insights

**Library Tab**
- Education modules list
- Module detail & quiz
- Journal entries
- Saved articles

**Community Tab**
- Anonymous feed
- Post creation
- Challenge list
- Challenge detail
- Leaderboards

**Profile Tab**
- Profile overview
- Achievements gallery
- Settings
- Subscription management
- Data export

## Implementation Agents

Each feature can be implemented by specialized development agents:

| Agent | Responsibilities |
|-------|-----------------|
| **foundation-agent** | Database schemas, migrations, environment config |
| **backend-agent** | API routes, tRPC procedures, authentication logic |
| **ui-agent** | Reusable components, design system, animations |
| **pages-agent** | Screen layouts, navigation, page-level state |

## Development Phases

### Phase 1: Foundation
- Monorepo setup (pnpm + Turborepo)
- Database schema design
- Authentication system
- Basic navigation structure

### Phase 2: Core Loop
- Streak tracking system
- Daily check-ins
- Panic button
- Dashboard home screen

### Phase 3: AI & Engagement
- AI therapist integration
- Gamification system
- Achievements
- Notifications

### Phase 4: Community & Content
- Anonymous community feed
- Education modules
- Challenges system
- Content moderation

### Phase 5: Safety & Premium
- Content blocker (Chrome extension + mobile)
- Screen time tracking
- Friction mode
- Subscription management

### Phase 6: Polish & Launch
- Performance optimization
- Accessibility audit
- App store submission
- Marketing materials

## Key Metrics

**User Success Indicators**
- Average streak length
- 90-day completion rate
- Panic button usage vs relapse rate
- AI therapist engagement
- Daily check-in completion rate

**Business Metrics**
- Free to Premium conversion rate
- Subscription retention
- Community engagement (posts, votes)
- Feature usage analytics

## Competitive Differentiators

1. **Social Media Trigger Defense** - Guides for configuring Instagram, TikTok, etc. safety settings
2. **Friction-Based Intervention** - Breathing exercises before opening risky apps (57% reduction proven)
3. **AI Therapist** - 24/7 availability unlike human support
4. **Compassionate Reset Flow** - Non-judgmental relapse handling with journaling
5. **Life Tree Gamification** - Visual progression metaphor tied to brain rewiring

## References

- Competitor analysis: See `old-docs/COMPETITIVE_MARKET_ANALYSIS.md`
- Original implementation plan: See `old-docs/IMPLEMENTATION_PLAN.md`
- UI references: See `old-docs/references/` folder
