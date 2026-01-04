# Multi-Addiction Architecture

## Overview

Alex Friend is designed as an **addiction-agnostic recovery platform** that supports multiple behavioral addiction types through a configurable content layer. The core mechanics (streak tracking, AI companion, gamification, community) remain identical across all addiction types — only the content, terminology, and specific blocklists change.

## Supported Addiction Types

| ID | Addiction Type | App Variant | Primary Markets | Problem Scale |
|----|---------------|-------------|-----------------|---------------|
| `porn` | Pornography | Alex Friend | Global | 200M+ affected |
| `gambling` | Gambling/Betting | Alex Friend | Brazil, Germany, UK | 80M+ globally, 10M+ Brazil |
| `social_media` | Social Media/Phone | Alex Friend | Brazil, Global | 210M+ addicted |
| `gaming` | Video Games | Alex Friend | Global (teens) | 60M+ affected |

## Architecture Principles

### 1. Single Codebase, Multiple Profiles
The app uses a single codebase with "addiction profiles" that configure content at runtime.

```
┌─────────────────────────────────────────────────────────────┐
│                     ALEX FRIEND APP                         │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Core      │  │   UI        │  │   Features  │         │
│  │   Engine    │  │   Shell     │  │   (shared)  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│                   ADDICTION PROFILE LAYER                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │   Porn   │ │ Gambling │ │  Social  │ │  Gaming  │       │
│  │  Profile │ │  Profile │ │  Profile │ │  Profile │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### 2. Content Externalization
All user-facing text is externalized into profile-specific content files:

```
packages/shared/
├── content/
│   ├── base/                    # Shared content (journey stages, etc.)
│   │   ├── stages.ts
│   │   └── achievements.ts
│   ├── porn/                    # Porn addiction content
│   │   ├── strings.ts           # UI strings
│   │   ├── triggers.ts          # Trigger categories
│   │   ├── education.ts         # Educational modules
│   │   ├── alex-prompts.ts      # AI personality/knowledge
│   │   └── blocklist.ts         # Sites/apps to block
│   ├── gambling/
│   │   ├── strings.ts
│   │   ├── triggers.ts
│   │   ├── education.ts
│   │   ├── alex-prompts.ts
│   │   └── blocklist.ts
│   ├── social_media/
│   │   └── ...
│   └── gaming/
│       └── ...
```

### 3. Feature Adaptability Matrix

| Feature | Shared (100%) | Profile-Specific Content |
|---------|---------------|-------------------------|
| **Streak System** | ✅ Core logic | Recovery terminology |
| **Space Journey** | ✅ All 9 stages | Stage descriptions (minor tweaks) |
| **Alex AI** | ✅ Personality, chat UI | Knowledge base, prompts, triggers |
| **Panic Button** | ✅ Camera overlay, haptics | Motivational messages |
| **Check-ins** | ✅ Flow, UI | Trigger categories, questions |
| **Gamification** | ✅ Life Tree, achievements | Achievement descriptions |
| **Community** | ✅ Feed, challenges | Community guidelines, categories |
| **Friction Mode** | ✅ Breathing animation, flow | Messages, monitored app defaults |
| **Mindfulness** | ✅ All content | None — universal |
| **Education** | ❌ Module structure only | All educational content |
| **Content Blocker** | ✅ Blocking logic | Blocklists (completely different) |
| **Screen Time** | ✅ Tracking logic | Risky app definitions |

## Addiction Profile Schema

```typescript
// packages/shared/types/addiction-profile.ts

export type AddictionType = 'porn' | 'gambling' | 'social_media' | 'gaming';

export interface AddictionProfile {
  id: AddictionType;

  // Branding
  displayName: string;           // "Pornography Recovery"
  shortName: string;             // "Porn"
  actionVerb: string;            // "watched porn", "gambled", "scrolled"
  urgeNoun: string;              // "urge", "craving", "impulse"

  // Terminology
  strings: ProfileStrings;

  // Triggers & Check-ins
  triggerCategories: TriggerCategory[];
  defaultRiskyApps: string[];

  // Education
  educationModules: EducationModule[];

  // Alex AI
  alexKnowledgeBase: string;     // Injected into system prompt
  alexTriggerResponses: Record<string, string>;

  // Content Blocking
  blocklist: BlocklistConfig;

  // Community
  postCategories: PostCategory[];
  communityGuidelines: string;
}
```

## Profile-Specific Content Examples

### 1. UI Strings

```typescript
// packages/shared/content/porn/strings.ts
export const pornStrings: ProfileStrings = {
  streakLabel: "Days porn-free",
  resetQuestion: "Did you watch porn?",
  resetConfirm: "I watched porn",
  urgeLabel: "Urge to watch",
  triggerQuestion: "What triggered you?",
  panicMessage: "You're stronger than this urge.",
  journeyContext: "recovering from porn addiction",
};

// packages/shared/content/gambling/strings.ts
export const gamblingStrings: ProfileStrings = {
  streakLabel: "Days gambling-free",
  resetQuestion: "Did you gamble?",
  resetConfirm: "I gambled",
  urgeLabel: "Urge to bet",
  triggerQuestion: "What triggered you?",
  panicMessage: "Your money stays with you today.",
  journeyContext: "recovering from gambling addiction",
};

// packages/shared/content/social_media/strings.ts
export const socialMediaStrings: ProfileStrings = {
  streakLabel: "Days mindfully present",
  resetQuestion: "Did you lose control scrolling?",
  resetConfirm: "I scrolled mindlessly",
  urgeLabel: "Urge to scroll",
  triggerQuestion: "What triggered you?",
  panicMessage: "Real life is waiting for you.",
  journeyContext: "building a healthier relationship with technology",
};
```

### 2. Trigger Categories

```typescript
// packages/shared/content/porn/triggers.ts
export const pornTriggers: TriggerCategory[] = [
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'stress', label: 'Stress/Anxiety', icon: '😰' },
  { id: 'loneliness', label: 'Loneliness', icon: '😔' },
  { id: 'late_night', label: 'Late Night', icon: '🌙' },
  { id: 'social_media', label: 'Social Media', icon: '📱' },
  { id: 'rejection', label: 'Rejection', icon: '💔' },
  { id: 'alcohol', label: 'Alcohol', icon: '🍺' },
];

// packages/shared/content/gambling/triggers.ts
export const gamblingTriggers: TriggerCategory[] = [
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'financial_stress', label: 'Financial Stress', icon: '💸' },
  { id: 'winning_memory', label: 'Remembering a Win', icon: '🎰' },
  { id: 'advertising', label: 'Betting Ads', icon: '📺' },
  { id: 'sports_event', label: 'Sports Event', icon: '⚽' },
  { id: 'friends_betting', label: 'Friends Betting', icon: '👥' },
  { id: 'alcohol', label: 'Alcohol', icon: '🍺' },
  { id: 'chasing_losses', label: 'Chasing Losses', icon: '📉' },
];

// packages/shared/content/social_media/triggers.ts
export const socialMediaTriggers: TriggerCategory[] = [
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'fomo', label: 'FOMO', icon: '😟' },
  { id: 'notification', label: 'Notification', icon: '🔔' },
  { id: 'waiting', label: 'Waiting/Idle Time', icon: '⏰' },
  { id: 'stress', label: 'Stress Relief', icon: '😰' },
  { id: 'comparison', label: 'Social Comparison', icon: '📊' },
  { id: 'habit', label: 'Pure Habit', icon: '🔄' },
];
```

### 3. Alex AI Knowledge Injection

```typescript
// packages/shared/content/porn/alex-prompts.ts
export const pornAlexKnowledge = `
## Addiction-Specific Knowledge

You are helping someone recover from pornography addiction. Key facts:
- Porn addiction affects dopamine pathways similar to substance addiction
- Recovery typically takes 90 days for neural pathway rewiring
- Common triggers: stress, boredom, loneliness, late nights
- PIED (Porn-Induced Erectile Dysfunction) is a real concern for many
- The "chaser effect" after relapse is normal and passes

## Therapeutic Approaches
- CBT techniques for urge surfing
- Understanding the addiction cycle
- Building healthy intimacy patterns
- Addressing underlying emotional needs
`;

// packages/shared/content/gambling/alex-prompts.ts
export const gamblingAlexKnowledge = `
## Addiction-Specific Knowledge

You are helping someone recover from gambling addiction. Key facts:
- Gambling addiction activates the same reward pathways as drugs
- The "near miss" effect keeps people hooked
- Financial consequences are often severe and hidden
- Recovery involves both behavioral change and financial repair
- Urges can be triggered by sports events, ads, or wins

## Therapeutic Approaches
- Cognitive restructuring around "luck" and probability
- Financial recovery planning (without judgment)
- Identifying and avoiding triggers (betting apps, casinos)
- Building alternative sources of excitement
- Addressing the "chasing losses" mentality
`;

// packages/shared/content/social_media/alex-prompts.ts
export const socialMediaAlexKnowledge = `
## Addiction-Specific Knowledge

You are helping someone build a healthier relationship with technology. Key facts:
- Social media is designed to be addictive (infinite scroll, variable rewards)
- Average user checks phone 142 times per day
- Comparison culture drives anxiety and depression
- "Digital detox" isn't about elimination but intentionality
- Notification sounds trigger dopamine responses

## Therapeutic Approaches
- Mindful technology use (intention before action)
- App blockers and friction tools
- Replacing scrolling with fulfilling activities
- Addressing FOMO and social comparison
- Building real-world connections
`;
```

### 4. Blocklist Configuration

```typescript
// packages/shared/content/porn/blocklist.ts
export const pornBlocklist: BlocklistConfig = {
  // 1M+ adult sites from curated lists
  siteLists: ['adult-domains.txt', 'porn-sites.txt'],
  appIdentifiers: {
    ios: ['com.pornhub.app', ...],
    android: ['com.pornhub', ...],
  },
  keywords: ['porn', 'xxx', 'adult', ...],
};

// packages/shared/content/gambling/blocklist.ts
export const gamblingBlocklist: BlocklistConfig = {
  siteLists: ['gambling-sites.txt', 'betting-sites.txt', 'casino-sites.txt'],
  appIdentifiers: {
    ios: ['com.bet365', 'com.draftkings', 'com.fanduel', ...],
    android: ['com.bet365', 'com.draftkings', ...],
  },
  keywords: ['bet', 'casino', 'slots', 'poker', 'sportsbook', ...],
  // Brazil-specific
  regionalSites: {
    BR: ['blaze.com', 'betano.com', 'sportingbet.com', ...],
  },
};

// packages/shared/content/social_media/blocklist.ts
export const socialMediaBlocklist: BlocklistConfig = {
  // No site blocking — only app friction
  siteLists: [],
  appIdentifiers: {
    ios: ['com.instagram', 'com.tiktok', 'com.twitter', 'com.facebook', ...],
    android: ['com.instagram.android', 'com.zhiliaoapp.musically', ...],
  },
  // Friction-only mode (don't block, just add breathing pause)
  frictionOnly: true,
};
```

## Onboarding Flow

### Profile Selection (First Screen After Auth)

```
┌─────────────────────────────────────────────┐
│                                             │
│  What brings you to Alex Friend?            │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🔒  Pornography                    │   │
│  │      Break free from compulsive     │   │
│  │      porn use                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🎰  Gambling & Betting             │   │
│  │      Stop gambling and protect      │   │
│  │      your finances                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  📱  Social Media & Phone           │   │
│  │      Build healthier tech habits    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🎮  Gaming                         │   │
│  │      Balance gaming with real life  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  ➕  Multiple                        │   │
│  │      I'm dealing with more than one │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Multi-Addiction Support

Users can select multiple addiction types. The app will:
1. Track separate streaks for each
2. Show combined dashboard with worst streak highlighted
3. Alex knows about all selected addictions
4. Community shows posts from all selected types
5. Education combines relevant modules

## Database Schema Extensions

```sql
-- User addiction profiles
CREATE TABLE user_addiction_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  addiction_type VARCHAR(20) NOT NULL, -- 'porn', 'gambling', etc.
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, addiction_type)
);

-- Streaks per addiction type
ALTER TABLE streaks ADD COLUMN addiction_type VARCHAR(20) DEFAULT 'porn';

-- Check-ins per addiction type
ALTER TABLE check_ins ADD COLUMN addiction_type VARCHAR(20) DEFAULT 'porn';

-- Community posts tagged by addiction
ALTER TABLE community_posts ADD COLUMN addiction_type VARCHAR(20) DEFAULT 'porn';

-- Friction events by addiction
ALTER TABLE friction_events ADD COLUMN addiction_type VARCHAR(20) DEFAULT 'porn';
```

## API Design

### Profile Loading
```typescript
// GET /api/profile
{
  user: { ... },
  addictionProfiles: ['porn', 'gambling'],
  primaryAddiction: 'gambling',
  streaks: {
    porn: { currentDays: 45, ... },
    gambling: { currentDays: 12, ... },
  }
}
```

### Content Loading
```typescript
// GET /api/content/:addictionType
{
  strings: { ... },
  triggers: [ ... ],
  education: [ ... ],
  blocklist: { ... },
}
```

## Implementation Priority

### Phase 1: Porn (Current)
Build the complete app for porn addiction recovery.

### Phase 2: Gambling (High Priority — Brazil Crisis)
1. Create gambling content profile
2. Add gambling-specific blocklists (Brazil focus)
3. Add financial recovery tracking features
4. Localize for Portuguese (Brazil)

### Phase 3: Social Media
1. Create social media content profile
2. Focus on friction mode (not blocking)
3. Screen time tracking emphasis
4. Digital wellbeing dashboard

### Phase 4: Gaming
1. Create gaming content profile
2. Session time tracking
3. Game-specific interventions
4. Parental control features (for teen market)

## Market-Specific Considerations

### Brazil (Gambling)
- Portuguese localization critical
- Integration with PIX payment detection (optional)
- Bolsa Familia protection messaging
- Partnership opportunities with government health initiatives
- Block Brazil-specific betting sites (Blaze, Betano, etc.)

### Germany (Gambling)
- German localization
- GDPR compliance (already planned)
- Integration with GlueckSpiel self-exclusion program
- Partnership with addiction counseling services (Suchtberatung)

### Global (Social Media)
- Focus on Gen Z and Millennials
- TikTok, Instagram, Twitter friction
- Screen Time API integration (iOS)
- Digital Wellbeing API integration (Android)

## Success Metrics by Addiction Type

| Metric | Porn | Gambling | Social Media | Gaming |
|--------|------|----------|--------------|--------|
| Primary KPI | 90-day completion | Days gambling-free | Daily screen time reduction | Daily play time reduction |
| Secondary | Urge frequency | Money saved | Mindful opens vs automatic | Sessions vs binge sessions |
| Community | Posts/week | Support given | Accountability partners | Balance achievements |

## Technical Implementation Notes

### Content Hot-Swapping
Profiles can be loaded dynamically, allowing:
- A/B testing different content
- Regional content variations
- Quick content updates without app release

### Shared Components
All UI components are addiction-agnostic:
```tsx
// StreakCard doesn't know what addiction it's tracking
<StreakCard
  days={streak.currentDays}
  label={profile.strings.streakLabel}  // "Days porn-free" or "Days gambling-free"
/>
```

### Alex System Prompt Assembly
```typescript
const buildAlexPrompt = (profiles: AddictionType[]) => {
  return `
    ${BASE_ALEX_PERSONALITY}

    ${profiles.map(p => getAddictionKnowledge(p)).join('\n\n')}

    ${JOURNEY_CONTEXT}

    User context:
    ${getUserContext()}
  `;
};
```

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Content quality varies by addiction | Hire addiction-specific consultants for each profile |
| Community cross-contamination | Separate community feeds by addiction type (with opt-in cross-view) |
| Feature relevance differences | Feature flags per addiction (e.g., content blocker off for gaming) |
| Localization complexity | Start with English, add Portuguese (BR), German, Spanish, French |
| Regulatory differences (gambling) | Region-specific compliance modules |

## Conclusion

The multi-addiction architecture allows Alex Friend to serve a broader market with minimal additional development effort. The ~90% shared codebase means each new addiction type requires only:

1. **Content creation** (~2-4 weeks): Strings, education, Alex knowledge
2. **Blocklist curation** (~1 week): Sites/apps specific to addiction
3. **Testing & QA** (~1 week): Ensure all flows work with new content
4. **Localization** (if needed): ~2 weeks per language

**Total: 4-8 weeks per new addiction type** after the initial app is complete.
