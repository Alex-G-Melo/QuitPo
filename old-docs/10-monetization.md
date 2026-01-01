# Phase 10: Monetization

## Steps 63-68

### Database Schema

```typescript
// packages/db/src/schema.ts (additions)
export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').references(() => users.id).notNull().unique(),
  plan: text('plan').notNull(), // 'free' | 'monthly' | 'yearly' | 'lifetime'
  status: text('status').notNull(), // 'active' | 'canceled' | 'expired' | 'trial'
  provider: text('provider').notNull(), // 'stripe' | 'revenuecat'
  providerId: text('provider_id'), // Stripe subscription ID or RevenueCat ID
  currentPeriodStart: timestamp('current_period_start'),
  currentPeriodEnd: timestamp('current_period_end'),
  trialEndsAt: timestamp('trial_ends_at'),
  canceledAt: timestamp('canceled_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
```

### 63. RevenueCat (Mobile)

```typescript
// apps/mobile/lib/purchases.ts
import Purchases, { PurchasesPackage, CustomerInfo } from 'react-native-purchases'
import { Platform } from 'react-native'

const REVENUECAT_API_KEY_IOS = process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY!
const REVENUECAT_API_KEY_ANDROID = process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY!

export async function initializePurchases(userId: string) {
  const apiKey = Platform.OS === 'ios' ? REVENUECAT_API_KEY_IOS : REVENUECAT_API_KEY_ANDROID

  await Purchases.configure({
    apiKey,
    appUserID: userId,
  })
}

export async function getOfferings() {
  try {
    const offerings = await Purchases.getOfferings()
    return offerings.current?.availablePackages || []
  } catch (error) {
    console.error('Failed to get offerings:', error)
    return []
  }
}

export async function purchasePackage(pkg: PurchasesPackage) {
  try {
    const { customerInfo } = await Purchases.purchasePackage(pkg)
    return {
      success: true,
      customerInfo,
      isPremium: customerInfo.entitlements.active['premium'] !== undefined,
    }
  } catch (error: any) {
    if (error.userCancelled) {
      return { success: false, cancelled: true }
    }
    throw error
  }
}

export async function restorePurchases() {
  try {
    const customerInfo = await Purchases.restorePurchases()
    return {
      success: true,
      isPremium: customerInfo.entitlements.active['premium'] !== undefined,
    }
  } catch (error) {
    console.error('Failed to restore purchases:', error)
    return { success: false }
  }
}

export async function getCustomerInfo(): Promise<CustomerInfo | null> {
  try {
    return await Purchases.getCustomerInfo()
  } catch (error) {
    console.error('Failed to get customer info:', error)
    return null
  }
}

export async function checkPremiumStatus(): Promise<boolean> {
  const customerInfo = await getCustomerInfo()
  return customerInfo?.entitlements.active['premium'] !== undefined
}

// Sync RevenueCat status with backend
export async function syncSubscriptionStatus(userId: string) {
  const customerInfo = await getCustomerInfo()
  if (!customerInfo) return

  const isPremium = customerInfo.entitlements.active['premium'] !== undefined
  const entitlement = customerInfo.entitlements.active['premium']

  await fetch('/api/subscriptions/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId,
      provider: 'revenuecat',
      providerId: customerInfo.originalAppUserId,
      isPremium,
      expiresAt: entitlement?.expirationDate,
    }),
  })
}
```

### 64. Stripe (Web)

```typescript
// apps/web/lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

export const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_MONTHLY!,
  yearly: process.env.STRIPE_PRICE_YEARLY!,
  lifetime: process.env.STRIPE_PRICE_LIFETIME!,
}

export async function createCheckoutSession(
  userId: string,
  email: string,
  priceId: string,
  successUrl: string,
  cancelUrl: string
) {
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    client_reference_id: userId,
    line_items: [{ price: priceId, quantity: 1 }],
    mode: priceId === PRICE_IDS.lifetime ? 'payment' : 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    allow_promotion_codes: true,
    metadata: { userId },
  })

  return session
}

export async function createCustomerPortalSession(customerId: string, returnUrl: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })

  return session
}

export async function cancelSubscription(subscriptionId: string) {
  return stripe.subscriptions.cancel(subscriptionId)
}
```

```typescript
// apps/web/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession, PRICE_IDS } from '@/lib/stripe'
import { getServerSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const session = await getServerSession()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { plan } = await req.json()
  const priceId = PRICE_IDS[plan as keyof typeof PRICE_IDS]

  if (!priceId) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const checkoutSession = await createCheckoutSession(
    session.user.id,
    session.user.email!,
    priceId,
    `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
    `${process.env.NEXT_PUBLIC_URL}/pricing?canceled=true`
  )

  return NextResponse.json({ url: checkoutSession.url })
}
```

```typescript
// apps/web/app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { db } from '@quitpo/db'
import { subscriptions } from '@quitpo/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId || session.client_reference_id

      if (!userId) break

      const plan = session.mode === 'subscription' ? 'monthly' : 'lifetime'

      await db
        .insert(subscriptions)
        .values({
          userId,
          plan,
          status: 'active',
          provider: 'stripe',
          providerId: session.subscription as string || session.payment_intent as string,
          currentPeriodStart: new Date(),
          currentPeriodEnd: plan === 'lifetime'
            ? new Date('2099-12-31')
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        })
        .onConflictDoUpdate({
          target: subscriptions.userId,
          set: {
            plan,
            status: 'active',
            providerId: session.subscription as string,
            updatedAt: new Date(),
          },
        })
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata.userId

      if (!userId) break

      await db
        .update(subscriptions)
        .set({
          status: subscription.cancel_at_period_end ? 'canceled' : 'active',
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
          canceledAt: subscription.canceled_at
            ? new Date(subscription.canceled_at * 1000)
            : null,
          updatedAt: new Date(),
        })
        .where(eq(subscriptions.userId, userId))
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const userId = subscription.metadata.userId

      if (!userId) break

      await db
        .update(subscriptions)
        .set({
          status: 'expired',
          updatedAt: new Date(),
        })
        .where(eq(subscriptions.userId, userId))
      break
    }
  }

  return NextResponse.json({ received: true })
}
```

### 65. Free vs Premium Gates

```typescript
// packages/shared/src/features.ts
export const FEATURE_LIMITS = {
  free: {
    aiMessagesPerDay: 10,
    blockedSites: 3,
    blockedKeywords: 3,
    communityPosts: 5,
    journalEntries: 10,
    breathingExercises: true,
    meditationTimer: true,
    streakTracking: true,
    educationModules: 1, // First module only
    challenges: false,
    directMessages: false,
    advancedStats: false,
  },
  premium: {
    aiMessagesPerDay: 100,
    blockedSites: Infinity,
    blockedKeywords: Infinity,
    communityPosts: Infinity,
    journalEntries: Infinity,
    breathingExercises: true,
    meditationTimer: true,
    streakTracking: true,
    educationModules: Infinity,
    challenges: true,
    directMessages: true,
    advancedStats: true,
  },
}

export type FeatureKey = keyof typeof FEATURE_LIMITS.free
```

```typescript
// packages/api/src/middleware/premium.ts
import { TRPCError } from '@trpc/server'
import { db } from '@quitpo/db'
import { subscriptions } from '@quitpo/db/schema'
import { eq, and, gte } from 'drizzle-orm'
import { FEATURE_LIMITS, FeatureKey } from '@quitpo/shared'

export async function checkPremiumStatus(userId: string): Promise<boolean> {
  const sub = await db
    .select()
    .from(subscriptions)
    .where(and(
      eq(subscriptions.userId, userId),
      eq(subscriptions.status, 'active'),
      gte(subscriptions.currentPeriodEnd, new Date())
    ))
    .limit(1)

  return !!sub[0]
}

export async function getFeatureLimits(userId: string) {
  const isPremium = await checkPremiumStatus(userId)
  return isPremium ? FEATURE_LIMITS.premium : FEATURE_LIMITS.free
}

export async function checkFeatureAccess(
  userId: string,
  feature: FeatureKey
): Promise<{ allowed: boolean; limit?: number }> {
  const limits = await getFeatureLimits(userId)
  const limit = limits[feature]

  if (typeof limit === 'boolean') {
    return { allowed: limit }
  }

  return { allowed: limit > 0, limit }
}

export function requirePremium() {
  return async (opts: { ctx: { userId: string }; next: () => Promise<any> }) => {
    const isPremium = await checkPremiumStatus(opts.ctx.userId)

    if (!isPremium) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'This feature requires a premium subscription',
      })
    }

    return opts.next()
  }
}
```

### 66. Subscription UI

```typescript
// apps/web/app/(app)/settings/subscription/page.tsx
'use client'

import { useState } from 'react'
import { api } from '@/lib/api'

const PLANS = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    interval: '/month',
    features: ['Unlimited AI messages', 'Full content blocker', 'All education modules'],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$45',
    interval: '/year',
    savings: 'Save 62%',
    features: ['Everything in Monthly', '2 months free', 'Priority support'],
    popular: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$99',
    interval: 'one-time',
    features: ['Everything in Yearly', 'Pay once, own forever', 'All future features'],
  },
]

export default function SubscriptionPage() {
  const [loading, setLoading] = useState<string | null>(null)
  const { data: subscription } = api.subscription.getStatus.useQuery()

  const handleSubscribe = async (planId: string) => {
    setLoading(planId)
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId }),
      })
      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Checkout failed:', error)
    } finally {
      setLoading(null)
    }
  }

  const handleManageSubscription = async () => {
    const response = await fetch('/api/stripe/portal', { method: 'POST' })
    const { url } = await response.json()
    window.location.href = url
  }

  if (subscription?.status === 'active') {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Your Subscription</h1>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-purple-400 font-medium">Premium</span>
              <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Active
              </span>
            </div>
            <div className="text-gray-400">
              Renews: {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
            </div>
          </div>
          <button
            onClick={handleManageSubscription}
            className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600"
          >
            Manage Subscription
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">Upgrade to Premium</h1>
      <p className="text-gray-400 text-center mb-8">
        Unlock all features and accelerate your recovery
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`bg-gray-800 rounded-xl p-6 ${
              plan.popular ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-400">{plan.interval}</span>
            </div>
            {plan.savings && (
              <div className="text-green-400 text-sm mb-4">{plan.savings}</div>
            )}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSubscribe(plan.id)}
              disabled={loading !== null}
              className={`w-full py-3 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              } disabled:opacity-50`}
            >
              {loading === plan.id ? 'Loading...' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 67. Webhook Handlers

Already implemented above in `apps/web/app/api/webhooks/stripe/route.ts`.

RevenueCat webhook:

```typescript
// apps/web/app/api/webhooks/revenuecat/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@quitpo/db'
import { subscriptions } from '@quitpo/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.REVENUECAT_WEBHOOK_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const event = await req.json()

  const userId = event.app_user_id
  const eventType = event.type

  switch (eventType) {
    case 'INITIAL_PURCHASE':
    case 'RENEWAL':
      await db
        .insert(subscriptions)
        .values({
          userId,
          plan: event.product_id.includes('yearly') ? 'yearly' : 'monthly',
          status: 'active',
          provider: 'revenuecat',
          providerId: event.original_transaction_id,
          currentPeriodStart: new Date(event.purchased_at_ms),
          currentPeriodEnd: new Date(event.expiration_at_ms),
        })
        .onConflictDoUpdate({
          target: subscriptions.userId,
          set: {
            status: 'active',
            currentPeriodEnd: new Date(event.expiration_at_ms),
            updatedAt: new Date(),
          },
        })
      break

    case 'CANCELLATION':
      await db
        .update(subscriptions)
        .set({
          status: 'canceled',
          canceledAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(subscriptions.userId, userId))
      break

    case 'EXPIRATION':
      await db
        .update(subscriptions)
        .set({
          status: 'expired',
          updatedAt: new Date(),
        })
        .where(eq(subscriptions.userId, userId))
      break
  }

  return NextResponse.json({ received: true })
}
```

### 68. Trial Period

```typescript
// packages/api/src/routers/subscription.ts
import { z } from 'zod'
import { router, protectedProcedure } from '../trpc'
import { subscriptions } from '@quitpo/db'
import { eq, and, gte } from 'drizzle-orm'
import { addDays } from 'date-fns'

const TRIAL_DAYS = 3

export const subscriptionRouter = router({
  getStatus: protectedProcedure.query(async ({ ctx }) => {
    const sub = await ctx.db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, ctx.userId))
      .limit(1)

    if (!sub[0]) {
      return { status: 'free', isPremium: false }
    }

    const isActive = sub[0].status === 'active' &&
      sub[0].currentPeriodEnd &&
      sub[0].currentPeriodEnd > new Date()

    const isInTrial = sub[0].status === 'trial' &&
      sub[0].trialEndsAt &&
      sub[0].trialEndsAt > new Date()

    return {
      ...sub[0],
      isPremium: isActive || isInTrial,
      isInTrial,
      daysRemaining: isInTrial && sub[0].trialEndsAt
        ? Math.ceil((sub[0].trialEndsAt.getTime() - Date.now()) / (24 * 60 * 60 * 1000))
        : null,
    }
  }),

  startTrial: protectedProcedure.mutation(async ({ ctx }) => {
    // Check if user has already used trial
    const existing = await ctx.db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, ctx.userId))
      .limit(1)

    if (existing[0]) {
      throw new Error('Trial already used')
    }

    const trialEndsAt = addDays(new Date(), TRIAL_DAYS)

    const [sub] = await ctx.db
      .insert(subscriptions)
      .values({
        userId: ctx.userId,
        plan: 'trial',
        status: 'trial',
        provider: 'trial',
        trialEndsAt,
        currentPeriodEnd: trialEndsAt,
      })
      .returning()

    return sub
  }),

  checkTrialEligibility: protectedProcedure.query(async ({ ctx }) => {
    const existing = await ctx.db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, ctx.userId))
      .limit(1)

    return { eligible: !existing[0] }
  }),
})
```

```typescript
// apps/mobile/components/TrialBanner.tsx
import { View, Text, Pressable } from 'react-native'
import { api } from '@/lib/api'

export function TrialBanner() {
  const { data: subscription } = api.subscription.getStatus.useQuery()
  const { data: eligibility } = api.subscription.checkTrialEligibility.useQuery()
  const startTrialMutation = api.subscription.startTrial.useMutation()

  if (subscription?.isPremium) return null
  if (!eligibility?.eligible) return null

  const handleStartTrial = async () => {
    await startTrialMutation.mutateAsync()
  }

  return (
    <View className="bg-gradient-to-r from-purple-600 to-indigo-600 mx-4 rounded-xl p-4 mb-4">
      <Text className="text-white text-lg font-bold mb-1">
        Try Premium Free for 3 Days
      </Text>
      <Text className="text-white/80 mb-3">
        Unlock all features with no commitment
      </Text>
      <Pressable
        onPress={handleStartTrial}
        disabled={startTrialMutation.isPending}
        className="bg-white rounded-lg py-3"
      >
        <Text className="text-purple-600 text-center font-medium">
          {startTrialMutation.isPending ? 'Starting...' : 'Start Free Trial'}
        </Text>
      </Pressable>
    </View>
  )
}
```
