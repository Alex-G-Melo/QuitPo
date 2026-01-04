# Daily Check-ins - Pornography Addiction

This file contains pornography addiction-specific content for the Daily Check-ins system. See [README.md](README.md) for shared functionality.

---

## Porn-Specific Triggers

In addition to universal triggers (Stress, Boredom, Loneliness, HALT, Relationship, Celebration), these triggers are specific to pornography addiction:

| Category | Description | Icon |
|----------|-------------|------|
| Social Media | Suggestive content on feeds | 📱 |
| Late Night | After 10 PM alone | 🌙 |
| Morning Routine | Waking up alone, arousal | 🌅 |
| Rejection | Real or perceived sexual rejection | 💔 |
| Edging | "Just looking" that escalated | 👀 |
| Dating Apps | Swiping, sexual imagery | 💕 |
| Alcohol | Lowered inhibitions | 🍺 |
| Privacy | Alone with device | 🏠 |

### Trigger Seed Data
```javascript
const pornTriggers = [
  // Universal (included from shared)
  { name: 'stress', display_name: 'Stress', icon: '😰', sort_order: 1 },
  { name: 'boredom', display_name: 'Boredom', icon: '😑', sort_order: 2 },
  { name: 'loneliness', display_name: 'Loneliness', icon: '😢', sort_order: 3 },
  { name: 'halt', display_name: 'HALT', icon: '⚠️', sort_order: 4 },
  { name: 'relationship', display_name: 'Relationship', icon: '💔', sort_order: 5 },
  { name: 'celebration', display_name: 'Celebration', icon: '🎉', sort_order: 6 },
  // Porn-specific
  { name: 'social_media', display_name: 'Social Media', icon: '📱', sort_order: 7 },
  { name: 'late_night', display_name: 'Late Night', icon: '🌙', sort_order: 8 },
  { name: 'morning_routine', display_name: 'Morning Routine', icon: '🌅', sort_order: 9 },
  { name: 'rejection', display_name: 'Rejection', icon: '💔', sort_order: 10 },
  { name: 'edging', display_name: 'Edging/Peeking', icon: '👀', sort_order: 11 },
  { name: 'dating_apps', display_name: 'Dating Apps', icon: '💕', sort_order: 12 },
  { name: 'alcohol', display_name: 'Alcohol', icon: '🍺', sort_order: 13 },
  { name: 'privacy', display_name: 'Alone with Device', icon: '🏠', sort_order: 14 },
];
```

---

## Pattern Detection Rules

### Late Night Vulnerability
```
IF "late_night" trigger appears in 50%+ of check-ins
   AND those check-ins have urge > 5
THEN flag "Late Night Risk Pattern"
AND suggest:
  - "Consider keeping devices out of bedroom"
  - "Enable stricter content blocking after 10 PM"
```

### Social Media Trigger
```
IF "social_media" trigger appears 3+ times in 7 days
THEN flag "Social Media Risk"
AND suggest social media safety settings
```

### Edging Warning
```
IF "edging" trigger logged
THEN immediately show warning:
  "Edging almost always leads to relapse.
   Consider this a close call. What can you do differently next time?"
AND suggest talking to Alex
```

### Morning Vulnerability
```
IF "morning_routine" trigger appears 4+ times in 14 days
THEN flag "Morning Risk Pattern"
AND suggest:
  - "Keep phone charging outside bedroom"
  - "Establish morning routine that gets you moving quickly"
```

---

## Insight Messages

### Trigger-Based Insights

**When Stress is top trigger:**
> 💡 Insight: Stress is your biggest trigger. Your brain has learned to use porn as stress relief. Consider learning healthier coping: breathing exercises, walks, talking to someone.

**When Late Night is top trigger:**
> 💡 Insight: Late nights are dangerous for you. This is common - willpower is lowest at night, and privacy is highest. Try establishing a "devices off" time.

**When Loneliness is top trigger:**
> 💡 Insight: Loneliness is driving your urges. This makes sense - porn can feel like connection, but it deepens isolation. Focus on real human connection, even small interactions.

**When Boredom is top trigger:**
> 💡 Insight: Boredom is a major trigger for you. Your brain craves stimulation. Build a list of healthy activities you can turn to when boredom hits.

**When Social Media is top trigger:**
> 💡 Insight: Social media is triggering your urges. Algorithms push suggestive content to keep you engaged. Consider using our social safety settings to reduce exposure.

---

## Check-in Completion Messages

### Morning Check-in

**Low urge (1-3):**
> ✓ Great start! Your brain is healing. Use this energy for something meaningful today.

**Moderate urge (4-6):**
> ✓ Noted. Morning urges are normal as your brain recalibrates. They'll decrease over time.

**High urge (7-10):**
> ✓ Logged. Morning urges can be strong - your brain is used to that dopamine hit. Stay vigilant and reach out if you need support.

### Evening Check-in

**Low urge day:**
> ✓ Solid day. Low urge days are signs of healing. Your dopamine system is recalibrating.

**High urge survived:**
> ✓ You faced a strong urge and made it through. That's neural rewiring in action. Each time you resist, you strengthen new pathways.

**Pattern detected:**
> ✓ Logged. We noticed [trigger] comes up often for you. Want to explore strategies with Alex?

---

## Alex Integration Context

When Alex receives check-in data for porn addiction users:

```
Recent check-in context (last 7 days):
- Average mood: {avg_mood}/10
- Average urge: {avg_urge}/10
- Top triggers: {triggers}
- Trend: {improving/stable/struggling}
- Last check-in note: "{note}"

For porn addiction context:
- Consider neural rewiring progress
- Watch for late-night and alone-time patterns
- Stress and loneliness often mask deeper needs for connection
- Edging is a red flag - address directly
```

---

## Notification Content

### Risk-Time Notifications

**Late night approaching (9 PM):**
> 🌙 It's getting late. Based on your patterns, the next few hours are high-risk. What's your plan to stay safe tonight?

**Weekend evening:**
> 📅 Weekend nights can be challenging. Stay connected - check in with the community or chat with Alex.

### After High Urge Check-in

**Immediate follow-up:**
> 💙 You logged a strong urge. Remember: urges peak and pass. The average urge lasts 15-20 minutes. You can ride this out.

**30-minute follow-up:**
> How are you doing now? The urge often passes. [Check-in again] [Talk to Alex]

### Positive Reinforcement

**Week of low urges:**
> 📈 Your urge levels have been low all week. Your dopamine receptors are healing. Keep going!

**Consistent morning check-ins:**
> ☀️ You've done 7 morning check-ins in a row. Starting the day with intention is powerful for recovery.

---

## Recovery-Specific Metrics

Track and display these porn-specific patterns:

- **Late Night Risk Score**: Percentage of urges occurring after 10 PM
- **Edging Incidents**: Count of times edging was logged as trigger
- **Social Media Exposure**: Correlation between social media use and urges
- **Morning vs. Evening**: Compare urge patterns by time of day
- **Flatline Detection**: Extended period of low urge + low mood may indicate flatline (days 30-60)

---

## Urge Level Descriptions

For porn addiction, the urge scale has specific meaning:

| Level | Description | State |
|-------|-------------|-------|
| 1-2 | No urge, or fleeting thought quickly dismissed | Safe |
| 3-4 | Aware of urge, manageable with redirection | Caution |
| 5-6 | Strong urge, requires active resistance | Alert |
| 7-8 | Intense urge, at risk of seeking out content | Danger |
| 9-10 | Overwhelming urge, barely able to resist | Critical |

**Critical Level Response (9-10):**
If user logs 9-10 urge, immediately offer:
1. Panic button
2. Emergency breathing exercise
3. Direct connect to Alex
4. Community SOS

---

## Weekly Summary Message

Generated every Sunday evening:

**Template:**
> 📊 **Your Week in Review**
>
> Days checked in: {count}/7
> Average mood: {mood}/10 ({trend} from last week)
> Average urge: {urge}/10 ({trend} from last week)
> Streak: Day {streak_day}
>
> **Top Trigger:** {trigger}
> {trigger_specific_insight}
>
> **Highlight:** {positive_observation}
>
> Keep going. Your brain is healing with every day of freedom.
