# Phase 6: Onboarding & Polish

## Objective

Complete the user experience with onboarding flow, splash screens, monetization (Stripe/RevenueCat), performance optimization, and app store preparation.

## Prerequisites

- Phases 1-5 completed
- All core features working
- Firebase, Stripe, and RevenueCat accounts configured

## Features in This Phase

| Feature | Doc Reference | Priority |
|---------|---------------|----------|
| Splash Screen | New | High |
| Onboarding Quiz | `/docs/features/13-onboarding/` | Critical |
| Monetization | `/docs/features/14-monetization/` | Critical |
| Performance | New | High |
| App Store Prep | New | Critical |

---

## Tasks

### 6.1 Splash Screen

**Agent**: ui-agent

| Task | Status | Files |
|------|--------|-------|
| Design splash screen | Not Started | Design assets |
| Create Rive animation | Not Started | `apps/mobile/assets/splash.riv` |
| Implement animated splash | Not Started | `apps/mobile/app/_layout.tsx` |
| Add loading states | Not Started | While auth initializes |

**Splash Flow:**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│           🌳                        │
│         Alex                        │
│        Friend                       │
│                                     │
│      Your recovery companion        │
│                                     │
│         ○ ○ ○ (loading)            │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Splash Screen Requirements:**
- Animate Life Tree growing (Rive)
- Fade in "Alex Friend" text
- Check auth state in background
- Transition to onboarding or home

---

### 6.2 Onboarding Quiz

**Agent**: pages-agent + backend-agent

| Task | Status | Files |
|------|--------|-------|
| Create onboarding flow | Not Started | `apps/mobile/app/onboarding/` |
| Build quiz components | Not Started | `packages/ui/src/onboarding/` |
| Create onboarding tRPC router | Not Started | `packages/api/routers/onboarding.ts` |
| Store user preferences | Not Started | `packages/db/schema/preferences.ts` |
| Add personalization logic | Not Started | Based on answers |

**Onboarding Flow:**
```
1. Welcome Screen
   "Welcome to Alex Friend"
   "Let's personalize your recovery journey"
   [Get Started]

2. Addiction Selection
   "What are you working on?"
   ○ Pornography
   ○ Gambling/Betting
   ○ Social Media/Phone
   ○ Gaming

3. Duration Question
   "How long have you been struggling?"
   ○ Less than 1 year
   ○ 1-3 years
   ○ 3-5 years
   ○ More than 5 years

4. Previous Attempts
   "Have you tried to quit before?"
   ○ This is my first try
   ○ A few times
   ○ Many times

5. Motivation (multiple choice)
   "What's driving your recovery?"
   ☐ Mental health
   ☐ Relationships
   ☐ Career/productivity
   ☐ Religious/spiritual
   ☐ Self-improvement

6. Daily Routine
   "When do you typically face urges?"
   ☐ Morning
   ☐ Afternoon
   ☐ Evening
   ☐ Late night
   ☐ When stressed
   ☐ When bored

7. Notification Preferences
   "How should Alex check in?"
   ○ Morning reminder
   ○ Evening reminder
   ○ Both
   ○ Let me choose later

8. Personalized Setup Complete
   "Your recovery plan is ready!"
   [Meet Alex →]
```

**Preferences Schema:**
```typescript
// packages/db/schema/preferences.ts
export const userPreferences = pgTable('user_preferences', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull().unique(),
  addictionType: varchar('addiction_type', { length: 50 }).notNull(),
  durationCategory: varchar('duration_category', { length: 50 }),
  previousAttempts: varchar('previous_attempts', { length: 50 }),
  motivations: json('motivations').$type<string[]>().default([]),
  urgeTimings: json('urge_timings').$type<string[]>().default([]),
  reminderPreference: varchar('reminder_preference', { length: 50 }),
  onboardingCompletedAt: timestamp('onboarding_completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

---

### 6.3 Monetization - Stripe (Web)

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Setup Stripe products | Not Started | Stripe Dashboard |
| Create checkout session | Not Started | `packages/api/routers/stripe.ts` |
| Implement webhook handler | Not Started | `apps/web/app/api/webhooks/stripe/` |
| Create pricing page | Not Started | `apps/web/app/pricing/` |
| Handle subscription status | Not Started | `packages/db/schema/subscriptions.ts` |

**Pricing Tiers:**
```typescript
// packages/shared/constants/pricing.ts
export const PRICING = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Basic streak tracking',
      'Daily check-ins',
      'Panic button',
      'Limited Alex chats (5/day)',
      'Community access (read-only)',
    ],
  },
  premium: {
    name: 'Premium',
    monthlyPrice: 9.99,
    yearlyPrice: 59.99, // 50% discount
    features: [
      'Unlimited Alex chats',
      'Full community access',
      'All education modules',
      'Content blocker extension',
      'Screen time insights',
      'Friction mode',
      'Priority support',
    ],
  },
};
```

**Stripe Webhook Handler:**
```typescript
// apps/web/app/api/webhooks/stripe/route.ts
export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  switch (event.type) {
    case 'checkout.session.completed':
      // Upgrade user to premium
      break;
    case 'customer.subscription.updated':
      // Update subscription status
      break;
    case 'customer.subscription.deleted':
      // Downgrade to free
      break;
  }

  return Response.json({ received: true });
}
```

---

### 6.4 Monetization - RevenueCat (Mobile)

**Agent**: backend-agent + foundation-agent

| Task | Status | Files |
|------|--------|-------|
| Setup RevenueCat project | Not Started | RevenueCat Dashboard |
| Install SDK | Not Started | `apps/mobile/` |
| Create paywall UI | Not Started | `packages/ui/src/paywall/` |
| Implement purchase flow | Not Started | `apps/mobile/lib/revenuecat.ts` |
| Sync with backend | Not Started | Webhooks |

**RevenueCat Setup:**
```typescript
// apps/mobile/lib/revenuecat.ts
import Purchases from 'react-native-purchases';

export async function initializePurchases(userId: string) {
  await Purchases.configure({
    apiKey: Platform.OS === 'ios'
      ? process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY
      : process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY,
    appUserID: userId,
  });
}

export async function purchasePremium() {
  const offerings = await Purchases.getOfferings();
  const premium = offerings.current?.availablePackages.find(
    p => p.identifier === 'premium_monthly'
  );

  if (premium) {
    const { customerInfo } = await Purchases.purchasePackage(premium);
    return customerInfo.entitlements.active['premium'] !== undefined;
  }
  return false;
}
```

---

### 6.5 Performance Optimization

**Agent**: All agents

| Task | Status | Files |
|------|--------|-------|
| Add React Query caching | Not Started | `packages/api/react.tsx` |
| Implement lazy loading | Not Started | Routes and components |
| Optimize images | Not Started | Next.js Image, Expo Image |
| Add skeleton loaders | Not Started | `packages/ui/src/skeleton.tsx` |
| Minimize bundle size | Not Started | Tree shaking, code splitting |
| Add offline support | Not Started | Service worker, AsyncStorage |

**Performance Targets:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- App size: < 50MB (mobile)

**Caching Strategy:**
```typescript
// packages/api/react.tsx
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
```

---

### 6.6 App Store Preparation

**Agent**: foundation-agent

| Task | Status | Files |
|------|--------|-------|
| Create app icons (all sizes) | Not Started | Design assets |
| Design screenshots | Not Started | For App Store/Play Store |
| Write app description | Not Started | ASO optimized |
| Configure app.json for production | Not Started | `apps/mobile/app.json` |
| Setup EAS Build profiles | Not Started | `apps/mobile/eas.json` |
| Create privacy policy | Not Started | Required for stores |
| Create terms of service | Not Started | Required for stores |
| Test on physical devices | Not Started | iOS TestFlight, Android Internal |

**App Store Metadata:**
```
Name: Alex Friend - Recovery Companion

Subtitle: Break free from addiction with AI support

Description:
Alex Friend is your personal AI-powered recovery companion,
designed to help you overcome behavioral addictions through
science-backed techniques, community support, and daily guidance.

Features:
• 24/7 AI companion for support and encouragement
• Streak tracking with 90-day rewiring goal
• Daily check-ins to monitor mood and progress
• Panic button for moments of weakness
• Anonymous community for peer support
• Educational content based on neuroscience
• Content blocking tools
• Life Tree gamification for motivation

Keywords: recovery, addiction, quit, porn, gambling, mental health,
          self-improvement, habit tracker, ai companion
```

**Screenshot Scenes:**
1. Dashboard with streak counter
2. Alex chat conversation
3. Life Tree at various stages
4. Community feed
5. Panic button in action
6. Education module
7. Check-in flow
8. Achievements unlocked

---

### 6.7 Analytics & Monitoring

**Agent**: backend-agent

| Task | Status | Files |
|------|--------|-------|
| Setup PostHog analytics | Not Started | `packages/shared/lib/analytics.ts` |
| Add event tracking | Not Started | Key user actions |
| Setup Sentry for errors | Not Started | `packages/shared/lib/sentry.ts` |
| Create monitoring dashboard | Not Started | Key metrics |

**Key Events to Track:**
```typescript
// packages/shared/lib/analytics.ts
export const ANALYTICS_EVENTS = {
  // Onboarding
  'onboarding_started': {},
  'onboarding_step_completed': { step: 'string' },
  'onboarding_completed': { duration_seconds: 'number' },

  // Core Loop
  'checkin_completed': { mood: 'number', urge: 'number' },
  'panic_button_pressed': {},
  'panic_button_outcome': { outcome: 'string' },
  'streak_milestone': { days: 'number' },
  'relapse_recorded': { previous_streak: 'number' },

  // Engagement
  'chat_message_sent': {},
  'lesson_completed': { lesson_id: 'string' },
  'achievement_unlocked': { achievement_id: 'string' },

  // Monetization
  'paywall_viewed': { source: 'string' },
  'subscription_started': { plan: 'string' },
  'subscription_cancelled': { reason: 'string' },
};
```

---

## Completion Checklist

Before launch, verify:

**Onboarding:**
- [ ] Splash screen animates correctly
- [ ] Onboarding quiz saves preferences
- [ ] Personalization affects app behavior
- [ ] Skip option works for returning users

**Monetization:**
- [ ] Stripe checkout works on web
- [ ] RevenueCat purchases work on iOS
- [ ] RevenueCat purchases work on Android
- [ ] Premium features gate correctly
- [ ] Subscription syncs across platforms
- [ ] Cancellation flow works

**Performance:**
- [ ] Lighthouse score > 90
- [ ] App loads in < 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] Offline mode works for basic features

**App Store:**
- [ ] App icons in all sizes
- [ ] Screenshots for all device sizes
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] TestFlight build approved
- [ ] Internal testing complete
- [ ] No crashes in Sentry

**Launch Readiness:**
- [ ] All phases complete
- [ ] QA testing passed
- [ ] Beta user feedback addressed
- [ ] Monitoring dashboards ready
- [ ] Support email configured
- [ ] Launch announcement prepared

---

## Post-Launch

After successful launch:

1. **Monitor metrics** - DAU, retention, conversion
2. **Respond to reviews** - App Store and Play Store
3. **Fix bugs quickly** - Prioritize by severity
4. **Plan v1.1** - Based on user feedback
5. **Expand addictions** - Gambling, social media, gaming

---

## Congratulations! 🎉

If you've completed all phases, Alex Friend is ready to help users on their recovery journey. The app is built to be:

- **Empathetic** - Non-judgmental AI companion
- **Science-backed** - Based on neuroscience research
- **Community-driven** - Anonymous peer support
- **Privacy-first** - No personally identifiable data shared
- **Scalable** - Multi-addiction architecture ready

Launch and iterate!
