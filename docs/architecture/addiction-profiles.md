# Addiction Profile Content Structure

This document defines the content that must be created for each addiction type. Use this as a checklist when adding new addiction profiles.

## Content Directory Structure

```
packages/shared/content/
├── base/                        # Shared across all addictions
│   ├── journey-stages.ts        # 9 space journey stages
│   ├── achievements-base.ts     # Achievement structure
│   └── alex-personality.ts      # Core Alex personality
│
├── porn/                        # Pornography addiction
│   ├── strings.ts
│   ├── triggers.ts
│   ├── education/
│   ├── alex-knowledge.ts
│   ├── blocklist.ts
│   └── community.ts
│
├── gambling/                    # Gambling/Betting addiction
│   ├── strings.ts
│   ├── triggers.ts
│   ├── education/
│   ├── alex-knowledge.ts
│   ├── blocklist.ts
│   └── community.ts
│
├── social_media/                # Social Media/Phone addiction
│   └── ...
│
└── gaming/                      # Gaming addiction
    └── ...
```

## Content Checklist Per Addiction Type

### 1. UI Strings (`strings.ts`)

| Key | Description | Example (Porn) | Example (Gambling) |
|-----|-------------|----------------|-------------------|
| `streakLabel` | Dashboard streak label | "Days porn-free" | "Days gambling-free" |
| `resetQuestion` | Reset confirmation question | "Did you watch porn?" | "Did you gamble?" |
| `resetConfirm` | Reset confirmation button | "I watched porn" | "I gambled" |
| `urgeLabel` | Urge intensity label | "Urge to watch" | "Urge to bet" |
| `triggerQuestion` | Check-in trigger question | "What triggered you?" | "What triggered you?" |
| `panicMessage` | Default panic button message | "You're stronger than this urge." | "Your money stays with you today." |
| `journeyContext` | Alex journey context | "recovering from porn addiction" | "recovering from gambling addiction" |
| `addictionNoun` | The addiction itself | "porn" | "gambling" |
| `actionVerb` | What user does when relapsing | "watched porn" | "gambled" |
| `checkInGreeting` | Morning check-in greeting | "How are you feeling about your recovery?" | "How are you feeling about staying gambling-free?" |
| `communityWelcome` | Community section welcome | "Connect with others on the same journey" | "Connect with others breaking free from gambling" |

### 2. Trigger Categories (`triggers.ts`)

Each addiction needs 6-10 common triggers with icons.

**Pornography Triggers:**
```typescript
[
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'stress', label: 'Stress/Anxiety', icon: '😰' },
  { id: 'loneliness', label: 'Loneliness', icon: '😔' },
  { id: 'late_night', label: 'Late Night', icon: '🌙' },
  { id: 'social_media', label: 'Social Media', icon: '📱' },
  { id: 'rejection', label: 'Rejection', icon: '💔' },
  { id: 'alcohol', label: 'Alcohol', icon: '🍺' },
]
```

**Gambling Triggers:**
```typescript
[
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'financial_stress', label: 'Financial Stress', icon: '💸' },
  { id: 'winning_memory', label: 'Remembering a Win', icon: '🎰' },
  { id: 'advertising', label: 'Betting Ads', icon: '📺' },
  { id: 'sports_event', label: 'Sports Event', icon: '⚽' },
  { id: 'friends_betting', label: 'Friends Betting', icon: '👥' },
  { id: 'alcohol', label: 'Alcohol', icon: '🍺' },
  { id: 'chasing_losses', label: 'Chasing Losses', icon: '📉' },
]
```

**Social Media Triggers:**
```typescript
[
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'fomo', label: 'FOMO', icon: '😟' },
  { id: 'notification', label: 'Notification', icon: '🔔' },
  { id: 'waiting', label: 'Waiting/Idle Time', icon: '⏰' },
  { id: 'stress', label: 'Stress Relief', icon: '😰' },
  { id: 'comparison', label: 'Social Comparison', icon: '📊' },
  { id: 'habit', label: 'Pure Habit', icon: '🔄' },
]
```

**Gaming Triggers:**
```typescript
[
  { id: 'boredom', label: 'Boredom', icon: '😑' },
  { id: 'stress_escape', label: 'Escaping Stress', icon: '🏃' },
  { id: 'friends_playing', label: 'Friends Playing', icon: '👥' },
  { id: 'new_content', label: 'New Game/Update', icon: '🆕' },
  { id: 'competition', label: 'Competitive Urge', icon: '🏆' },
  { id: 'loneliness', label: 'Loneliness', icon: '😔' },
  { id: 'rewards', label: 'Daily Rewards/FOMO', icon: '🎁' },
]
```

### 3. Education Modules (`education/`)

Each addiction needs 4 education modules:

| Module | Content Focus |
|--------|---------------|
| **Module 1: Understanding** | What is this addiction? Brain science, dopamine, habit loops |
| **Module 2: Triggers & Patterns** | Common triggers, personal patterns, high-risk situations |
| **Module 3: Recovery Strategies** | CBT techniques, coping mechanisms, urge surfing |
| **Module 4: Building a New Life** | Healthy alternatives, relationships, long-term recovery |

**Gambling-Specific Topics:**
- The "gambler's fallacy" and probability
- Financial recovery planning
- The "near miss" effect
- Chasing losses psychology

**Social Media-Specific Topics:**
- How algorithms exploit psychology
- Comparison culture and self-esteem
- Digital minimalism principles
- Reclaiming attention

**Gaming-Specific Topics:**
- Game design and addiction mechanics
- Loot boxes and gambling parallels
- Balancing gaming with responsibilities
- Healthy gaming vs problematic gaming

### 4. Alex Knowledge Base (`alex-knowledge.ts`)

Each addiction needs a knowledge injection for Alex's system prompt:

```typescript
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

## Common Situations
- User mentions debt → Show compassion, no judgment, suggest resources
- User mentions "almost won" → Gently explain the fallacy
- User triggered by sports event → Offer distraction techniques
- User relapsed → Compassionate reset, focus on next steps
`;
```

### 5. Blocklist Configuration (`blocklist.ts`)

| Addiction | Site Blocking | App Blocking | Keywords |
|-----------|--------------|--------------|----------|
| **Porn** | 1M+ adult sites | Porn apps | porn, xxx, adult, nsfw |
| **Gambling** | Casino, betting, poker sites | Betting apps (bet365, etc.) | bet, casino, slots, poker |
| **Social Media** | None (friction only) | Instagram, TikTok, Twitter, etc. | N/A |
| **Gaming** | Gaming sites (optional) | Specific games (user-selected) | N/A |

**Gambling Blocklist — Regional Sites:**
```typescript
regionalSites: {
  BR: ['blaze.com', 'betano.com', 'sportingbet.com', 'pixbet.com', 'estrelabet.com'],
  DE: ['tipico.de', 'bwin.de', 'bet365.de'],
  UK: ['bet365.com', 'williamhill.com', 'paddypower.com', 'skybet.com'],
  ES: ['codere.es', 'betfair.es', 'sportium.es'],
  FR: ['betclic.fr', 'winamax.fr', 'pmu.fr'],
}
```

### 6. Community Configuration (`community.ts`)

**Post Categories per Addiction:**

| Addiction | Categories |
|-----------|------------|
| **Porn** | Win, Struggle, Question, Tip, Milestone |
| **Gambling** | Win, Struggle, Question, Tip, Financial Win |
| **Social Media** | Win, Struggle, Question, Digital Detox, Screen Time |
| **Gaming** | Win, Struggle, Question, Balance, Real Life Win |

**Community Guidelines (addiction-specific additions):**

- **Gambling**: No discussion of "systems" or betting strategies
- **Social Media**: No sharing of social media handles
- **Gaming**: No game recommendations or clan invites

### 7. Friction Mode Messages

Each addiction needs stage-specific messages (see `11-friction-mode.md` for full structure):

**Gambling Examples:**
```
The Void: "We just committed to stop. Don't throw away Day {X} on a bet."
Asteroid Field: "Dangerous zone. The urge to 'just one bet' is the asteroid we need to dodge."
Clear Space: "We can see financial freedom ahead. Every avoided bet gets us closer."
```

**Social Media Examples:**
```
The Void: "We're trying to break the habit. Do we really need to scroll right now?"
Asteroid Field: "The algorithm is designed to trap us. We're smarter than that."
Clear Space: "Real life is so much better than the feed. Let's keep it that way."
```

## Implementation Checklist

When adding a new addiction type, complete these tasks:

### Content Creation
- [ ] `strings.ts` — All UI strings translated to addiction context
- [ ] `triggers.ts` — 6-10 addiction-specific triggers with icons
- [ ] `education/module-1.md` — Understanding the addiction
- [ ] `education/module-2.md` — Triggers and patterns
- [ ] `education/module-3.md` — Recovery strategies
- [ ] `education/module-4.md` — Building a new life
- [ ] `alex-knowledge.ts` — AI knowledge base for this addiction
- [ ] `blocklist.ts` — Sites/apps to block (if applicable)
- [ ] `community.ts` — Post categories and guidelines
- [ ] Friction mode messages for all 9 stages

### Database
- [ ] Seed trigger categories for new addiction type
- [ ] Seed education module content
- [ ] Seed default blocklist

### Testing
- [ ] Onboarding flow with new addiction selected
- [ ] All check-in flows use correct terminology
- [ ] Alex responds appropriately to addiction-specific topics
- [ ] Blocklist works correctly
- [ ] Community shows correct categories
- [ ] Friction mode shows correct messages

### Localization (if needed)
- [ ] All strings translated to target language
- [ ] Education content localized
- [ ] Regional blocklists added

## Estimated Effort Per Addiction Type

| Task | Effort |
|------|--------|
| Content creation | 2-3 weeks |
| Blocklist curation | 1 week |
| Education modules (4) | 1-2 weeks |
| Testing & QA | 1 week |
| Localization (per language) | 1-2 weeks |
| **Total** | **4-8 weeks** |

## Priority Order

1. **Pornography** (v1.0) — Current focus, primary market
2. **Gambling** (v1.1) — Brazil crisis, huge market opportunity
3. **Social Media** (v1.2) — Universal appeal, complements other addictions
4. **Gaming** (v1.3) — Teen market, parental control angle
