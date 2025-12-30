# Phase 1: Foundation

## Steps 1-10

### 1. Initialize Monorepo
```bash
mkdir quitpo && cd quitpo
pnpm init
pnpm add -D turbo
mkdir -p apps/{web,mobile,extension} packages/{ui,api,db,shared}
```

Create `pnpm-workspace.yaml`:
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Create `turbo.json`:
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**", ".next/**"] },
    "dev": { "cache": false, "persistent": true },
    "lint": { "dependsOn": ["^build"] },
    "type-check": { "dependsOn": ["^build"] }
  }
}
```

### 2. Docker Compose (PostgreSQL + pgvector)
```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: pgvector/pgvector:pg16
    environment:
      POSTGRES_USER: quitpo
      POSTGRES_PASSWORD: quitpo_dev
      POSTGRES_DB: quitpo
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 3. Next.js 16.1 Web App
```bash
cd apps/web
pnpm create next-app . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Update `next.config.ts`:
```typescript
import type { NextConfig } from 'next'

const config: NextConfig = {
  transpilePackages: ['@quitpo/ui', '@quitpo/api', '@quitpo/shared'],
  experimental: {
    reactCompiler: true,
  },
}

export default config
```

### 4. Expo SDK 54 Mobile App
```bash
cd apps/mobile
npx create-expo-app . --template expo-template-blank-typescript
npx expo install expo-router expo-linking expo-constants expo-status-bar
```

Update `app.config.ts`:
```typescript
import { ExpoConfig } from 'expo/config'

const config: ExpoConfig = {
  name: 'QuitPo',
  slug: 'quitpo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  scheme: 'quitpo',
  userInterfaceStyle: 'automatic',
  splash: { image: './assets/splash.png', resizeMode: 'contain' },
  ios: { supportsTablet: true, bundleIdentifier: 'com.quitpo.app' },
  android: { adaptiveIcon: { foregroundImage: './assets/adaptive-icon.png' }, package: 'com.quitpo.app' },
  plugins: ['expo-router', '@react-native-firebase/app', '@react-native-firebase/auth'],
  experiments: { typedRoutes: true },
}

export default config
```

### 5. Chrome Extension Scaffold
```bash
cd apps/extension
pnpm init
pnpm add -D vite @vitejs/plugin-react typescript
```

Create `manifest.json`:
```json
{
  "manifest_version": 3,
  "name": "QuitPo - Content Blocker",
  "version": "1.0.0",
  "description": "Block adult content and track your recovery",
  "permissions": ["storage", "tabs", "webRequest", "declarativeNetRequest"],
  "host_permissions": ["<all_urls>"],
  "background": { "service_worker": "src/background.js", "type": "module" },
  "action": { "default_popup": "popup.html", "default_icon": "icon.png" },
  "options_page": "options.html",
  "icons": { "16": "icon16.png", "48": "icon48.png", "128": "icon128.png" }
}
```

### 6. Shared Packages

**packages/shared/package.json:**
```json
{
  "name": "@quitpo/shared",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "dependencies": { "zod": "^3.24.0" }
}
```

**packages/ui/package.json:**
```json
{
  "name": "@quitpo/ui",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "dependencies": {
    "react": "^19.0.0",
    "react-native": "0.81.0",
    "nativewind": "^4.1.23"
  }
}
```

### 7. NativeWind 4.1.23
```bash
cd apps/mobile
pnpm add nativewind react-native-reanimated@~4.2.1 react-native-safe-area-context
pnpm add -D tailwindcss@^3.4.17
npx tailwindcss init
```

Update `tailwind.config.js`:
```javascript
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', '../../packages/ui/src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: { extend: {} },
  plugins: [],
}
```

### 8. Drizzle ORM 0.45.1

**packages/db/package.json:**
```json
{
  "name": "@quitpo/db",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "dependencies": {
    "drizzle-orm": "^0.45.1",
    "postgres": "^3.4.0",
    "pgvector": "^0.2.0"
  },
  "devDependencies": {
    "drizzle-kit": "^0.30.0"
  }
}
```

### 9. Firebase Project Setup
1. Go to console.firebase.google.com
2. Create project "QuitPo"
3. Enable Authentication
4. Enable Google + Apple providers
5. Add iOS app → download `GoogleService-Info.plist`
6. Add Android app → download `google-services.json`
7. Add Web app → copy config

```bash
cd apps/mobile
npx expo install @react-native-firebase/app @react-native-firebase/auth
npx expo prebuild
```

### 10. Base Database Schema
See `packages/db/src/schema.ts` in [03-core-features.md](./03-core-features.md)
