# Phase 9: Content Blocker & Social Media Safety

## Overview

This phase covers content blocking and social media safety features. See also:
- [FEATURE_OPTIONAL_FRICTION.md](./FEATURE_OPTIONAL_FRICTION.md) - Optional breathing exercise before risky apps
- [FEATURE_SCREEN_TIME_TRACKING.md](./FEATURE_SCREEN_TIME_TRACKING.md) - Track time in risky apps with notifications
- [GUIDE_SOCIAL_MEDIA_SAFETY.md](./GUIDE_SOCIAL_MEDIA_SAFETY.md) - Platform-specific safety setup guides

## Steps 55-62

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const blockedSites = pgTable('blocked_sites', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  domain: text('domain').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const blockedKeywords = pgTable('blocked_keywords', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  keyword: text('keyword').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const extensionSettings = pgTable('extension_settings', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  enabled: boolean('enabled').default(true),
  blocklistVersion: integer('blocklist_version').default(1),
  safeSearchEnabled: boolean('safe_search_enabled').default(true),
  blockImages: boolean('block_images').default(true),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const whitelistedSites = pgTable('whitelisted_sites', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  domain: text('domain').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### 55. Screen Time API (react-native-device-activity)

```typescript
// apps/mobile/lib/screenTime.ts
import DeviceActivity from 'react-native-device-activity'
import { Platform } from 'react-native'

export async function requestScreenTimePermission() {
  if (Platform.OS !== 'ios') {
    console.log('Screen Time API only available on iOS')
    return false
  }

  const status = await DeviceActivity.requestAuthorization()
  return status === 'approved'
}

export async function getScreenTimeStatus() {
  if (Platform.OS !== 'ios') return null

  return DeviceActivity.getAuthorizationStatus()
}

export async function blockApps(appIds: string[]) {
  if (Platform.OS !== 'ios') return

  await DeviceActivity.setShieldedApplications(appIds)
}

export async function setSchedule(
  startHour: number,
  startMinute: number,
  endHour: number,
  endMinute: number,
  weekdays: number[] // 0 = Sunday, 1 = Monday, etc.
) {
  if (Platform.OS !== 'ios') return

  await DeviceActivity.setSchedule({
    intervalStart: { hour: startHour, minute: startMinute },
    intervalEnd: { hour: endHour, minute: endMinute },
    weekdays,
  })
}

export async function startMonitoring() {
  if (Platform.OS !== 'ios') return

  await DeviceActivity.startMonitoring()
}

export async function stopMonitoring() {
  if (Platform.OS !== 'ios') return

  await DeviceActivity.stopMonitoring()
}
```

### 56. Mobile Blocker UI

```typescript
// apps/mobile/app/(tabs)/blocker.tsx
import { View, Text, ScrollView, Pressable, TextInput, Switch, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'
import * as ScreenTime from '@/lib/screenTime'

export default function BlockerScreen() {
  const [enabled, setEnabled] = useState(true)
  const [safeSearch, setSafeSearch] = useState(true)
  const [newSite, setNewSite] = useState('')
  const [newKeyword, setNewKeyword] = useState('')
  const [screenTimeEnabled, setScreenTimeEnabled] = useState(false)

  const { data: settings } = api.blocker.getSettings.useQuery()
  const { data: blockedSites } = api.blocker.getBlockedSites.useQuery()
  const { data: blockedKeywords } = api.blocker.getBlockedKeywords.useQuery()

  const addSiteMutation = api.blocker.addBlockedSite.useMutation()
  const addKeywordMutation = api.blocker.addBlockedKeyword.useMutation()
  const removeSiteMutation = api.blocker.removeBlockedSite.useMutation()
  const removeKeywordMutation = api.blocker.removeBlockedKeyword.useMutation()
  const updateSettingsMutation = api.blocker.updateSettings.useMutation()

  useEffect(() => {
    checkScreenTimeStatus()
  }, [])

  const checkScreenTimeStatus = async () => {
    const status = await ScreenTime.getScreenTimeStatus()
    setScreenTimeEnabled(status === 'approved')
  }

  const requestScreenTimeAccess = async () => {
    const granted = await ScreenTime.requestScreenTimePermission()
    if (granted) {
      setScreenTimeEnabled(true)
      await ScreenTime.startMonitoring()
    } else {
      Alert.alert(
        'Permission Required',
        'Please enable Screen Time access in Settings to block apps.'
      )
    }
  }

  const handleAddSite = async () => {
    if (!newSite.trim()) return
    await addSiteMutation.mutateAsync({ domain: newSite.trim().toLowerCase() })
    setNewSite('')
  }

  const handleAddKeyword = async () => {
    if (!newKeyword.trim()) return
    await addKeywordMutation.mutateAsync({ keyword: newKeyword.trim().toLowerCase() })
    setNewKeyword('')
  }

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-bold mb-6">Content Blocker</Text>

      {/* Main Toggle */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-white text-lg font-medium">Blocker Enabled</Text>
          <Text className="text-gray-400">Block adult content</Text>
        </View>
        <Switch
          value={enabled}
          onValueChange={(v) => {
            setEnabled(v)
            updateSettingsMutation.mutate({ enabled: v })
          }}
          trackColor={{ true: '#8B5CF6' }}
        />
      </View>

      {/* Safe Search */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-white text-lg font-medium">Safe Search</Text>
          <Text className="text-gray-400">Enforce on all search engines</Text>
        </View>
        <Switch
          value={safeSearch}
          onValueChange={(v) => {
            setSafeSearch(v)
            updateSettingsMutation.mutate({ safeSearchEnabled: v })
          }}
          trackColor={{ true: '#8B5CF6' }}
        />
      </View>

      {/* Screen Time (iOS only) */}
      <View className="bg-gray-800 rounded-xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-2">
          <View>
            <Text className="text-white text-lg font-medium">Screen Time</Text>
            <Text className="text-gray-400">Block apps system-wide (iOS)</Text>
          </View>
          {screenTimeEnabled ? (
            <View className="bg-green-600 px-3 py-1 rounded-full">
              <Text className="text-white text-sm">Active</Text>
            </View>
          ) : (
            <Pressable
              onPress={requestScreenTimeAccess}
              className="bg-purple-600 px-4 py-2 rounded-lg"
            >
              <Text className="text-white">Enable</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Blocked Sites */}
      <Text className="text-white text-lg font-medium mb-3">Blocked Sites</Text>
      <View className="flex-row mb-3">
        <TextInput
          value={newSite}
          onChangeText={setNewSite}
          placeholder="example.com"
          placeholderTextColor="#6B7280"
          className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-xl"
        />
        <Pressable
          onPress={handleAddSite}
          className="bg-purple-600 px-6 rounded-r-xl justify-center"
        >
          <Text className="text-white font-medium">Add</Text>
        </Pressable>
      </View>

      <View className="mb-6">
        {blockedSites?.map((site) => (
          <View
            key={site.id}
            className="bg-gray-800 px-4 py-3 rounded-lg mb-2 flex-row items-center justify-between"
          >
            <Text className="text-white">{site.domain}</Text>
            <Pressable onPress={() => removeSiteMutation.mutate({ id: site.id })}>
              <Text className="text-red-500">Remove</Text>
            </Pressable>
          </View>
        ))}
      </View>

      {/* Blocked Keywords */}
      <Text className="text-white text-lg font-medium mb-3">Blocked Keywords</Text>
      <View className="flex-row mb-3">
        <TextInput
          value={newKeyword}
          onChangeText={setNewKeyword}
          placeholder="keyword"
          placeholderTextColor="#6B7280"
          className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-l-xl"
        />
        <Pressable
          onPress={handleAddKeyword}
          className="bg-purple-600 px-6 rounded-r-xl justify-center"
        >
          <Text className="text-white font-medium">Add</Text>
        </Pressable>
      </View>

      <View className="mb-6">
        {blockedKeywords?.map((kw) => (
          <View
            key={kw.id}
            className="bg-gray-800 px-4 py-3 rounded-lg mb-2 flex-row items-center justify-between"
          >
            <Text className="text-white">{kw.keyword}</Text>
            <Pressable onPress={() => removeKeywordMutation.mutate({ id: kw.id })}>
              <Text className="text-red-500">Remove</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
```

### 57. Chrome Extension Service Worker

```typescript
// apps/extension/src/background.ts
import { getBlocklist, getKeywords, getSettings, getUserToken } from './storage'

// Default adult content blocklist (1M+ domains from public lists)
const DEFAULT_BLOCKLIST_URL = 'https://api.quitpo.app/blocklist/default'

let cachedBlocklist: Set<string> = new Set()
let cachedKeywords: string[] = []
let settings = { enabled: true, safeSearchEnabled: true, blockImages: true }

// Initialize
chrome.runtime.onInstalled.addListener(async () => {
  await loadBlocklist()
  await loadSettings()
  setupBlockingRules()
})

async function loadBlocklist() {
  try {
    // Load default blocklist
    const response = await fetch(DEFAULT_BLOCKLIST_URL)
    const domains = await response.json()
    cachedBlocklist = new Set(domains)

    // Add user's custom blocked sites
    const userBlocked = await getBlocklist()
    userBlocked.forEach((domain) => cachedBlocklist.add(domain))

    cachedKeywords = await getKeywords()
  } catch (error) {
    console.error('Failed to load blocklist:', error)
  }
}

async function loadSettings() {
  settings = await getSettings()
}

// Setup declarativeNetRequest rules for efficient blocking
async function setupBlockingRules() {
  const rules: chrome.declarativeNetRequest.Rule[] = []
  let ruleId = 1

  // Block domains from blocklist
  for (const domain of cachedBlocklist) {
    rules.push({
      id: ruleId++,
      priority: 1,
      action: { type: 'block' as const },
      condition: {
        urlFilter: `||${domain}`,
        resourceTypes: ['main_frame', 'sub_frame', 'image', 'media'] as const,
      },
    })

    if (ruleId > 30000) break // Chrome limit
  }

  // Clear existing rules and add new ones
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: (await chrome.declarativeNetRequest.getDynamicRules()).map(r => r.id),
    addRules: rules,
  })
}

// Safe search enforcement
const SAFE_SEARCH_RULES: Record<string, string> = {
  'google.com': '&safe=active',
  'bing.com': '&adlt=strict',
  'duckduckgo.com': '&kp=1',
  'yahoo.com': '&vm=r',
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (!settings.enabled || !settings.safeSearchEnabled) return

    const url = new URL(details.url)
    const domain = url.hostname.replace('www.', '')

    for (const [searchDomain, safeParam] of Object.entries(SAFE_SEARCH_RULES)) {
      if (domain.includes(searchDomain) && url.pathname.includes('search')) {
        if (!url.search.includes(safeParam)) {
          return { redirectUrl: details.url + safeParam }
        }
      }
    }
  },
  { urls: ['<all_urls>'] },
  ['blocking']
)

// Listen for messages from popup/content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'GET_STATUS':
      sendResponse({ enabled: settings.enabled })
      break
    case 'TOGGLE_ENABLED':
      settings.enabled = message.enabled
      sendResponse({ success: true })
      break
    case 'RELOAD_BLOCKLIST':
      loadBlocklist().then(() => {
        setupBlockingRules()
        sendResponse({ success: true })
      })
      return true // Keep channel open for async response
    case 'CHECK_URL':
      const isBlocked = isUrlBlocked(message.url)
      sendResponse({ blocked: isBlocked })
      break
  }
})

function isUrlBlocked(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    const domain = parsedUrl.hostname.replace('www.', '')

    // Check domain blocklist
    if (cachedBlocklist.has(domain)) return true

    // Check keywords
    const pageContent = parsedUrl.pathname + parsedUrl.search
    for (const keyword of cachedKeywords) {
      if (pageContent.toLowerCase().includes(keyword.toLowerCase())) {
        return true
      }
    }

    return false
  } catch {
    return false
  }
}

// Sync with server periodically
chrome.alarms.create('sync-blocklist', { periodInMinutes: 60 })
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'sync-blocklist') {
    const token = await getUserToken()
    if (token) {
      await syncWithServer(token)
    }
  }
})

async function syncWithServer(token: string) {
  try {
    const response = await fetch('https://api.quitpo.app/blocker/sync', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await response.json()

    // Update local storage
    await chrome.storage.local.set({
      blockedSites: data.blockedSites,
      blockedKeywords: data.blockedKeywords,
      settings: data.settings,
    })

    await loadBlocklist()
    await loadSettings()
    await setupBlockingRules()
  } catch (error) {
    console.error('Sync failed:', error)
  }
}
```

### 58. Content Script Blocking

```typescript
// apps/extension/src/content.ts
let settings = { enabled: true, blockImages: true }

// Load settings
chrome.storage.local.get(['settings'], (result) => {
  if (result.settings) {
    settings = result.settings
  }
})

// Listen for setting changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.settings) {
    settings = changes.settings.newValue
    if (settings.enabled && settings.blockImages) {
      scanAndBlockImages()
    }
  }
})

// Block explicit images using content analysis
function scanAndBlockImages() {
  if (!settings.enabled || !settings.blockImages) return

  const images = document.querySelectorAll('img')

  images.forEach((img) => {
    // Check image src against patterns
    const src = img.src.toLowerCase()
    const alt = (img.alt || '').toLowerCase()

    const suspiciousPatterns = [
      'nsfw', 'xxx', 'porn', 'nude', 'adult', 'explicit',
      'sexy', 'naked', 'erotic', 'onlyfans'
    ]

    const isSuspicious = suspiciousPatterns.some(
      (pattern) => src.includes(pattern) || alt.includes(pattern)
    )

    if (isSuspicious) {
      blockImage(img)
    }
  })
}

function blockImage(img: HTMLImageElement) {
  img.style.filter = 'blur(20px)'
  img.style.pointerEvents = 'none'

  // Add overlay using safe DOM methods
  const wrapper = document.createElement('div')
  wrapper.style.cssText = 'position: relative; display: inline-block;'

  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    cursor: pointer;
  `
  overlay.textContent = 'Blocked by QuitPo'

  img.parentNode?.insertBefore(wrapper, img)
  wrapper.appendChild(img)
  wrapper.appendChild(overlay)
}

// Keyword blocking in page content
function scanPageContent() {
  if (!settings.enabled) return

  chrome.storage.local.get(['blockedKeywords'], (result) => {
    const keywords = result.blockedKeywords || []

    if (keywords.length === 0) return

    const bodyText = document.body.innerText.toLowerCase()

    for (const keyword of keywords) {
      if (bodyText.includes(keyword.toLowerCase())) {
        showBlockedPage(keyword)
        return
      }
    }
  })
}

function showBlockedPage(keyword: string) {
  // Clear body safely using DOM methods
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild)
  }

  // Create blocked page using safe DOM methods
  const container = document.createElement('div')
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  `

  const icon = document.createElement('div')
  icon.style.cssText = 'font-size: 64px; margin-bottom: 24px;'
  icon.textContent = '🛡️'

  const title = document.createElement('h1')
  title.style.cssText = 'font-size: 32px; margin-bottom: 16px;'
  title.textContent = 'Content Blocked'

  const message = document.createElement('p')
  message.style.cssText = 'color: #9ca3af; margin-bottom: 32px;'
  message.textContent = `This page was blocked because it contains: "${keyword}"`

  const link = document.createElement('a')
  link.href = 'https://app.quitpo.app/dashboard'
  link.style.cssText = `
    background: #8B5CF6;
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
  `
  link.textContent = 'Go to QuitPo Dashboard'

  container.appendChild(icon)
  container.appendChild(title)
  container.appendChild(message)
  container.appendChild(link)
  document.body.appendChild(container)
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    scanPageContent()
    scanAndBlockImages()
  })
} else {
  scanPageContent()
  scanAndBlockImages()
}

// Observe DOM changes for dynamically loaded content
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      scanAndBlockImages()
    }
  }
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
```

### 59. Extension Popup

```typescript
// apps/extension/src/popup/Popup.tsx
import { useState, useEffect } from 'react'
import './popup.css'

export function Popup() {
  const [enabled, setEnabled] = useState(true)
  const [streakDays, setStreakDays] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Load state from storage
    chrome.storage.local.get(['settings', 'streakDays', 'userToken'], (result) => {
      setEnabled(result.settings?.enabled ?? true)
      setStreakDays(result.streakDays ?? 0)
      setIsLoggedIn(!!result.userToken)
    })
  }, [])

  const toggleEnabled = () => {
    const newEnabled = !enabled
    setEnabled(newEnabled)

    chrome.storage.local.set({
      settings: { enabled: newEnabled },
    })

    chrome.runtime.sendMessage({ type: 'TOGGLE_ENABLED', enabled: newEnabled })
  }

  const openDashboard = () => {
    chrome.tabs.create({ url: 'https://app.quitpo.app/dashboard' })
  }

  const openOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  if (!isLoggedIn) {
    return (
      <div className="popup">
        <div className="logo">QuitPo</div>
        <p className="message">Sign in to sync your settings</p>
        <button className="btn-primary" onClick={openDashboard}>
          Sign In
        </button>
      </div>
    )
  }

  return (
    <div className="popup">
      <div className="header">
        <div className="logo">QuitPo</div>
        <button className="settings-btn" onClick={openOptions}>
          Settings
        </button>
      </div>

      <div className="streak-card">
        <div className="streak-number">{streakDays}</div>
        <div className="streak-label">Day Streak</div>
      </div>

      <div className="toggle-row">
        <span>Content Blocker</span>
        <button
          className={`toggle ${enabled ? 'active' : ''}`}
          onClick={toggleEnabled}
        >
          <div className="toggle-knob" />
        </button>
      </div>

      <div className="status">
        {enabled ? (
          <span className="status-active">Protection Active</span>
        ) : (
          <span className="status-inactive">Protection Disabled</span>
        )}
      </div>

      <button className="btn-secondary" onClick={openDashboard}>
        Open Dashboard
      </button>
    </div>
  )
}
```

### 60. Keyword Blocking

Already implemented in content.ts above.

### 61. Blocklist Sync

```typescript
// packages/api/src/routers/blocker.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { blockedSites, blockedKeywords, extensionSettings, whitelistedSites } from '@quitpo/db'
import { eq, and } from 'drizzle-orm'

export const blockerRouter = router({
  getSettings: protectedProcedure.query(async ({ ctx }) => {
    let settings = await ctx.db
      .select()
      .from(extensionSettings)
      .where(eq(extensionSettings.userId, ctx.userId))
      .limit(1)

    if (!settings[0]) {
      const [newSettings] = await ctx.db
        .insert(extensionSettings)
        .values({ userId: ctx.userId })
        .returning()
      settings = [newSettings]
    }

    return settings[0]
  }),

  updateSettings: protectedProcedure
    .input(z.object({
      enabled: z.boolean().optional(),
      safeSearchEnabled: z.boolean().optional(),
      blockImages: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(extensionSettings)
        .set({
          ...input,
          updatedAt: new Date(),
        })
        .where(eq(extensionSettings.userId, ctx.userId))
    }),

  getBlockedSites: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(blockedSites)
      .where(eq(blockedSites.userId, ctx.userId))
  }),

  addBlockedSite: protectedProcedure
    .input(z.object({ domain: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const domain = input.domain.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '')

      const [site] = await ctx.db
        .insert(blockedSites)
        .values({ userId: ctx.userId, domain })
        .returning()

      // Increment blocklist version
      await ctx.db
        .update(extensionSettings)
        .set({ blocklistVersion: sql`${extensionSettings.blocklistVersion} + 1` })
        .where(eq(extensionSettings.userId, ctx.userId))

      return site
    }),

  removeBlockedSite: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(blockedSites)
        .where(and(
          eq(blockedSites.id, input.id),
          eq(blockedSites.userId, ctx.userId)
        ))
    }),

  getBlockedKeywords: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db
      .select()
      .from(blockedKeywords)
      .where(eq(blockedKeywords.userId, ctx.userId))
  }),

  addBlockedKeyword: protectedProcedure
    .input(z.object({ keyword: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const [kw] = await ctx.db
        .insert(blockedKeywords)
        .values({ userId: ctx.userId, keyword: input.keyword.toLowerCase() })
        .returning()

      return kw
    }),

  removeBlockedKeyword: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(blockedKeywords)
        .where(and(
          eq(blockedKeywords.id, input.id),
          eq(blockedKeywords.userId, ctx.userId)
        ))
    }),

  // Full sync endpoint for extension
  sync: protectedProcedure.query(async ({ ctx }) => {
    const [settings, sites, keywords, whitelist] = await Promise.all([
      ctx.db.select().from(extensionSettings).where(eq(extensionSettings.userId, ctx.userId)).limit(1),
      ctx.db.select().from(blockedSites).where(eq(blockedSites.userId, ctx.userId)),
      ctx.db.select().from(blockedKeywords).where(eq(blockedKeywords.userId, ctx.userId)),
      ctx.db.select().from(whitelistedSites).where(eq(whitelistedSites.userId, ctx.userId)),
    ])

    return {
      settings: settings[0],
      blockedSites: sites.map((s) => s.domain),
      blockedKeywords: keywords.map((k) => k.keyword),
      whitelistedSites: whitelist.map((w) => w.domain),
    }
  }),
})
```

### 62. Safe Search Enforcement

Already implemented in background.ts service worker above.

---

## Steps 63-65: Social Media Safety Features

### 63. Optional Friction Mode

See [FEATURE_OPTIONAL_FRICTION.md](./FEATURE_OPTIONAL_FRICTION.md) for full specification.

**Summary**: Optional breathing exercise before opening risky apps (Instagram, TikTok, etc.)
- Inspired by "one sec" app (57% reduction in app opens - peer-reviewed study)
- MUST be opt-in, not default
- Shows motivational messages during breathing
- Uses Screen Time API (iOS) and Accessibility Service (Android)

```typescript
// apps/mobile/app/(settings)/friction.tsx
import { View, Text, Switch, Pressable } from 'react-native'
import { useState } from 'react'
import { api } from '@/lib/api'
import { AppPicker } from '@/components/AppPicker'

export default function FrictionSettingsScreen() {
  const [enabled, setEnabled] = useState(false)
  const [selectedApps, setSelectedApps] = useState<string[]>([])

  const { data: settings } = api.friction.getSettings.useQuery()
  const updateMutation = api.friction.updateSettings.useMutation()

  const handleToggle = async (value: boolean) => {
    setEnabled(value)
    await updateMutation.mutateAsync({ enabled: value })
  }

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-bold mb-2">Breathing Mode</Text>
      <Text className="text-gray-400 mb-6">
        Take a moment before opening apps that might trigger you.
      </Text>

      <View className="bg-gray-800 rounded-xl p-4 mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-white text-lg font-medium">Enable</Text>
          <Text className="text-gray-400">Show breathing exercise</Text>
        </View>
        <Switch
          value={enabled}
          onValueChange={handleToggle}
          trackColor={{ true: '#8B5CF6' }}
        />
      </View>

      {enabled && (
        <AppPicker
          selectedApps={selectedApps}
          onSelectionChange={setSelectedApps}
        />
      )}
    </View>
  )
}
```

### 64. Screen Time Tracking & Notifications

See [FEATURE_SCREEN_TIME_TRACKING.md](./FEATURE_SCREEN_TIME_TRACKING.md) for full specification.

**Summary**: Track time in risky apps and send empathetic notifications
- Continuous use alerts (e.g., 15 min in one session)
- Daily total alerts
- Late night warnings (10 PM - 6 AM)
- Weekly summary reports
- Three notification styles: Gentle, Encouraging, Direct

```typescript
// apps/mobile/app/(settings)/screen-time.tsx
import { View, Text, Switch, Pressable } from 'react-native'
import { useState } from 'react'
import Slider from '@react-native-community/slider'

export default function ScreenTimeSettingsScreen() {
  const [enabled, setEnabled] = useState(false)
  const [continuousThreshold, setContinuousThreshold] = useState(15)
  const [dailyThreshold, setDailyThreshold] = useState(30)
  const [lateNightAlerts, setLateNightAlerts] = useState(true)
  const [notificationStyle, setNotificationStyle] = useState<'gentle' | 'encouraging' | 'direct'>('encouraging')

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-bold mb-2">Screen Time Tracking</Text>
      <Text className="text-gray-400 mb-6">
        Get notified about your time in risky apps.
      </Text>

      {/* Enable Toggle */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-lg font-medium">Enable Tracking</Text>
          <Switch value={enabled} onValueChange={setEnabled} trackColor={{ true: '#8B5CF6' }} />
        </View>
      </View>

      {/* Continuous Use Threshold */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4">
        <Text className="text-white font-medium mb-2">Alert after continuous use</Text>
        <Slider
          value={continuousThreshold}
          onValueChange={setContinuousThreshold}
          minimumValue={5}
          maximumValue={60}
          step={5}
          minimumTrackTintColor="#8B5CF6"
        />
        <Text className="text-gray-400 text-center">{continuousThreshold} minutes</Text>
      </View>

      {/* Daily Threshold */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4">
        <Text className="text-white font-medium mb-2">Alert after daily total</Text>
        <Slider
          value={dailyThreshold}
          onValueChange={setDailyThreshold}
          minimumValue={15}
          maximumValue={120}
          step={15}
          minimumTrackTintColor="#8B5CF6"
        />
        <Text className="text-gray-400 text-center">{dailyThreshold} minutes</Text>
      </View>

      {/* Late Night Alerts */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4 flex-row items-center justify-between">
        <View>
          <Text className="text-white font-medium">Late Night Alerts</Text>
          <Text className="text-gray-400">Extra warnings 10pm - 6am</Text>
        </View>
        <Switch value={lateNightAlerts} onValueChange={setLateNightAlerts} trackColor={{ true: '#8B5CF6' }} />
      </View>

      {/* Notification Style */}
      <View className="bg-gray-800 rounded-xl p-4 mb-4">
        <Text className="text-white font-medium mb-3">Notification Style</Text>
        <View className="flex-row gap-2">
          {(['gentle', 'encouraging', 'direct'] as const).map((style) => (
            <Pressable
              key={style}
              onPress={() => setNotificationStyle(style)}
              className={`flex-1 py-2 rounded-lg ${notificationStyle === style ? 'bg-purple-600' : 'bg-gray-700'}`}
            >
              <Text className="text-white text-center capitalize">{style}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  )
}
```

### 65. Social Media Safety Guides

See [GUIDE_SOCIAL_MEDIA_SAFETY.md](./GUIDE_SOCIAL_MEDIA_SAFETY.md) for full content.

**Summary**: Step-by-step guides for configuring each social media platform
- Instagram: Sensitive content controls, algorithm reset, DM filtering
- TikTok: Restricted mode, keyword filters, watch history clearing
- Twitter/X: Safe search, muted words, sensitive media settings
- YouTube: Restricted mode, watch history management
- Snapchat: Sensitive content controls, Spotlight settings
- Reddit: NSFW content settings, personalization disable
- Discord: Explicit content filter, DM restrictions

```typescript
// apps/mobile/app/(settings)/social-safety.tsx
import { View, Text, ScrollView, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

const PLATFORMS = [
  { id: 'instagram', name: 'Instagram', icon: '📸', steps: 6 },
  { id: 'tiktok', name: 'TikTok', icon: '🎵', steps: 6 },
  { id: 'twitter', name: 'Twitter/X', icon: '🐦', steps: 5 },
  { id: 'youtube', name: 'YouTube', icon: '📺', steps: 6 },
  { id: 'snapchat', name: 'Snapchat', icon: '👻', steps: 4 },
  { id: 'reddit', name: 'Reddit', icon: '🔴', steps: 5 },
  { id: 'discord', name: 'Discord', icon: '💬', steps: 4 },
]

export default function SocialSafetyScreen() {
  const router = useRouter()
  const { data: progress } = api.safety.getGuideProgress.useQuery()

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-bold mb-2">Social Media Safety</Text>
      <Text className="text-gray-400 mb-6">
        Configure your social apps to show less triggering content.
      </Text>

      {PLATFORMS.map((platform) => {
        const completed = progress?.[platform.id]?.completedAt

        return (
          <Pressable
            key={platform.id}
            onPress={() => router.push(`/social-safety/${platform.id}`)}
            className="bg-gray-800 rounded-xl p-4 mb-3 flex-row items-center"
          >
            <Text className="text-3xl mr-4">{platform.icon}</Text>
            <View className="flex-1">
              <Text className="text-white text-lg font-medium">{platform.name}</Text>
              <Text className="text-gray-400">{platform.steps} steps</Text>
            </View>
            {completed ? (
              <Text className="text-green-500">✓ Done</Text>
            ) : (
              <Text className="text-gray-500">→</Text>
            )}
          </Pressable>
        )
      })}

      <View className="bg-purple-900/30 rounded-xl p-4 mt-4">
        <Text className="text-purple-300 font-medium mb-1">💡 Tip</Text>
        <Text className="text-gray-300">
          Complete all guides for best results. Your algorithm may take 1-2 weeks to adjust.
        </Text>
      </View>
    </ScrollView>
  )
}
```

---

## Database Schema Additions

```typescript
// packages/db/src/schema.ts (additions for new features)

// Friction mode settings
export const frictionSettings = pgTable('friction_settings', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  enabled: boolean('enabled').default(false),
  monitoredApps: text('monitored_apps').array().default([]),
  breathingDuration: text('breathing_duration').default('medium'), // short, medium, long
  showMotivationalMessages: boolean('show_motivational_messages').default(true),
  lateNightMode: boolean('late_night_mode').default(true),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Screen time tracking settings
export const screenTimeSettings = pgTable('screen_time_settings', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  enabled: boolean('enabled').default(false),
  trackedApps: text('tracked_apps').array().default([]),
  continuousThresholdMinutes: integer('continuous_threshold_minutes').default(15),
  dailyThresholdMinutes: integer('daily_threshold_minutes').default(30),
  lateNightAlertsEnabled: boolean('late_night_alerts_enabled').default(true),
  notificationStyle: text('notification_style').default('encouraging'), // gentle, encouraging, direct
  weeklyReportEnabled: boolean('weekly_report_enabled').default(true),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Screen time daily stats
export const screenTimeStats = pgTable('screen_time_stats', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  date: date('date').notNull(),
  totalMinutes: integer('total_minutes').default(0),
  appBreakdown: jsonb('app_breakdown').default([]), // [{appId, appName, minutes}]
  peakUsageHour: integer('peak_usage_hour'),
  sessionsCount: integer('sessions_count').default(0),
})

// Social media safety guide progress
export const safetyGuideProgress = pgTable('safety_guide_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull(),
  platform: text('platform').notNull(), // instagram, tiktok, twitter, etc.
  stepsCompleted: integer('steps_completed').array().default([]),
  completedAt: timestamp('completed_at'),
  needsUpdate: boolean('needs_update').default(false),
})
```
