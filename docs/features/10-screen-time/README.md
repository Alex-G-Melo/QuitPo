# Screen Time Tracking

## Overview

Screen Time Tracking monitors how much time users spend in apps they've designated as "risky" and sends intelligent, empathetic notifications at configurable thresholds. Unlike built-in device screen time features, this is specifically designed for addiction recovery with non-judgmental messaging, pattern insights, and integration with other Alex Friend features.

Each addiction type tracks different "risky apps" based on what content might trigger relapse.

## Addiction-Specific Content

| Addiction | Content File | Risky Apps Focus |
|-----------|--------------|------------------|
| Pornography | [porn.md](porn.md) | Browsers, social media with NSFW content |
| Gambling | [gambling.md](gambling.md) | Betting apps, sports apps, casino apps |
| Social Media | [social-media.md](social-media.md) | Social platforms, infinite scroll apps |
| Gaming | [gaming.md](gaming.md) | Game launchers, stores, streaming apps |

---

## Title
Risky App Usage Monitoring with Smart Notifications

## Problem Statement

Users often don't realize how much time they spend in trigger-prone apps:

1. **Mindless Scrolling**: Hours pass without awareness, often in apps that surface triggering content.
2. **Algorithm Manipulation**: Apps progressively show more engaging (often triggering) content.
3. **Late Night Vulnerability**: Screen use increases at night when willpower is lowest.
4. **No Awareness**: Built-in screen time doesn't connect usage to recovery context.
5. **Punitive Approach**: Default screen time apps shame users rather than support them.
6. **Trigger Correlation**: Users don't see the connection between certain app usage and urge spikes.

## Solution

### 1. Selective App Tracking
Users choose which apps to monitor based on their addiction type:
- Pre-suggested apps per addiction
- Custom additions
- Pattern learning

### 2. Smart Notifications
Configurable, empathetic alerts:
- After continuous use threshold
- After daily total threshold
- Late night warnings
- Pattern-based alerts

### 3. Usage Dashboard
Visual breakdown of time spent:
- Daily and weekly views
- Per-app breakdown
- Peak usage times
- Trend comparisons

### 4. Integration
Connected to other features:
- Alex knows usage patterns
- Check-ins reference screen time
- Panic button integration

---

## Screen Content

### Screen Time Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings      Screen Time Tracking       │
│                                             │
│  Track your time in apps that might         │
│  trigger you, with gentle reminders.        │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Tracking                     [Enabled ✓]   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Apps to Track                              │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [Addiction-specific app list]       │   │
│  │ [+ Add other app]                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Notification Settings                      │
│  [Configure Alerts →]                       │
│                                             │
│  View Usage Stats                           │
│  [Open Dashboard →]                         │
│                                             │
└─────────────────────────────────────────────┘
```

### Notification Configuration

```
┌─────────────────────────────────────────────┐
│  ← Back        Notification Settings   Done │
│                                             │
│  When should we check in?                   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  After continuous use                       │
│  ─────────────────●──────────               │
│         15 minutes                          │
│                                             │
│  Daily total threshold                      │
│  ──────────────●────────────                │
│         30 minutes                          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [✓] Late night alerts (10pm - 6am)         │
│  [ ] Weekend different settings             │
│  [✓] Weekly summary report                  │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Notification Style                         │
│                                             │
│  ○ Gentle                                   │
│  ● Encouraging                              │
│  ○ Direct                                   │
│                                             │
│  Preview: "You're on a 12-day streak.       │
│  15 minutes in [app] - maybe a              │
│  good time for a break?"                    │
│                                             │
└─────────────────────────────────────────────┘
```

### Daily Usage Dashboard

```
┌─────────────────────────────────────────────┐
│  ← Back           Today's Usage   Jan 1     │
│                                             │
│  Total time in tracked apps: 47 min         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [App 1]        ████████░░░░  22 min │   │
│  │ [App 2]        █████░░░░░░░  15 min │   │
│  │ [App 3]        ███░░░░░░░░░   8 min │   │
│  │ [App 4]        █░░░░░░░░░░░   2 min │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Peak usage: 9:30 PM - 10:15 PM             │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Insight                                    │
│                                             │
│  [Addiction-specific insight about usage]   │
│                                             │
│  [Suggested Action]                         │
│                                             │
└─────────────────────────────────────────────┘
```

### Weekly Summary

```
┌─────────────────────────────────────────────┐
│  ← Back          Weekly Summary             │
│                                             │
│  Dec 25 - Jan 1                             │
│                                             │
│  This Week           vs Last Week           │
│  ──────────────────────────────────         │
│  3h 42m total        ↓ 18% less             │
│                                             │
│        M   T   W   T   F   S   S            │
│        █   █   █   █   █   █   █            │
│        █   █   █   █   █   ▄   ▄            │
│        █   █   ▄   ▄   █   ░   ░            │
│        ▄   ░   ░   ░   ░   ░   ░            │
│                                             │
│  Best day: Sunday (12 min)                  │
│  Most challenging: Friday (58 min)          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Top Apps This Week                         │
│                                             │
│  [Addiction-specific app breakdown]         │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Achievement Unlocked!                      │
│                                             │
│  "[Achievement name]"                       │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Notification Styles

**Gentle Style**
Soft, non-pressuring check-ins:
- "You've been scrolling for 15 minutes. Just wanted you to know."
- "15 minutes in [app]. Maybe a good time for a break?"
- "Hey, checking in. You've been in [app] for a bit."

**Encouraging Style**
Motivational, progress-focused:
- "15 minutes in [app]. You're on a 12-day streak - protect it!"
- "Quick check-in: 15 minutes scrolling. Your streak is worth protecting!"
- "You're stronger than the scroll. 15 minutes - time for a break?"

**Direct Style**
Clear, action-oriented:
- "15 minutes in [app]. Consider closing it now."
- "[App]: 15 minutes. Set it down."
- "You've hit your 15-minute mark in [app]."

### Threshold-Based Messages

**Continuous Use (15 min)**
- "You've been in [app] for 15 minutes. Take a breath."

**Daily Total (30 min)**
- "30 minutes in risky apps today. You're aware now - that's powerful."

**Daily Total (1 hour)**
- "1 hour in risky apps today. Remember, you're in control."

**Daily Total (2 hours)**
- "2 hours today. Consider taking a longer break. Your brain will thank you."

### Late Night Messages (10 PM - 6 AM)
- "Late night scrolling is extra risky. Your willpower is lower when tired."
- "It's 11:30 PM. Your brain is more vulnerable right now. Maybe sleep instead?"
- "Night browsing rarely ends well. How about calling it a night?"

### Pattern-Based Messages
- "You're using [app] faster than usual today. Everything okay?"
- "You typically use [app] less on Mondays. Checking in."
- "After yesterday's tough day, you're back in [app] already. Need support?"

---

## Technical Implementation

### iOS (Screen Time API)

**DeviceActivity Framework**
```swift
import DeviceActivityKit

class ScreenTimeMonitor: DeviceActivityMonitor {

    override func intervalDidStart(for activity: DeviceActivityName) {
        // Called when monitoring interval begins (midnight)
    }

    override func eventDidReachThreshold(
        _ event: DeviceActivityEvent.Name,
        activity: DeviceActivityName
    ) {
        // User hit time threshold - send notification
        sendUsageNotification(event: event)
    }

    override func intervalDidEnd(for activity: DeviceActivityName) {
        // Day ended - compile stats
        compileDailyReport()
    }
}
```

**Permissions Required**
- Screen Time authorization
- Family Controls entitlement
- Notification permission

### Android (UsageStatsManager)

**Background Service**
```kotlin
class ScreenTimeService : Service() {

    private val usageStatsManager: UsageStatsManager by lazy {
        getSystemService(Context.USAGE_STATS_SERVICE) as UsageStatsManager
    }

    fun getAppUsageToday(packageName: String): Long {
        val calendar = Calendar.getInstance()
        calendar.set(Calendar.HOUR_OF_DAY, 0)
        calendar.set(Calendar.MINUTE, 0)

        val stats = usageStatsManager.queryUsageStats(
            UsageStatsManager.INTERVAL_DAILY,
            calendar.timeInMillis,
            System.currentTimeMillis()
        )

        return stats.find { it.packageName == packageName }
            ?.totalTimeInForeground ?: 0L
    }
}
```

**Permission Required**
- `PACKAGE_USAGE_STATS` (special permission)
- User must manually enable in Settings

---

## Data Model

### Screen Time Settings
```
screen_time_settings {
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  enabled: Boolean
  tracked_apps: JSON Array (app identifiers)
  continuous_threshold_minutes: Integer
  daily_threshold_minutes: Integer
  late_night_alerts_enabled: Boolean
  late_night_start: Time
  late_night_end: Time
  notification_style: Enum (gentle, encouraging, direct)
  weekly_report_enabled: Boolean
  PRIMARY KEY (user_id, addiction_type)
}
```

Note: Each addiction type tracks different "risky apps" appropriate to that addiction.

### Daily Usage Stats
```
daily_usage_stats {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  date: Date
  total_minutes: Integer
  app_breakdown: JSON
  peak_usage_hour: Integer
  sessions_count: Integer
  late_night_minutes: Integer
}
```

### Weekly Reports
```
weekly_reports {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  week_start: Date
  week_end: Date
  total_minutes: Integer
  daily_breakdown: JSON
  comparison_to_previous: Decimal (percentage)
  best_day: Date
  worst_day: Date
  insights: JSON Array
}
```

---

## User Flows

### Initial Setup
```
User enables Screen Time in settings
              ↓
Permission request (iOS: Screen Time API, Android: Usage Stats)
              ↓
User grants permission in system settings
              ↓
App selection screen (pre-populated by addiction type)
              ↓
User selects/adjusts risky apps to track
              ↓
Threshold configuration
              ↓
Notification style selection
              ↓
Setup complete
```

### Notification Flow
```
Background monitor detects threshold reached
              ↓
Check notification cooldown (prevent spam)
              ↓
Generate message based on:
├── Style preference
├── Time of day
├── Current streak
└── Recent patterns
              ↓
Send push notification
              ↓
User taps notification
              ↓
Opens Alex Friend with options:
├── View usage stats
├── Talk to Alex
└── Start breathing exercise
```

### Weekly Report Flow
```
Sunday evening (configurable)
              ↓
Compile weekly statistics
              ↓
Generate insights
              ↓
Check for achievements
              ↓
Send report notification
              ↓
User opens report
              ↓
Display summary with comparisons
```

---

## Integration Points

### With Check-ins
- Evening check-in shows day's screen time
- "You spent 45 minutes in risky apps today. How are you feeling about that?"

### With Alex
- AI can access usage stats (with permission)
- "I noticed you've been on [app] more this week. Want to talk about it?"

### With Panic Button
- After panic button use, track if user goes to risky apps
- Proactive follow-up if they do

### With Gamification
- Achievements for reduced usage
- Per-addiction achievement names

### With Friction Mode
- Insights suggest friction mode for high-risk times
- "Enable friction for [app] after 9 PM?"

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create screen_time_settings table
- Create daily_usage_stats table
- Create weekly_reports table
- Set up aggregation jobs

### backend-agent Tasks
- GET /api/screentime/settings?addiction_type=X - Get settings
- PATCH /api/screentime/settings - Update settings
- POST /api/screentime/usage - Log usage data
- GET /api/screentime/today - Today's stats
- GET /api/screentime/weekly - Weekly report
- Notification triggering logic

### ui-agent Tasks
- ScreenTimeSettings component
- AppSelector multi-select component
- ThresholdSlider component
- UsageDashboard component
- WeeklySummary component
- UsageBarChart component

### pages-agent Tasks
- Screen time settings page
- Usage dashboard page
- Weekly report page
- Notification deep links

---

## Success Metrics

**Engagement Metrics**
- Setup completion rate
- Apps selected per user
- Dashboard view frequency
- Notification interaction rate

**Behavior Metrics**
- Average daily usage trend (target: decreasing)
- Late night usage reduction
- Notification to behavior change correlation

**Outcome Metrics**
- Screen time vs relapse correlation
- Users with decreasing usage vs streak length

---

## Free vs Premium

### Free Tier
- Track up to 3 apps
- Daily threshold notification only
- Basic daily stats
- No weekly reports

### Premium Tier
- Unlimited app tracking
- All notification types
- Full dashboard with charts
- Weekly reports with insights
- Pattern-based alerts
- Achievement integration

---

## Platform Limitations

### iOS
- Screen Time API requires Family Controls entitlement
- Can only monitor apps, not websites within Safari
- Random token changes may affect tracking consistency
- Cannot get exact content, only app/category

### Android
- `PACKAGE_USAGE_STATS` requires special permission
- User must manually grant in Settings
- Some manufacturers may kill background services
- Can track individual apps precisely

---

## Privacy Considerations

### On-Device Processing
- All usage data stored locally
- No upload to servers without consent
- User can export data (JSON/CSV)
- User can delete all data anytime

### What We DON'T Track
- Content viewed within apps
- Specific pages/posts
- Search queries
- Screenshots

### Data Retention
- Daily stats: 90 days
- Weekly summaries: 1 year
- Older data auto-deleted
