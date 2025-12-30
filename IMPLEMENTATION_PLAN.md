# QuitPo - Implementation Plan

> **Last Updated:** December 30, 2025
>
> **Detailed Documentation:** See `/docs/` folder for implementation code and instructions.

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Mobile** | Expo SDK + React Native (New Architecture) | SDK 54 / RN 0.81 |
| **Web** | Next.js (App Router) | 16.1 |
| **Extension** | Chrome Extension (Manifest V3) | - |
| **Styling** | NativeWind (Tailwind for RN) | 4.1.23 |
| **Backend** | Next.js API Routes + tRPC | v11 |
| **Database** | Self-hosted PostgreSQL + pgvector | 16+ |
| **ORM** | Drizzle ORM | 0.45.1 |
| **Auth** | Firebase Authentication | Latest |
| **AI** | GPT-5 Mini (primary), DeepSeek V3.2 (fallback) | - |
| **Embeddings** | pgvector | - |
| **Payments** | Stripe + RevenueCat | - |
| **Animations** | Rive + React Native Reanimated | 9.7.1 / 4.2.1 |
| **State** | Zustand + TanStack Query | 5.x / v5.90.11 |
| **Monorepo** | pnpm + Turborepo | Latest |

### Target Platforms
- iOS (App Store)
- Android (Google Play)
- Web (PWA)
- Chrome Extension

---

## Architecture

```
quitpo/
├── apps/
│   ├── web/                    # Next.js 16.1
│   │   ├── app/
│   │   │   ├── (marketing)/    # Landing, pricing
│   │   │   ├── (app)/          # Dashboard, features
│   │   │   └── api/            # API routes
│   │   └── lib/firebase.ts
│   ├── mobile/                 # Expo SDK 54
│   │   ├── app/                # Expo Router
│   │   ├── google-services.json
│   │   └── GoogleService-Info.plist
│   └── extension/              # Chrome Extension
│       ├── src/
│       │   ├── background.ts
│       │   ├── content.ts
│       │   ├── popup/
│       │   └── options/
│       └── manifest.json
├── packages/
│   ├── ui/                     # Shared components
│   ├── api/                    # tRPC v11
│   ├── db/                     # Drizzle + pgvector
│   └── shared/                 # Types, utils
├── docker-compose.yml          # PostgreSQL + pgvector
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Authentication (Firebase)

### Setup Steps

**1. Google Cloud Console**
```
- Create project
- Enable Google Sign-In API
- Create OAuth 2.0 credentials (iOS, Android, Web)
- Download google-services.json and GoogleService-Info.plist
```

**2. Apple Developer Portal**
```
- Create App ID with "Sign in with Apple"
- Create Service ID for web
- Generate private key
```

**3. Firebase Console**
```
- Create project
- Enable Auth → Google + Apple providers
- Add iOS/Android/Web apps
- Copy configs
```

### Installation
```bash
npx expo install @react-native-firebase/app @react-native-firebase/auth
npx expo prebuild
```

### Free Tier Limits
- 50K MAU
- Unlimited email/password
- 10K SMS/month
- Unlimited social auth

---

## Database Schema

```sql
-- Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Users (Firebase UID)
users (id, email, createdAt)

-- Profiles
profiles (userId, displayName, avatarUrl, dependencyScore, onboardingComplete)

-- Core
streaks (userId, startDate, endDate, currentDays, longestDays)
pledges (userId, pledgeType, startTime, duration, status)
reasons (userId, reason, createdAt)

-- AI Chat
chat_sessions (userId, title, createdAt)
chat_messages (sessionId, role, content, embedding vector(1536), createdAt)

-- Community
posts (userId, content, embedding vector(1536), isAnonymous, upvotes, createdAt)
comments (postId, userId, content, createdAt)
post_votes (postId, userId, voteType)

-- Gamification
achievements (userId, achievementType, unlockedAt)
tree_progress (userId, stage, growthPoints)
challenges (title, description, duration)
challenge_participants (challengeId, userId, progress)

-- Education
modules (title, description, order)
lessons (moduleId, title, content, embedding vector(1536), order)
user_progress (userId, lessonId, completedAt)

-- Blocker
blocked_sites (userId, domain)
blocked_keywords (userId, keyword)
extension_settings (userId, enabled, blocklistVersion)
```

---

## API Structure

```
/api/
├── auth/firebase/      # Token verification
├── trpc/[trpc]         # tRPC handler
├── ai/chat             # AI therapist
└── webhooks/
    ├── stripe
    └── revenuecat
```

---

## Implementation Steps

> Each phase has detailed code and instructions in the `/docs/` folder.

### Phase 1: Foundation (1-10) → [docs/01-foundation.md](docs/01-foundation.md)
1. [ ] Initialize monorepo (pnpm + Turborepo)
2. [ ] Docker Compose (PostgreSQL + pgvector)
3. [ ] Next.js 16.1 web app
4. [ ] Expo SDK 54 mobile app
5. [ ] Chrome extension scaffold
6. [ ] Shared packages (ui, api, db, shared)
7. [ ] NativeWind 4.1.23
8. [ ] Drizzle ORM 0.45.1 + migrations
9. [ ] Firebase project + Auth
10. [ ] Base database schema

### Phase 2: Auth & Onboarding (11-17) → [docs/02-auth.md](docs/02-auth.md)
11. [ ] Google Cloud OAuth setup
12. [ ] Apple Sign in with Apple setup
13. [ ] Firebase Auth (email/password)
14. [ ] Google Sign-In (web + mobile)
15. [ ] Apple Sign-In (web + mobile)
16. [ ] 12-page onboarding quiz
17. [ ] Dependency score calculation

### Phase 3: Core Features (18-24) → [docs/03-core-features.md](docs/03-core-features.md)
18. [ ] Streak tracking system
19. [ ] Streak dashboard UI
20. [ ] Panic Button (camera + overlay)
21. [ ] Haptic feedback + messages
22. [ ] Daily check-in system
23. [ ] Pledge system
24. [ ] "Reasons for Change" feature

### Phase 4: AI Therapist (25-30) → [docs/04-ai-therapist.md](docs/04-ai-therapist.md)
25. [ ] GPT-5 Mini integration
26. [ ] AI system prompt
27. [ ] Chat interface (web + mobile)
28. [ ] Message persistence
29. [ ] pgvector embeddings
30. [ ] Daily message limits

### Phase 5: Gamification (31-36) → [docs/05-gamification.md](docs/05-gamification.md)
31. [ ] Life Tree stages (8 orbs)
32. [ ] Rive animations
33. [ ] Achievement system
34. [ ] Progress visualization
35. [ ] Milestone celebrations
36. [ ] Growth points calculation

### Phase 6: Community (37-43) → [docs/06-community.md](docs/06-community.md)
37. [ ] Post feed
38. [ ] Comments + threading
39. [ ] Upvote/downvote
40. [ ] Anonymous posting
41. [ ] 28-day challenge leaderboard
42. [ ] Direct messaging
43. [ ] Moderation tools

### Phase 7: Education (44-49) → [docs/07-education.md](docs/07-education.md)
44. [ ] Learning modules (4 sections)
45. [ ] Lesson viewer
46. [ ] Progress tracking
47. [ ] Quizzes
48. [ ] Content recommendations (pgvector)
49. [ ] Recovery journal

### Phase 8: Mindfulness (50-54) → [docs/08-mindfulness.md](docs/08-mindfulness.md)
50. [ ] Breathing exercises
51. [ ] Meditation timer
52. [ ] Relaxing sounds
53. [ ] Scheduled reminders
54. [ ] Push notifications

### Phase 9: Content Blocker (55-62) → [docs/09-content-blocker.md](docs/09-content-blocker.md)
55. [ ] Screen Time API (react-native-device-activity)
56. [ ] Mobile blocker UI
57. [ ] Chrome extension service worker
58. [ ] Content script blocking
59. [ ] Extension popup
60. [ ] Keyword blocking
61. [ ] Blocklist sync
62. [ ] Safe search enforcement

### Phase 10: Monetization (63-68) → [docs/10-monetization.md](docs/10-monetization.md)
63. [ ] RevenueCat (mobile)
64. [ ] Stripe (web)
65. [ ] Free vs premium gates
66. [ ] Subscription UI
67. [ ] Webhook handlers
68. [ ] Trial period

### Phase 11: Launch (69-74) → [docs/11-launch.md](docs/11-launch.md)
69. [ ] Performance optimization
70. [ ] Accessibility audit
71. [ ] Security audit
72. [ ] App Store submission
73. [ ] Play Store submission
74. [ ] Chrome Web Store submission

---

## Key Files

```
apps/web/
├── app/layout.tsx
├── app/page.tsx
├── app/(marketing)/page.tsx
├── app/(marketing)/pricing/page.tsx
├── app/(app)/layout.tsx
├── app/(app)/dashboard/page.tsx
├── app/(app)/panic/page.tsx
├── app/(app)/chat/page.tsx
├── app/(app)/community/page.tsx
├── app/(app)/learn/page.tsx
├── app/(app)/journal/page.tsx
├── app/api/trpc/[trpc]/route.ts
├── lib/firebase.ts
├── next.config.ts
└── tailwind.config.ts

apps/mobile/
├── app/_layout.tsx
├── app/(auth)/sign-in.tsx
├── app/(auth)/sign-up.tsx
├── app/(onboarding)/quiz.tsx
├── app/(tabs)/_layout.tsx
├── app/(tabs)/index.tsx
├── app/(tabs)/panic.tsx
├── app/(tabs)/chat.tsx
├── app/(tabs)/community.tsx
├── app/(tabs)/profile.tsx
├── lib/firebase.ts
├── app.config.ts
├── google-services.json
└── GoogleService-Info.plist

apps/extension/
├── src/background.ts
├── src/content.ts
├── src/popup/Popup.tsx
├── src/options/Options.tsx
├── manifest.json
└── vite.config.ts

packages/ui/src/
├── Button.tsx
├── Card.tsx
├── Input.tsx
├── StreakCounter.tsx
├── PanicButton.tsx
├── LifeTree.tsx
└── ChatBubble.tsx

packages/api/src/
├── trpc.ts
├── root.ts
└── routers/
    ├── user.ts
    ├── streak.ts
    ├── chat.ts
    ├── community.ts
    ├── education.ts
    └── blocker.ts

packages/db/src/
├── schema.ts
├── client.ts
├── embeddings.ts
└── migrations/

packages/shared/src/
├── types.ts
├── constants.ts
├── utils.ts
└── validators.ts
```

---

## Package Versions

```json
{
  "next": "^16.1.0",
  "react": "^19.0.0",
  "react-native": "0.81.0",
  "expo": "~54.0.0",
  "@react-native-firebase/app": "^21.0.0",
  "@react-native-firebase/auth": "^21.0.0",
  "drizzle-orm": "^0.45.1",
  "@trpc/server": "^11.0.0",
  "@trpc/client": "^11.0.0",
  "@trpc/react-query": "^11.0.0",
  "@tanstack/react-query": "^5.90.11",
  "zustand": "^5.0.0",
  "nativewind": "^4.1.23",
  "tailwindcss": "^3.4.17",
  "react-native-reanimated": "^4.2.1",
  "rive-react-native": "^9.7.1",
  "zod": "^3.24.0"
}
```

---

## Decisions

| Item | Decision |
|------|----------|
| Database | Self-hosted PostgreSQL + pgvector |
| Platforms | iOS + Android + Web + Chrome Extension |
| Auth | Firebase (free tier) |
| Social Login | Google + Apple |
| AI | GPT-5 Mini + DeepSeek V3.2 fallback |
| Framework | React Native + Expo + Next.js monorepo |
| Cost | Free tier focus |
