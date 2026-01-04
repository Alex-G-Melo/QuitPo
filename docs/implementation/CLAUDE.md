# Alex Friend - Implementation Plan

## Overview

This document guides the implementation of Alex Friend, a multi-addiction recovery platform. Implementation follows 6 sequential phases, each building on the previous.

## Tech Stack Quick Reference

| Layer | Technology |
|-------|------------|
| Mobile | Expo SDK 54 + React Native 0.81 |
| Web | Next.js 16.1 (App Router) |
| Styling | Tailwind CSS / NativeWind 4.1 |
| Backend | tRPC v11 + Next.js API Routes |
| Database | PostgreSQL 16 + pgvector |
| ORM | Drizzle ORM 0.45 |
| Auth | Firebase Authentication |
| AI | GPT-5 Mini (primary), DeepSeek V3.2 (fallback) |
| Payments | Stripe (web) + RevenueCat (mobile) |

## Implementation Phases

| Phase | Folder | Status | Dependencies |
|-------|--------|--------|--------------|
| 1. Foundation | `01-foundation/` | Not Started | None |
| 2. Core Loop | `02-core-loop/` | Not Started | Phase 1 |
| 3. AI & Engagement | `03-ai-engagement/` | Not Started | Phase 2 |
| 4. Community & Content | `04-community-content/` | Not Started | Phase 2 |
| 5. Safety Features | `05-safety-features/` | Not Started | Phase 2 |
| 6. Onboarding & Polish | `06-onboarding-polish/` | Not Started | Phase 3-5 |

## Phase Summaries

### Phase 1: Foundation
Setup monorepo, database, authentication, and base project structure.

### Phase 2: Core Loop
Dashboard, streak tracking, daily check-ins, panic button - the daily engagement loop.

### Phase 3: AI & Engagement
Alex AI companion, Life Tree gamification, achievements system.

### Phase 4: Community & Content
Anonymous community feed, education modules, group challenges.

### Phase 5: Safety Features
Content blocker, screen time tracking, friction mode, Chrome extension.

### Phase 6: Onboarding & Polish
Splash screens, onboarding quiz, app store preparation, final polish.

## Agent Responsibilities

| Agent | Scope |
|-------|-------|
| **foundation-agent** | Database schemas, migrations, env config, Docker setup |
| **backend-agent** | tRPC routers, API routes, auth logic, external integrations |
| **ui-agent** | Shared components in `packages/ui`, design system, animations |
| **pages-agent** | Screen layouts, navigation, page-level state management |

## Project Structure Target

```
alex-friend/
├── apps/
│   ├── web/                    # Next.js 16.1
│   ├── mobile/                 # Expo SDK 54
│   └── extension/              # Chrome Extension
├── packages/
│   ├── ui/                     # Shared components
│   ├── api/                    # tRPC routers
│   ├── db/                     # Drizzle schemas
│   └── shared/                 # Types, utils
├── docs/
│   ├── features/               # Feature specs
│   ├── implementation/         # This folder
│   └── architecture/           # Architecture docs
└── docker-compose.yml
```

## Implementation Rules

1. **Always read feature docs first** - Each feature has specs in `/docs/features/`
2. **Follow addiction-agnostic patterns** - 90% shared code, 10% addiction-specific
3. **Use TypeScript strictly** - No `any` types, full type safety
4. **Mobile-first** - Design for mobile, adapt to web
5. **Test critical paths** - Auth, payments, streak calculations
6. **No raw SQL** - Use Drizzle ORM (except pgvector operations)

## Current Phase

**Phase 1: Foundation** - Start here.

See `01-foundation/README.md` for detailed tasks.
