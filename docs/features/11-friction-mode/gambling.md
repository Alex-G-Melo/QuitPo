# Friction Mode - Gambling Addiction

This file contains gambling addiction-specific friction mode configuration. See [README.md](README.md) for shared functionality.

---

## Recommended Apps for Friction

### Critical (If Still Installed — Consider Deleting)
| App | Reason |
|-----|--------|
| DraftKings | Direct gambling access |
| FanDuel | Direct gambling access |
| BetMGM | Direct gambling access |
| Any betting app | Direct gambling access |

**Note**: For gambling addiction, these apps should ideally be deleted entirely, not just have friction applied. Friction is a fallback if user insists on keeping them.

### High Priority
| App | Reason |
|-----|--------|
| Safari/Chrome | Access to gambling sites |
| ESPN | Sports content triggers betting urges |
| Sports apps | Scores/odds proximity to betting |
| Twitter/X | Sports discussions, betting promotion |

### Secondary
| App | Reason |
|-----|--------|
| News apps | Sports gambling ads |
| Fantasy sports apps | Gambling-adjacent |
| Trading apps | High-risk trading behavior |

---

## Addiction-Specific Messages

### Financial Consequence Messages
```
"Think about the bills that money could pay.
Is a bet worth more than peace of mind?"

"The house always wins long-term. You know this.
Every bet is money you're likely to lose."

"How much have you lost in total? This bet
won't win it back — it never does."

"Your family needs that money more than
a casino does."
```

### Logic-Based Messages
```
"The odds are against you. Literally.
That's how gambling makes money."

"If you could win long-term, casinos
wouldn't exist. They're not charities."

"'I'm due for a win' is a lie your brain
tells you. Each bet is independent."
```

### Chasing Messages
```
"Chasing losses is how small problems
become catastrophic ones."

"You can't win back what's gone.
You can only protect what's left."

"One bet leads to ten. You know this pattern.
Break the chain here."
```

### Consequence Reminder Messages
```
"Remember the worst night. The one where
you lost too much. Don't repeat it."

"Think about how you'll feel in an hour
if you bet. Is that worth it?"

"The shame after losing isn't worth
the brief thrill of betting."
```

---

## Payday-Specific Messages

When friction triggers near payday:

```
"Payday is [today/tomorrow/recent]. This is
your highest-risk time. Be extra careful."

"Fresh money doesn't mean it's meant for gambling.
What bills need paying first?"

"Your paycheck is for rent, food, future.
Not for the casino."

"How much of your last paycheck went to gambling?
Protect this one."
```

---

## Sports Event Messages

When major sports events are detected:

```
"Big game [today/tonight]. I know the urge
to bet is strong. You can watch without wagering."

"The game is exciting on its own.
You don't need money on it to enjoy it."

"Everyone's talking about the game and odds.
You can enjoy it bet-free."

"The outcome won't change how your life goes.
Only your bets can hurt you here."
```

---

## Late Night Messages

```
"Late-night gambling decisions are usually
the worst ones. Sleep on it."

"Your judgment is impaired when tired.
Tomorrow is better for any decision."

"Nothing good happens in gambling apps
after midnight."

"Go to bed. The games will still exist
tomorrow — and so will your money."
```

---

## Deflection Alternatives

When user chooses "Do Something Else":

```
┌─────────────────────────────────────────────┐
│  Good call. Let's redirect that energy.     │
│                                             │
│  Physical:                                  │
│  [Go for a walk]                            │
│  [Exercise for 10 minutes]                  │
│  [Cold shower]                              │
│                                             │
│  Healthy excitement:                        │
│  [Play a video game]                        │
│  [Watch something exciting]                 │
│  [Call a friend about the game]             │
│                                             │
│  Support:                                   │
│  [Talk to Alex]                             │
│  [Call accountability partner]              │
│  [Journal about this urge]                  │
│                                             │
│  Money saved so far: $X,XXX                 │
│  [See full savings tracker]                 │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Financial Integration

### Money Saved Reminder
```
On deflection success screen:

"You just protected your money.

Money saved so far: $2,340
(based on your weekly average of $300)

That's enough for:
- 2 months of utilities
- A weekend trip
- An emergency fund start"
```

### Debt Reminder (If User Has Shared)
```
"You have $X,XXX in gambling debt.
This bet won't fix that. Only not-betting will."

"Every dollar not gambled is a dollar
toward paying off what you owe."
```

---

## Pattern Detection

### High-Risk Pattern Recognition
```
If friction triggers during/after sports events:
→ "The game is triggering you, not real need.
   This feeling will pass after the game ends."

If friction triggers on payday:
→ "Payday urges are the strongest.
   You've been here before. You can beat it."

If friction triggers 3+ times in same session:
→ "You're fighting hard right now.
   Call your accountability partner or GA hotline."
```

---

## Crisis Escalation

### When Friction Isn't Enough
```
After 5+ friction events in one day:

"You're struggling hard today. This is serious.

Please consider:
- National Problem Gambling Helpline: 1-800-522-4700
- Talk to Alex right now
- Call your accountability partner
- Go to a Gamblers Anonymous meeting

[Call Hotline]  [Talk to Alex]  [Find GA Meeting]"
```

---

## Alex Conversation Context

When user talks to Alex after friction:

```
Alex knows:
- Which app triggered friction
- Whether it was sports-related timing
- Whether payday is near
- User's gambling debt amount
- Recent betting patterns

Alex might say:
"I saw you paused before ESPN during the game.
That takes real strength. How are you feeling?"

"Payday is tomorrow and you're hitting friction
on sports apps. Let's make a plan for tomorrow."

"You've deflected from betting apps 5 times today.
I'm proud of you, but also concerned. Let's talk."
```

---

## Premium Features

### Sports Calendar Integration
```
Automatically increases friction during:
- User's tracked sports (NFL, NBA, etc.)
- Major events (Super Bowl, playoffs)
- User's historical high-risk times

Friction during tracked events:
- Longer duration (15 seconds)
- Financial consequence messages prioritized
- Accountability partner notification option
```

### Betting Pattern Analysis
```
"You typically gamble most on:
- Sunday afternoons (NFL)
- Friday nights (payday + sports)
- After 10 PM (tired/impaired)

Extra friction is enabled during these times."
```
