# Content Blocker - Social Media/Phone Addiction

This file contains social media and phone addiction-specific content blocker configuration. See [README.md](README.md) for shared functionality.

---

## Blocklist Categories

Unlike porn or gambling, social media blocking is about **limiting** rather than **complete blocking**. The goal is to reduce compulsive checking, not eliminate all social media use.

| Category | Description | Approach |
|----------|-------------|----------|
| infinite_scroll | Endless feed platforms | Time limits |
| algorithmic_feeds | Algorithm-driven content | Block or limit |
| short_video | TikTok, Reels, Shorts | Block or strict limit |
| image_platforms | Instagram, Pinterest | Time limits |
| text_platforms | Twitter/X, Threads | Time limits |
| messaging_addictive | Snap streaks, status games | Optional limit |
| news_feeds | News aggregators | Time limits |
| reddit_browsing | Reddit endless scrolling | Time limits |
| youtube_browsing | YouTube rabbit holes | Time limits |
| notification_farms | Apps that spam notifications | Block notifications |

**Approach: Friction, Not Full Blocking**

---

## Blocking Philosophy

### Why Different from Other Addictions

Social media is different because:
1. **Often required** for work, family, legitimate communication
2. **Complete abstinence** is rarely practical
3. **Goal is mindful use**, not elimination
4. **Problem is compulsive checking**, not the platforms themselves

### Friction-Based Approach
```
Instead of: Block Instagram completely
Do this:    Add 30-second delay before opening
            Time limit after 15 minutes
            Block during certain hours
            Disable notifications
```

---

## Block Page Content

### Typewriter Messages
Messages that appear when time limit reached or during blocked hours:

```
"You've been scrolling for 30 minutes."
"Is this how you want to spend your time?"
"Your attention is valuable. Protect it."
"What could you do with this time instead?"
"The feed will be here later. Life won't."
"Be present in your actual moment."
"Your brain needs a break from stimulation."
"Real connection > digital likes."
"Step away. Take a breath. Come back to now."
"The algorithm doesn't care about you."
```

### Consequences Display
```
Effects of endless scrolling:
• Fragmented attention
• Increased anxiety
• FOMO spiral
• Time you won't get back
• Comparison and discontent
• Real moments missed
```

### Limit Reached UI

```
┌─────────────────────────────────────────────┐
│                                             │
│              Time's Up                      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   You've been on Instagram          │   │
│  │   for 30 minutes today.             │   │
│  │                                     │   │
│  │   Your limit: 30 minutes            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  What else could you do right now?          │
│                                             │
│  [Go for a walk]                            │
│  [Call a friend]                            │
│  [Read a book]                              │
│  [Just sit quietly]                         │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Extend 5 minutes]  (3 extensions left)    │
│  [Done for today]                           │
│                                             │
│  Tomorrow's limit resets at 12:00 AM        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Platform-Specific Controls

### Instagram
```
Blocking Options:
[✓] Block Explore tab (endless discovery)
[✓] Block Reels tab (short video addiction)
[ ] Block Stories (often has FOMO)
[ ] Block Feed (main scrolling area)
[✓] Limit daily usage to: [30] minutes

Notification Blocking:
[✓] Block like notifications
[✓] Block follow notifications
[ ] Allow DM notifications
[ ] Allow mentions only
```

### TikTok
```
Blocking Options:
[✓] Block entirely (recommended)
OR
[ ] Limit to: [15] minutes daily
[ ] Block For You page
[✓] Block after 10 PM

TikTok is designed for maximum addiction.
Complete blocking is often most effective.
```

### Twitter/X
```
Blocking Options:
[✓] Block Explore/trending
[✓] Block For You algorithmic feed
[ ] Allow Following-only feed
[✓] Limit daily usage to: [20] minutes
[✓] Block after 9 PM

Notification Blocking:
[✓] Block like notifications
[✓] Block retweet notifications
[ ] Allow DM notifications
[ ] Allow mentions only
```

### YouTube
```
Blocking Options:
[✓] Block homepage (endless recommendations)
[✓] Block Shorts
[ ] Allow direct video links
[ ] Allow subscriptions page
[✓] Limit daily usage to: [45] minutes
[✓] Block autoplay

Focus Mode:
[✓] Remove related videos sidebar
[✓] Hide comments
[✓] Hide end screen recommendations
```

### Reddit
```
Blocking Options:
[✓] Block r/all and r/popular
[ ] Block specific subreddits: [list]
[✓] Limit daily usage to: [20] minutes
[✓] Block after 11 PM

Endless Scroll Prevention:
[✓] Add pause after 10 posts
[✓] Remove infinite scroll
[✓] Show time spent reminder
```

### Facebook
```
Blocking Options:
[✓] Block News Feed
[✓] Block Watch videos
[ ] Allow Groups (for support groups)
[ ] Allow Messenger
[✓] Limit daily usage to: [15] minutes

Most Facebook use is habitual, not intentional.
```

---

## Chrome Extension Settings

### Quick Toggles
```
Quick Settings:
[✓] Block infinite scroll feeds
[✓] Block short-form video
[✓] Enforce time limits
[✓] Hide notification counts
[✓] Block during focus hours
[✓] Add opening delay
```

### Feed Modification
```
Feed Transformation:
[✓] Replace algorithmic feeds with blank page
[✓] Hide like/follower counts
[✓] Remove autoplay on all videos
[✓] Add "Are you sure?" before scrolling
[✓] Show time spent in header
```

---

## Mobile Setup Guide

### iOS Screen Time

#### Step 1: Set App Limits
```
1. Settings → Screen Time → App Limits
2. Tap "Add Limit"
3. Select "Social Networking"
4. Set time: 1 hour combined
5. Tap "Add"
```

#### Step 2: Downtime
```
1. Settings → Screen Time → Downtime
2. Enable Downtime
3. Set schedule: 10 PM - 7 AM
4. Only essential apps allowed
```

#### Step 3: Block Specific Apps
```
1. Settings → Screen Time → Always Allowed
2. Remove social apps from allowed list
3. They'll be blocked during Downtime
```

#### Step 4: Notification Management
```
1. Settings → Notifications
2. For each social app:
   - Disable badges
   - Disable sounds
   - Set to "Deliver Quietly"
```

### Android Digital Wellbeing

#### Step 1: Set App Timers
```
1. Settings → Digital Wellbeing
2. Tap app circle
3. Set timer (e.g., 30 min for Instagram)
4. App pauses when time is up
```

#### Step 2: Focus Mode
```
1. Digital Wellbeing → Focus Mode
2. Select distracting apps
3. Schedule or enable manually
4. Apps are paused, notifications blocked
```

#### Step 3: Bedtime Mode
```
1. Digital Wellbeing → Bedtime Mode
2. Enable grayscale (reduces appeal)
3. Enable Do Not Disturb
4. Schedule for evenings
```

---

## Notification Blocking

### Notification Types to Block
```
┌─────────────────────────────────────────────┐
│  Notification Management                    │
│                                             │
│  Block these notification types:            │
│                                             │
│  [✓] "X liked your post"                   │
│  [✓] "You have memories to look back on"   │
│  [✓] "X posted for the first time in..."   │
│  [✓] "Your friend is on Instagram!"        │
│  [✓] "You might know X"                    │
│  [✓] "[Celebrity] just posted"             │
│  [✓] "Trending: [topic]"                   │
│  [✓] "[X] others liked this post"          │
│                                             │
│  Allow these notification types:            │
│                                             │
│  [ ] Direct messages                        │
│  [ ] Mentions                               │
│  [ ] Event reminders                        │
│  [ ] Close friends only                     │
└─────────────────────────────────────────────┘
```

---

## Friction Features

### Opening Delay
```
When opening a blocked app:
┌─────────────────────────────────────────────┐
│                                             │
│      Opening Instagram...                   │
│                                             │
│      [======              ] 15 seconds      │
│                                             │
│      What are you looking for?              │
│                                             │
│      [Message someone specific]             │
│      [Post something]                       │
│      [Check notifications]                  │
│      [Just scrolling...]                    │
│                                             │
│      Selecting "Just scrolling" adds        │
│      an extra 30-second delay.              │
│                                             │
│      [Cancel]                               │
│                                             │
└─────────────────────────────────────────────┘
```

### Scroll Breaks
```
After 5 minutes of scrolling:
┌─────────────────────────────────────────────┐
│                                             │
│      You've been scrolling for 5 minutes.   │
│                                             │
│      Take a breath.                         │
│                                             │
│      [Continue scrolling]                   │
│      [I'm done for now]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Analytics & Patterns

### Block Event Categories
```
block_events {
  category: Enum (
    'time_limit_reached',
    'blocked_hours',
    'infinite_scroll_blocked',
    'notification_blocked',
    'friction_delay',
    'custom_blocked'
  )
}
```

### Usage Insights
```
Insights shown to user:
- "You picked up your phone 47 times today"
- "Average session on Instagram: 12 minutes"
- "Most pickups happen between 8-9 PM"
- "You've recovered 2.5 hours this week"
```

### Alex Integration
```
Alex conversation awareness:
- "You've been hitting your social media limits
   consistently. That's great progress!"
- "I noticed you extended Instagram 4 times
   yesterday. What was pulling you in?"
- "Your screen time is down 30% this week.
   How does that feel?"
```

---

## Accountability Messages

### Partner Summary (Weekly)
```
Subject: Weekly Screen Time Summary for [Name]

Total social media: 8.5 hours (down from 14)
Most used: Instagram (4 hours)
Limits respected: 5 of 7 days
Phone pickups: 312 (down from 450)

[Name] is making good progress with mindful use.
```

---

## Premium Features

### Focus Sessions
```
┌─────────────────────────────────────────────┐
│  Focus Session                              │
│                                             │
│  Block all social media for:                │
│                                             │
│  [25 min]  [50 min]  [90 min]  [Custom]    │
│                                             │
│  During focus:                              │
│  • All social apps blocked                  │
│  • Notifications silenced                   │
│  • Can't extend time                        │
│  • Emergency bypass: Call someone           │
│                                             │
│  [Start Focus Session]                      │
│                                             │
│  Streak: 5 focus sessions this week         │
└─────────────────────────────────────────────┘
```

### App Replacement Suggestions
```
When opening blocked app, suggest:
┌─────────────────────────────────────────────┐
│                                             │
│  Instead of Instagram, try:                 │
│                                             │
│  [Camera] - Take a real photo               │
│  [Notes] - Write down a thought             │
│  [Call] - Connect with someone real         │
│  [Walk] - Go outside for 5 minutes          │
│                                             │
│  [Open Instagram anyway]                    │
│                                             │
└─────────────────────────────────────────────┘
```

### Grayscale Mode
```
Make phone less appealing:
[✓] Enable grayscale after 8 PM
[✓] Enable grayscale when opening social apps
[✓] Keep grayscale during Downtime

Colors are designed to grab attention.
Grayscale makes scrolling less compelling.
```

---

## Recovery Mode

### Time Extension Flow
```
User hits time limit
          ↓
Options:
├── [Extend 5 minutes] - 3 per day
├── [Add 15 minutes] - Premium, 1 per day
└── [Done for today]
          ↓
If extending:
├── Brief breathing exercise (10 seconds)
├── Reminder of daily intentions
└── Time granted
          ↓
After extension used:
├── No more extensions
├── App blocked until tomorrow
└── Or: Accountability partner override
```

### Complete Bypass
```
For users who need full access:
- Business accounts
- Content creators
- Legitimate work needs

[Request Work Mode]
├── Requires justification
├── Separate "work" time tracking
├── Still tracks total usage
└── Partner can see work vs personal
```
