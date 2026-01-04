# Content Blocker - Pornography Addiction

This file contains pornography addiction-specific content blocker configuration. See [README.md](README.md) for shared functionality.

---

## Blocklist Categories

| Category | Description | Domain Count |
|----------|-------------|--------------|
| adult_tubes | Major porn aggregator sites | ~50,000 |
| adult_hosting | Adult content hosting/CDNs | ~200,000 |
| adult_studios | Production company sites | ~100,000 |
| adult_social | Adult social networks | ~50,000 |
| nsfw_reddit | NSFW subreddit URLs | ~100,000 |
| nsfw_twitter | Adult Twitter/X accounts | ~50,000 |
| adult_search | Adult-focused search engines | ~1,000 |
| cam_sites | Live cam streaming sites | ~50,000 |
| dating_adult | Adult dating/hookup sites | ~100,000 |
| escort_services | Escort/companion sites | ~50,000 |
| hentai_anime | Hentai/adult anime content | ~100,000 |
| adult_games | Adult/porn game sites | ~50,000 |
| erotic_stories | Text-based erotica sites | ~50,000 |
| image_boards | NSFW image boards | ~10,000 |

**Total: 1M+ domains**

---

## Block Page Content

### Typewriter Messages
Messages that appear on the blocked page with typewriter animation:

```
"Stay with me."
"Hey. Look at yourself."
"Your brain is playing tricks on you."
"This isn't what you really want."
"Remember why you started."
"Your future self will thank you."
"You're stronger than this urge."
"The craving will pass. Ride it out."
"Don't trade your progress for a moment."
"Think about how you'll feel after."
```

### Consequences Display
```
Side effects of relapsing:
• Brain fog for days
• Dopamine crash
• Shame spiral
• Reset your progress
• Weakened willpower
• Delayed recovery
```

### Block Page UI

```
┌─────────────────────────────────────────────┐
│                                             │
│              Alex Friend                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌Your brain is playing tricks.    │   │
│  │   (typewriter animation)            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day 23 • Don't reset now           │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │        OPEN PANIC BUTTON            │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Side effects of relapsing:                 │
│  • Brain fog • Shame spiral                 │
│  • Dopamine crash • Progress reset          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to Alex]                             │
│  [Start Breathing Exercise]                 │
│  [Close This Tab]                           │
│                                             │
│  ─────────────────────────────────────      │
│  Request Access (partner notified)          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Chrome Extension Settings

### Quick Toggles
```
Quick Settings:
[✓] Block adult sites
[✓] Safe search (Google, Bing)
[✓] Block NSFW Reddit
[✓] Block adult Twitter/X
[✓] Block image searches
```

### Search Filtering

**Blocked Search Terms:**
- Explicit pornographic terms
- Adult performer names
- Adult site names
- Sexual slang variations
- NSFW subreddit names

**Safe Search Enforcement:**
- Force Google SafeSearch ON
- Force Bing SafeMode ON
- Block DuckDuckGo unsafe mode
- Redirect to block page if disabled

---

## iOS Setup Guide

### Step 1: Enable Content Restrictions
```
1. Open Settings
2. Tap "Screen Time"
3. Tap "Content & Privacy Restrictions"
4. Turn ON "Content & Privacy Restrictions"
```

### Step 2: Limit Adult Content
```
1. Tap "Content Restrictions"
2. Tap "Web Content"
3. Select "Limit Adult Websites"
```

### Step 3: Block Additional Sites (Optional)
```
1. Under "Web Content"
2. Tap "Add Website" under "Never Allow"
3. Add personal trigger sites
```

### Step 4: Set Passcode
```
Pro Tip: Have someone else set the
Screen Time passcode so you can't easily
disable it during weak moments.
```

---

## Android Setup Guide

### Step 1: Enable Digital Wellbeing
```
1. Open Settings
2. Search "Digital Wellbeing"
3. Enable parental controls or restrictions
```

### Step 2: Install Private DNS
```
1. Open Settings → Network & Internet
2. Tap "Private DNS"
3. Enter: family.cloudflare-dns.com
   OR: dns.adguard.com
```

### Step 3: Browser Settings
```
1. In Chrome Settings
2. Enable "Safe Browsing"
3. Block pop-ups and redirects
```

---

## Social Platform Specific Blocking

### Reddit
- Block r/nsfw and all NSFW subreddits
- Block old.reddit.com/r/* NSFW paths
- Block i.redd.it for NSFW image domains
- Enforce Reddit's "Safe Browsing Mode" where possible

### Twitter/X
- Block media.twitter.com for flagged accounts
- Block t.co links to adult sites
- Block known adult creator accounts

### Tumblr
- Block adult-flagged blogs
- Block specific image CDN paths

### Discord
- Block known adult server invite links
- Block adult content channels

---

## Keyword Blocking

### Search Keywords to Block
High-risk search terms that almost always lead to adult content:

```
Category: Explicit Terms
- [Explicit pornographic terms blocked]
- [Sexual act descriptions blocked]

Category: Site Names
- pornhub, xvideos, xhamster, etc.
- All major tube site names

Category: Performer Searches
- "[name] nude/naked" patterns
- Adult performer stage names

Category: Subreddits
- r/nsfw, r/gonewild patterns
- NSFW subreddit names
```

---

## Bypass Prevention

### Anti-Circumvention Measures

**VPN Detection:**
- Alert when VPN is detected
- Optional: Require accountability check
- Log VPN usage attempts

**Incognito Detection:**
- Extension remains active in incognito
- Require explicit incognito permission
- Alert on incognito window opening

**Browser Change Detection:**
- Detect installed browsers
- Encourage protection on all browsers
- Alert on new browser installation

---

## Analytics & Patterns

### Block Event Categories
```
block_events {
  category: Enum (
    'adult_tubes',
    'adult_hosting',
    'nsfw_social',
    'search_explicit',
    'custom_blocked'
  )
}
```

### Pattern Detection
```
Insights shown to user:
- "Most blocks happen between 10 PM - 1 AM"
- "Weekends see 3x more block attempts"
- "Blocks increase when mood is reported as 'lonely'"
```

### Alex Integration
```
Alex conversation awareness:
- "I noticed several blocked attempts last night.
   Want to talk about what triggered that?"
- "Your blocking patterns show late nights are
   risky. Have you considered going to bed earlier?"
- "Looks like NSFW Reddit is a trigger. Want me
   to help you redirect that urge?"
```

---

## Accountability Messages

### Partner Notification Templates

**When Blocker Disabled:**
```
Subject: [Name] has disabled their content blocker

[Name] has turned off adult content blocking
in Alex Friend.

Time: [timestamp]
Previous status: Active for 23 days

Consider reaching out to check in.
```

**Weekly Summary (Optional):**
```
Subject: Weekly Protection Summary for [Name]

Blocker Status: Active ✓
Sites blocked this week: 12
Most common time: 11 PM - midnight
Streak: Day 45

[Name] is doing well. The blocker is helping.
```

---

## Premium Features

### Scheduling
```
Block Schedule Settings:
┌─────────────────────────────────────┐
│ Stricter Blocking                   │
│                                     │
│ Enable extra protection during      │
│ high-risk times:                    │
│                                     │
│ ┌─────────────────────────────────┐│
│ │ Weeknights 10 PM - 6 AM    [ON] ││
│ │ Weekends all day           [ON] ││
│ │ When home alone      [PREMIUM]  ││
│ └─────────────────────────────────┘│
│                                     │
│ During these times:                 │
│ • No bypass requests allowed        │
│ • Stricter keyword blocking         │
│ • Auto-enable panic mode on block   │
└─────────────────────────────────────┘
```

---

## Recovery Mode

### Temporary Access Request Flow
```
User clicks "Request Access"
          ↓
Warning: "This may harm your recovery"
          ↓
If accountability enabled:
├── Partner is notified
├── 24-hour waiting period starts
├── User can cancel during wait
└── After 24h: Access granted for 1 hour
          ↓
If accountability disabled:
├── Journaling prompt required
├── "Why do you need access?"
├── 15-minute delay
└── Access granted for 30 minutes
```

### Post-Access Follow-up
```
After temporary access expires:
- Check-in prompt: "How are you feeling?"
- Encourage honesty about what happened
- No judgment, support for recovery
- Alex available for conversation
```
