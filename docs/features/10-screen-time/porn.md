# Screen Time Tracking - Pornography Addiction

This file contains pornography addiction-specific screen time tracking configuration. See [README.md](README.md) for shared functionality.

---

## Risky Apps to Track

### Default Tracked Apps

| App | Risk Level | Reason |
|-----|------------|--------|
| Safari | High | Direct access to adult content |
| Chrome | High | Direct access to adult content |
| Instagram | High | Algorithm surfaces suggestive content |
| TikTok | High | Algorithm surfaces suggestive content |
| Twitter/X | High | NSFW content easily accessible |
| Reddit | High | Many NSFW subreddits |
| YouTube | Medium | Thumbnails, recommendations |
| Tumblr | High | Adult content present |
| Snapchat | Medium | Discover section, direct messages |
| Discord | Medium | NSFW servers, direct messages |

### Browser-Specific Risk

Browsers are the primary gateway to pornography:
- Safari (iOS default) - Monitor closely
- Chrome - Monitor closely
- Private/Incognito modes - Cannot track

**Recommendation**: Strong browser monitoring + content blocker

---

## Suggested App Selection Screen

```
┌─────────────────────────────────────────────┐
│  Apps to Track                              │
│                                             │
│  High Risk (Recommended)                    │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Safari          - Browser       │   │
│  │ [✓] Chrome          - Browser       │   │
│  │ [✓] Instagram       - Social media  │   │
│  │ [✓] TikTok          - Short video   │   │
│  │ [✓] Twitter/X       - Social media  │   │
│  │ [✓] Reddit          - Community     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Medium Risk                                │
│  ┌─────────────────────────────────────┐   │
│  │ [ ] YouTube         - Video         │   │
│  │ [ ] Tumblr          - Social media  │   │
│  │ [ ] Snapchat        - Messaging     │   │
│  │ [ ] Discord         - Chat          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [+ Add other app]                          │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Threshold Messages

**After 15 minutes continuous browser use:**
```
"15 minutes browsing. Remember what you're
protecting - your streak is at Day 23."
```

**After 30 minutes total in risky apps:**
```
"30 minutes in risky apps today. Your brain
is healing - protect the process."
```

**After 1 hour in risky apps:**
```
"1 hour in apps with risky content today.
Consider taking a real break."
```

### Late Night Messages (10 PM - 6 AM)

```
"Late night browsing is when most relapses
happen. Your willpower is lower right now."

"It's late. Scrolling leads nowhere good
at this hour. Maybe sleep instead?"

"This is a high-risk time. Close the app
and do something else."
```

### Pattern-Based Messages

```
"You've opened Instagram 5 times in the last
hour. Everything okay?"

"Browser usage is higher than usual today.
Need to talk to Alex?"

"After a tough check-in, you're back in
risky apps. The urge will pass - ride it out."
```

---

## Insights & Correlations

### Pattern Detection

**Time-Based Patterns:**
```
"You spend 45% more time in browsers after 9 PM.
This correlates with your highest urge times."

"Saturday mornings show increased risky app
usage. Consider adding friction for weekends."
```

**Mood Correlations:**
```
"When you report feeling 'lonely' in check-ins,
browser time increases by 60% the next day."

"Your lowest streak days correlate with late-night
Instagram sessions the night before."
```

**Trigger Chain Detection:**
```
"Pattern detected: Instagram → Browser → Urge spike

Consider blocking Instagram during high-risk times."
```

### Dashboard Insights

```
┌─────────────────────────────────────────────┐
│  Insight                                    │
│                                             │
│  Your browser usage predicts urges:         │
│  - Days with <20 min browser: 5% urge rate  │
│  - Days with >60 min browser: 35% urge rate │
│                                             │
│  Reducing browser time could significantly  │
│  reduce urge frequency.                     │
│                                             │
│  [Enable Browser Friction Mode]             │
│  [Set Stricter Time Limits]                 │
└─────────────────────────────────────────────┘
```

---

## Alex Integration

### Usage Context for Alex

When Alex has screen time access:
```
Alex can reference:
- "I see you spent 45 minutes on Instagram today.
   How did that make you feel?"
- "Your browser time has been creeping up this
   week. Want to talk about what's going on?"
- "Last time you had a late-night scrolling
   session, you mentioned feeling disconnected.
   Is that happening again?"
```

### Post-Panic Button Tracking

After user triggers panic button:
```
If user opens risky app within 30 minutes:
- Proactive notification from Alex
- "Hey, I noticed you went to [app] after
   using the panic button. I'm here if you
   want to talk."
```

---

## Achievements

| Achievement | Requirement | Message |
|-------------|-------------|---------|
| Browser Detox | <30 min browser for 7 days | "Less browsing, more living." |
| Night Owl Reform | No late-night app use for 7 days | "Healthy sleep, healthy mind." |
| Social Media Light | <15 min social for 7 days | "Real connections > likes." |
| Screen Free Sunday | <10 min risky apps on Sunday | "Reclaiming your time." |
| Mindful Scroller | 20% reduction vs monthly avg | "Awareness is power." |

---

## Recommended Thresholds

### Conservative (Early Recovery)
```
Continuous use alert: 10 minutes
Daily total alert: 20 minutes
Late night: Enabled (9 PM - 7 AM)
Notification style: Direct
```

### Moderate (Established Recovery)
```
Continuous use alert: 15 minutes
Daily total alert: 30 minutes
Late night: Enabled (10 PM - 6 AM)
Notification style: Encouraging
```

### Maintenance (Long-term Recovery)
```
Continuous use alert: 20 minutes
Daily total alert: 45 minutes
Late night: Enabled (11 PM - 5 AM)
Notification style: Gentle
```

---

## Integration with Content Blocker

### Coordinated Protection

Screen time + content blocker work together:
```
Screen Time detects: Browser opened late at night
          ↓
Content Blocker: Extra-strict blocking enabled
          ↓
Notification: "High-risk time. Extra protection
              activated automatically."
```

### Block Event Correlation

```
Dashboard shows:
- Screen time in browsers: 45 min
- Content blocker blocks: 3
- Correlation: "Blocked sites were attempted
  during your longest browser sessions."
```

---

## Weekly Report Content

### Porn-Specific Sections

```
┌─────────────────────────────────────────────┐
│  Weekly Screen Time Report                  │
│                                             │
│  Browser Time: 2h 15m (↓ 25% from last week)│
│  Social Media: 3h 42m (↓ 10%)               │
│                                             │
│  Risk Analysis:                             │
│  - Late night sessions: 2 (down from 5)     │
│  - Long browsing sessions: 1 (down from 3)  │
│  - Days under 30 min total: 5 of 7          │
│                                             │
│  Correlation with Recovery:                 │
│  Your reduced screen time correlates with   │
│  your 23-day streak. Keep it up!            │
│                                             │
│  Next Week's Challenge:                     │
│  Try to keep browser time under 2 hours.    │
│                                             │
└─────────────────────────────────────────────┘
```

---

## High-Risk Time Detection

### Automatic Risk Period Identification

Based on user's patterns:
```
Your high-risk times (auto-detected):
- Weeknights after 10 PM
- Saturday mornings
- Sunday evenings
- After reporting "lonely" or "stressed"

During these times:
- Stricter notifications
- Suggested friction mode
- Alex check-in proactive
```

### Manual High-Risk Scheduling

```
┌─────────────────────────────────────────────┐
│  High-Risk Time Settings                    │
│                                             │
│  Get extra support during these times:      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Weeknights 10 PM - 6 AM      [ON]  │   │
│  │ Weekends all day             [OFF] │   │
│  │ When I report feeling lonely [ON]  │   │
│  │ After using panic button     [ON]  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  During high-risk times:                    │
│  - Shorter alert thresholds (5 min less)   │
│  - Auto-enable friction mode               │
│  - Proactive Alex check-ins                │
│                                             │
└─────────────────────────────────────────────┘
```
