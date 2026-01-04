# Content Blocker - Gaming Addiction

This file contains gaming addiction-specific content blocker configuration. See [README.md](README.md) for shared functionality.

---

## Blocklist Categories

| Category | Description | Domain Count |
|----------|-------------|--------------|
| game_stores | Digital game stores (Steam, Epic, etc.) | ~500 |
| game_launchers | Web launchers and portals | ~1,000 |
| browser_games | Browser-based gaming sites | ~50,000 |
| gaming_streams | Twitch, YouTube Gaming | ~100 |
| esports_sites | Esports news, scores, streams | ~5,000 |
| gaming_news | Gaming news and reviews | ~10,000 |
| game_wikis | Strategy wikis, walkthroughs | ~5,000 |
| game_forums | Gaming community forums | ~10,000 |
| mmo_sites | MMO/MMORPG game sites | ~10,000 |
| gacha_games | Gacha/loot box game sites | ~5,000 |
| mobile_games | Addictive mobile game sites | ~20,000 |
| game_mods | Mod sites, custom content | ~5,000 |
| gambling_games | Games with gambling mechanics | ~10,000 |
| discord_gaming | Gaming Discord servers | ~1,000 |

**Total: ~120,000 domains**

---

## Blocking Philosophy

### Why Block Gaming Content?

Gaming addiction recovery often requires:
1. **Removing easy access** to games
2. **Breaking the news/content cycle** that keeps games on your mind
3. **Avoiding "just watching"** which leads to playing
4. **Reducing FOMO** from seeing others play

### Levels of Blocking
```
Level 1: Full Block (Recommended for early recovery)
- All gaming sites blocked
- All game stores blocked
- All streaming blocked
- All gaming content blocked

Level 2: Moderate Block
- Game stores blocked
- Browser games blocked
- Streaming limited (not blocked)
- News/wikis allowed

Level 3: Maintenance Mode
- Only problematic games/sites blocked
- Time limits on gaming content
- Personal trigger sites blocked
```

---

## Block Page Content

### Typewriter Messages
Messages that appear on the blocked page:

```
"Real life is waiting for you."
"One game leads to eight hours. You know this."
"What could you accomplish with this time?"
"Your life won't level up from more gaming."
"The guild will be fine without you."
"Real achievements > virtual achievements."
"Step away from the screen."
"Your eyes, your posture, your life need a break."
"That game will still exist in 90 days."
"Build something real instead."
```

### Consequences Display
```
Remember why you're quitting:
• Hours disappearing daily
• Real relationships neglected
• Sleep deprivation
• Physical health declining
• Real opportunities missed
• Life on pause
```

### Block Page UI

```
┌─────────────────────────────────────────────┐
│                                             │
│              Alex Friend                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌Real life is waiting for you.    │   │
│  │   (typewriter animation)            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day 18 • Stay in reality           │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │        OPEN PANIC BUTTON            │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Why you're blocking games:                 │
│  • Hours lost daily                         │
│  • Real relationships neglected             │
│  • Sleep deprivation                        │
│  • Life on pause                            │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to Alex]                             │
│  [Start Breathing Exercise]                 │
│  [Close This Tab]                           │
│                                             │
│  Hours reclaimed: 142 hours                 │
│  (based on your previous gaming time)       │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Chrome Extension Settings

### Quick Toggles
```
Quick Settings:
[✓] Block game store websites
[✓] Block gaming streams (Twitch, etc.)
[✓] Block gaming news sites
[✓] Block browser games
[✓] Block game wikis/guides
[✓] Block game forums
```

### Blocking Levels
```
Protection Level:
○ Full Block (Recommended)
  All gaming content blocked

○ Moderate
  Stores and games blocked
  News and streams limited

○ Maintenance
  Only personal triggers blocked
```

---

## Platform-Specific Blocking

### Steam
```
Blocking:
[✓] Block store.steampowered.com
[✓] Block steamcommunity.com
[✓] Block steampowered.com login
[✓] Block Steam web launcher

For installed games:
- Guide to uninstalling
- Guide to giving account to friend
- Steam Family View lockout
```

### Epic Games
```
Blocking:
[✓] Block epicgames.com
[✓] Block store.epicgames.com
[✓] Block Epic Games Launcher web

Epic often has "free game" promotions
designed to pull you back in.
```

### Battle.net / Blizzard
```
Blocking:
[✓] Block battle.net
[✓] Block blizzard.com
[✓] Block WoW, Overwatch portals

MMOs require special attention due to
social obligations and FOMO mechanics.
```

### Xbox / PlayStation / Nintendo
```
Blocking:
[✓] Block xbox.com
[✓] Block playstation.com
[✓] Block nintendo.com
[✓] Block console store web versions
```

### Mobile Gaming
```
Blocking:
[✓] Block mobile game web versions
[✓] Block gacha game sites
[✓] Block game company portals
[✓] Block mobile gaming news
```

---

## Streaming & Content Blocking

### Twitch
```
Blocking Options:
[✓] Block Twitch.tv entirely (recommended)
OR
[ ] Block only gaming categories
[ ] Allow specific streamers only
[ ] Time limit: [X] minutes

"Just watching" often leads to playing.
Full Twitch blocking is recommended.
```

### YouTube Gaming
```
Blocking Options:
[✓] Block YouTube Gaming category
[✓] Block gaming keywords in search
[✓] Block gaming channel recommendations
[✓] Block Let's Play videos

YouTube's algorithm will try to show
gaming content. Active blocking helps.
```

### Discord
```
Blocking Options:
[✓] Block gaming Discord servers
[✓] Block Discord entirely (optional)
[✓] Leave all gaming servers (manual)

Discord keeps you connected to gaming
communities. Consider full break.
```

---

## iOS Setup Guide

### Step 1: Delete Games
```
1. Delete all games from your device
2. Check folders for hidden games
3. Clear App Store purchase history visibility
```

### Step 2: Screen Time Restrictions
```
1. Settings → Screen Time → Content Restrictions
2. Apps → Select age rating to block games
3. App Store → Disable installing apps
4. Have someone else set the passcode
```

### Step 3: Block Gaming Apps Category
```
1. Settings → Screen Time → App Limits
2. Add Limit → Select "Games"
3. Set limit to 0 minutes
4. Block at End of Limit
```

### Step 4: Web Blocking
```
1. Safari Content Blocker enabled
2. Screen Time → Web Content → Limit Adult
3. Add gaming sites to "Never Allow"
```

---

## Android Setup Guide

### Step 1: Uninstall Everything
```
1. Uninstall all games
2. Uninstall game stores (if possible)
3. Uninstall gaming apps (Discord, Twitch)
4. Clear data before uninstalling
```

### Step 2: Disable Game Installation
```
1. Enable parental controls
2. Block "Games" category
3. Require PIN for installs
4. Disable "Unknown Sources"
```

### Step 3: Browser Protection
```
1. DNS blocking for gaming sites
2. Use Alex Friend built-in browser
3. Block gaming URLs manually
```

---

## Physical Device Management

### Console Management
```
Recommended Actions:
┌─────────────────────────────────────────────┐
│  Console Protection Plan                    │
│                                             │
│  Your consoles represent a major trigger.   │
│  Consider these options:                    │
│                                             │
│  [Store with a friend]                      │
│  Give to trusted person for 90 days         │
│                                             │
│  [Sell console]                             │
│  Remove the temptation entirely             │
│                                             │
│  [Unplug and store away]                    │
│  Out of sight, harder to access             │
│                                             │
│  [Parental controls only]                   │
│  Have someone else set PIN                  │
│                                             │
│  The first option (store with friend) is    │
│  recommended for most people.               │
└─────────────────────────────────────────────┘
```

### Gaming PC Management
```
Options:
1. Convert to work-only machine
   - Uninstall all games
   - Uninstall Steam, launchers
   - Block gaming sites
   - Remove GPU (extreme)

2. Store the PC
   - Give to friend for 90 days
   - Use laptop for essentials

3. Sell the PC
   - Remove temptation entirely
   - Use funds for recovery activities
```

---

## Trigger Management

### New Game Release Detection
```
When major games release:
- Extra blocking enabled
- Proactive Alex check-in
- "New release this week. How are you doing?"
- Block gaming news sites
- Block YouTube gaming recommendations
```

### Gaming Event Detection
```
Events to track:
- E3 / Game awards seasons
- Major game launches
- Expansion releases
- Seasonal events in MMOs
- Esports tournaments

During events:
- Stricter blocking
- More frequent check-ins
- Accountability partner alerts
```

---

## Analytics & Patterns

### Block Event Categories
```
block_events {
  category: Enum (
    'game_store',
    'browser_game',
    'gaming_stream',
    'gaming_news',
    'game_forum',
    'custom_blocked'
  )
}
```

### Time Reclaimed Calculator
```
Based on your history:
- Average daily gaming: X hours
- Days in recovery: Y
- Time reclaimed: X × Y hours

"You've reclaimed 142 hours of your life."
"That's equivalent to [6] full days."
```

### Alex Integration
```
Alex conversation awareness:
- "New game release this week. I'm here if
   you need support."
- "I noticed you tried to access Steam today.
   What's going on?"
- "You've been clean for 30 days. That's
   720 hours of life reclaimed."
```

---

## Accountability Messages

### Partner Notification Templates

**When Blocker Disabled:**
```
Subject: [Name] has disabled gaming protection

[Name] has turned off gaming site blocking
in Alex Friend.

Time: [timestamp]
Previous status: Active for 18 days

A supportive check-in might help.
```

**New Release Alert:**
```
Subject: High-risk period for [Name]

A major game is releasing this week:
[Game Name]

This may be a triggering time.
Consider reaching out supportively.
```

**Weekly Summary:**
```
Subject: Weekly Gaming Recovery for [Name]

Days clean: 18
Block attempts this week: 7
Most blocked: Steam (4 attempts)
Time reclaimed: 42 hours this week

[Name] is making progress. The blocks
are working as intended.
```

---

## Premium Features

### Scheduling
```
┌─────────────────────────────────────────────┐
│  High-Risk Period Protection                │
│                                             │
│  Auto-enable stricter blocking:             │
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ Weekends                       [ON]     ││
│ │ After 6 PM on weekdays         [ON]     ││
│ │ When home alone          [PREMIUM]      ││
│ │ During game releases           [ON]     ││
│ └─────────────────────────────────────────┘│
│                                             │
│  Game Release Calendar:                     │
│  ┌─────────────────────────────────────────┐│
│ │ Track releases in genres: [MMO] [FPS]  ││
│ │ Auto-strict mode on release weeks       ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

### Activity Replacement
```
When blocking a gaming site:
┌─────────────────────────────────────────────┐
│                                             │
│  Instead of gaming, try:                    │
│                                             │
│  [Physical activity] 🏃                     │
│  Go for a run, do pushups, stretch          │
│                                             │
│  [Learn something] 📚                       │
│  Read, take an online course                │
│                                             │
│  [Create something] 🎨                      │
│  Draw, write, build                         │
│                                             │
│  [Connect with someone] 👥                  │
│  Call a friend, meet up                     │
│                                             │
│  [Explore outside] 🌳                       │
│  Walk, hike, explore your area              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Recovery Mode

### Temporary Access (Highly Restricted)
```
For gaming addiction, bypass is very restricted:

User clicks "Request Access"
          ↓
Warning: "One game session often leads to
         a full relapse. Are you sure?"
          ↓
Options:
├── Talk to Alex first (recommended)
├── Call accountability partner
├── Request 48-hour waiting period
└── Cancel
          ↓
If requesting access:
├── Must complete reflection journal
├── 48-hour mandatory wait
├── Partner notified immediately
├── Daily check-ins during wait
├── Access limited to 1 hour if approved
└── Automatically blocked again after
```

### "Moderate Gaming" Assessment
```
After 90 days, some users consider moderation:
┌─────────────────────────────────────────────┐
│  Can You Game in Moderation?                │
│                                             │
│  Before considering moderation, answer:     │
│                                             │
│  • Can you play for 1 hour and stop?        │
│  • Can you skip gaming for a week easily?   │
│  • Do you have other fulfilling hobbies?    │
│  • Are real relationships strong?           │
│  • Is work/school performance stable?       │
│                                             │
│  If you answered "no" to any:               │
│  Moderation is likely not for you yet.      │
│                                             │
│  For most gamers, abstinence is easier      │
│  than moderation.                           │
│                                             │
│  [Continue Full Block]                      │
│  [Talk to Alex About Moderation]            │
└─────────────────────────────────────────────┘
```
