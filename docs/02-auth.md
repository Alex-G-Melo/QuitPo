# Phase 2: Authentication & Onboarding

## Steps 11-17

### 11. Google Cloud OAuth Setup

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project "QuitPo"
3. APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID

**For iOS:**
- Application type: iOS
- Bundle ID: `com.quitpo.app`
- Download and save `iOSClientId`

**For Android:**
- Application type: Android
- Package name: `com.quitpo.app`
- SHA-1 fingerprint: Run `cd android && ./gradlew signingReport`

**For Web:**
- Application type: Web application
- Authorized redirect URIs: Add Firebase callback URL
- Save `webClientId`

### 12. Apple Sign in with Apple Setup

1. Go to [developer.apple.com](https://developer.apple.com)
2. Certificates, Identifiers & Profiles → Identifiers

**Create App ID:**
- Description: QuitPo
- Bundle ID: `com.quitpo.app`
- Capabilities: Check "Sign in with Apple"

**Create Service ID (for web):**
- Description: QuitPo Web
- Identifier: `com.quitpo.web`
- Enable "Sign in with Apple"
- Configure domains and return URLs

**Create Key:**
- Key Name: QuitPo Auth
- Enable "Sign in with Apple"
- Download `.p8` file (save securely!)

### 13. Firebase Auth (Email/Password)

**apps/mobile/lib/firebase.ts:**
```typescript
import auth from '@react-native-firebase/auth'

export async function signUpWithEmail(email: string, password: string) {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password)
    return userCredential.user
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password)
    return userCredential.user
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function signOut() {
  await auth().signOut()
}

export function onAuthStateChanged(callback: (user: any) => void) {
  return auth().onAuthStateChanged(callback)
}
```

**apps/web/lib/firebase.ts:**
```typescript
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export async function signUpWithEmail(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export async function signInWithEmail(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export async function signOut() {
  await firebaseSignOut(auth)
}
```

### 14. Google Sign-In

**Mobile (apps/mobile/lib/googleAuth.ts):**
```typescript
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
})

export async function signInWithGoogle() {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
  const { idToken } = await GoogleSignin.signIn()
  const googleCredential = auth.GoogleAuthProvider.credential(idToken)
  return auth().signInWithCredential(googleCredential)
}
```

**Web (apps/web/lib/googleAuth.ts):**
```typescript
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider)
  return result.user
}
```

### 15. Apple Sign-In

**Mobile (apps/mobile/lib/appleAuth.ts):**
```typescript
import auth from '@react-native-firebase/auth'
import { appleAuth } from '@invertase/react-native-apple-authentication'

export async function signInWithApple() {
  const appleAuthResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  })

  if (!appleAuthResponse.identityToken) {
    throw new Error('Apple Sign-In failed - no identity token')
  }

  const { identityToken, nonce } = appleAuthResponse
  const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce)
  return auth().signInWithCredential(appleCredential)
}
```

**Web (apps/web/lib/appleAuth.ts):**
```typescript
import { OAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'

const appleProvider = new OAuthProvider('apple.com')
appleProvider.addScope('email')
appleProvider.addScope('name')

export async function signInWithApple() {
  const result = await signInWithPopup(auth, appleProvider)
  return result.user
}
```

### 16. 12-Page Onboarding Quiz

**Quiz Flow Structure:**
```typescript
// packages/shared/src/onboarding.ts
export const onboardingQuestions = [
  { id: 1, question: "How long have you been struggling with this?", options: ["Less than 1 year", "1-3 years", "3-5 years", "5+ years"] },
  { id: 2, question: "How often do you currently view content?", options: ["Daily", "Several times a week", "Weekly", "Occasionally"] },
  { id: 3, question: "Have your viewing habits escalated over time?", options: ["Yes, significantly", "Somewhat", "Not really", "No"] },
  { id: 4, question: "Has this affected your relationships?", options: ["Yes, severely", "Somewhat", "A little", "Not at all"] },
  { id: 5, question: "Has this affected your work/studies?", options: ["Yes, severely", "Somewhat", "A little", "Not at all"] },
  { id: 6, question: "Have you tried to quit before?", options: ["Many times", "A few times", "Once or twice", "Never"] },
  { id: 7, question: "What's your longest streak without viewing?", options: ["Never tried", "Less than a week", "1-4 weeks", "More than a month"] },
  { id: 8, question: "What triggers your urges most?", options: ["Stress", "Boredom", "Loneliness", "Late night"] },
  { id: 9, question: "Do you experience guilt or shame after viewing?", options: ["Always", "Usually", "Sometimes", "Rarely"] },
  { id: 10, question: "What's your main motivation to quit?", options: ["Relationships", "Self-improvement", "Mental health", "Productivity"] },
  { id: 11, question: "Are you willing to commit to 90 days?", options: ["Absolutely", "I'll try", "Not sure", "That's too long"] },
  { id: 12, question: "Would you like community support?", options: ["Yes, definitely", "Maybe", "Prefer privacy", "Not interested"] },
]

export type QuizResponse = {
  questionId: number
  answer: string
  score: number
}
```

### 17. Dependency Score Calculation

```typescript
// packages/shared/src/scoring.ts
export function calculateDependencyScore(responses: QuizResponse[]): number {
  const weights: Record<number, number[]> = {
    1: [1, 2, 3, 4],      // Duration
    2: [4, 3, 2, 1],      // Frequency
    3: [4, 3, 2, 1],      // Escalation
    4: [4, 3, 2, 1],      // Relationship impact
    5: [4, 3, 2, 1],      // Work impact
    6: [4, 3, 2, 1],      // Failed attempts
    7: [4, 3, 2, 1],      // Longest streak (inverted)
    8: [3, 3, 3, 3],      // Triggers (all equal)
    9: [4, 3, 2, 1],      // Guilt level
    10: [3, 3, 3, 3],     // Motivation (all equal)
    11: [1, 2, 3, 4],     // Commitment (inverted for scoring)
    12: [1, 2, 3, 4],     // Community openness
  }

  let totalScore = 0
  let maxScore = 0

  for (const response of responses) {
    const questionWeights = weights[response.questionId]
    if (questionWeights) {
      totalScore += questionWeights[response.score - 1] || 0
      maxScore += 4
    }
  }

  // Return percentage (0-100)
  return Math.round((totalScore / maxScore) * 100)
}

export function getDependencyLevel(score: number): string {
  if (score >= 75) return 'severe'
  if (score >= 50) return 'moderate'
  if (score >= 25) return 'mild'
  return 'minimal'
}
```
