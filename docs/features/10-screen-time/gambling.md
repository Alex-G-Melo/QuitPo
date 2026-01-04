# Screen Time Tracking - Gambling Addiction

This file contains gambling addiction-specific screen time tracking configuration. See [README.md](README.md) for shared functionality.

---

## Risky Apps to Track

### Default Tracked Apps

| App | Risk Level | Reason |
|-----|------------|--------|
| Betting apps | Critical | Direct gambling access |
| Casino apps | Critical | Direct gambling access |
| Sports apps (ESPN, etc.) | High | Gambling promotion, odds |
| Safari/Chrome | High | Access to gambling sites |
| Fantasy sports (DraftKings, FanDuel) | High | Gambling-adjacent |
| Trading apps (Robinhood, etc.) | Medium | High-risk trading behavior |
| News apps | Medium | Sports gambling ads |
| Twitter/X | Medium | Sports discussions, gambling promotion |

### Critical Apps (Should Be Uninstalled)

These apps represent direct gambling access:
```
⚠️ CRITICAL - Consider uninstalling:
- DraftKings, FanDuel
- BetMGM, Caesars Sportsbook
- PokerStars, WSOP
- Any casino or betting app

If installed, they should be tracked and
blocked via content blocker.
```

---

## Suggested App Selection Screen

```
┌─────────────────────────────────────────────┐
│  Apps to Track                              │
│                                             │
│  Critical Risk                              │
│  ┌─────────────────────────────────────┐   │
│  │ ⚠️ You have gambling apps installed  │   │
│  │    Consider deleting these:          │   │
│  │ [✓] DraftKings      - Betting       │   │
│  │ [✓] ESPN Bet        - Betting       │   │
│  │                                      │   │
│  │ [Delete Gambling Apps Guide →]       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  High Risk                                  │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Safari          - Browser       │   │
│  │ [✓] Chrome          - Browser       │   │
│  │ [✓] ESPN            - Sports        │   │
│  │ [✓] Sports Center   - Sports        │   │
│  │ [✓] The Score       - Sports        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Medium Risk                                │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] Robinhood       - Trading       │   │
│  │ [ ] Twitter/X       - Social        │   │
│  │ [ ] Reddit          - Community     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [+ Add other app]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Threshold Messages

**After 15 minutes in sports apps:**
```
"15 minutes checking sports. Remember:
scores don't require your money."
```

**After 30 minutes total in risky apps:**
```
"30 minutes in risky apps today. The urge
to bet often follows sports consumption."
```

**Any time in gambling apps (if still installed):**
```
"⚠️ You opened [betting app]. This is
high-risk. Consider deleting the app."
```

### Payday Messages

When user has set payday dates:
```
"Today is payday. Extra awareness can
help you protect your paycheck."

"Money just hit your account. Remember
why you're protecting it."
```

### Sports Event Messages

During major sporting events:
```
"Big game today. Sports apps are higher
risk during events. Stay aware."

"Super Bowl Sunday - this is a high-risk
day for gambling urges. Stay strong."
```

### Late Night Messages

```
"Late night sports browsing can trigger
betting urges. Maybe sleep on it."

"Checking odds at this hour? Nothing good
comes from late-night betting decisions."
```

---

## Insights & Correlations

### Pattern Detection

**Sports Event Correlation:**
```
"Your risky app time increases 80% on NFL
game days. Consider avoiding sports apps
during games."
```

**Financial Timing:**
```
"Browser usage spikes 2 days after payday,
correlating with your reported urges."
```

**Trigger Chain:**
```
Pattern detected: Sports app → Browser →
Gambling search → Block event

Reducing sports app time may help prevent
the urge chain.
```

### Dashboard Insights

```
┌─────────────────────────────────────────────┐
│  Insight                                    │
│                                             │
│  Sports content correlates with urges:      │
│  - Days with sports apps: 45% urge rate     │
│  - Days without sports apps: 12% urge rate  │
│                                             │
│  Consider limiting sports app time,         │
│  especially on game days.                   │
│                                             │
│  Money saved this month: $1,800             │
│  (based on your previous betting average)   │
│                                             │
│  [Set Sports App Time Limit]                │
│  [Enable Game Day Protection]               │
└─────────────────────────────────────────────┘
```

---

## Alex Integration

### Usage Context for Alex

When Alex has screen time access:
```
Alex can reference:
- "I see you've been on ESPN a lot today.
   There's a big game tonight - how are you
   feeling about the urge to bet?"
- "Your sports app time has been increasing.
   Let's talk about what's drawing you in."
- "Payday is tomorrow and you've been
   checking sports more. Want to make a plan?"
```

### Event-Aware Support

```
Alex proactively mentions:
- "Super Bowl is this weekend. I'm here if
   you need extra support."
- "I know March Madness is tough for you.
   Let's review your protection plan."
```

---

## Achievements

| Achievement | Requirement | Message |
|-------------|-------------|---------|
| Sports Detox | <15 min sports apps for 7 days | "Enjoying sports without betting." |
| Game Day Warrior | No risky app use during major game | "You watched without wagering." |
| Paycheck Protector | No gambling app opens on payday | "Your money stays yours." |
| App-Free Friday | Zero betting app opens on Friday | "Starting the weekend strong." |
| Odds-Free Week | No sports betting content for 7 days | "Clear mind, full wallet." |

---

## Recommended Thresholds

### Conservative (Early Recovery)
```
Betting app alert: Instant (any open)
Sports app alert: 10 minutes
Daily total alert: 15 minutes
Payday protection: Enabled
Notification style: Direct
```

### Moderate (Established Recovery)
```
Betting app alert: Instant (if still installed)
Sports app alert: 15 minutes
Daily total alert: 30 minutes
Payday protection: Enabled
Notification style: Encouraging
```

### Maintenance (Long-term Recovery)
```
Sports app alert: 20 minutes
Daily total alert: 45 minutes
Game day alerts: Enabled
Notification style: Gentle
```

---

## Sports Calendar Integration

### Automatic Event Detection

```
┌─────────────────────────────────────────────┐
│  Sports Event Calendar                      │
│                                             │
│  Track events that might trigger you:       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] NFL Games        Sunday risk    │   │
│  │ [✓] NBA Games        Season risk    │   │
│  │ [✓] March Madness    Annual risk    │   │
│  │ [✓] Super Bowl       High risk      │   │
│  │ [✓] World Series     Fall risk      │   │
│  │ [ ] Soccer/Football  International  │   │
│  │ [✓] Horse Racing     Track events   │   │
│  │ [✓] Boxing/UFC       Fight nights   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  During tracked events:                     │
│  - Stricter app limits                      │
│  - Proactive Alex check-ins                 │
│  - Extra blocking enabled                   │
│                                             │
└─────────────────────────────────────────────┘
```

### Event Day Behavior

On game days for tracked sports:
```
Automatic adjustments:
- Sports app threshold reduced by 50%
- Proactive morning check-in from Alex
- Extra friction on browsers
- Accountability partner notified (optional)
```

---

## Financial Integration

### Money Saved Tracker

```
┌─────────────────────────────────────────────┐
│  Financial Impact                           │
│                                             │
│  Your gambling history (from onboarding):   │
│  Average weekly betting: $300               │
│                                             │
│  Recovery progress:                         │
│  Weeks clean: 6                             │
│  Money saved: $1,800                        │
│                                             │
│  ████████████████░░░░ $1,800 / $2,500      │
│  Goal: "Emergency fund"                     │
│                                             │
│  This week's risky app time:                │
│  Sports apps: 2h 15m                        │
│  Browsers: 45m                              │
│                                             │
│  Insight: Keeping sports app time low       │
│  helps protect your financial progress.     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Weekly Report Content

### Gambling-Specific Sections

```
┌─────────────────────────────────────────────┐
│  Weekly Screen Time Report                  │
│                                             │
│  Sports App Time: 4h 30m (↓ 15%)            │
│  Browser Time: 1h 45m (↓ 20%)               │
│                                             │
│  High-Risk Events This Week:                │
│  - Sunday NFL games: Managed well           │
│  - Thursday Night Football: Higher usage    │
│                                             │
│  Payday Check:                              │
│  - Friday payday: Minimal risky app use ✓   │
│                                             │
│  Money Protected This Week: $300            │
│  Total Saved: $1,800                        │
│                                             │
│  Next Week's Risk Events:                   │
│  - NBA Playoffs Game 3 (Tuesday)            │
│  - Payday (Friday)                          │
│                                             │
│  Preparation tip: Consider extra            │
│  protection for these high-risk days.       │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Trading App Monitoring

### High-Risk Trading Behavior

Some users substitute gambling with high-risk trading:
```
Trading apps to optionally monitor:
- Robinhood
- Webull
- Coinbase (crypto)
- Options trading apps

Warning signs to detect:
- Frequent opens during market hours
- Late-night crypto checking
- Increased trading during sports events

Alex can address:
"I noticed you're checking Robinhood a lot.
For some people, high-risk trading feels
like gambling. Is this a concern for you?"
```

---

## Gambling App Detection

### If Gambling Apps Are Detected

When app analysis finds betting apps installed:
```
┌─────────────────────────────────────────────┐
│  ⚠️ Gambling Apps Detected                  │
│                                             │
│  We found these apps on your device:        │
│                                             │
│  - DraftKings                               │
│  - ESPN Bet                                 │
│                                             │
│  For most people in recovery, having        │
│  gambling apps installed is too risky.      │
│                                             │
│  Options:                                   │
│  [Delete Apps Now] - Recommended            │
│  [Track and Alert] - Monitor usage          │
│  [Remind Me Later]                          │
│                                             │
│  Having these apps is like keeping          │
│  alcohol in the house for someone           │
│  recovering from alcoholism.                │
│                                             │
└─────────────────────────────────────────────┘
```
