# Daily Check-ins - Social Media/Phone Addiction

This file contains social media and phone addiction-specific content for the Daily Check-ins system. See [README.md](README.md) for shared functionality.

---

## Social Media-Specific Triggers

In addition to universal triggers (Stress, Boredom, Loneliness, HALT, Relationship, Celebration), these triggers are specific to social media/phone addiction:

| Category | Description | Icon |
|----------|-------------|------|
| FOMO | Fear of missing out on posts/updates | 😰 |
| Notifications | Push notification sounds/badges | 🔔 |
| Comparison | Seeing others' highlight reels | 📊 |
| Waiting | In line, waiting for something | ⏳ |
| Waking Up | First thing in the morning | 🌅 |
| Before Sleep | Scrolling in bed | 🛏️ |
| News Anxiety | Checking news/current events | 📰 |
| Likes/Validation | Checking for engagement | ❤️ |
| DMs | Expecting messages | 💬 |

### Trigger Seed Data
```javascript
const socialMediaTriggers = [
  // Universal (included from shared)
  { name: 'stress', display_name: 'Stress', icon: '😰', sort_order: 1 },
  { name: 'boredom', display_name: 'Boredom', icon: '😑', sort_order: 2 },
  { name: 'loneliness', display_name: 'Loneliness', icon: '😢', sort_order: 3 },
  { name: 'halt', display_name: 'HALT', icon: '⚠️', sort_order: 4 },
  { name: 'relationship', display_name: 'Relationship', icon: '💔', sort_order: 5 },
  { name: 'celebration', display_name: 'Celebration', icon: '🎉', sort_order: 6 },
  // Social media-specific
  { name: 'fomo', display_name: 'FOMO', icon: '😰', sort_order: 7 },
  { name: 'notifications', display_name: 'Notifications', icon: '🔔', sort_order: 8 },
  { name: 'comparison', display_name: 'Comparison', icon: '📊', sort_order: 9 },
  { name: 'waiting', display_name: 'Waiting/Idle', icon: '⏳', sort_order: 10 },
  { name: 'waking_up', display_name: 'Waking Up', icon: '🌅', sort_order: 11 },
  { name: 'before_sleep', display_name: 'Before Sleep', icon: '🛏️', sort_order: 12 },
  { name: 'news_anxiety', display_name: 'News Anxiety', icon: '📰', sort_order: 13 },
  { name: 'likes_validation', display_name: 'Checking Likes', icon: '❤️', sort_order: 14 },
  { name: 'dms', display_name: 'Expecting DMs', icon: '💬', sort_order: 15 },
];
```

---

## Pattern Detection Rules

### Morning Phone Check
```
IF "waking_up" trigger appears 5+ times in 7 days
THEN flag "Morning Phone Pattern"
AND suggest:
  - "Keep phone charging outside bedroom"
  - "Establish a morning routine before checking phone"
  - "Try 30 minutes of phone-free time after waking"
```

### FOMO Loop
```
IF "fomo" trigger appears 3+ times in 7 days
   AND urge > 4
THEN flag "FOMO Loop"
AND suggest:
  - "What you're 'missing' is curated highlights, not reality"
  - "Real life is happening around you right now"
  - "Unfollow accounts that trigger FOMO"
```

### Comparison Spiral
```
IF "comparison" trigger logged
   AND mood < 5
THEN flag "Comparison-Mood Spiral"
AND suggest:
  - "You're comparing your behind-the-scenes to their highlight reel"
  - "Consider unfollowing or muting accounts that trigger comparison"
  - "Talk to Alex about self-worth beyond social validation"
```

### Bedtime Scrolling
```
IF "before_sleep" trigger appears 4+ times in 7 days
THEN flag "Bedtime Scrolling Pattern"
AND suggest:
  - "Blue light affects sleep quality"
  - "Try a 1-hour screen-free wind-down routine"
  - "Keep phone charging outside bedroom"
```

### Notification Addiction
```
IF "notifications" trigger is top trigger
   AND check-in logged multiple times per day
THEN flag "Notification Addiction"
AND suggest turning off non-essential notifications
```

---

## Insight Messages

### Trigger-Based Insights

**When FOMO is top trigger:**
> 💡 Insight: FOMO is driving your urges. Remember: you're not missing anything real. Those feeds will look the same tomorrow. Your life is happening now.

**When Comparison is top trigger:**
> 💡 Insight: Comparison is hurting your mood. Social media shows curated highlights - not reality. Everyone struggles; few post about it.

**When Notifications is top trigger:**
> 💡 Insight: Notifications are controlling you. Each ping is designed to pull you back. Consider turning off all non-essential notifications.

**When Before Sleep is top trigger:**
> 💡 Insight: Bedtime scrolling is a big trigger for you. This hurts sleep quality and starts the next day tired. Try charging your phone in another room.

**When Waking Up is top trigger:**
> 💡 Insight: You're reaching for your phone first thing. This sets a reactive tone for the day. Try waiting 30 minutes before checking - own your morning.

---

## Check-in Completion Messages

### Morning Check-in

**Low urge (1-3):**
> ✓ Great start! How you start the morning shapes the day. Stay present.

**Moderate urge (4-6):**
> ✓ Noted. The phone will be there later. What matters is happening now.

**High urge (7-10):**
> ✓ Logged. Strong pull to scroll this morning. What would you do with that time instead?

### Evening Check-in

**Low urge day:**
> ✓ Solid day of presence. You lived today instead of watching others live.

**High urge survived:**
> ✓ You resisted the scroll. Every time you choose presence over distraction, your attention span heals.

**Scroll session logged:**
> ✓ You're aware of what happened. That awareness is growth. What triggered the scroll? How did you feel after?

---

## Alex Integration Context

When Alex receives check-in data for social media addiction users:

```
Recent check-in context (last 7 days):
- Average mood: {avg_mood}/10
- Average urge: {avg_urge}/10
- Top triggers: {triggers}
- Trend: {improving/stable/struggling}
- Last check-in note: "{note}"

For social media addiction context:
- Watch for FOMO and comparison patterns
- Morning and bedtime usage is high-risk
- Notifications create addiction loops
- Loneliness often masks need for real connection
- Track time reclaimed, not just days abstinent
```

---

## Notification Content

### Risk-Time Notifications

**Morning:**
> ☀️ Good morning! Try 30 minutes of phone-free time to start your day with presence.

**Bedtime approaching:**
> 🌙 Getting close to sleep time. Consider putting the phone away for better rest.

**During extended scroll detected:**
> ⏰ You've been scrolling for 30 minutes. Is this how you want to spend this time?

### After High Urge Check-in

**Immediate follow-up:**
> 💙 You're feeling the pull of the scroll. Ask yourself: what am I really looking for? Connection? Distraction? There might be a better way.

**30-minute follow-up:**
> How are you now? Did you scroll, or find something else? [Check-in again] [Talk to Alex]

### Positive Reinforcement

**Week of presence:**
> 📈 Your urge levels are down this week. Your attention span is healing. You're more present.

**Morning check-in streak:**
> ☀️ You've checked in 7 mornings in a row - before checking social media. You're taking control of your day.

---

## Recovery-Specific Metrics

Track and display these social media-specific patterns:

- **Screen Time Estimate**: Hours reclaimed from not scrolling
- **FOMO Frequency**: How often FOMO is logged as trigger
- **Comparison Impact**: Mood score when comparison is logged
- **Notification Dependence**: Frequency of notification trigger
- **Time of Day Patterns**: Morning vs. evening usage urges
- **Wake-to-Check Time**: If tracking, time from waking to first urge

---

## Urge Level Descriptions

For social media addiction, the urge scale has specific meaning:

| Level | Description | State |
|-------|-------------|-------|
| 1-2 | Phone not on mind, enjoying present moment | Safe |
| 3-4 | Occasional thought to check, easily dismissed | Caution |
| 5-6 | Strong pull to scroll, reaching for phone | Alert |
| 7-8 | Opening apps, starting to scroll | Danger |
| 9-10 | Lost in scroll, can't stop | Critical |

**Critical Level Response (9-10):**
If user logs 9-10 urge, immediately offer:
1. Panic button (camera overlay to break focus)
2. 5-minute breathing exercise
3. Direct connect to Alex
4. App blocking suggestion
5. "Put your phone in another room" prompt

---

## Time Tracking Integration

Check-ins can optionally integrate with screen time tracking:

**Morning Check-in Addition:**
> How long did you scroll before bed last night?
> - Didn't scroll in bed
> - Less than 15 minutes
> - 15-30 minutes
> - More than 30 minutes

**Evening Check-in Addition:**
> Estimate your social media time today:
> - Minimal (< 30 min)
> - Moderate (30-60 min)
> - Heavy (1-2 hours)
> - Excessive (2+ hours)

**Time Reclaimed Display:**
> "At your old usage, you'd have scrolled [X] hours this week. Instead, you lived them."

---

## Attention Recovery Milestones

Track attention span improvements:

- **Day 7**: "You can now focus for longer periods without checking"
- **Day 14**: "Books and articles are becoming readable again"
- **Day 30**: "Your attention span is significantly recovered"
- **Day 60**: "Deep focus is available when you need it"
- **Day 90**: "Presence is your new default"

---

## Weekly Summary Message

Generated every Sunday evening:

**Template:**
> 📊 **Your Week in Review**
>
> Days checked in: {count}/7
> Average mood: {mood}/10 ({trend} from last week)
> Average urge: {urge}/10 ({trend} from last week)
> Presence streak: Day {streak_day}
>
> **Top Trigger:** {trigger}
> {trigger_specific_insight}
>
> **Time Reclaimed (estimated):** {hours} hours
> That's {equivalent} (a book, a hobby project, real conversations)
>
> **Highlight:** {positive_observation}
>
> Your attention is yours again. Keep reclaiming it.
