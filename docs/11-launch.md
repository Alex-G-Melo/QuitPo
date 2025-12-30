# Phase 11: Launch

## Steps 69-74

### 69. Performance Optimization

#### Mobile (React Native)

```typescript
// apps/mobile/metro.config.js
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

// Enable Hermes
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true, // Enable inline requires for faster startup
  },
})

module.exports = config
```

```typescript
// apps/mobile/app.config.ts (optimizations)
export default {
  // ...
  extra: {
    eas: {
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    },
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  // Enable New Architecture
  newArchEnabled: true,
}
```

```typescript
// packages/ui/src/optimizations.tsx
import { memo, useMemo, useCallback } from 'react'
import { FlatList, VirtualizedList } from 'react-native'

// Use memo for list items
export const OptimizedListItem = memo(function ListItem({ item, onPress }) {
  const handlePress = useCallback(() => onPress(item.id), [item.id, onPress])
  return <Pressable onPress={handlePress}>{/* ... */}</Pressable>
})

// Optimize FlatList
export function OptimizedFlatList({ data, renderItem, ...props }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      windowSize={5}
      initialNumToRender={10}
      getItemLayout={(data, index) => ({
        length: 80, // Item height
        offset: 80 * index,
        index,
      })}
      {...props}
    />
  )
}
```

#### Web (Next.js)

```typescript
// apps/web/next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['@quitpo/ui', '@quitpo/api', '@quitpo/shared'],
  experimental: {
    reactCompiler: true, // Enable React Compiler
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.quitpo.app' },
    ],
  },
  // Bundle analyzer
  ...(process.env.ANALYZE && {
    experimental: {
      bundlePagesRouterDependencies: true,
    },
  }),
}

export default config
```

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const RiveAnimation = dynamic(() => import('@/components/RiveAnimation'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-700 rounded-xl h-64" />,
})

const ChatInterface = dynamic(() => import('@/components/ChatInterface'), {
  ssr: false,
})
```

### 70. Accessibility Audit

```typescript
// packages/ui/src/accessibility.tsx
import { AccessibilityInfo, Platform } from 'react-native'

// Accessible button component
export function AccessibleButton({
  label,
  hint,
  onPress,
  disabled,
  children,
  ...props
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      {...props}
    >
      {children}
    </Pressable>
  )
}

// Screen reader announcements
export function announce(message: string) {
  AccessibilityInfo.announceForAccessibility(message)
}

// Check if screen reader is enabled
export async function isScreenReaderEnabled() {
  return AccessibilityInfo.isScreenReaderEnabled()
}
```

```typescript
// Accessibility checklist for components:
// 1. All interactive elements have accessibilityLabel
// 2. Images have alt text (accessible={true} accessibilityLabel="description")
// 3. Touch targets are at least 44x44 points
// 4. Color contrast ratio is at least 4.5:1
// 5. Focus order is logical
// 6. Animations can be disabled (useReducedMotion)
// 7. Text is scalable (use relative units)

import { useReducedMotion } from 'react-native-reanimated'

export function AnimatedComponent() {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <StaticComponent />
  }

  return <AnimatedVersion />
}
```

### 71. Security Audit

```typescript
// Security checklist implementation

// 1. API Authentication
// packages/api/src/middleware/auth.ts
import { TRPCError } from '@trpc/server'
import admin from 'firebase-admin'

export async function verifyFirebaseToken(token: string) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    return decodedToken
  } catch (error) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Invalid authentication token',
    })
  }
}

// 2. Rate limiting
// apps/web/middleware.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 requests per minute
  analytics: true,
})

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success, limit, remaining } = await ratelimit.limit(ip)

  if (!success) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
      },
    })
  }
}

// 3. Input validation (already using Zod)
// 4. SQL injection prevention (using Drizzle ORM with parameterized queries)
// 5. XSS prevention (React handles escaping by default)

// 6. Secure headers
// apps/web/next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
]

// 7. Environment variable validation
// packages/shared/src/env.ts
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  FIREBASE_PROJECT_ID: z.string(),
  OPENAI_API_KEY: z.string().startsWith('sk-'),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
})

export function validateEnv() {
  const result = envSchema.safeParse(process.env)
  if (!result.success) {
    console.error('Invalid environment variables:', result.error.issues)
    throw new Error('Invalid environment variables')
  }
  return result.data
}
```

### 72. App Store Submission (iOS)

```markdown
## iOS App Store Checklist

### App Store Connect Setup
1. Create App ID in Apple Developer Portal
2. Create app record in App Store Connect
3. Configure app information:
   - Name: QuitPo
   - Bundle ID: com.quitpo.app
   - SKU: quitpo-ios
   - Primary Language: English

### Required Assets
- [ ] App Icon: 1024x1024 PNG (no alpha, no rounded corners)
- [ ] Screenshots (6.5", 5.5" displays minimum)
  - [ ] Home/Dashboard screen
  - [ ] Panic Button screen
  - [ ] AI Chat screen
  - [ ] Community screen
  - [ ] Progress/Tree screen
- [ ] App Preview Videos (optional but recommended)

### App Information
- [ ] Privacy Policy URL
- [ ] Support URL
- [ ] Marketing URL
- [ ] Description (4000 chars max)
- [ ] Keywords (100 chars)
- [ ] What's New (for updates)

### Build Configuration
```bash
# apps/mobile/eas.json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "production": {
      "ios": {
        "resourceClass": "m-medium",
        "image": "latest"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your@email.com",
        "ascAppId": "1234567890",
        "appleTeamId": "XXXXXXXXXX"
      }
    }
  }
}
```

### Submission Commands
```bash
# Build for production
eas build --platform ios --profile production

# Submit to App Store
eas submit --platform ios --profile production
```

### Review Guidelines Compliance
- [ ] No placeholder content
- [ ] All features functional
- [ ] No crashes or bugs
- [ ] Content appropriate for ratings
- [ ] No hidden features
- [ ] Accurate screenshots
- [ ] Working sign-in (provide demo account)
```

### 73. Play Store Submission (Android)

```markdown
## Google Play Store Checklist

### Google Play Console Setup
1. Create new app in Google Play Console
2. Configure store listing:
   - App name: QuitPo
   - Package name: com.quitpo.app

### Required Assets
- [ ] App Icon: 512x512 PNG
- [ ] Feature Graphic: 1024x500
- [ ] Screenshots (minimum 2, up to 8)
  - [ ] Phone screenshots (16:9 or 9:16)
  - [ ] Tablet screenshots (optional)
- [ ] Short description (80 chars)
- [ ] Full description (4000 chars)

### Content Rating
- [ ] Complete IARC questionnaire
- [ ] Health & Fitness category

### App Signing
```bash
# Generate upload key
keytool -genkey -v -keystore quitpo-upload.keystore \
  -alias quitpo-upload \
  -keyalg RSA -keysize 2048 -validity 10000

# Configure in eas.json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle",
        "credentialsSource": "local"
      }
    }
  }
}
```

### Submission Commands
```bash
# Build AAB
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android --profile production
```

### Play Store Requirements
- [ ] Target API level 34 (Android 14)
- [ ] Privacy Policy
- [ ] Data Safety form completed
- [ ] Ads declaration (if applicable)
- [ ] App content declaration
```

### 74. Chrome Web Store Submission

```markdown
## Chrome Web Store Checklist

### Developer Account
1. Register as Chrome Web Store developer ($5 one-time fee)
2. Verify account

### Extension Package
```bash
# Build extension
cd apps/extension
pnpm build

# Create ZIP for upload
zip -r quitpo-extension.zip dist/
```

### Required Assets
- [ ] Icon: 128x128 PNG
- [ ] Screenshots: 1280x800 or 640x400 (1-5)
- [ ] Promotional images:
  - [ ] Small tile: 440x280
  - [ ] Large tile: 920x680 (optional)
  - [ ] Marquee: 1400x560 (optional)

### Store Listing
- [ ] Name: QuitPo - Content Blocker
- [ ] Summary (132 chars)
- [ ] Description (detailed)
- [ ] Category: Productivity
- [ ] Language: English

### Privacy Requirements
- [ ] Privacy Policy URL
- [ ] Permissions justification
- [ ] Data use disclosure
- [ ] Single purpose description

### manifest.json Checklist
```json
{
  "manifest_version": 3,
  "name": "QuitPo - Content Blocker",
  "version": "1.0.0",
  "description": "Block adult content and track your recovery journey",
  "permissions": ["storage", "tabs", "webRequest", "declarativeNetRequest"],
  "host_permissions": ["<all_urls>"],
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
```

### Submission
1. Go to Chrome Web Store Developer Dashboard
2. Click "New Item"
3. Upload ZIP file
4. Fill in store listing
5. Submit for review

### Review Timeline
- Initial review: 1-3 business days
- Updates: Usually faster
```

### Launch Checklist Summary

```markdown
## Pre-Launch Checklist

### Code Quality
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Linting clean
- [ ] Bundle size optimized
- [ ] No console.log statements
- [ ] Error tracking configured (Sentry)

### Infrastructure
- [ ] Database migrations applied
- [ ] Environment variables set
- [ ] SSL certificates configured
- [ ] CDN configured for assets
- [ ] Backup system in place

### Monitoring
- [ ] Error tracking (Sentry)
- [ ] Analytics (Mixpanel/PostHog)
- [ ] Uptime monitoring
- [ ] Performance monitoring

### Legal
- [ ] Privacy Policy published
- [ ] Terms of Service published
- [ ] GDPR compliance (if EU users)
- [ ] Age verification (13+ content)

### Marketing
- [ ] Landing page live
- [ ] Social media accounts created
- [ ] Press kit prepared
- [ ] Launch announcement ready

### Support
- [ ] Support email configured
- [ ] FAQ/Help documentation
- [ ] In-app feedback mechanism
```
