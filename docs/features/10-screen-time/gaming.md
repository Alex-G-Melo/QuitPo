# Screen Time Tracking - Gaming Addiction

This file contains gaming addiction-specific screen time tracking configuration. See [README.md](README.md) for shared functionality.

---

## Risky Apps to Track

### Default Tracked Apps

| App | Risk Level | Reason |
|-----|------------|--------|
| Steam (app) | Critical | Direct game access |
| Epic Games | Critical | Direct game access |
| Xbox app | High | Game access, social |
| PlayStation app | High | Game access, social |
| Discord | High | Gaming social, FOMO |
| Twitch | High | Gaming content, triggers |
| YouTube | High | Gaming content, Let's Plays |
| Reddit | Medium | Gaming subreddits |
| Twitter/X | Medium | Gaming news, FOMO |
| Game-specific apps | Critical | Direct play on mobile |

### Critical Apps (Should Be Uninstalled)

These represent direct gaming access:
```
⚠️ CRITICAL - Consider uninstalling:
- Steam mobile app
- Epic Games mobile
- Any mobile games (gacha, idle, etc.)
- Game-specific companion apps

If the goal is full recovery, these apps
keep gaming accessible and on your mind.
```

---

## Suggested App Selection Screen

```
┌─────────────────────────────────────────────┐
│  Apps to Track                              │
│                                             │
│  Game Launchers (Recommend uninstalling)    │
│  ┌─────────────────────────────────────┐   │
│  │ ⚠️ Consider deleting these apps:    │   │
│  │ [✓] Steam            - Launcher     │   │
│  │ [✓] Epic Games       - Launcher     │   │
│  │                                      │   │
│  │ [Why Delete Gaming Apps? →]          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Gaming Content (High Risk)                 │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Discord          - Gaming chat  │   │
│  │ [✓] Twitch           - Streams      │   │
│  │ [✓] YouTube          - Gaming videos│   │
│  │ [✓] Reddit           - Gaming subs  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Gaming News (Medium Risk)                  │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Twitter/X        - Gaming news  │   │
│  │ [ ] IGN              - Reviews      │   │
│  │ [ ] Gaming news apps - Updates      │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Mobile Games (If any installed)            │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] [Detected mobile games]        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [+ Add other app]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Threshold Messages

**After 15 minutes on gaming content:**
```
"15 minutes watching gaming content. Remember:
watching often leads to wanting to play."
```

**After 30 minutes total in gaming apps:**
```
"30 minutes in gaming apps today. These keep
games on your mind. Is that helping?"
```

**Any time in game launcher apps:**
```
"⚠️ You opened Steam. High risk of relapse.
Consider deleting gaming apps from your phone."
```

### Twitch/YouTube Specific

```
"Watching streams keeps gaming in your head.
Every hour watching is an hour not living."

"Let's Play videos trigger 'I could be playing'
thoughts. Time to close YouTube?"

"2 hours of gaming content. You're not playing,
but your brain is still in gaming mode."
```

### Discord Messages

```
"Discord keeps you connected to gaming friends.
This can trigger FOMO and urges to play."

"Gaming chat is active. Remember why you're
taking a break from games."

"Your guild is online. The urge to join is
normal - let it pass."
```

### Late Night Messages

```
"Late night gaming content is high-risk.
This often leads to 'just one game' thinking."

"Watching streams at midnight? Your sleep
and real life need protection."
```

---

## Insights & Correlations

### Pattern Detection

**Content to Play Correlation:**
```
"On days you watch 2+ hours of gaming content,
you report 70% more urges to play."

"Your Twitch usage predicts relapse risk.
Reducing stream time may help recovery."
```

**Time-Based Patterns:**
```
"Weekend gaming app usage is 3x weekday levels.
Consider extra protection on weekends."

"Discord activity peaks during raid times.
Your old guild schedule still pulls at you."
```

**Trigger Chain:**
```
Pattern detected:
YouTube (gaming video) → Discord (check friends)
→ Steam (browse store) → Strong urge

Breaking the chain early helps prevent urges.
```

### Dashboard Insights

```
┌─────────────────────────────────────────────┐
│  Insight                                    │
│                                             │
│  Gaming content keeps you in gaming mode:   │
│                                             │
│  Days with gaming YouTube: 65% urge rate    │
│  Days without gaming content: 15% urge rate │
│                                             │
│  The content you consume shapes your        │
│  thoughts. Gaming content = gaming thoughts.│
│                                             │
│  Time recovered this month: 180 hours       │
│  (Based on your previous gaming average)    │
│                                             │
│  [Block Gaming Content on YouTube]          │
│  [Unsubscribe from Gaming Channels]         │
└─────────────────────────────────────────────┘
```

---

## Alex Integration

### Usage Context for Alex

When Alex has screen time access:
```
Alex can reference:
- "I see you've been on Twitch a lot today.
   Is watching making it harder to not play?"
- "Your Discord usage has increased this week.
   Are you feeling pulled back to gaming?"
- "New expansion dropped for [game]. I noticed
   you checked YouTube 8 times today. Want to
   talk about how you're handling it?"
```

### Release/Event Awareness

```
Alex proactively mentions:
- "I know a big update dropped for [game].
   This might be a tough week. I'm here."
- "Your old guild has a raid tonight.
   How are you feeling about that?"
```

---

## Achievements

| Achievement | Requirement | Message |
|-------------|-------------|---------|
| Stream Free | No Twitch for 7 days | "Your time, not streamers' time." |
| Discord Detox | <30 min Discord for 7 days | "Real friends > online friends." |
| Content Clear | No gaming YouTube for 7 days | "Out of sight, out of mind." |
| App Purge | Uninstalled all gaming apps | "No more easy access." |
| Full Digital Detox | <1 hour all gaming content for 7 days | "Your brain is healing." |
| 100 Hours | Reclaimed 100 hours from gaming | "That's 4+ full days of your life back." |

---

## Recommended Thresholds

### Recovery Mode (Breaking the Habit)
```
Game launcher alert: Instant (any open)
Gaming content alert: 15 minutes
Discord alert: 10 minutes
Total gaming apps: 30 minutes daily max
Notification style: Direct
```

### Moderate Mode (Reducing Exposure)
```
Game launcher alert: Instant
Gaming content alert: 30 minutes
Discord alert: 20 minutes
Total gaming apps: 60 minutes daily
Notification style: Encouraging
```

### Maintenance Mode (If attempting moderation)
```
Gaming content alert: 45 minutes
Discord alert: 30 minutes
Total gaming apps: 90 minutes daily
Notification style: Gentle
```

---

## Gaming Event Detection

### Automatic Event Tracking

```
┌─────────────────────────────────────────────┐
│  Gaming Event Calendar                      │
│                                             │
│  Track events that might trigger you:       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Major game releases             │   │
│  │ [✓] Expansion/DLC drops             │   │
│  │ [✓] E3 / Game awards season         │   │
│  │ [✓] Steam sales                     │   │
│  │ [✓] Free game giveaways             │   │
│  │ [ ] Esports tournaments             │   │
│  │ [✓] MMO patch days                  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Specific games to track releases for:      │
│  [Add your trigger games]                   │
│                                             │
│  During events:                             │
│  - Extra strict content limits              │
│  - Proactive Alex check-ins                 │
│  - Avoid gaming news entirely               │
│                                             │
└─────────────────────────────────────────────┘
```

### Event Day Behavior

On game release/patch days:
```
Automatic adjustments:
- All thresholds reduced by 50%
- Proactive morning check-in from Alex
- Gaming content blocking strengthened
- Accountability partner notified (optional)
- Extra breathing exercises suggested
```

---

## Time Reclaimed Calculator

### Gaming Hours Recovered

```
┌─────────────────────────────────────────────┐
│  Time Reclaimed                             │
│                                             │
│  Your previous gaming (from onboarding):    │
│  Average daily gaming: 5 hours              │
│                                             │
│  Days in recovery: 30                       │
│  Hours reclaimed: 150 hours                 │
│                                             │
│  That's equivalent to:                      │
│  - 6.25 full days                           │
│  - 18 full work days                        │
│  - Time to learn a new skill                │
│  - Time to read 15 books                    │
│  - Time to exercise 150 times               │
│                                             │
│  What have you done with this time?         │
│  [Log My Activities]                        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Weekly Report Content

### Gaming-Specific Sections

```
┌─────────────────────────────────────────────┐
│  Weekly Screen Time Report                  │
│                                             │
│  Gaming Content: 4h 15m (↓ 30%)             │
│  Discord: 2h 30m (↓ 45 min)                 │
│                                             │
│  Content Breakdown:                         │
│  - Twitch: 2h (↓ 1h!)                       │
│  - YouTube gaming: 1h 30m (↓ 30 min)        │
│  - Reddit gaming subs: 45m (same)           │
│                                             │
│  Gaming Events This Week:                   │
│  - Steam sale started (stayed strong!)      │
│  - New game release (avoided content)       │
│                                             │
│  Correlation:                               │
│  Your reduced gaming content correlates     │
│  with 40% fewer reported urges this week.   │
│                                             │
│  Time Reclaimed This Week: 35 hours         │
│  Based on previous 5 hr/day habit           │
│                                             │
│  Next Week's Challenge:                     │
│  Try to keep all gaming content under       │
│  3 hours total.                             │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Discord-Specific Monitoring

### Server & Channel Tracking

```
┌─────────────────────────────────────────────┐
│  Discord Monitoring                         │
│                                             │
│  Discord is complex for gaming recovery:    │
│  - Gaming friends create FOMO               │
│  - Guild activity triggers urges            │
│  - Text channels keep games top of mind     │
│                                             │
│  Options:                                   │
│                                             │
│  ○ Track all Discord time                   │
│  ● Track, but allow longer threshold        │
│  ○ Don't track Discord                      │
│                                             │
│  Recommendation:                            │
│  Consider leaving gaming servers and        │
│  only staying in non-gaming communities.    │
│  You can rejoin later if you recover.       │
│                                             │
│  [Leave Gaming Servers Guide]               │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Content Filtering Recommendations

### YouTube Recommendations

```
┌─────────────────────────────────────────────┐
│  YouTube Gaming Content Control             │
│                                             │
│  YouTube's algorithm will push gaming       │
│  content based on your history.             │
│                                             │
│  Recommended actions:                       │
│                                             │
│  1. Clear watch history                     │
│     [How to clear history →]                │
│                                             │
│  2. Unsubscribe from gaming channels        │
│     You follow 23 gaming channels           │
│     [View and manage →]                     │
│                                             │
│  3. Click "Not interested" on gaming        │
│     videos to retrain the algorithm         │
│                                             │
│  4. Use Alex Friend's YouTube blocking      │
│     Block gaming category entirely          │
│     [Enable in Content Blocker →]           │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Guild/Clan FOMO Management

### Social Gaming Pressure

```
Your gaming social connections can be the
hardest part of recovery. Here's how we help:

Alex understands:
- "Your guild is raiding tonight without you.
  That's hard. The feeling will pass."
- "Your friends are playing the new game.
  FOMO is normal. Real friendships survive
  a break from gaming."

Notification timing:
- Extra support during typical raid times
- Check-ins when your old group is likely active
- Reminders that real friends stay friends

Long-term:
- Some gaming friendships will fade
- This is a natural part of recovery
- Real-world connections replace them over time
```
