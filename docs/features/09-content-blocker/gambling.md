# Content Blocker - Gambling Addiction

This file contains gambling addiction-specific content blocker configuration. See [README.md](README.md) for shared functionality.

---

## Blocklist Categories

| Category | Description | Domain Count |
|----------|-------------|--------------|
| online_casinos | Online casino platforms | ~100,000 |
| sports_betting | Sports betting sites | ~150,000 |
| poker_sites | Online poker rooms | ~50,000 |
| lottery_sites | Online lottery platforms | ~30,000 |
| fantasy_sports | Daily fantasy sports (DFS) | ~10,000 |
| crypto_gambling | Crypto/Bitcoin casinos | ~50,000 |
| slot_sites | Online slot machines | ~80,000 |
| bingo_sites | Online bingo platforms | ~20,000 |
| betting_exchanges | Peer-to-peer betting | ~10,000 |
| esports_betting | Esports gambling sites | ~30,000 |
| gambling_affiliates | Affiliate/review sites | ~100,000 |
| odds_comparison | Odds and tips sites | ~50,000 |
| gambling_forums | Gambling community forums | ~20,000 |
| trading_gambling | High-risk trading (binary options) | ~30,000 |

**Total: 700K+ domains**

**Regional Additions:**
- Brazil (BR): ~50,000 additional local sites
- UK: ~30,000 UK-licensed operators
- Australia: ~20,000 local betting sites
- Europe: ~100,000 EU-specific sites

---

## Block Page Content

### Typewriter Messages
Messages that appear on the blocked page with typewriter animation:

```
"The house always wins. Walk away."
"Think about the bills, not the odds."
"Your family needs that money more."
"One bet leads to ten. You know this."
"The win you're chasing doesn't exist."
"Remember last time. Remember the loss."
"You can't win back what's already gone."
"This feeling will pass. Don't act on it."
"Your streak is worth more than any jackpot."
"Step back. Call someone. Don't click."
```

### Consequences Display
```
Remember what gambling costs:
• Money you can't afford to lose
• Trust from loved ones
• Sleep and peace of mind
• Debt that grows with interest
• The chase that never ends
• Your financial future
```

### Block Page UI

```
┌─────────────────────────────────────────────┐
│                                             │
│              Alex Friend                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌The house always wins.           │   │
│  │   Walk away.                        │   │
│  │   (typewriter animation)            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day 34 • Protect your progress     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │        OPEN PANIC BUTTON            │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Remember what gambling costs:              │
│  • Money • Trust • Peace of mind           │
│  • Debt • Your financial future             │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to Alex]                             │
│  [Start Breathing Exercise]                 │
│  [Close This Tab]                           │
│                                             │
│  ─────────────────────────────────────      │
│  Money saved so far: $2,340                 │
│  (based on your previous spending)          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Chrome Extension Settings

### Quick Toggles
```
Quick Settings:
[✓] Block online casinos
[✓] Block sports betting
[✓] Block poker sites
[✓] Block lottery sites
[✓] Block gambling ads
[✓] Block odds/tips sites
```

### Search Filtering

**Blocked Search Terms:**
- Casino names (BetMGM, DraftKings, etc.)
- "Online gambling", "best odds"
- Sport + betting combinations
- "Free bets", "no deposit bonus"
- Poker tournament searches

**Ad Blocking:**
- Block gambling ad networks
- Hide sponsored betting content
- Block "free bet" promotions
- Block odds comparison ads

---

## iOS Setup Guide

### Step 1: Enable Content Restrictions
```
1. Open Settings
2. Tap "Screen Time"
3. Tap "Content & Privacy Restrictions"
4. Turn ON "Content & Privacy Restrictions"
```

### Step 2: Block Gambling Apps
```
1. Tap "Content Restrictions"
2. Tap "Apps"
3. Select "12+" or lower to block gambling apps
   (Most gambling apps are 17+)
```

### Step 3: Web Content
```
1. Tap "Web Content"
2. Tap "Add Website" under "Never Allow"
3. Add major gambling sites manually
   (iOS doesn't have "gambling" category)
```

### Step 4: iTunes & App Store
```
1. Disable "Installing Apps" during high-risk periods
2. Or require passcode for app installs
3. Have accountability partner hold passcode
```

---

## Android Setup Guide

### Step 1: Uninstall Gambling Apps
```
1. Delete all gambling/betting apps
2. Check for casino apps in hidden folders
3. Clear app data before uninstalling
```

### Step 2: Block App Installations
```
1. Enable parental controls
2. Block "Gambling" category apps
3. Require PIN for new installs
```

### Step 3: DNS Blocking
```
1. Open Settings → Network & Internet
2. Tap "Private DNS"
3. Enter: gambling-block.nextdns.io
   (Custom DNS that blocks gambling)
```

### Step 4: Browser Protection
```
1. Use a browser with gambling site blocking
2. Or use Alex Friend's built-in browser
3. Disable browser app installation prompts
```

---

## Financial Protection Integration

### Bank Integration (Where Supported)
- Link to bank's gambling block feature
- Instructions for enabling spending blocks
- UK: GamStop self-exclusion
- Australia: BetStop
- US: State-specific exclusion programs

### Self-Exclusion Resources
```
┌─────────────────────────────────────────────┐
│  Self-Exclusion Programs                    │
│                                             │
│  Block yourself from gambling sites:        │
│                                             │
│  UK: GamStop                                │
│  [Visit GamStop.co.uk]                      │
│                                             │
│  Australia: BetStop                         │
│  [Visit BetStop.gov.au]                     │
│                                             │
│  US: State Programs                         │
│  [Find your state's program]                │
│                                             │
│  These are legally binding exclusions       │
│  that prevent gambling operators from       │
│  accepting your bets.                       │
└─────────────────────────────────────────────┘
```

---

## Trigger-Based Blocking

### Sports Event Detection
```
High-Risk Period Detection:
- Major sporting events (Super Bowl, World Cup)
- Championship games
- Playoffs/finals
- Weekend sports schedule

During detected events:
- Stricter blocking enabled
- Extra reminders shown
- Proactive check-ins
- "Big game today. How are you holding up?"
```

### Payday Detection
```
Payday Protection:
- User sets payday dates
- Stricter blocking on payday ±2 days
- Proactive Alex check-in
- "Payday coming up. Remember your budget."
```

---

## Keyword Blocking

### Search Keywords to Block
```
Category: Casino Terms
- online casino, live casino
- slot machines, jackpot
- blackjack online, roulette

Category: Betting Terms
- sports betting, bet online
- odds, spread, parlay
- accumulator, over/under

Category: Operator Names
- [Major betting site names]
- [Local casino names by region]

Category: Promotional Terms
- free bet, no deposit bonus
- welcome bonus, matched bet
- promo code, free spins
```

---

## Analytics & Patterns

### Block Event Categories
```
block_events {
  category: Enum (
    'online_casino',
    'sports_betting',
    'poker',
    'lottery',
    'gambling_ads',
    'search_gambling',
    'custom_blocked'
  )
}
```

### Pattern Detection
```
Insights shown to user:
- "Block attempts spike during major sports events"
- "Friday nights are your highest-risk time"
- "You've avoided 34 gambling opportunities this month"
```

### Savings Calculator
```
Based on your history:
- Average weekly gambling: $X
- Weeks clean: Y
- Money saved: $X × Y = $Z

"You've saved $2,340 by staying clean."
```

### Alex Integration
```
Alex conversation awareness:
- "Big game this weekend. Do you have a plan?"
- "Payday is tomorrow. Let's talk about how
   you'll handle any urges."
- "I noticed some blocked betting sites today.
   Want to talk about what's going on?"
```

---

## Accountability Messages

### Partner Notification Templates

**When Blocker Disabled:**
```
Subject: [Name] has disabled gambling protection

[Name] has turned off gambling site blocking
in Alex Friend.

Time: [timestamp]
Previous status: Active for 34 days

This may indicate they're struggling.
Consider reaching out supportively.
```

**Sports Event Alert:**
```
Subject: High-risk period alert for [Name]

A major sporting event is happening:
[Event Name]

[Name] historically struggles during these times.
A supportive check-in might help.
```

**Payday Alert:**
```
Subject: Payday protection for [Name]

Today is [Name]'s payday.

This is historically a high-risk time.
A quick supportive message could help.
```

---

## Premium Features

### Scheduling
```
Block Schedule Settings:
┌─────────────────────────────────────────────┐
│ High-Risk Period Protection                 │
│                                             │
│ Auto-enable stricter blocking:              │
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ Payday ±2 days               [ON]       ││
│ │ Major sports events          [ON]       ││
│ │ Weekends                     [OFF]      ││
│ │ After 10 PM                  [ON]       ││
│ └─────────────────────────────────────────┘│
│                                             │
│ Sports Calendar:                            │
│ ┌─────────────────────────────────────────┐│
│ │ Football (NFL, Soccer)       [Track]    ││
│ │ Basketball (NBA)             [Track]    ││
│ │ Horse Racing                 [Track]    ││
│ │ Boxing/UFC                   [Track]    ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

### Financial Tracking
```
┌─────────────────────────────────────────────┐
│ Money Saved Tracker                         │
│                                             │
│ Your gambling history:                      │
│ Average weekly spend: $450                  │
│                                             │
│ Since recovery:                             │
│ Weeks clean: 6                              │
│ Money saved: $2,700                         │
│                                             │
│ Goals:                                      │
│ ████████████░░░░░░ $2,700 / $5,000         │
│ "Emergency fund"                            │
│                                             │
│ What will you do with the money?            │
│ [Set savings goal]                          │
└─────────────────────────────────────────────┘
```

---

## Recovery Mode

### Temporary Access Request Flow
```
For gambling addiction, this is highly restricted:

User clicks "Request Access"
          ↓
Warning: "Gambling sites are blocked for your protection.
         One bet can undo months of progress."
          ↓
Accountability REQUIRED:
├── Partner must approve
├── 48-hour waiting period (not 24)
├── Partner is notified immediately
├── During wait: Daily check-ins required
└── Access limited to 30 minutes if approved
          ↓
Without accountability partner:
├── NO bypass available
├── Directed to crisis resources
├── Alex chat for support
└── Option to add accountability partner
```

**Why stricter than other addictions:**
- Gambling losses can be catastrophic in minutes
- Financial consequences are immediate and severe
- "Just one bet" often leads to chasing
- Recovery requires complete abstinence for most

### Crisis Resources
```
If you're in crisis:
• National Problem Gambling Helpline: 1-800-522-4700
• Gamblers Anonymous: gamblersanonymous.org
• UK: GamCare 0808 8020 133
• Australia: Gambling Help 1800 858 858

[Talk to Alex Now]
```
