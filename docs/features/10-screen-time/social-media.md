# Screen Time Tracking - Social Media/Phone Addiction

This file contains social media and phone addiction-specific screen time tracking configuration. See [README.md](README.md) for shared functionality.

---

## Risky Apps to Track

### Default Tracked Apps

| App | Risk Level | Reason |
|-----|------------|--------|
| Instagram | High | Infinite scroll, algorithm, comparison |
| TikTok | Critical | Most addictive design, short-form video |
| Twitter/X | High | Infinite scroll, outrage algorithm |
| Facebook | High | News feed, notifications, comparison |
| Snapchat | High | Streak pressure, FOMO |
| Reddit | High | Infinite scroll, rabbit holes |
| YouTube | High | Autoplay, recommendations |
| Pinterest | Medium | Infinite scroll, visual rabbit holes |
| LinkedIn | Medium | Comparison, notification pressure |
| Threads | High | New infinite scroll platform |
| BeReal | Low | Notification pressure |
| News apps | Medium | Doom scrolling, anxiety |

### The Core Problem Apps

For most social media addiction:
```
Primary concern apps:
1. TikTok - Designed for maximum addiction
2. Instagram - Comparison + infinite scroll
3. Twitter/X - Outrage + infinite scroll
4. Reddit - Rabbit holes + infinite scroll
5. YouTube - Autoplay + recommendations

These apps use the most sophisticated
addiction mechanics and require the
most attention to manage.
```

---

## Suggested App Selection Screen

```
┌─────────────────────────────────────────────┐
│  Apps to Track                              │
│                                             │
│  Most Addictive (Recommended to track)      │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] TikTok          - Short video   │   │
│  │ [✓] Instagram       - Photos/Reels  │   │
│  │ [✓] Twitter/X       - Microblog     │   │
│  │ [✓] Reddit          - Forums        │   │
│  │ [✓] YouTube         - Video         │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Also Addictive                             │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Facebook        - Social        │   │
│  │ [ ] Snapchat        - Messaging     │   │
│  │ [ ] Pinterest       - Visual        │   │
│  │ [ ] Threads         - Microblog     │   │
│  │ [ ] LinkedIn        - Professional  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  News & Content                             │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] News apps       - News          │   │
│  │ [ ] Safari/Chrome   - Browsing      │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [+ Add other app]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Threshold Messages

**After 15 minutes continuous scrolling:**
```
"15 minutes scrolling. Is this how you
want to spend your time right now?"
```

**After 30 minutes total:**
```
"30 minutes in social apps today. You're
aware now - that's the first step."
```

**After 1 hour total:**
```
"1 hour scrolling today. What could you
have done with that time instead?"
```

**After 2 hours total:**
```
"2 hours in social apps. Your attention
is valuable - protect it."
```

### Pickup-Based Messages

```
"You've picked up your phone 15 times in
the last hour. Try leaving it in another room."

"This is your 10th Instagram open today.
Each open averages 12 minutes for you."

"Quick check or endless scroll? You opened
TikTok 3 times in 20 minutes."
```

### Late Night Messages

```
"Scrolling at 11 PM affects your sleep.
Blue light and stimulation keep you awake."

"Late night doom scrolling rarely ends well.
How about putting the phone down?"

"Your brain needs rest, not more content.
Time to call it a night?"
```

### Comparison-Focused Messages

```
"Remember: you're comparing your reality
to everyone else's highlight reel."

"30 minutes of comparison. How do you
actually feel right now?"

"Social media shows the best of everyone.
Real life is messier - and that's okay."
```

---

## Insights & Correlations

### Pattern Detection

**Time-Based Patterns:**
```
"You average 25 minutes per Instagram session.
The app is designed to make you stay longer."

"Your TikTok time peaks between 9-11 PM,
right when you should be winding down."
```

**Mood Correlations:**
```
"When you report 'anxious' in check-ins, your
social media time increases 40% the next day."

"Your highest scroll days correlate with
lowest mood scores. The algorithm isn't helping."
```

**Pickup Analysis:**
```
"You picked up your phone 85 times yesterday.
That's once every 10 minutes while awake."

"First phone pickup: 6:23 AM (before getting up)
Consider charging your phone outside the bedroom."
```

### Dashboard Insights

```
┌─────────────────────────────────────────────┐
│  Insight                                    │
│                                             │
│  Your attention is being fragmented:        │
│                                             │
│  Average unlocks/day: 85                    │
│  Average session: 4 minutes                 │
│  Longest focus period: 23 minutes           │
│                                             │
│  For better focus and wellbeing:            │
│  - Target: <50 unlocks per day              │
│  - Target: <90 min total social media       │
│                                             │
│  [Enable Focus Sessions]                    │
│  [Set Up Do Not Disturb Schedule]           │
└─────────────────────────────────────────────┘
```

---

## Phone Pickup Tracking

### Unlock Monitoring

Beyond app time, track phone pickups:
```
┌─────────────────────────────────────────────┐
│  Phone Pickup Stats                         │
│                                             │
│  Today's unlocks: 47 (avg: 62)              │
│                                             │
│  First pickup: 7:15 AM                      │
│  Most active hour: 9 PM (12 unlocks)        │
│                                             │
│  Common pattern:                            │
│  Unlock → Instagram → 8 min → Lock          │
│  Unlock → TikTok → 15 min → Lock            │
│                                             │
│  Goal for tomorrow: <45 unlocks             │
│                                             │
└─────────────────────────────────────────────┘
```

### First Pickup Challenge

```
"Morning Challenge: Don't check your phone
for the first 30 minutes after waking.

Yesterday: First pickup at 6:23 AM
Today's goal: After 7:00 AM

[Accept Challenge]
```

---

## Alex Integration

### Usage Context for Alex

When Alex has screen time access:
```
Alex can reference:
- "I see you've been on TikTok for 2 hours
   today. How are you feeling about that?"
- "Your phone pickups have increased this
   week. Is something on your mind?"
- "You mentioned feeling disconnected, but
   you've had 3 hours of social media today.
   Sometimes that makes loneliness worse."
```

### FOMO Support

```
Alex addresses FOMO:
- "The fear of missing out is real, but what
   are you actually missing right now - in
   your real life - by scrolling?"
- "Everyone's highlight reel looks amazing.
   Remember, you're comparing your behind-
   the-scenes to their edited moments."
```

---

## Achievements

| Achievement | Requirement | Message |
|-------------|-------------|---------|
| Scroll Stopper | <1 hour social for 7 days | "Reclaiming your attention." |
| Phone Down | <50 pickups for 7 days | "Breaking the habit loop." |
| Morning Free | No phone for 30 min after waking, 7 days | "Starting days intentionally." |
| Night Mode | No social after 9 PM for 7 days | "Better sleep, better mood." |
| Present Moment | Zero social media day | "A whole day in the real world." |
| One App Free | Uninstalled one social app | "One less attention trap." |

---

## Recommended Thresholds

### Recovery Mode (Breaking the Habit)
```
Continuous use alert: 10 minutes
Daily total alert: 30 minutes
Pickup alert: Every 10 pickups
Late night: Enabled (9 PM - 7 AM)
Notification style: Direct
```

### Moderation Mode (Building Balance)
```
Continuous use alert: 15 minutes
Daily total alert: 60 minutes
Pickup alert: At 50 daily pickups
Late night: Enabled (10 PM - 6 AM)
Notification style: Encouraging
```

### Maintenance Mode (Mindful Use)
```
Continuous use alert: 20 minutes
Daily total alert: 90 minutes
Pickup alert: At 75 daily pickups
Late night: Enabled (11 PM - 5 AM)
Notification style: Gentle
```

---

## Session Analysis

### Scroll Session Breakdown

```
┌─────────────────────────────────────────────┐
│  Session Analysis                           │
│                                             │
│  Today's Sessions:                          │
│                                             │
│  9:15 AM - Instagram - 12 min               │
│  Ended: Closed voluntarily ✓                │
│                                             │
│  12:30 PM - TikTok - 28 min                 │
│  Ended: After notification ⚠️               │
│                                             │
│  3:45 PM - Twitter - 8 min                  │
│  Ended: Closed voluntarily ✓                │
│                                             │
│  9:20 PM - Instagram - 45 min               │
│  Ended: Still ongoing...                    │
│                                             │
│  Pattern: Your evening sessions are         │
│  significantly longer than daytime.         │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Weekly Report Content

### Social Media-Specific Sections

```
┌─────────────────────────────────────────────┐
│  Weekly Screen Time Report                  │
│                                             │
│  Total Social Media: 8h 30m                 │
│  vs Last Week: ↓ 2h 15m (21% reduction)     │
│                                             │
│  Per-App Breakdown:                         │
│  - Instagram:  3h 15m (↓ 45 min)            │
│  - TikTok:     2h 30m (↓ 1h!)               │
│  - Twitter:    1h 45m (same)                │
│  - Reddit:     1h (↓ 30 min)                │
│                                             │
│  Phone Pickups:                             │
│  This week avg: 58/day                      │
│  Last week avg: 72/day                      │
│  Improvement: 19% fewer pickups             │
│                                             │
│  Best Day: Sunday - 42 min total            │
│  Most Challenging: Friday - 2h 15m          │
│                                             │
│  Time Reclaimed: 2h 15m this week           │
│  What could you do with that time?          │
│                                             │
│  [Set Next Week's Goal]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Attention Recovery Metrics

### Focus Score

Track attention span recovery:
```
┌─────────────────────────────────────────────┐
│  Attention Recovery Score                   │
│                                             │
│  Your focus is improving:                   │
│                                             │
│  Week 1: Longest focus = 8 minutes          │
│  Week 2: Longest focus = 15 minutes         │
│  Week 3: Longest focus = 25 minutes         │
│  This week: Longest focus = 32 minutes      │
│                                             │
│  ████████████████░░░░ 32 min / 45 min goal  │
│                                             │
│  Research shows attention spans can         │
│  recover with reduced social media use.     │
│  You're on the right track!                 │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Blocking Recommendations

### Based on Usage Patterns

```
┌─────────────────────────────────────────────┐
│  Notification Recommendations               │
│                                             │
│  Based on your usage, we recommend:         │
│                                             │
│  Instagram:                                 │
│  - Turn off like notifications              │
│  - Turn off follower notifications          │
│  - Keep DM notifications only               │
│                                             │
│  TikTok:                                    │
│  - Turn off all non-DM notifications        │
│  - These create unnecessary pickups         │
│                                             │
│  Twitter:                                   │
│  - Turn off like/retweet notifications      │
│  - Keep mentions only                       │
│                                             │
│  [Apply Recommended Settings]               │
│  [Customize]                                │
│                                             │
│  Note: This requires changing settings      │
│  in each app individually.                  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Time Reclaimed Activities

### Suggestions Based on Freed Time

```
When user reduces screen time:

"You saved 45 minutes today by using social
media less. Here are ideas for that time:"

- Take a 20-minute walk
- Call a friend or family member
- Read 30 pages of a book
- Learn something new for 30 minutes
- Exercise for 30 minutes
- Practice a hobby
- Just sit quietly and think

[Log What You Did Instead]
```

### Activity Tracking

```
┌─────────────────────────────────────────────┐
│  Time Reclaimed This Week                   │
│                                             │
│  Saved: 4 hours 30 minutes                  │
│                                             │
│  How you spent it:                          │
│  - Reading: 1h 30m                          │
│  - Exercise: 1h                             │
│  - Time with family: 2h                     │
│                                             │
│  "I read a whole book this week!"           │
│  - Your journal entry, Thursday             │
│                                             │
│  Real life > infinite scroll                │
│                                             │
└─────────────────────────────────────────────┘
```
