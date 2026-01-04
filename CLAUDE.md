# Alex Friend - Project Context

Alex Friend is a **multi-addiction recovery platform** designed to help users break free from behavioral addictions through psychological tools, community support, and behavioral interventions. Built on an addiction-agnostic architecture that supports multiple addiction types with a single codebase.

## Multi-Addiction Architecture

| Addiction Type | Status | Primary Markets | Problem Scale |
|----------------|--------|-----------------|---------------|
| **Pornography** | Primary (v1.0) | Global | 200M+ affected |
| **Gambling/Betting** | Planned (v1.1) | Brazil, Germany, UK | 80M+ globally, 10M+ Brazil crisis |
| **Social Media/Phone** | Planned (v1.2) | Brazil, Global | 210M+ addicted |
| **Gaming** | Planned (v1.3) | Global (teens) | 60M+ affected |

**Architecture**: ~90% shared code, ~10% addiction-specific content. See `/docs/architecture/multi-addiction.md` for full details.

**Key principle**: All features work identically across addictions — only terminology, triggers, education content, blocklists, and Alex's knowledge base change per addiction type.

## Branding

| Brand | Usage |
|-------|-------|
| **Alex Friend** | Consumer-facing app name (App Store, user's phone, in-app) |
| **QuitPo** | Company/legal entity, SEO marketing site |
| **Domains** | alex-friend.ai (app), quitpo.com (marketing, redirects to app) |

## Quick Reference

| Aspect | Details |
|--------|---------|
| **App Name** | Alex Friend |
| **Company** | QuitPo |
| **Type** | Multi-platform recovery app |
| **Platforms** | iOS, Android, Web, Chrome Extension |
| **Architecture** | pnpm + Turborepo monorepo |
| **Documentation** | See `/docs/` folder for comprehensive feature specs |

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Mobile | Expo SDK + React Native | SDK 54 / RN 0.81 |
| Web | Next.js (App Router) | 16.1.x |
| Frontend | React | 19.2.x |
| Extension | Chrome Extension | Manifest V3 |
| Styling | Tailwind CSS / NativeWind | 4.1.x |
| Backend | Next.js API Routes + tRPC | v11 |
| Database | PostgreSQL + pgvector | 16+ |
| ORM | Drizzle ORM | 0.45.x |
| Auth | Firebase Authentication | Latest |
| AI | GPT-5 Mini (primary), DeepSeek V3.2 (fallback) | - |
| Payments | Stripe (web) + RevenueCat (mobile) | - |
| Animations | Rive + React Native Reanimated | 9.7.x / 4.2.x |
| State | Zustand + TanStack Query | 5.x / v5 |
| TypeScript | TypeScript | 5.8.x |

## Project Structure

```
alex-friend/                    # Repo name (or quitpo/ for existing)
├── apps/
│   ├── web/                    # Next.js 16.1 (web app + API)
│   ├── mobile/                 # Expo SDK 54 (iOS + Android)
│   └── extension/              # Chrome Extension (Manifest V3)
├── packages/
│   ├── ui/                     # Shared React Native components
│   ├── api/                    # tRPC routers
│   ├── db/                     # Drizzle ORM + pgvector schemas
│   └── shared/                 # Types, utils, constants
├── docs/                       # Feature documentation (see below)
│   ├── README.md               # Overview and navigation
│   └── features/               # Individual feature specs
├── old-docs/                   # Legacy docs + reference images
├── docker-compose.yml          # PostgreSQL + pgvector
├── turbo.json
└── pnpm-workspace.yaml
```

## Documentation

### Architecture
| Document | Description |
|----------|-------------|
| [Multi-Addiction](docs/architecture/multi-addiction.md) | How the app supports multiple addiction types |
| [Addiction Profiles](docs/architecture/addiction-profiles.md) | Content structure and checklist for each addiction type |

### Feature Documentation
Comprehensive feature documentation is in `/docs/features/`. Each document includes: title, description, problem statement, solution, screen content, data models, user flows, and agent implementation guides.

### Core Features
| Feature | Document | Description |
|---------|----------|-------------|
| Panic Button | [01-panic-button.md](docs/features/01-panic-button.md) | Emergency camera overlay intervention |
| Alex (AI Companion) | [02-ai-therapist.md](docs/features/02-ai-therapist.md) | 24/7 GPT-powered recovery support |
| Streak System | [03-streak-system.md](docs/features/03-streak-system.md) | 90-day rewiring tracker |
| Gamification | [04-gamification.md](docs/features/04-gamification.md) | Life Tree + achievements |
| Daily Check-ins | [05-daily-checkins.md](docs/features/05-daily-checkins.md) | Mood and urge tracking |

### Support Features
| Feature | Document | Description |
|---------|----------|-------------|
| Mindfulness | [06-mindfulness.md](docs/features/06-mindfulness.md) | Breathing, meditation, sounds |
| Community | [07-community.md](docs/features/07-community.md) | Anonymous posts + challenges |
| Education | [08-education.md](docs/features/08-education.md) | Science-based learning modules |

### Safety Features
| Feature | Document | Description |
|---------|----------|-------------|
| Content Blocker | [09-content-blocker.md](docs/features/09-content-blocker.md) | Adult site blocking (1M+ sites) |
| Screen Time | [10-screen-time.md](docs/features/10-screen-time.md) | Risky app usage tracking |
| Friction Mode | [11-friction-mode.md](docs/features/11-friction-mode.md) | Breathing pause before risky apps |
| Social Safety | [12-social-safety.md](docs/features/12-social-safety.md) | Platform safety configuration guides |

### User Experience
| Feature | Document | Description |
|---------|----------|-------------|
| Onboarding | [13-onboarding.md](docs/features/13-onboarding.md) | Personalization quiz + setup |
| Monetization | [14-monetization.md](docs/features/14-monetization.md) | Free vs Premium tiers |

## Key Features Summary

- **Panic Button** - Camera overlay with motivational messages + haptic feedback for urge interruption
- **Alex** - 24/7 AI recovery companion with personalized context, proactive outreach, and therapist finder
- **Streak System** - 90-day rewiring goal with compassionate relapse handling
- **Life Tree** - 9-stage visual progression (Seed → Sprout → Pioneer → Momentum → Fortress → Flourishing → Thriving → Enlightened → Nirvana)
- **Community** - Anonymous posting, peer support, group challenges
- **Content Blocker** - 1M+ site blocklist, Chrome extension, Screen Time integration
- **Friction Mode** - 57% proven reduction in unconscious app opens (Max Planck Institute study)
- **Education** - 4 modules of science-based recovery content with quizzes

## Database

Self-hosted PostgreSQL with pgvector for embeddings:
- Semantic chat history search
- Content recommendations
- Community post matching

## Authentication

Firebase Auth (free tier - 50K MAU):
- Email/password
- Google Sign-In
- Apple Sign-In

Requires OAuth setup in:
- Google Cloud Console
- Apple Developer Portal

## AI Integration

- Primary: GPT-5 Mini ($0.25/$2.00 per 1M tokens)
- Fallback: DeepSeek V3.2 ($0.28/$0.42 per 1M tokens)
- Embeddings: text-embedding-3-small for pgvector

## Commands

```bash
# Development
pnpm dev                    # Start all apps
pnpm dev --filter web       # Start web only
pnpm dev --filter mobile    # Start mobile only

# Database
docker-compose up -d        # Start PostgreSQL
pnpm db:push               # Push schema changes
pnpm db:migrate            # Run migrations

# Build
pnpm build                  # Build all packages
eas build --platform ios    # Build iOS
eas build --platform android # Build Android
```

## Reference Materials

- `/docs/README.md` - Overview of all features with navigation
- `/docs/features/` - 14 comprehensive feature specifications
- `/old-docs/references/` - UI reference images from competitor analysis
- `/old-docs/COMPETITIVE_MARKET_ANALYSIS.md` - Market analysis and pricing strategy

## Implementation Agents

Each feature document includes agent-specific implementation guides:

| Agent | Responsibilities |
|-------|------------------|
| **foundation-agent** | Database schemas, migrations, environment config |
| **backend-agent** | API routes, tRPC procedures, authentication logic |
| **ui-agent** | Reusable components, design system, animations |
| **pages-agent** | Screen layouts, navigation, page-level state |

## Development Phases

1. **Foundation** - Monorepo, database, authentication
2. **Core Loop** - Streak tracking, check-ins, panic button, dashboard
3. **AI & Engagement** - Alex (AI companion), gamification, achievements
4. **Community & Content** - Community feed, education modules, challenges
5. **Safety & Premium** - Content blocker, screen time, friction mode, subscriptions
6. **Polish & Launch** - Performance, accessibility, store submission

## Important Notes

- All code uses TypeScript
- Shared components in `packages/ui` use NativeWind
- API routes use tRPC v11 with Zod validation
- Database queries use Drizzle ORM (no raw SQL except pgvector)
- Mobile uses Expo Router (file-based routing)
- Web uses Next.js App Router
