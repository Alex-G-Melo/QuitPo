# Screen Time Tracking

## Title
Risky App Usage Monitoring with Smart Notifications

## Description
Screen Time Tracking monitors how much time users spend in apps they've designated as "risky" (social media, browsers, etc.) and sends intelligent, empathetic notifications at configurable thresholds. Unlike built-in device screen time features, this is specifically designed for addiction recovery with non-judgmental messaging, pattern insights, and integration with other Alex Friend features.

## Problem Statement

Users often don't realize how much time they spend in trigger-prone apps:

1. **Mindless Scrolling**: Hours pass without awareness, often in apps that surface triggering content.

2. **Algorithm Manipulation**: Social media algorithms progressively show more engaging (often suggestive) content.

3. **Late Night Vulnerability**: Screen use increases at night when willpower is lowest.

4. **No Awareness**: Built-in screen time doesn't connect usage to recovery context.

5. **Punitive Approach**: Default screen time apps shame users rather than support them.

6. **Trigger Correlation**: Users don't see the connection between certain app usage and urge spikes.

## Solution

### 1. Selective App Tracking
Users choose which apps to monitor:
- Instagram, TikTok, Twitter/X
- Reddit, YouTube
- Browsers (Safari, Chrome)
- Any app user identifies as risky

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

## Screen Content

### Screen Time Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings      Screen Time Tracking       │
│                                             │
│  📊 Track your time in apps that might      │
│     trigger you, with gentle reminders.     │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Tracking                     [Enabled ✓]   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  📱 Apps to Track                           │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [✓] Instagram                       │   │
│  │ [✓] TikTok                          │   │
│  │ [✓] Twitter/X                       │   │
│  │ [ ] Reddit                          │   │
│  │ [✓] Safari                          │   │
│  │ [ ] Chrome                          │   │
│  │ [✓] YouTube                         │   │
│  │ [ ] Snapchat                        │   │
│  │ [+ Add other app]                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  ⏰ Notification Settings                   │
│  [Configure Alerts →]                       │
│                                             │
│  📈 View Usage Stats                        │
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
│  15 minutes in Instagram - maybe a          │
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
│  │ Instagram      ████████░░░░  22 min │   │
│  │ TikTok         █████░░░░░░░  15 min │   │
│  │ Twitter        ███░░░░░░░░░   8 min │   │
│  │ YouTube        █░░░░░░░░░░░   2 min │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Peak usage: 9:30 PM - 10:15 PM             │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  💡 Insight                                 │
│                                             │
│  You use these apps 40% more after 9 PM.    │
│  Consider enabling extra friction during    │
│  evening hours.                             │
│                                             │
│  [Enable Evening Friction Mode]             │
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
│  3h 42m total        ↓ 18% less 🎉         │
│                                             │
│        M   T   W   T   F   S   S            │
│        █   █   █   █   █   █   █            │
│        █   █   █   █   █   ▄   ▄   ← this  │
│        █   █   ▄   ▄   █   ░   ░     week   │
│        ▄   ░   ░   ░   ░   ░   ░            │
│                                             │
│  Best day: Sunday (12 min)                  │
│  Most challenging: Friday (58 min)          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Top Apps This Week                         │
│                                             │
│  1. Instagram          1h 45m               │
│  2. TikTok             1h 12m               │
│  3. Twitter              35m                │
│  4. YouTube              10m                │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  🏆 Achievement Unlocked!                   │
│                                             │
│  "Mindful Scroller" - Used 15% less         │
│  than your monthly average!                 │
│                                             │
└─────────────────────────────────────────────┘
```

## Notification Messages

### Notification Styles

**Gentle Style**
Soft, non-pressuring check-ins:
- "You've been scrolling for 15 minutes. Just wanted you to know. 💙"
- "15 minutes in Instagram. Maybe a good time for a break?"
- "Hey, checking in. You've been in TikTok for a bit."

**Encouraging Style**
Motivational, progress-focused:
- "15 minutes in Instagram. You're on a 12-day streak - protect it! 🌱"
- "Quick check-in: 15 minutes scrolling. Your streak is worth protecting!"
- "You're stronger than the scroll. 15 minutes - time for a break?"

**Direct Style**
Clear, action-oriented:
- "15 minutes in Instagram. Consider closing it now."
- "TikTok: 15 minutes. Set it down."
- "You've hit your 15-minute mark in Twitter."

### Threshold-Based Messages

**Continuous Use (15 min)**
- "You've been scrolling for 15 minutes. Take a breath."

**Daily Total (30 min)**
- "30 minutes in risky apps today. You're aware now - that's powerful."

**Daily Total (1 hour)**
- "1 hour in risky apps today. Remember, you're in control."

**Daily Total (2 hours)**
- "2 hours today. Consider taking a longer break. Your brain will thank you."

### Late Night Messages (10 PM - 6 AM)

- "Late night scrolling is extra risky. Your willpower is lower when tired."
- "It's 11:30 PM. Your brain is more vulnerable right now. Maybe sleep instead?"
- "Night scrolling rarely ends well. How about calling it a night?"

### Pattern-Based Messages

- "You're using Instagram faster than usual today. Everything okay?"
- "You typically use TikTok less on Mondays. Checking in."
- "After yesterday's tough day, you're back in Twitter already. Need support?"

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

## Data Model

### Screen Time Settings
```
screen_time_settings {
  user_id: UUID
  enabled: Boolean
  tracked_apps: JSON Array (app identifiers)
  continuous_threshold_minutes: Integer
  daily_threshold_minutes: Integer
  late_night_alerts_enabled: Boolean
  late_night_start: Time
  late_night_end: Time
  notification_style: Enum (gentle, encouraging, direct)
  weekly_report_enabled: Boolean
}
```

### Daily Usage Stats
```
daily_usage_stats {
  id: UUID
  user_id: UUID
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

## User Flows

### Initial Setup
```
User enables Screen Time in settings
              ↓
Permission request (iOS: Screen Time API, Android: Usage Stats)
              ↓
User grants permission in system settings
              ↓
App selection screen
              ↓
User selects risky apps to track
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
├── Talk to AI
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

## Integration Points

### With Check-ins
- Evening check-in shows day's screen time
- "You spent 45 minutes in risky apps today. How are you feeling about that?"

### With Alex
- AI can access usage stats (with permission)
- "I noticed you've been on Instagram more this week. Want to talk about it?"

### With Panic Button
- After panic button use, track if user goes to risky apps
- Proactive follow-up if they do

### With Gamification
- "Mindful Scroller" achievement for reduced usage
- "Phone-Free Friday" for <10 min on Friday
- "Night Owl No More" for no late-night usage for 7 days

### With Friction Mode
- Insights suggest friction mode for high-risk times
- "Enable friction for Instagram after 9 PM?"

## Agent Implementation Guide

### foundation-agent Tasks
- Create screen_time_settings table
- Create daily_usage_stats table
- Create weekly_reports table
- Set up aggregation jobs

### backend-agent Tasks
- GET /api/screentime/settings - Get settings
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
