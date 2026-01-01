# Feature: Screen Time Tracking & Notifications

## Overview

Track time spent in user-designated "risky" apps and send intelligent notifications to help users stay aware of their usage patterns. Unlike Apple/Google's built-in screen time, this is specifically designed for addiction recovery with empathetic, non-judgmental messaging.

---

## Core Functionality

### 1. Time Tracking

Track cumulative daily usage of apps the user selects:
- Instagram
- TikTok
- Twitter/X
- Reddit
- YouTube
- Browsers (Safari, Chrome)
- Any app user designates as "risky"

### 2. Smart Notifications

Send notifications at configurable thresholds:
- After X minutes of continuous use
- After X total minutes today
- At specific times (late night warnings)
- Based on usage patterns (faster than usual today)

### 3. Daily/Weekly Reports

Summarize usage with insights:
- Total time in risky apps
- Comparison to previous week
- Peak usage times
- Correlation with streak status

---

## User Flow

### Setup

```
Settings > Safety Features > Screen Time Tracking

┌─────────────────────────────────────────────┐
│  📊 Screen Time Tracking                    │
│                                             │
│  Track your time in apps that might         │
│  trigger you, with gentle reminders.        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  ○ Off (default)                    │   │
│  │  ● Enabled                          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ───────────────────────────────────────   │
│                                             │
│  📱 Apps to Track                           │
│     [Select Apps]                           │
│                                             │
│  ⏰ Notification Settings                   │
│     [Configure Alerts]                      │
│                                             │
│  📈 View Usage Stats                        │
│     [Open Dashboard]                        │
│                                             │
└─────────────────────────────────────────────┘
```

### Notification Configuration

```
┌─────────────────────────────────────────────┐
│  ⏰ Notification Settings              Done │
│                                             │
│  When should we check in?                   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ After continuous use                │   │
│  │ ────────────────●──────             │   │
│  │        15 minutes                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Daily total threshold               │   │
│  │ ──────────────●────────             │   │
│  │        30 minutes                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ☑ Late night alerts (10pm - 6am)   │   │
│  │ ☐ Weekend different settings        │   │
│  │ ☑ Weekly summary report             │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Notification Style                         │
│  ○ Gentle    ● Encouraging    ○ Direct     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Notification Messages

### Continuous Use Alerts

**Gentle Style**
- "You've been scrolling for 15 minutes. Just wanted you to know. 💙"
- "15 minutes in [App]. Maybe a good time for a break?"
- "Hey, checking in. You've been in [App] for a bit."

**Encouraging Style**
- "15 minutes in [App]. You've got this - take a mindful pause! 🌱"
- "Quick check-in: 15 minutes scrolling. Your streak is worth protecting!"
- "You're stronger than the scroll. 15 minutes - time for a break?"

**Direct Style**
- "15 minutes in [App]. Consider closing it now."
- "[App]: 15 minutes. Set it down."
- "You've hit your 15-minute mark in [App]."

### Daily Total Alerts

| Minutes | Message Example |
|---------|-----------------|
| 30 min | "30 minutes total in risky apps today. You're aware now - that's powerful." |
| 1 hour | "1 hour in risky apps today. Remember, you're in control." |
| 2 hours | "2 hours today. Consider taking a longer break. Your brain will thank you." |

### Late Night Alerts (10 PM - 6 AM)

- "Late night scrolling is extra risky. Your willpower is lower when tired."
- "It's [time]. Your brain is more vulnerable right now. Maybe sleep instead?"
- "Night scrolling rarely ends well. How about calling it a night?"

### Pattern-Based Alerts

- "You're using [App] faster than usual today. Everything okay?"
- "You typically use [App] less on [weekday]. Checking in."
- "After yesterday's relapse, you're back in [App] already. Want to talk to the AI therapist?"

---

## Usage Dashboard

### Daily View

```
┌─────────────────────────────────────────────┐
│  📊 Today's Usage              January 1    │
│                                             │
│  Total time in tracked apps: 47 min        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Instagram        ████████░░  22 min │   │
│  │ TikTok           █████░░░░░  15 min │   │
│  │ Twitter          ███░░░░░░░   8 min │   │
│  │ Reddit           █░░░░░░░░░   2 min │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Peak usage: 9:30 PM - 10:15 PM            │
│                                             │
│  💡 Insight: You use these apps 40% more   │
│     after 9 PM. Consider evening limits.    │
│                                             │
└─────────────────────────────────────────────┘
```

### Weekly Summary

```
┌─────────────────────────────────────────────┐
│  📈 Weekly Summary           Dec 25 - Jan 1 │
│                                             │
│  This Week          vs Last Week            │
│  ──────────────────────────────────         │
│  3h 42m total       ↓ 18% less 🎉          │
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
│  🏆 Achievement Unlocked:                   │
│     "Mindful Scroller" - Used 15% less      │
│     than your monthly average!              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Technical Implementation

### iOS (DeviceActivity Framework)

```swift
import DeviceActivityKit

class ScreenTimeMonitor: DeviceActivityMonitor {

    override func intervalDidStart(for activity: DeviceActivityName) {
        // Called when monitoring interval begins
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
        compileDialyReport()
    }
}

// Schedule monitoring
let schedule = DeviceActivitySchedule(
    intervalStart: DateComponents(hour: 0, minute: 0),
    intervalEnd: DateComponents(hour: 23, minute: 59),
    repeats: true
)

let center = DeviceActivityCenter()
try center.startMonitoring(.daily, during: schedule)
```

### Android (UsageStatsManager)

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

    fun startContinuousMonitoring() {
        // Check every minute if threshold exceeded
        handler.postDelayed(checkUsageRunnable, 60_000)
    }
}
```

**Required Permission**: `PACKAGE_USAGE_STATS` (special permission, requires user to enable in settings)

### Shared Data Models

```typescript
// packages/shared/src/screentime/types.ts

export interface ScreenTimeSettings {
  enabled: boolean;
  trackedApps: string[];  // Bundle IDs / package names
  continuousThresholdMinutes: number;
  dailyThresholdMinutes: number;
  lateNightAlertsEnabled: boolean;
  lateNightStart: string;  // "22:00"
  lateNightEnd: string;    // "06:00"
  notificationStyle: 'gentle' | 'encouraging' | 'direct';
  weeklyReportEnabled: boolean;
}

export interface DailyUsageStats {
  date: string;  // ISO date
  totalMinutes: number;
  appBreakdown: {
    appId: string;
    appName: string;
    minutes: number;
  }[];
  peakUsageHour: number;
  sessionsCount: number;
}

export interface WeeklyReport {
  weekStart: string;
  weekEnd: string;
  totalMinutes: number;
  dailyBreakdown: DailyUsageStats[];
  comparisonToPreviousWeek: number;  // percentage
  bestDay: string;
  worstDay: string;
  insights: string[];
}
```

---

## Notification Scheduling Logic

```typescript
// packages/shared/src/screentime/notifications.ts

interface NotificationRule {
  type: 'continuous' | 'daily_total' | 'late_night' | 'pattern';
  condition: (stats: UsageStats, settings: Settings) => boolean;
  getMessage: (stats: UsageStats, style: NotificationStyle) => string;
  cooldownMinutes: number;  // Don't repeat within this window
}

const rules: NotificationRule[] = [
  {
    type: 'continuous',
    condition: (stats, settings) =>
      stats.currentSessionMinutes >= settings.continuousThresholdMinutes,
    getMessage: (stats, style) =>
      getContinuousMessage(stats.currentApp, stats.currentSessionMinutes, style),
    cooldownMinutes: 15
  },
  {
    type: 'daily_total',
    condition: (stats, settings) =>
      stats.dailyTotalMinutes >= settings.dailyThresholdMinutes &&
      !stats.dailyThresholdAlertSent,
    getMessage: (stats, style) =>
      getDailyTotalMessage(stats.dailyTotalMinutes, style),
    cooldownMinutes: 60
  },
  {
    type: 'late_night',
    condition: (stats, settings) =>
      settings.lateNightAlertsEnabled &&
      isLateNight(settings.lateNightStart, settings.lateNightEnd) &&
      stats.currentSessionMinutes >= 5,
    getMessage: () => getLateNightMessage(),
    cooldownMinutes: 30
  }
];
```

---

## Privacy & Data Storage

### On-Device Only

- All usage data stored locally
- No upload to servers
- User can export data (JSON/CSV)
- User can delete all data anytime

### Data Retention

- Daily stats: 90 days
- Weekly summaries: 1 year
- Older data auto-deleted

### What We DON'T Track

- Content viewed within apps
- Specific pages/posts
- Search queries
- Screenshots

---

## Integration Points

### With Streak System

- Show usage correlation with relapse risk
- "On days you use [App] > 1 hour, you're 3x more likely to struggle"

### With Check-ins

- Daily check-in can reference usage: "You spent 45 minutes in risky apps yesterday. How are you feeling about that?"

### With AI Therapist

- AI can access usage stats (with permission)
- "I noticed you've been on Instagram a lot more this week. Want to talk about it?"

### With Panic Button

- After panic button use, track if user goes to risky apps
- Proactive follow-up if they do

---

## Gamification (Optional)

### Achievements

| Achievement | Criteria |
|-------------|----------|
| Mindful Scroller | 25% less usage than monthly average |
| Phone-Free Friday | < 10 min in risky apps on a Friday |
| Night Owl No More | No late-night usage for 7 days |
| App Master | Stayed under daily limit for 30 days |

### Streaks

- "Zero risky apps" streak (separate from main recovery streak)
- "Under limit" streak

---

## Implementation Phases

### Phase 1 (MVP)
- Basic usage tracking (daily totals)
- Single threshold notification
- Simple daily view
- iOS only

### Phase 2
- Continuous session tracking
- Multiple notification styles
- Late night alerts
- Android support

### Phase 3
- Weekly reports with insights
- Pattern detection
- AI therapist integration
- Achievements system

### Phase 4
- Predictive alerts ("You typically struggle around this time")
- Social comparisons (opt-in, anonymous)
- Export/sharing features

---

## Platform Limitations

### iOS

- Screen Time API requires Family Controls entitlement
- Can only monitor apps, not websites within Safari (unless using Content Blocker)
- Random token changes may affect tracking consistency
- Cannot get exact content, only app/category

### Android

- `PACKAGE_USAGE_STATS` requires special permission
- User must manually grant in Settings
- Some manufacturers may kill background services
- Can track individual apps precisely

---

## References

- [Apple DeviceActivity Documentation](https://developer.apple.com/documentation/deviceactivity)
- [Android UsageStatsManager](https://developer.android.com/reference/android/app/usage/UsageStatsManager)
- [Screen Time API Limitations](https://riedel.wtf/state-of-the-screen-time-api-2024/)
