# Phase 5: Safety Features

## Objective

Build the protective features that help users block harmful content and add friction to unconscious behaviors: content blocker, screen time tracking, friction mode, and Chrome extension.

## Prerequisites

- Phase 2 completed
- User authentication working
- Push notifications configured

## Features in This Phase

| Feature | Doc Reference | Priority |
|---------|---------------|----------|
| Content Blocker | `/docs/features/09-content-blocker/` | High |
| Screen Time Tracking | `/docs/features/10-screen-time/` | Medium |
| Friction Mode | `/docs/features/11-friction-mode/` | High |
| Chrome Extension | `/docs/features/09-content-blocker/` | High |
| Social Safety Guides | `/docs/features/12-social-safety/` | Medium |

---

## Tasks

### 5.1 Content Blocker - Chrome Extension

**Agent**: foundation-agent (new app setup)

| Task | Status | Files |
|------|--------|-------|
| Create extension structure | Not Started | `apps/extension/` |
| Setup Manifest V3 | Not Started | `apps/extension/manifest.json` |
| Create popup UI | Not Started | `apps/extension/popup/` |
| Build content script | Not Started | `apps/extension/content.ts` |
| Implement blocklist logic | Not Started | `apps/extension/background.ts` |
| Add block page redirect | Not Started | `apps/extension/blocked.html` |
| Create sync with user account | Not Started | `apps/extension/api.ts` |

**Extension Structure:**
```
apps/extension/
├── manifest.json
├── popup/
│   ├── index.html
│   ├── popup.tsx
│   └── styles.css
├── content.ts           # Injected into pages
├── background.ts        # Service worker
├── blocked.html         # Shown when site blocked
├── blocklists/
│   ├── porn.json        # 1M+ sites
│   ├── gambling.json
│   └── common.json
└── utils/
    └── storage.ts
```

**Manifest V3:**
```json
{
  "manifest_version": 3,
  "name": "Alex Friend - Content Blocker",
  "version": "1.0.0",
  "description": "Block harmful content and stay focused on recovery",
  "permissions": [
    "storage",
    "declarativeNetRequest",
    "tabs",
    "alarms"
  ],
  "host_permissions": ["<all_urls>"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"],
    "run_at": "document_start"
  }],
  "action": {
    "default_popup": "popup/index.html",
    "default_icon": "icons/icon48.png"
  },
  "declarative_net_request": {
    "rule_resources": [{
      "id": "blocklist",
      "enabled": true,
      "path": "rules.json"
    }]
  }
}
```

**Block Logic:**
```typescript
// apps/extension/background.ts
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: blockedDomains.map((domain, index) => ({
    id: index + 1,
    priority: 1,
    action: { type: 'redirect', redirect: { extensionPath: '/blocked.html' } },
    condition: { urlFilter: `*://*.${domain}/*`, resourceTypes: ['main_frame'] },
  })),
  removeRuleIds: existingRuleIds,
});
```

---

### 5.2 Blocklist Management

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Create blocklist tRPC router | Not Started | `packages/api/routers/blocklist.ts` |
| Store user custom blocks | Not Started | `packages/db/schema/blocklist.ts` |
| Implement keyword detection | Not Started | `packages/api/services/keyword-filter.ts` |
| Add whitelist support | Not Started | User-specific allowed sites |

**Blocklist Schema:**
```typescript
// packages/db/schema/blocklist.ts
export const userBlocklist = pgTable('user_blocklist', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  domain: varchar('domain', { length: 255 }).notNull(),
  isWhitelist: boolean('is_whitelist').default(false).notNull(),
  addedAt: timestamp('added_at').defaultNow().notNull(),
});

export const blocklistCategories = pgTable('blocklist_categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(),
  category: varchar('category', { length: 50 }).notNull(), // 'explicit', 'suggestive', 'gambling', etc.
  domainCount: integer('domain_count').notNull(),
  lastUpdated: timestamp('last_updated').defaultNow().notNull(),
});
```

**Addiction-Specific Blocklists:**

| Addiction | Categories | Approx. Domains |
|-----------|------------|-----------------|
| Porn | explicit, suggestive, dating, NSFW reddit | 1M+ |
| Gambling | casinos, sports betting, crypto gambling, poker | 50K+ |
| Social Media | social platforms, news feeds, infinite scroll | 500+ |
| Gaming | game platforms, streaming, gaming communities | 1K+ |

---

### 5.3 Screen Time Tracking

**Agent**: backend-agent + pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create screen time schema | Not Started | `packages/db/schema/screen-time.ts` |
| Build usage tracker (extension) | Not Started | `apps/extension/tracker.ts` |
| Create screen time dashboard | Not Started | `apps/mobile/app/screen-time/` |
| Add daily/weekly reports | Not Started | `packages/api/routers/screen-time.ts` |
| Implement usage alerts | Not Started | Push notifications |

**Screen Time Schema:**
```typescript
// packages/db/schema/screen-time.ts
export const screenTimeLog = pgTable('screen_time_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  domain: varchar('domain', { length: 255 }).notNull(),
  category: varchar('category', { length: 50 }), // 'risky', 'productive', 'neutral'
  durationSeconds: integer('duration_seconds').notNull(),
  date: date('date').notNull(),
});

export const screenTimeLimits = pgTable('screen_time_limits', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  category: varchar('category', { length: 50 }).notNull(),
  dailyLimitMinutes: integer('daily_limit_minutes').notNull(),
  isEnabled: boolean('is_enabled').default(true).notNull(),
});
```

**Screen Time UI:**
```
┌─────────────────────────────────────┐
│  Screen Time           This Week ▾ │
├─────────────────────────────────────┤
│  Daily Average: 3h 24m              │
│  ▓▓▓▓▓▓▓▓░░ -15% from last week    │
├─────────────────────────────────────┤
│  By Category:                       │
│  ┌─────────────────────────────┐   │
│  │ Social Media    2h 10m  ⚠️  │   │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░           │   │
│  ├─────────────────────────────┤   │
│  │ Entertainment   45m         │   │
│  │ ▓▓▓▓▓░░░░░░░░░░            │   │
│  ├─────────────────────────────┤   │
│  │ Productive      29m         │   │
│  │ ▓▓▓░░░░░░░░░░░░            │   │
│  └─────────────────────────────┘   │
├─────────────────────────────────────┤
│  Risky Apps Opened: 12 times       │
│  Blocked Attempts: 5               │
└─────────────────────────────────────┘
```

---

### 5.4 Friction Mode

**Agent**: pages-agent + ui-agent

| Task | Status | Files |
|------|--------|-------|
| Create friction overlay | Not Started | `packages/ui/src/friction/overlay.tsx` |
| Build breathing animation | Not Started | `packages/ui/src/friction/breathing.tsx` |
| Add friction settings | Not Started | `apps/mobile/app/settings/friction.tsx` |
| Implement app detection | Not Started | Native module needed |
| Create friction bypass log | Not Started | `packages/db/schema/friction.ts` |

**Friction Mode Concept:**

Based on Max Planck Institute research showing 57% reduction in unconscious app opens when users must complete a breathing exercise before opening "risky" apps.

**Friction Flow:**
```
User opens risky app (e.g., Twitter, TikTok)
           │
           ▼
┌─────────────────────────────────────┐
│                                     │
│        Take a moment...             │
│                                     │
│     ┌───────────────────┐          │
│     │                   │          │
│     │    ○ Breathe ○    │          │
│     │                   │          │
│     └───────────────────┘          │
│                                     │
│   Breathe in... 4 seconds           │
│                                     │
│   ─────────────────────────         │
│   Why do you want to open this app? │
│   [     Write your intention     ]  │
│   ─────────────────────────         │
│                                     │
│        [ Continue Anyway ]          │
│        [ Go Back ]                  │
│                                     │
└─────────────────────────────────────┘
```

**Friction Schema:**
```typescript
// packages/db/schema/friction.ts
export const frictionSettings = pgTable('friction_settings', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull().unique(),
  isEnabled: boolean('is_enabled').default(true).notNull(),
  breathingDuration: integer('breathing_duration').default(10), // seconds
  requireIntention: boolean('require_intention').default(true),
  blockedApps: json('blocked_apps').$type<string[]>().default([]),
});

export const frictionLogs = pgTable('friction_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  appName: varchar('app_name', { length: 100 }).notNull(),
  outcome: varchar('outcome', { length: 20 }).notNull(), // 'continued' | 'cancelled'
  intention: text('intention'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

**Addiction-Specific Friction Messages:**
```typescript
// packages/shared/constants/friction-messages.ts
export const FRICTION_PROMPTS = {
  porn: {
    title: "Take a moment...",
    question: "What are you really looking for right now?",
    alternatives: ["Talk to Alex", "Do breathing exercise", "Call a friend"],
  },
  gambling: {
    title: "Pause before you bet...",
    question: "Can you afford to lose this money?",
    alternatives: ["Check your finances", "Set a limit first", "Talk to Alex"],
  },
  social_media: {
    title: "Before you scroll...",
    question: "What do you need from this app right now?",
    alternatives: ["Set a timer", "Check messages only", "Do something else"],
  },
  gaming: {
    title: "Before you play...",
    question: "How long do you plan to play?",
    alternatives: ["Set a 30-min timer", "Do one task first", "Schedule for later"],
  },
};
```

---

### 5.5 Social Safety Guides

**Agent**: pages-agent

| Task | Status | Files |
|------|--------|-------|
| Create safety guides pages | Not Started | `apps/mobile/app/safety-guides/` |
| Build platform-specific guides | Not Started | See docs/features/12-social-safety/ |
| Add in-app tutorials | Not Started | `packages/ui/src/tutorials/` |

**Platforms to Cover:**
- Twitter/X (content settings, muted words)
- Instagram (sensitive content, time limits)
- TikTok (restricted mode, screen time)
- Reddit (NSFW settings, subreddit blocking)
- YouTube (restricted mode, reminders)
- Discord (server settings, DM restrictions)

---

### 5.6 iOS Screen Time Integration

**Agent**: foundation-agent (native module)

| Task | Status | Files |
|------|--------|-------|
| Research Screen Time API | Not Started | Apple docs |
| Create native module | Not Started | `apps/mobile/ios/ScreenTimeModule/` |
| Implement app limits | Not Started | Using DeviceActivity framework |
| Add family sharing support | Not Started | For accountability partners |

**Note**: iOS Screen Time integration requires:
- Family Sharing or Device Management entitlement
- User must grant permission in Settings
- Limited to app categories, not individual apps (without MDM)

---

## Completion Checklist

Before moving to Phase 6, verify:

- [ ] Chrome extension installs correctly
- [ ] Blocked sites show custom block page
- [ ] User can add custom sites to blocklist
- [ ] Whitelist overrides blocklist correctly
- [ ] Screen time tracks usage by category
- [ ] Daily/weekly reports generate correctly
- [ ] Friction mode activates for configured apps
- [ ] Breathing animation works smoothly
- [ ] Intention input is logged
- [ ] Social safety guides are complete
- [ ] Extension syncs settings with user account

## Next Phase

Once all checklist items pass, proceed to [Phase 6: Onboarding & Polish](../06-onboarding-polish/README.md).
