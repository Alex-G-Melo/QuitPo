# Daily Check-ins - Gambling Addiction

This file contains gambling addiction-specific content for the Daily Check-ins system. See [README.md](README.md) for shared functionality.

---

## Gambling-Specific Triggers

In addition to universal triggers (Stress, Boredom, Loneliness, HALT, Relationship, Celebration), these triggers are specific to gambling addiction:

| Category | Description | Icon |
|----------|-------------|------|
| Sports Event | Game on, friends betting | ⚽ |
| Payday | Money in account | 💰 |
| Gambling Ads | Betting commercials, promos | 📺 |
| Financial Stress | Bills, debt, money problems | 💸 |
| Winning Memory | Remembering past wins | 🎰 |
| Chasing Losses | Trying to win back money | 🔄 |
| Friends Betting | Social pressure to join | 👥 |
| Casino Nearby | Physical proximity to venue | 🏢 |
| Free Bet Offer | Promotional offers | 🎁 |

### Trigger Seed Data
```javascript
const gamblingTriggers = [
  // Universal (included from shared)
  { name: 'stress', display_name: 'Stress', icon: '😰', sort_order: 1 },
  { name: 'boredom', display_name: 'Boredom', icon: '😑', sort_order: 2 },
  { name: 'loneliness', display_name: 'Loneliness', icon: '😢', sort_order: 3 },
  { name: 'halt', display_name: 'HALT', icon: '⚠️', sort_order: 4 },
  { name: 'relationship', display_name: 'Relationship', icon: '💔', sort_order: 5 },
  { name: 'celebration', display_name: 'Celebration', icon: '🎉', sort_order: 6 },
  // Gambling-specific
  { name: 'sports_event', display_name: 'Sports Event', icon: '⚽', sort_order: 7 },
  { name: 'payday', display_name: 'Payday', icon: '💰', sort_order: 8 },
  { name: 'gambling_ads', display_name: 'Betting Ads', icon: '📺', sort_order: 9 },
  { name: 'financial_stress', display_name: 'Financial Stress', icon: '💸', sort_order: 10 },
  { name: 'winning_memory', display_name: 'Remembering Wins', icon: '🎰', sort_order: 11 },
  { name: 'chasing_losses', display_name: 'Chasing Losses', icon: '🔄', sort_order: 12 },
  { name: 'friends_betting', display_name: 'Friends Betting', icon: '👥', sort_order: 13 },
  { name: 'casino_nearby', display_name: 'Casino Nearby', icon: '🏢', sort_order: 14 },
  { name: 'free_bet', display_name: 'Free Bet Offer', icon: '🎁', sort_order: 15 },
];
```

---

## Pattern Detection Rules

### Payday Risk
```
IF "payday" trigger logged within 3 days of actual payday
   AND urge > 5
THEN flag "Payday Risk Pattern"
AND suggest:
  - "Consider setting up automatic transfers to savings on payday"
  - "Have a plan for payday: bills first, then savings, then spending money"
  - "Limit access to funds on payday"
```

### Sports Event Correlation
```
IF "sports_event" trigger appears on days with major sports
   AND urge > 4
THEN flag "Sports Betting Pattern"
AND suggest:
  - "You can enjoy sports without betting"
  - "Watch games with someone who knows your recovery"
  - "Avoid betting apps and sites during games"
```

### Chasing Losses Warning
```
IF "chasing_losses" trigger logged
THEN immediately show warning:
  "Chasing losses is the most dangerous gambling mindset.
   The house always wins in the long run. Stop now."
AND suggest talking to Alex
AND offer financial counseling resources
```

### Financial Stress Loop
```
IF "financial_stress" trigger appears 3+ times in 7 days
   AND user has gambling history
THEN flag "Financial Stress-Gambling Loop"
AND suggest:
  - "Gambling won't solve financial problems - it creates them"
  - "Consider speaking with a financial counselor"
  - "Talk to Alex about healthy ways to address financial anxiety"
```

---

## Insight Messages

### Trigger-Based Insights

**When Sports Event is top trigger:**
> 💡 Insight: Sports events are your biggest trigger. This is common - the excitement of the game pairs with betting urges. Try watching games with someone who supports your recovery.

**When Payday is top trigger:**
> 💡 Insight: Payday is high-risk for you. Your brain associates money with gambling opportunity. Consider automatic transfers and limited access on payday.

**When Financial Stress is top trigger:**
> 💡 Insight: Financial stress is driving urges. The irony: gambling caused financial problems, and now financial problems make you want to gamble. Break the cycle with a financial plan.

**When Chasing Losses appears:**
> 💡 Insight: You logged "chasing losses." This is the most dangerous mindset in gambling. The house edge guarantees long-term loss. Every bet to "win back" money just loses more.

**When Free Bet Offer is trigger:**
> 💡 Insight: "Free" bets aren't free - they're designed to restart gambling habits. Casinos spend millions on these because they know the ROI. Block promotional emails and SMS.

---

## Check-in Completion Messages

### Morning Check-in

**Low urge (1-3):**
> ✓ Great start! Your money is safe. Focus on what you can build today without risking it.

**Moderate urge (4-6):**
> ✓ Noted. Keep your wallet safe today. Remember what gambling has cost you.

**High urge (7-10):**
> ✓ Logged. Strong urge this morning. What's triggering it? Reach out before making any decisions with money.

### Evening Check-in

**Low urge day:**
> ✓ Solid day. Your paycheck stayed in your pocket. That's financial recovery in action.

**High urge survived:**
> ✓ You faced a strong urge and kept your money safe. Every day you don't gamble, your financial situation improves.

**Payday check-in:**
> ✓ Payday check-in complete. Your money is where it belongs. Bills paid? Savings growing? That's the real jackpot.

---

## Alex Integration Context

When Alex receives check-in data for gambling addiction users:

```
Recent check-in context (last 7 days):
- Average mood: {avg_mood}/10
- Average urge: {avg_urge}/10
- Top triggers: {triggers}
- Trend: {improving/stable/struggling}
- Last check-in note: "{note}"

For gambling addiction context:
- Watch for payday patterns
- Sports events correlate with urges
- Financial stress creates dangerous loops
- "Chasing losses" is a critical red flag
- Highlight money saved, not just days clean
```

---

## Notification Content

### Event-Based Notifications

**Major sports event day:**
> ⚽ Big game tonight. You can enjoy sports without betting. Your wallet thanks you.

**Payday approaching:**
> 💰 Payday coming up. Have a plan: bills, savings, then fun. The casino doesn't get a cut.

**Weekend:**
> 📅 Weekend ahead. Casinos are busiest on weekends. What's your plan to stay safe?

### After High Urge Check-in

**Immediate follow-up:**
> 💙 You logged a strong urge. Remember: the thrill is temporary, but the losses are permanent. Your family is counting on you.

**30-minute follow-up:**
> How are you doing now? Money still safe? [Check-in again] [Talk to Alex]

### Financial Milestone

**Week of no gambling:**
> 💵 One week without gambling! At your average rate, you'd have lost R$[X]. Instead, it's yours.

**Month of financial freedom:**
> 📈 One month gamble-free. Your financial health is recovering. Keep building that security.

---

## Recovery-Specific Metrics

Track and display these gambling-specific patterns:

- **Payday Risk Score**: Urge levels within 3 days of payday
- **Sports Correlation**: Urge spikes on major sports event days
- **Financial Stress Loop**: Frequency of financial_stress trigger
- **Money Saved Estimate**: Days clean × average daily gambling loss
- **Chasing Incidents**: Any instance of "chasing losses" trigger

---

## Urge Level Descriptions

For gambling addiction, the urge scale has specific meaning:

| Level | Description | State |
|-------|-------------|-------|
| 1-2 | No urge, or fleeting thought about betting | Safe |
| 3-4 | Aware of urge, can ignore it | Caution |
| 5-6 | Strong urge, checking odds/thinking about bets | Alert |
| 7-8 | Intense urge, opening betting apps/sites | Danger |
| 9-10 | About to place a bet, at the casino | Critical |

**Critical Level Response (9-10):**
If user logs 9-10 urge, immediately offer:
1. Panic button
2. "Think about your family" reminder
3. Direct connect to Alex
4. Self-exclusion resources
5. Financial lockdown suggestions

---

## Financial Integration

Check-ins can optionally track financial elements:

**Morning Check-in Addition:**
> Any spending triggers today? (payday, bonus, refund)

**Evening Check-in Addition:**
> Did you stay within your budget today?
> - Yes, money is safe
> - Spent more than planned (not gambling)
> - Had gambling-related spending

**Optional Money Tracker:**
Users can log estimated savings:
- "At my old rate, I would have gambled R$[X] today"
- Running total of money kept

---

## Weekly Summary Message

Generated every Sunday evening:

**Template:**
> 📊 **Your Week in Review**
>
> Days checked in: {count}/7
> Average mood: {mood}/10 ({trend} from last week)
> Average urge: {urge}/10 ({trend} from last week)
> Gamble-free streak: Day {streak_day}
>
> **Top Trigger:** {trigger}
> {trigger_specific_insight}
>
> **Money Saved (estimated):** R${amount}
> That's {equivalent} (rent, groceries, savings goal progress)
>
> **Highlight:** {positive_observation}
>
> Your financial future is getting brighter every day.
