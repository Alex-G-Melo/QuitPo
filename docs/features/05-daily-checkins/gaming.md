# Daily Check-ins - Gaming Addiction

This file contains gaming addiction-specific content for the Daily Check-ins system. See [README.md](README.md) for shared functionality.

---

## Gaming-Specific Triggers

In addition to universal triggers (Stress, Boredom, Loneliness, HALT, Relationship, Celebration), these triggers are specific to gaming addiction:

| Category | Description | Icon |
|----------|-------------|------|
| New Release | Game you want just came out | 🎮 |
| Friends Playing | Social pressure, invites | 👥 |
| Weekend Free | Open schedule, nothing planned | 📅 |
| After Work/School | Transition time, decompression | 🏠 |
| Guild/Clan | Obligations to team | ⚔️ |
| Limited Event | FOMO about timed content | ⏰ |
| Bad Day | Using games to escape | 😔 |
| Achievement Near | Close to unlock/milestone | 🏆 |
| Twitch/YouTube | Watching others play | 📺 |

### Trigger Seed Data
```javascript
const gamingTriggers = [
  // Universal (included from shared)
  { name: 'stress', display_name: 'Stress', icon: '😰', sort_order: 1 },
  { name: 'boredom', display_name: 'Boredom', icon: '😑', sort_order: 2 },
  { name: 'loneliness', display_name: 'Loneliness', icon: '😢', sort_order: 3 },
  { name: 'halt', display_name: 'HALT', icon: '⚠️', sort_order: 4 },
  { name: 'relationship', display_name: 'Relationship', icon: '💔', sort_order: 5 },
  { name: 'celebration', display_name: 'Celebration', icon: '🎉', sort_order: 6 },
  // Gaming-specific
  { name: 'new_release', display_name: 'New Release', icon: '🎮', sort_order: 7 },
  { name: 'friends_playing', display_name: 'Friends Playing', icon: '👥', sort_order: 8 },
  { name: 'weekend_free', display_name: 'Weekend Free', icon: '📅', sort_order: 9 },
  { name: 'after_work', display_name: 'After Work/School', icon: '🏠', sort_order: 10 },
  { name: 'guild_clan', display_name: 'Guild/Clan Obligations', icon: '⚔️', sort_order: 11 },
  { name: 'limited_event', display_name: 'Limited Event', icon: '⏰', sort_order: 12 },
  { name: 'bad_day', display_name: 'Bad Day/Escape', icon: '😔', sort_order: 13 },
  { name: 'achievement_near', display_name: 'Achievement Near', icon: '🏆', sort_order: 14 },
  { name: 'streaming', display_name: 'Watching Streams', icon: '📺', sort_order: 15 },
];
```

---

## Pattern Detection Rules

### New Release Vulnerability
```
IF "new_release" trigger logged
   AND urge > 6
THEN flag "New Release Risk"
AND suggest:
  - "This game will still exist when you're ready for balanced gaming"
  - "Reviews and content will be there later - no rush"
  - "Remember why you're taking a break from gaming"
```

### Weekend Binge Risk
```
IF "weekend_free" trigger appears on Friday evening
   AND urge > 5
THEN flag "Weekend Binge Risk"
AND suggest:
  - "Plan real-world activities for the weekend"
  - "Schedule time with friends in person"
  - "The weekend is for living, not gaming marathons"
```

### Social Pressure
```
IF "friends_playing" trigger appears 3+ times in 7 days
THEN flag "Social Gaming Pressure"
AND suggest:
  - "Real friends will understand your recovery"
  - "Suggest non-gaming activities with gaming friends"
  - "It's okay to say no to gaming invites"
```

### Escape Gaming
```
IF "bad_day" trigger logged
   AND urge > 6
THEN flag "Escape Gaming Pattern"
AND suggest:
  - "Gaming won't fix what's wrong - it just postpones dealing with it"
  - "Talk to Alex about what's really bothering you"
  - "Try a walk, exercise, or real-world activity to process"
```

### FOMO Events
```
IF "limited_event" trigger logged
THEN show reminder:
  "Limited events are designed to create artificial urgency.
   The game wants you to feel like you MUST play now.
   Real life doesn't have artificial time limits."
```

---

## Insight Messages

### Trigger-Based Insights

**When Friends Playing is top trigger:**
> 💡 Insight: Social pressure is your biggest trigger. Gaming communities can be supportive, but they can also enable addiction. Consider which gaming friends support your real-life goals.

**When After Work is top trigger:**
> 💡 Insight: The after-work transition is your vulnerable time. You're tired and gaming feels like easy reward. Try establishing a different decompression routine: exercise, walk, hobby.

**When Limited Event is trigger:**
> 💡 Insight: FOMO about timed events got you. These are designed to manipulate you - game designers know exactly how to create urgency. Real life is the only truly limited event.

**When Boredom is top trigger:**
> 💡 Insight: Boredom is driving your urges. Games fill time effortlessly. Real life requires more effort but provides real satisfaction. Build a list of offline activities.

**When Guild/Clan is trigger:**
> 💡 Insight: Guild obligations are triggering you. Games create social contracts to keep you playing. Real friends understand when you need to take a break.

---

## Check-in Completion Messages

### Morning Check-in

**Low urge (1-3):**
> ✓ Great start! Your day is ahead of you. Fill it with real achievements.

**Moderate urge (4-6):**
> ✓ Noted. The game isn't going anywhere. Your real life is happening today.

**High urge (7-10):**
> ✓ Logged. Strong urge to game this morning. What's really calling you - the game, or escape from something else?

### Evening Check-in

**Low urge day:**
> ✓ Solid day of balanced living. You didn't need the game to have a good day.

**High urge survived:**
> ✓ You resisted the pull. Every hour you spend in real life builds real skills and relationships.

**Post-work check-in:**
> ✓ Evening logged. The after-work hours are when gaming often takes over. What will you do with your evening instead?

---

## Alex Integration Context

When Alex receives check-in data for gaming addiction users:

```
Recent check-in context (last 7 days):
- Average mood: {avg_mood}/10
- Average urge: {avg_urge}/10
- Top triggers: {triggers}
- Trend: {improving/stable/struggling}
- Last check-in note: "{note}"

For gaming addiction context:
- Watch for new release and event FOMO
- Social pressure from gaming friends is common
- After-work/weekend are high-risk times
- Escape gaming masks underlying issues
- Track real-life hours gained, not just gaming hours avoided
```

---

## Notification Content

### Risk-Time Notifications

**After work/school:**
> 🏠 Home from work/school - this is when gaming often pulls hardest. What's your plan for the evening?

**Weekend morning:**
> ☀️ Weekend ahead! Plan real-world activities. The games will still be there when you're ready for balance.

**Major release day (if tracked):**
> 🎮 New release today. Remember: it will still be there later. Real life is limited; games are not.

### After High Urge Check-in

**Immediate follow-up:**
> 💙 You're feeling the pull to game. Ask yourself: what am I really looking for? Achievement? Connection? Escape? There are real-world ways to get those.

**30-minute follow-up:**
> How are you now? Did you game, or find something else? [Check-in again] [Talk to Alex]

### Positive Reinforcement

**Week of balance:**
> 📈 Your urge levels are down this week. Life outside the game is becoming more interesting.

**Physical activity noted:**
> 💪 You mentioned exercise in your check-in. Your body is recovering from all those sitting hours.

---

## Recovery-Specific Metrics

Track and display these gaming-specific patterns:

- **Real Life Hours**: Time reclaimed from not gaming
- **New Release Resistance**: Major releases passed without binging
- **Weekend Balance**: Weekend hours spent on real activities
- **Social Gaming Pressure**: Frequency of friends_playing trigger
- **Escape Gaming Flag**: How often bad_day correlates with high urge
- **Physical Activity**: Any mentions of exercise or outdoor activities

---

## Urge Level Descriptions

For gaming addiction, the urge scale has specific meaning:

| Level | Description | State |
|-------|-------------|-------|
| 1-2 | Gaming not on mind, enjoying real activities | Safe |
| 3-4 | Thinking about games, can redirect attention | Caution |
| 5-6 | Strong urge to play, watching streams/content | Alert |
| 7-8 | Loading the game, about to start session | Danger |
| 9-10 | In a gaming session, can't stop | Critical |

**Critical Level Response (9-10):**
If user logs 9-10 urge, immediately offer:
1. Panic button
2. Physical activity suggestion (walk, exercise)
3. Direct connect to Alex
4. Reminder of real-life goals
5. "Log off now" challenge

---

## Real-World Activity Tracking

Check-ins can optionally track real-world activities:

**Morning Check-in Addition:**
> What's one real-world thing you'll do today?
> - Exercise
> - Meet someone in person
> - Work on a hobby
> - Learn something new
> - Spend time outdoors
> - Other: _____

**Evening Check-in Addition:**
> What did you actually do today?
> - [Same options with completion tracking]

**Celebration for follow-through:**
> 🎉 You said you'd exercise and you did! Real achievements are being unlocked.

---

## Physical Health Tracking

Gaming addiction often impacts physical health. Optional tracking:

- Sleep quality (1-10)
- Physical activity today (yes/no)
- Time spent outdoors
- Posture/back pain awareness

**Health Insight Example:**
> 💪 You've exercised 4 times this week! Your body is recovering from sedentary gaming habits.

---

## Weekly Summary Message

Generated every Sunday evening:

**Template:**
> 📊 **Your Week in Review**
>
> Days checked in: {count}/7
> Average mood: {mood}/10 ({trend} from last week)
> Average urge: {urge}/10 ({trend} from last week)
> Balance streak: Day {streak_day}
>
> **Top Trigger:** {trigger}
> {trigger_specific_insight}
>
> **Real Life Hours (estimated):** {hours}
> That's {equivalent} (a new skill learned, friendships deepened, fitness gained)
>
> **Physical Activity Days:** {activity_count}/7
>
> **Highlight:** {positive_observation}
>
> Real life has better graphics than any game. Keep living it.
