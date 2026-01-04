# Phase 1: Foundation

## Objective

Set up the complete development infrastructure: monorepo, database, authentication, and base project structure that all other phases build upon.

## Prerequisites

- Node.js 20+
- pnpm 9+
- Docker Desktop
- Firebase project created
- PostgreSQL client (optional, for debugging)

## Tasks

### 1.1 Monorepo Setup

**Agent**: foundation-agent

| Task | Status | Files |
|------|--------|-------|
| Initialize pnpm workspace | Not Started | `pnpm-workspace.yaml` |
| Configure Turborepo | Not Started | `turbo.json` |
| Setup TypeScript base config | Not Started | `tsconfig.json` |
| Create shared ESLint config | Not Started | `packages/eslint-config/` |
| Create shared Tailwind config | Not Started | `packages/tailwind-config/` |

**Commands to run:**
```bash
pnpm init
pnpm add -D turbo typescript @types/node
mkdir -p apps packages
```

**turbo.json structure:**
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": [".next/**", "dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": { "dependsOn": ["^lint"] },
    "typecheck": { "dependsOn": ["^typecheck"] }
  }
}
```

---

### 1.2 Database Setup

**Agent**: foundation-agent

| Task | Status | Files |
|------|--------|-------|
| Create docker-compose.yml | Not Started | `docker-compose.yml` |
| Setup Drizzle ORM package | Not Started | `packages/db/` |
| Create base schemas | Not Started | `packages/db/schema/` |
| Configure pgvector extension | Not Started | `packages/db/migrations/` |
| Create db push/migrate scripts | Not Started | `package.json` scripts |

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  postgres:
    image: pgvector/pgvector:pg16
    container_name: alexfriend-db
    environment:
      POSTGRES_USER: alex
      POSTGRES_PASSWORD: alex_dev_password
      POSTGRES_DB: alexfriend
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Base schemas to create:**

```typescript
// packages/db/schema/users.ts
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  firebaseUid: varchar('firebase_uid', { length: 128 }).unique().notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  displayName: varchar('display_name', { length: 100 }),
  avatarUrl: text('avatar_url'),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(), // 'porn' | 'gambling' | 'social_media' | 'gaming'
  timezone: varchar('timezone', { length: 50 }).default('UTC'),
  isPremium: boolean('is_premium').default(false),
  premiumExpiresAt: timestamp('premium_expires_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// packages/db/schema/streaks.ts
export const streaks = pgTable('streaks', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'), // null = ongoing
  currentDays: integer('current_days').default(0).notNull(),
  longestDays: integer('longest_days').default(0).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// packages/db/schema/checkins.ts
export const checkins = pgTable('checkins', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  date: date('date').notNull(),
  mood: integer('mood').notNull(), // 1-5
  urgeLevel: integer('urge_level').notNull(), // 1-5
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

---

### 1.3 Next.js Web App

**Agent**: foundation-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create Next.js 16.1 app | Not Started | `apps/web/` |
| Configure App Router | Not Started | `apps/web/app/` |
| Setup Tailwind CSS | Not Started | `apps/web/tailwind.config.ts` |
| Create base layout | Not Started | `apps/web/app/layout.tsx` |
| Setup environment variables | Not Started | `apps/web/.env.example` |

**Commands:**
```bash
cd apps
pnpm create next-app@latest web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Environment variables needed:**
```env
# Database
DATABASE_URL=postgresql://alex:alex_dev_password@localhost:5432/alexfriend

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# AI
OPENAI_API_KEY=
DEEPSEEK_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

---

### 1.4 Expo Mobile App

**Agent**: foundation-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create Expo SDK 54 app | Not Started | `apps/mobile/` |
| Configure Expo Router | Not Started | `apps/mobile/app/` |
| Setup NativeWind | Not Started | `apps/mobile/tailwind.config.js` |
| Configure app.json | Not Started | `apps/mobile/app.json` |
| Setup EAS Build | Not Started | `apps/mobile/eas.json` |

**Commands:**
```bash
cd apps
npx create-expo-app@latest mobile --template tabs
cd mobile
npx expo install nativewind tailwindcss
```

**app.json key settings:**
```json
{
  "expo": {
    "name": "Alex Friend",
    "slug": "alex-friend",
    "scheme": "alexfriend",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "bundleIdentifier": "com.quitpo.alexfriend",
      "supportsTablet": false
    },
    "android": {
      "package": "com.quitpo.alexfriend",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    }
  }
}
```

---

### 1.5 Firebase Authentication

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Initialize Firebase in web | Not Started | `apps/web/lib/firebase.ts` |
| Initialize Firebase in mobile | Not Started | `apps/mobile/lib/firebase.ts` |
| Create auth context | Not Started | `packages/shared/contexts/auth.tsx` |
| Setup Firebase Admin SDK | Not Started | `apps/web/lib/firebase-admin.ts` |
| Create auth middleware | Not Started | `packages/api/middleware/auth.ts` |

**Firebase config:**
```typescript
// packages/shared/lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
```

**Auth providers to enable in Firebase Console:**
- Email/Password
- Google Sign-In
- Apple Sign-In

---

### 1.6 tRPC Setup

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Create tRPC package | Not Started | `packages/api/` |
| Setup tRPC router | Not Started | `packages/api/root.ts` |
| Create tRPC context | Not Started | `packages/api/trpc.ts` |
| Setup React Query provider | Not Started | `packages/api/react.tsx` |
| Create user router | Not Started | `packages/api/routers/user.ts` |

**tRPC structure:**
```typescript
// packages/api/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import { db } from '@alexfriend/db';

export const createTRPCContext = async (opts: { headers: Headers }) => {
  // Verify Firebase token and get user
  return { db, user: null };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' });
  return next({ ctx: { ...ctx, user: ctx.user } });
});
```

---

### 1.7 Shared UI Package

**Agent**: ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create UI package structure | Not Started | `packages/ui/` |
| Setup NativeWind config | Not Started | `packages/ui/tailwind.config.ts` |
| Create Button component | Not Started | `packages/ui/src/button.tsx` |
| Create Input component | Not Started | `packages/ui/src/input.tsx` |
| Create Card component | Not Started | `packages/ui/src/card.tsx` |
| Export components | Not Started | `packages/ui/index.ts` |

---

## Completion Checklist

Before moving to Phase 2, verify:

- [ ] `pnpm dev` starts all apps without errors
- [ ] `docker-compose up -d` starts PostgreSQL with pgvector
- [ ] `pnpm db:push` creates tables in database
- [ ] Firebase authentication works (sign up/in/out)
- [ ] tRPC calls work from both web and mobile
- [ ] Shared UI components render on both platforms
- [ ] TypeScript has no errors across all packages

## Next Phase

Once all checklist items pass, proceed to [Phase 2: Core Loop](../02-core-loop/README.md).
