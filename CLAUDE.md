# QuitPo - Project Context

QuitPo is a porn addiction recovery app inspired by [Quittr](https://quittrapp.com/). This document provides context for Claude Code when working on this project.

## Quick Reference

| Aspect | Details |
|--------|---------|
| **Project Name** | QuitPo (quit porn) |
| **Type** | Multi-platform recovery app |
| **Platforms** | iOS, Android, Web, Chrome Extension |
| **Architecture** | pnpm + Turborepo monorepo |

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
quitpo/
├── apps/
│   ├── web/                    # Next.js 16.1 (web app + API)
│   ├── mobile/                 # Expo SDK 54 (iOS + Android)
│   └── extension/              # Chrome Extension (Manifest V3)
├── packages/
│   ├── ui/                     # Shared React Native components
│   ├── api/                    # tRPC routers
│   ├── db/                     # Drizzle ORM + pgvector schemas
│   └── shared/                 # Types, utils, constants
├── docs/                       # Implementation plans (11 phases)
├── docker-compose.yml          # PostgreSQL + pgvector
├── turbo.json
└── pnpm-workspace.yaml
```

## Documentation Structure

Implementation is split into phases in `/docs/`:

1. **01-foundation.md** - Monorepo setup, Docker, Next.js, Expo, Chrome extension
2. **02-auth.md** - Firebase Auth, OAuth (Google + Apple), onboarding quiz
3. **03-core-features.md** - Database schema, streak tracking, panic button, check-ins
4. **04-ai-therapist.md** - GPT-5 Mini integration, chat interface, embeddings
5. **05-gamification.md** - Life Tree stages, achievements, progress visualization
6. **06-community.md** - Posts, comments, voting, challenges, moderation
7. **07-education.md** - Learning modules, quizzes, journal, recommendations
8. **08-mindfulness.md** - Breathing exercises, meditation, sounds, notifications
9. **09-content-blocker.md** - Screen Time API, Chrome extension, blocklists
10. **10-monetization.md** - RevenueCat, Stripe, subscription management
11. **11-launch.md** - Performance, accessibility, security, store submissions

## Key Features

- **Panic Button** - Camera overlay with motivational messages + haptic feedback
- **AI Therapist** - 24/7 GPT-5 Mini powered chat (DeepSeek fallback)
- **Streak Tracking** - 90-day rewiring goal with daily check-ins
- **Life Tree** - 8-stage gamification (Seed → Nirvana)
- **Community** - Anonymous posting, challenges, leaderboards
- **Content Blocker** - 1M+ site blocklist, keyword blocking, safe search
- **Education** - 4 modules of science-based recovery content

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

## Reference Files

- **QUITTR_ANALYSIS.md** - Competitor analysis (features, pricing, flow)
- **IMPLEMENTATION_PLAN.md** - Full 74-step implementation plan

## Important Notes

- All code uses TypeScript
- Shared components in `packages/ui` use NativeWind
- API routes use tRPC v11 with Zod validation
- Database queries use Drizzle ORM (no raw SQL except pgvector)
- Mobile uses Expo Router (file-based routing)
- Web uses Next.js App Router
