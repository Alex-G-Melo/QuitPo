# Content Blocker

## Title
Cross-Platform Adult Content Blocking System

## Description
The content blocker is a multi-platform protection system that prevents access to adult websites and content through a combination of mobile device settings integration, a Chrome browser extension, and DNS-level blocking. This creates multiple layers of defense to support users during moments of weakness, recognizing that strong intentions can falter when willpower is depleted.

## Problem Statement

Users trying to avoid porn face an internet saturated with access:

1. **Instant Access**: Adult content is seconds away on any device at any time.

2. **Weak Moment Vulnerability**: When willpower is low, easy access leads to relapse.

3. **Accidental Exposure**: Non-adult sites (social media, ads) can surface triggering content.

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
- 1M+ known adult domains
- User-configurable additions
- Regular updates
- Category-based blocking

### 4. Recovery Mode
- Temporary bypass request
- Accountability notification option
- Time-limited access (if enabled)

## Screen Content

### Content Blocker Settings

```
┌─────────────────────────────────────────────┐
│  ← Settings        Content Blocker          │
│                                             │
│  🛡️ Protection Status                       │
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
│  📱 Mobile Protection                       │
│                                             │
│  Screen Time Blocking         [Enabled ✓]  │
│  Safari Content Blocker       [Enabled ✓]  │
│  [Setup Instructions]                       │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  💻 Browser Protection                      │
│                                             │
│  Chrome Extension            [Installed ✓]  │
│  Block adult sites                [ON]      │
│  Block adult search results       [ON]      │
│  Force safe search                [ON]      │
│  Block Reddit NSFW                [ON]      │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  ⚙️ Advanced                                │
│                                             │
│  [Custom Blocked Sites]                     │
│  [Blocked Keywords]                         │
│  [Whitelist]                               │
│  [Block Schedule]           🔒 Premium     │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  🔐 Accountability                          │
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
│              🛡️ QuitPo                       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌Stay with me.                    │   │
│  │   (typewriter animation + haptics)  │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day 23 • Don't reset now            │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   🚨 OPEN PANIC BUTTON              │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Side effects of relapsing:                 │
│  • Brain fog • Dopamine crash               │
│  • Shame spiral • Progress reset            │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to AI Therapist]                     │
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
│  5. Tap "Content Restrictions"              │
│  6. Tap "Web Content"                       │
│  7. Select "Limit Adult Websites"           │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  💡 Pro Tip: Have someone else set the      │
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
│  QuitPo Protector             │
│                               │
│  Status: Active ✓             │
│                               │
│  Sites blocked today: 3       │
│  Current streak: Day 23       │
│                               │
│  ─────────────────────────    │
│                               │
│  Quick Settings:              │
│  [✓] Block adult sites        │
│  [✓] Safe search              │
│  [✓] Block NSFW Reddit        │
│                               │
│  ─────────────────────────    │
│                               │
│  [Open QuitPo]                │
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
│  ┌─────────────────────────────────────┐   │
│  │ anothersite.com             [Remove]│   │
│  │ Added Dec 15, 2025                  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ... more sites ...                         │
│                                             │
│  💡 These sites are blocked in addition     │
│  to the default blocklist.                  │
│                                             │
└─────────────────────────────────────────────┘
```

## Blocking System Architecture

### Blocklist Tiers

**Tier 1: Default Blocklist**
- 1M+ known adult domains
- Porn aggregators and tubes
- Adult content hosting
- NSFW subreddits
- Adult Twitter/X accounts
- Regular updates

**Tier 2: Social Media NSFW**
- Reddit NSFW subreddit URLs
- Twitter/X media domains (when NSFW)
- Tumblr adult content
- Discord server invites (adult)

**Tier 3: Search Engine Integration**
- Enforce SafeSearch on Google
- Enforce Safe Mode on Bing
- Block explicit image searches
- Block adult keywords in search

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
    "url-filter": ".*\\.(pornsite\\.com).*"
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
    "urlFilter": "*://pornsite.com/*",
    "resourceTypes": ["main_frame", "sub_frame"]
  }
}
```

**DNS-Level (Optional)**
- Instructions for setting up Pi-hole
- Cloudflare Family DNS settings
- NextDNS configuration guide

## Chrome Extension Features

### Core Features
1. **URL Blocking**: Intercept requests to blocked domains
2. **Search Filtering**: Modify search results to remove adult content
3. **Safe Search Enforcement**: Prevent disabling safe search
4. **NSFW Reddit Block**: Block r/nsfw and similar subreddits
5. **Image Blocking**: Block known adult image CDNs

### Block Page Features
- Motivational message
- Current streak display
- Quick access to QuitPo app
- AI therapist chat link
- Breathing exercise launcher
- Request access (with accountability)

### Panic Button Integration

The blocked page is a critical intervention point - the user is actively trying to access porn. This is the perfect moment to trigger panic mode.

**Primary CTA: Open Panic Button**
The most prominent button on the blocked page opens the app directly in panic mode via `quitpo://panic`. This creates a seamless intervention flow:

```
User attempts blocked site
        ↓
Block page appears immediately
        ↓
Large "PANIC BUTTON" displayed prominently
        ↓
┌─ User taps Panic Button ─────────────────────┐
│  → Opens quitpo://panic                      │
│  → App launches in full panic mode           │
│  → Camera + typewriter messages activate     │
│  → Full intervention experience              │
└──────────────────────────────────────────────┘
        OR
┌─ User stays on block page ───────────────────┐
│  → Typewriter messages play on block page    │
│  → Motivational content rotates              │
│  → Side effects shown                        │
│  → Lighter intervention without app          │
└──────────────────────────────────────────────┘
```

**In-Page Intervention (Fallback)**
When the user doesn't open the app, the block page itself provides intervention:
- Typewriter-style motivational messages (same library as panic button)
- Current streak displayed prominently
- Side effects of relapsing listed
- Breathing exercise that works in-browser

**Camera on Block Page (Future/Experimental)**
Ideally, we'd show the camera directly on the blocked page for maximum impact. However:
- **Challenge**: Websites require explicit camera permission
- **User might deny**: Permission popup could be dismissed
- **Privacy concern**: Users may not want camera on a webpage
- **Solution**: Offer as optional "Enable enhanced protection" setting
  - If enabled and permission granted: Camera shows on block page
  - If not: Standard block page with text intervention

**Block Page with Camera (If Enabled)**
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │      [CAMERA FEED - USER'S FACE]    │   │
│  │                                     │   │
│  │   ▌Hey. Look at yourself.           │   │
│  │   (typewriter animation)            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  You're on Day 23. Don't reset now.         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🚨 OPEN PANIC BUTTON                │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Side effects of relapsing:                 │
│  • Brain fog for days                       │
│  • Dopamine crash                           │
│  • Shame spiral                             │
│  • Reset your progress                      │
│                                             │
│  [Talk to AI] [Breathe] [Close Tab]         │
│                                             │
└─────────────────────────────────────────────┘
```

**Block Page without Camera (Default)**
```
┌─────────────────────────────────────────────┐
│                                             │
│              🛡️ QuitPo                       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │   ▌Your brain is playing tricks.    │   │
│  │   (typewriter animation)            │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         Day 23 • Don't reset now            │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🚨 OPEN PANIC BUTTON                │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Side effects of relapsing:                 │
│  • Brain fog • Shame spiral                 │
│  • Dopamine crash • Progress reset          │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Talk to AI Therapist]                     │
│  [Start Breathing Exercise]                 │
│  [Close This Tab]                           │
│                                             │
│  ─────────────────────────────────────      │
│  Request Access (partner notified)          │
│                                             │
└─────────────────────────────────────────────┘
```

**Auto-Open Panic Mode (Optional Setting)**
For users who want maximum intervention:
- Setting: "Auto-open panic mode when site blocked"
- When enabled: Blocked site immediately triggers `quitpo://panic`
- No block page shown - straight to app panic mode
- More aggressive but potentially more effective

**Technical Implementation**
```javascript
// In blocked.js (Chrome Extension)
const userSettings = await chrome.storage.sync.get('autoOpenPanic');

if (userSettings.autoOpenPanic) {
  // Auto-redirect to panic mode
  window.location.href = 'quitpo://panic';
} else {
  // Show block page with panic button option
  renderBlockPage();
  startTypewriterAnimation();
}

// Panic button click handler
document.getElementById('panicBtn').addEventListener('click', () => {
  window.location.href = 'quitpo://panic?source=blocker';
});

// Camera integration (if permission granted)
async function enableCameraIntervention() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('cameraFeed').srcObject = stream;
    document.getElementById('cameraSection').style.display = 'block';
  } catch (err) {
    // Permission denied - use text-only intervention
    console.log('Camera not available, using text intervention');
  }
}
```

### Extension Settings
- Toggle individual protections
- Whitelist legitimate sites
- View block statistics
- Sync with app account

### Technical Implementation

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

## Mobile Implementation

### iOS Screen Time Integration

**What QuitPo Can Do:**
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
- QuitPo provides content blocker extension
- Blocks adult URLs within Safari
- User must enable in Settings
- Limited to Safari only

### Android Digital Wellbeing

**What QuitPo Can Do:**
- Accessibility Service for app monitoring
- Overlay protection reminders
- Custom browser blocking (QuitPo browser)
- DNS-level blocking (private DNS config)

**What Requires User Action:**
- Enabling accessibility permissions
- Setting Digital Wellbeing limits
- Choosing restricted apps

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

## Data Model

### Blocklist
```
blocklist_entries {
  id: UUID
  domain: String
  category: Enum (adult, social_nsfw, custom)
  source: Enum (default, user, reported)
  added_at: DateTime
  is_active: Boolean
}
```

### User Block Settings
```
user_block_settings {
  user_id: UUID
  block_adult_sites: Boolean
  block_adult_search: Boolean
  force_safe_search: Boolean
  block_reddit_nsfw: Boolean
  accountability_enabled: Boolean
  accountability_partner_id: UUID
  passcode_enabled: Boolean
  passcode_hash: String
}
```

### Block Events (Privacy-Preserving)
```
block_events {
  id: UUID
  user_id: UUID
  platform: Enum (ios, android, chrome)
  category: Enum (adult, social_nsfw, custom, search)
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
  domain: String
  added_at: DateTime
  is_active: Boolean
}
```

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
"Install QuitPo extension"
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
├── Open QuitPo app
├── Talk to AI
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

## Integration Points

### With Streak System
- Block page shows current streak
- Blocking events correlate with streak analytics

### With Analytics
- Block patterns show high-risk times
- "You typically get blocked at 11 PM on Saturdays"

### With AI Therapist
- AI can discuss blocking patterns
- "I noticed several blocked attempts this week..."

### With Check-ins
- High block count triggers check-in prompt
- "Seems like today was tough. How are you?"

## Agent Implementation Guide

### foundation-agent Tasks
- Create blocklist_entries table with seed data (1M+ domains)
- Create user_block_settings table
- Create block_events table
- Create user_custom_blocks table
- Set up blocklist update mechanism

### backend-agent Tasks
- GET /api/blocker/settings - User settings
- PATCH /api/blocker/settings - Update settings
- POST /api/blocker/custom - Add custom block
- DELETE /api/blocker/custom/:id - Remove custom block
- POST /api/blocker/event - Log block event
- GET /api/blocker/blocklist - Sync blocklist for extension
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

## Success Metrics

**Protection Metrics**
- Blocklist coverage (% of adult sites blocked)
- Block event frequency per user
- Extension installation rate
- Setup completion rate

**Outcome Metrics**
- Streak length correlation with blocker use
- Relapse rate: users with blocker vs without
- Block pattern changes over time

## Free vs Premium

### Free Tier
- Basic blocklist (100k sites)
- Chrome extension
- iOS Safari blocker
- 5 custom blocks

### Premium Tier
- Full blocklist (1M+ sites)
- Unlimited custom blocks
- Block scheduling
- Accountability partner features
- Pattern analytics
- Priority blocklist updates

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
