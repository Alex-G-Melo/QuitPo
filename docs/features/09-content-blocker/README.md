# Content Blocker

## Overview

The content blocker is a multi-platform protection system that prevents access to triggering websites and content through a combination of mobile device settings integration, a Chrome browser extension, and DNS-level blocking. This creates multiple layers of defense to support users during moments of weakness, recognizing that strong intentions can falter when willpower is depleted.

Each addiction type has its own blocklist and blocking configuration.

## Addiction-Specific Content

| Addiction | Content File | Blocklist Focus |
|-----------|--------------|-----------------|
| Pornography | [porn.md](porn.md) | Adult sites, NSFW content |
| Gambling | [gambling.md](gambling.md) | Casinos, betting sites |
| Social Media | [social-media.md](social-media.md) | Social platforms, algorithms |
| Gaming | [gaming.md](gaming.md) | Gaming sites, stores, streams |

---

## Title
Cross-Platform Addictive Content Blocking System

## Problem Statement

Users trying to recover from addictions face an internet saturated with triggers:

1. **Instant Access**: Addictive content is seconds away on any device at any time.
2. **Weak Moment Vulnerability**: When willpower is low, easy access leads to relapse.
3. **Accidental Exposure**: Non-addiction sites can surface triggering content.
4. **Multiple Devices**: Blocking one device leaves others unprotected.
5. **Easy to Bypass**: Most blockers are trivially circumvented by determined users.
6. **DNS Limitations**: DNS blockers work but require setup and can be bypassed.

## Solution

### 1. Mobile Integration (iOS/Android)
- Screen Time API (iOS) integration
- Digital Wellbeing (Android) integration
- App blocking and time limits
- Safari content blocker

### 2. Chrome Extension
- Manifest V3 browser extension
- Real-time URL blocking
- Keyword blocking in search
- Safe search enforcement

### 3. Blocklist System
- Comprehensive domain lists per addiction type
- User-configurable additions
- Regular updates
- Category-based blocking

### 4. Recovery Mode
- Temporary bypass request
- Accountability notification option
- Time-limited access (if enabled)

---

## Screen Content

### Content Blocker Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings        Content Blocker          │
│                                             │
│  Protection Status                          │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │         ✓ PROTECTED                 │   │
│  │                                     │   │
│  │   Mobile browsing is blocked        │   │
│  │   Chrome extension active           │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Mobile Protection                          │
│                                             │
│  Screen Time Blocking         [Enabled ✓]  │
│  Safari Content Blocker       [Enabled ✓]  │
│  [Setup Instructions]                       │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Browser Protection                         │
│                                             │
│  Chrome Extension            [Installed ✓]  │
│  Block [addiction] sites           [ON]    │
│  Block search results              [ON]    │
│  Force safe search                 [ON]    │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Advanced                                   │
│                                             │
│  [Custom Blocked Sites]                     │
│  [Blocked Keywords]                         │
│  [Whitelist]                               │
│  [Block Schedule]           Premium        │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Accountability                             │
│                                             │
│  Notify partner if disabled   [OFF]        │
│  Require passcode to disable  [ON]         │
│  [Set/Change Passcode]                      │
│                                             │
└─────────────────────────────────────────────┘
```

### Blocked Page (Chrome Extension)

```
┌─────────────────────────────────────────────┐
│                                             │
│              Alex Friend                    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌[Addiction-specific message]     │   │
│  │   (typewriter animation + haptics)  │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day X • Don't reset now            │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │        OPEN PANIC BUTTON            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Addiction-specific consequences]          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to Alex]                             │
│  [Start Breathing Exercise]                 │
│  [Close This Tab]                           │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Request Access]                           │
│  (Accountability partner will be notified)  │
│                                             │
└─────────────────────────────────────────────┘
```

### iOS Setup Guide

```
┌─────────────────────────────────────────────┐
│  ← Back      iOS Protection Setup           │
│                                             │
│  Step 1 of 4                                │
│                                             │
│  Enable Screen Time Content Restrictions    │
│                                             │
│  [Screenshot showing Settings path]         │
│                                             │
│  1. Open Settings on your iPhone            │
│  2. Tap "Screen Time"                       │
│  3. Tap "Content & Privacy Restrictions"    │
│  4. Turn ON "Content & Privacy..."          │
│  5. [Addiction-specific steps]              │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Pro Tip: Have someone else set the         │
│  Screen Time passcode so you can't easily   │
│  disable it during weak moments.            │
│                                             │
│            [Next Step →]                    │
│                                             │
│            ○ ● ○ ○                          │
│                                             │
└─────────────────────────────────────────────┘
```

### Chrome Extension Popup

```
┌───────────────────────────────┐
│  Alex Friend Protector        │
│                               │
│  Status: Active ✓             │
│                               │
│  Sites blocked today: 3       │
│  Current streak: Day 23       │
│                               │
│  ─────────────────────────    │
│                               │
│  Quick Settings:              │
│  [✓] Block [addiction] sites  │
│  [✓] Safe search              │
│  [✓] Block [platform] content │
│                               │
│  ─────────────────────────    │
│                               │
│  [Open Alex Friend]           │
│  [Settings]                   │
│                               │
│  Protection active on 47      │
│  consecutive days             │
│                               │
└───────────────────────────────┘
```

### Custom Blocked Sites

```
┌─────────────────────────────────────────────┐
│  ← Back       Custom Blocked Sites          │
│                                             │
│  Add sites that trigger you personally.     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Enter domain (e.g., example.com)    │   │
│  │ [Add]                               │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Your Custom Blocks (5)                     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ specificsite.com            [Remove]│   │
│  │ Added Dec 20, 2025                  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  These sites are blocked in addition        │
│  to the default blocklist.                  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Blocking System Architecture

### Blocklist Tiers

**Tier 1: Default Blocklist**
- Comprehensive domain list per addiction type
- See individual addiction files for specifics
- Regular updates

**Tier 2: Social Platform Integration**
- Platform-specific NSFW/triggering content
- Subreddit/hashtag blocking
- Algorithm-served content blocking

**Tier 3: Search Engine Integration**
- Enforce SafeSearch on Google
- Enforce Safe Mode on Bing
- Block explicit searches
- Block addiction keywords in search

**Tier 4: User Custom**
- User-added domains
- User-added keywords
- Personal trigger sites
- Synced across devices

### Blocking Mechanisms

**iOS Safari Content Blocker**
```json
// Blocklist rule example
{
  "trigger": {
    "url-filter": ".*\\.(blockedsite\\.com).*"
  },
  "action": {
    "type": "block"
  }
}
```

**Chrome Extension (Manifest V3)**
```javascript
// Block rule using declarativeNetRequest
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "*://blockedsite.com/*",
    "resourceTypes": ["main_frame", "sub_frame"]
  }
}
```

**DNS-Level (Optional)**
- Instructions for setting up Pi-hole
- Cloudflare Family DNS settings
- NextDNS configuration guide

---

## Chrome Extension Features

### Core Features
1. **URL Blocking**: Intercept requests to blocked domains
2. **Search Filtering**: Modify search results to remove triggering content
3. **Safe Search Enforcement**: Prevent disabling safe search
4. **Platform-Specific Blocking**: Block triggering content on social platforms
5. **Image Blocking**: Block known triggering image CDNs

### Block Page Features
- Motivational message (addiction-specific)
- Current streak display
- Quick access to Alex Friend app
- Alex chat link
- Breathing exercise launcher
- Request access (with accountability)

### Panic Button Integration

The blocked page is a critical intervention point - the user is actively trying to access triggering content. This is the perfect moment to trigger panic mode.

**Primary CTA: Open Panic Button**
The most prominent button on the blocked page opens the app directly in panic mode via `alexfriend://panic`.

```
User attempts blocked site
        ↓
Block page appears immediately
        ↓
Large "PANIC BUTTON" displayed prominently
        ↓
┌─ User taps Panic Button ─────────────────────┐
│  → Opens alexfriend://panic                  │
│  → App launches in full panic mode           │
│  → Camera + typewriter messages activate     │
│  → Full intervention experience              │
└──────────────────────────────────────────────┘
        OR
┌─ User stays on block page ───────────────────┐
│  → Typewriter messages play on block page    │
│  → Motivational content rotates              │
│  → Consequences shown                        │
│  → Lighter intervention without app          │
└──────────────────────────────────────────────┘
```

**In-Page Intervention (Fallback)**
When the user doesn't open the app, the block page itself provides intervention:
- Typewriter-style motivational messages (addiction-specific)
- Current streak displayed prominently
- Consequences of relapsing listed
- Breathing exercise that works in-browser

**Auto-Open Panic Mode (Optional Setting)**
For users who want maximum intervention:
- Setting: "Auto-open panic mode when site blocked"
- When enabled: Blocked site immediately triggers `alexfriend://panic`
- No block page shown - straight to app panic mode

**Technical Implementation**
```javascript
// In blocked.js (Chrome Extension)
const userSettings = await chrome.storage.sync.get('autoOpenPanic');

if (userSettings.autoOpenPanic) {
  // Auto-redirect to panic mode
  window.location.href = 'alexfriend://panic';
} else {
  // Show block page with panic button option
  renderBlockPage();
  startTypewriterAnimation();
}

// Panic button click handler
document.getElementById('panicBtn').addEventListener('click', () => {
  window.location.href = 'alexfriend://panic?source=blocker';
});
```

### Extension Settings
- Toggle individual protections
- Whitelist legitimate sites
- View block statistics
- Sync with app account

### Technical Structure

**Manifest V3 Structure**
```
extension/
├── manifest.json
├── background/
│   └── service-worker.js
├── content/
│   └── content-script.js
├── popup/
│   ├── popup.html
│   └── popup.js
├── blocked/
│   ├── blocked.html
│   └── blocked.js
├── rules/
│   └── blocklist.json
└── icons/
```

**Key APIs**
- `chrome.declarativeNetRequest` - URL blocking
- `chrome.storage` - Settings sync
- `chrome.runtime` - Background communication
- `chrome.tabs` - Tab management

---

## Mobile Implementation

### iOS Screen Time Integration

**What Alex Friend Can Do:**
- Provide setup instructions
- Detect if Screen Time is enabled
- Suggest categories to block
- Offer to manage time limits

**What Requires User Action:**
- Enabling Screen Time
- Setting passcode
- Selecting content restrictions
- Adding specific app limits

**Safari Content Blocker:**
- Alex Friend provides content blocker extension
- Blocks triggering URLs within Safari
- User must enable in Settings
- Limited to Safari only

### Android Digital Wellbeing

**What Alex Friend Can Do:**
- Accessibility Service for app monitoring
- Overlay protection reminders
- Custom browser blocking (Alex Friend browser)
- DNS-level blocking (private DNS config)

**What Requires User Action:**
- Enabling accessibility permissions
- Setting Digital Wellbeing limits
- Choosing restricted apps

---

## Accountability Features

### Partner Notification
If configured:
1. User attempts to disable blocker
2. Prompt: "This will notify your accountability partner"
3. User confirms or cancels
4. Partner receives notification
5. Optional: 24-hour delay before actual disable

### Block Logs
- Track blocked attempts (count only, not URLs)
- Show patterns: "Most blocks happen after 10 PM"
- Share summary with partner (optional)

### Passcode Protection
- Require passcode to change settings
- Option: Have partner set passcode
- Time-locked changes (can't change for 24h after setting)

---

## Data Model

### Blocklist Entries
```
blocklist_entries {
  id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  domain: String
  category: String (addiction-specific categories)
  source: Enum (default, user, reported)
  region: String (nullable - for region-specific sites)
  added_at: DateTime
  is_active: Boolean
}
```

Note: Each addiction type has completely different blocklists with different categories.

### User Block Settings
```
user_block_settings {
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  blocking_enabled: Boolean
  block_categories: JSON Array (which categories to block)
  force_safe_search: Boolean
  accountability_enabled: Boolean
  accountability_partner_id: UUID
  passcode_enabled: Boolean
  passcode_hash: String
  PRIMARY KEY (user_id, addiction_type)
}
```

Note: Each addiction type has separate blocking settings.

### Block Events (Privacy-Preserving)
```
block_events {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  platform: Enum (ios, android, chrome)
  category: String (addiction-specific)
  blocked_at: DateTime
  day_of_week: Integer
  hour_of_day: Integer
  // Note: NO URL stored for privacy
}
```

### Custom Blocks
```
user_custom_blocks {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  domain: String
  added_at: DateTime
  is_active: Boolean
}
```

---

## User Flows

### Initial Setup Flow
```
User enables content blocker in settings
                    ↓
Platform detection (iOS/Android/Web)
                    ↓
Platform-specific setup guide
                    ↓
Step-by-step instructions with screenshots
                    ↓
Verification: "Did you complete the setup?"
                    ↓
Chrome extension prompt (if browser detected)
                    ↓
"Install Alex Friend extension"
                    ↓
Success screen: "You're now protected!"
```

### Block Event Flow
```
User navigates to blocked domain
                    ↓
Platform intercepts request
                    ↓
Block page displays
                    ↓
Options shown:
├── Open Alex Friend app
├── Talk to Alex
├── Breathing exercise
└── Request access (if enabled)
                    ↓
Block event logged (no URL, just timestamp)
                    ↓
User redirected or stays on block page
```

### Disable Request Flow
```
User tries to disable blocker
                    ↓
Passcode required (if enabled)
                    ↓
Accountability check:
├── Not enabled: Proceeds with disable
│
└── Enabled: "Partner will be notified"
    ├── User cancels
    │
    └── User confirms
        ├── Notification sent to partner
        ├── Optional delay (24h)
        └── Blocker disabled
```

---

## Integration Points

### With Streak System
- Block page shows current streak
- Blocking events correlate with streak analytics

### With Analytics
- Block patterns show high-risk times
- "You typically get blocked at 11 PM on Saturdays"

### With Alex
- AI can discuss blocking patterns
- "I noticed several blocked attempts this week..."

### With Check-ins
- High block count triggers check-in prompt
- "Seems like today was tough. How are you?"

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create blocklist_entries table with seed data per addiction
- Create user_block_settings table
- Create block_events table
- Create user_custom_blocks table
- Set up blocklist update mechanism

### backend-agent Tasks
- GET /api/blocker/settings?addiction_type=X - User settings
- PATCH /api/blocker/settings - Update settings
- POST /api/blocker/custom - Add custom block
- DELETE /api/blocker/custom/:id - Remove custom block
- POST /api/blocker/event - Log block event
- GET /api/blocker/blocklist?addiction_type=X - Sync blocklist
- Notification endpoint for accountability

### ui-agent Tasks
- BlockerSettings screen
- SetupGuide step-by-step component
- CustomBlockList component
- BlockedPage component (for extension)
- AccountabilitySettings component

### pages-agent Tasks
- Content blocker settings page
- Setup guide flow
- Custom blocks management
- Chrome extension popup UI
- Blocked page (standalone HTML)

---

## Success Metrics

**Protection Metrics**
- Blocklist coverage (% of triggering sites blocked)
- Block event frequency per user
- Extension installation rate
- Setup completion rate

**Outcome Metrics**
- Streak length correlation with blocker use
- Relapse rate: users with blocker vs without
- Block pattern changes over time

---

## Free vs Premium

### Free Tier
- Basic blocklist (100k sites)
- Chrome extension
- iOS Safari blocker
- 5 custom blocks

### Premium Tier
- Full blocklist (1M+ entries)
- Unlimited custom blocks
- Block scheduling
- Accountability partner features
- Pattern analytics
- Priority blocklist updates

---

## Privacy Considerations

### What We Track
- Block count (no URLs)
- Time of blocks
- Platform used
- Category blocked

### What We DON'T Track
- Specific URLs attempted
- Search queries blocked
- Browsing history
- Page content

### Data Storage
- Block events stored 90 days
- Aggregated after that
- User can delete anytime
- No third-party sharing

---

## Browser Compatibility

### Chrome Extension
- Chrome (primary)
- Brave
- Edge (Chromium)
- Opera (Chromium)

### Limitations
- Firefox: Manifest V3 differences
- Safari: Different extension format
- Mobile browsers: Limited extension support
