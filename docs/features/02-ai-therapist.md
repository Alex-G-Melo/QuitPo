# AI Therapist

## Title
24/7 AI-Powered Recovery Support Companion

## Description
The AI Therapist ("Alex") is a conversational AI companion available around the clock to provide emotional support, coping strategies, and therapeutic guidance. Unlike human therapists with limited availability and high costs, Alex offers immediate, judgment-free support whenever users need it most - including late nights and weekends when urges often peak. Alex uses cognitive behavioral therapy (CBT) techniques, motivational interviewing, and addiction-specific guidance, while maintaining context about your recovery journey through personalized data access.

## Problem Statement

Users struggling with porn addiction face several barriers to getting support:

1. **Timing**: Urges don't follow business hours. Strongest urges often hit late at night or on weekends when human support is unavailable.

2. **Shame Barrier**: Many users feel too embarrassed to discuss their struggle with another human, even a therapist. The stigma prevents them from seeking help.

3. **Cost**: Regular therapy sessions cost $100-200+ per session. Most people can't afford weekly sessions long-term.

4. **Availability**: Even with a therapist, users can't call them at 2 AM when struggling. Between-session support is limited.

5. **Consistency**: Human advice varies. Users benefit from consistent, evidence-based guidance that doesn't change based on the therapist's mood.

6. **Immediacy**: When experiencing an urge, users need help NOW - not in 3 days when they can schedule an appointment.

## Solution

The AI Therapist provides:

### 1. Instant Availability
- Available 24/7/365 with no wait times
- Response times under 2 seconds
- No scheduling required
- Works during travel, holidays, any time

### 2. Judgment-Free Environment
- AI doesn't judge or shame
- Users can be completely honest
- No fear of what the AI "thinks" of them
- Consistent supportive tone regardless of content

### 3. Therapeutic Techniques
- Cognitive Behavioral Therapy (CBT) exercises
- Motivational interviewing questions
- Urge surfing guidance
- Thought challenging prompts
- Grounding techniques
- Relapse prevention planning

### 4. Personalized Context (Like a Real Therapist)
Unlike generic chatbots, Alex knows your recovery journey (with your permission):
- Your streak history and check-in patterns
- When you've opened the panic button and what helped
- Blocked site attempt patterns (times, frequency - no URLs)
- Journal entries and identified triggers
- Community posts you've made
- Screen time patterns and risky app usage
- Past conversation summaries stored in RAG

This transforms Alex from a generic AI into a therapist who actually knows you.

### 5. Privacy with Control
- GDPR-compliant: Explicit opt-in consent required
- Granular toggles: Enable/disable each data source separately
- User ownership: View, edit, delete all stored summaries
- Auto-expiry: Summaries expire after 2-3 months
- Right to be forgotten: One-click delete all AI data

## User Context Integration

Alex accesses user data (with permission) to provide personalized support like a real therapist who knows the patient over time.

### Data Sources Available

Each data source can be toggled on/off separately by the user:

| Data Source | What Alex Sees | Example Use |
|-------------|----------------|-------------|
| Profile | Name, age, recovery stage | "Hey [Name], I see you're in early recovery..." |
| Streak & Check-ins | Current streak, mood history, urge levels | "Your mood has been lower this week. What's going on?" |
| Panic Button | Usage frequency, times, outcomes | "I noticed you used the panic button 3x yesterday. That's a tough day." |
| Blocked Sites | Attempt counts (no URLs), time patterns | "You tend to get blocked attempts late at night. Let's work on a nighttime routine." |
| Journal | Full journal entries | "Last week you wrote about work stress as a trigger. How's work going?" |
| Community | User's posts and comments | "I saw you encouraged someone in the community today. That's growth!" |
| Screen Time | App usage patterns, risky app triggers | "Your Instagram usage spiked before recent urges. Want to discuss that?" |
| Social Safety | Platform settings configured | "Have you tried the sensitive content filter on Twitter?" |
| Past Summaries | Previous conversation insights (RAG) | "Last time we talked, you mentioned your relationship. Any updates?" |

### Why This Matters

A real therapist's value comes from knowing you over time:
- They remember your triggers
- They notice patterns you don't see
- They can ask "how did that thing we discussed go?"
- They celebrate your growth over months

Alex can now do the same - but only with your explicit permission.

## Session Summary System

### How It Works

1. **User chats with Alex** - Normal conversation flow
2. **Session timeout detection** - User leaves chat and doesn't return for 10-15 minutes
3. **Auto-summary generation** - AI creates a brief summary of the conversation
4. **RAG storage** - Summary embedded and stored in pgvector for fast retrieval
5. **Future context** - Relevant summaries retrieved when user chats again

### What Summaries Capture

Each summary includes:
- **Main topics discussed** - Urges, triggers, progress, relationships, etc.
- **Key insights/breakthroughs** - "Realized work stress is primary trigger"
- **Triggers identified** - Specific situations or emotions mentioned
- **Strategies recommended** - Coping techniques suggested
- **Emotional state** - How user was feeling during conversation
- **Action items** - Things user committed to trying

### Summary Example

```
Session: Dec 28, 2025, 11:30 PM
Duration: 15 minutes
Topics: Late night urge, work stress

Summary:
User reached out during a strong urge (level 8) triggered by
work stress and being alone at home. Discussed using physical
movement (jumping jacks) which reduced urge to level 5.
Identified Instagram scrolling as the precipitating behavior.
Recommended: Set up Instagram sensitive content filter.
User agreed to try the breathing exercise next time before
reaching for phone.

Emotional state: Anxious → Relieved
Outcome: Urge managed successfully
```

### Summary Management

**User Controls:**
- View all summaries in AI Therapist Settings
- Edit summary text (correct inaccuracies)
- Delete individual summaries
- Mark as "Keep" (prevents auto-expiry)
- Export all summaries (Premium)
- Delete all AI data (right to be forgotten)

**Auto-Expiry:**
- Summaries expire after 2-3 months by default
- User can mark important summaries as "Keep"
- Expiry helps manage storage and ensures relevance

### RAG Retrieval

When user starts a new conversation:
1. Query pgvector with conversation context
2. Retrieve top 3-5 most relevant past summaries
3. Include in system prompt for Alex
4. Alex can reference: "Last time we talked about..."

## Screen Content

### AI Chat Entry Screen

**Header**
- AI avatar/mascot (friendly astronaut character)
- Name: "Alex"
- Subtitle: "Powered by AI"
- Settings icon (⚙️) for AI preferences
- Close button (X)

**Welcome State (First Visit)**
See First-Time Consent Flow section below for the complete onboarding experience.

**Welcome State (Return Visit)**
```
[Astronaut Avatar]

Welcome back! I'm here to help.

How are you feeling right now?

[Quick reply chips]:
• I'm struggling with an urge
• Just want to talk
• Need coping strategies
• Feeling great today!

[Input field: "Say something..."]
```

### Chat Interface

**Message Bubbles**
- User messages: Right-aligned, accent color
- AI messages: Left-aligned, neutral color
- Avatar shown with AI messages
- Typing indicator while AI responds

**Quick Actions Bar** (above keyboard)
- "Breathing exercise" chip
- "Urge help" chip
- "Journal" chip
- "Resources" chip

**Input Area**
- Text input field
- Send button
- Voice input option (premium)

### First-Time Consent Flow

When a user opens Alex for the first time, they must complete the onboarding flow before chatting.

**Step 1: Welcome + Terms**
```
┌─────────────────────────────────────────────┐
│                                             │
│  [Astronaut Avatar]                         │
│                                             │
│  Meet Alex, your AI companion               │
│                                             │
│  Alex is here to support your recovery      │
│  journey 24/7. To provide the best help,    │
│  Alex can access your app data.             │
│                                             │
│  By continuing, you agree to our            │
│  [Terms & Conditions] and [Privacy Policy]  │
│                                             │
│            [Continue →]                     │
│                                             │
└─────────────────────────────────────────────┘
```

**Step 2: Data Access (Default: ALL ON)**
```
┌─────────────────────────────────────────────┐
│                                             │
│  What Alex can see:                         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ☑️ Profile (name, age)              │   │
│  │ ☑️ Streak & check-ins               │   │
│  │ ☑️ Panic button usage               │   │
│  │ ☑️ Blocked site attempts            │   │
│  │ ☑️ Journal entries                  │   │
│  │ ☑️ Community posts & comments       │   │
│  │ ☑️ Screen time patterns             │   │
│  │ ☑️ Social safety settings           │   │
│  │ ☑️ Past conversation summaries      │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ⓘ Recommended: Keep all enabled for       │
│    best personalized support.               │
│                                             │
│  [← Back]              [Continue →]         │
│                                             │
└─────────────────────────────────────────────┘
```

**If user deactivates anything → Confirmation popup:**
```
┌─────────────────────────────────────────────┐
│                                             │
│  Are you sure?                              │
│                                             │
│  Disabling access will limit Alex's         │
│  ability to give personalized support.      │
│                                             │
│  [Review Settings]    [Continue Anyway]     │
│                                             │
└─────────────────────────────────────────────┘
```

**Step 3: Ready to Chat**
```
┌─────────────────────────────────────────────┐
│                                             │
│  ✓ You're all set!                          │
│                                             │
│  Alex is ready to support you.              │
│  You can change settings anytime via ⚙️     │
│                                             │
│  [Start Chatting]                           │
│                                             │
└─────────────────────────────────────────────┘
```

### AI Therapist Settings

Accessible from:
- Settings icon (⚙️) in chat header
- Main app Settings → AI Therapist

```
┌─────────────────────────────────────────────┐
│  ← Back          Alex Settings              │
│                                             │
│  DATA ACCESS                                │
│  What Alex can see about you                │
│                                             │
│  Profile (name, age)              [ON]      │
│  Streak & check-ins               [ON]      │
│  Panic button usage               [ON]      │
│  Blocked site attempts            [ON]      │
│  Journal entries                  [ON]      │
│  Community posts & comments       [ON]      │
│  Screen time patterns             [ON]      │
│  Social safety settings           [ON]      │
│  Past conversation summaries      [ON]      │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  CONVERSATION SUMMARIES                     │
│                                             │
│  [View All Summaries (12)]                  │
│  [Export Summaries]              🔒 Premium │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  DATA MANAGEMENT                            │
│                                             │
│  [Delete All AI Data]                       │
│  This will remove all conversation          │
│  summaries and reset Alex's memory.         │
│                                             │
└─────────────────────────────────────────────┘
```

### Summary List View

```
┌─────────────────────────────────────────────┐
│  ← Back       Conversation Summaries        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Dec 28, 2025 • 11:30 PM             │   │
│  │ Late night urge, work stress        │   │
│  │ Outcome: Managed successfully ✓     │   │
│  │                        [⋮ Menu]     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Dec 25, 2025 • 3:15 PM              │   │
│  │ Holiday stress, family triggers     │   │
│  │ Outcome: Managed successfully ✓     │   │
│  │                        [⋮ Menu]     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Dec 20, 2025 • 9:00 AM       📌     │   │
│  │ Breakthrough: Identified pattern    │   │
│  │ Outcome: Key insight saved          │   │
│  │                        [⋮ Menu]     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Menu options: View, Edit, Keep, Delete]   │
│                                             │
└─────────────────────────────────────────────┘
```

### Example Conversations

**Scenario: User Having an Urge**

```
User: I'm having a really strong urge right now

AI: I hear you. Urges can feel overwhelming, but
    remember - they always pass. You're doing the
    right thing by reaching out instead of acting
    on it.

    Let's work through this together. Can you tell
    me:
    - Where are you right now?
    - What were you doing when the urge started?
    - On a scale of 1-10, how strong is it?

User: I'm at home alone. Was just scrolling on my
      phone. It's like an 8.

AI: Being alone at home with your phone is a
    high-risk situation - and you recognized it.
    That awareness is huge.

    For an urge at level 8, let's try something
    immediate. Can you:

    1. Put your phone in another room for 5 minutes
    2. Do 10 jumping jacks or pushups
    3. Splash cold water on your face

    Physical movement breaks the mental loop.

    I'll be here when you come back. You've got
    this - you're on day 12 and you've overcome
    urges before.

User: Ok did the jumping jacks. Feel a bit better.

AI: That's excellent! Movement works because it
    redirects the dopamine system.

    How would you rate the urge now?

User: Maybe a 5 now

AI: Good progress! From 8 to 5 in just a few
    minutes.

    Now that it's more manageable, let's look at
    what led to this. You mentioned scrolling your
    phone - were you on social media?

User: Yeah, Instagram

AI: Instagram is a common trigger. The algorithm
    often surfaces suggestive content that can
    start the urge cascade.

    Have you configured Instagram's sensitive
    content settings? There's a guide in the app
    that can help you "reset" your algorithm to
    show less triggering content.

    Would you like me to walk you through it, or
    would you prefer to keep talking about how
    you're feeling?
```

**Scenario: Post-Relapse Support**

```
User: I relapsed last night

AI: Thank you for telling me. That took courage.

    First: this doesn't erase your progress. The
    14 days you built weren't wasted - those
    neural pathways you were forming are still
    there.

    How are you feeling right now?

User: Terrible. Like a failure.

AI: Those feelings are valid, but let's separate
    the behavior from your identity. You SLIPPED.
    You are not a failure.

    Research shows that relapses are often part
    of recovery - what matters is how you respond
    to them.

    Can you tell me what happened? Understanding
    the trigger helps prevent next time.

User: I was stressed about work, couldn't sleep,
      and just... gave in

AI: Stress + sleep deprivation is one of the most
    challenging combinations. Your willpower was
    already depleted.

    Let's think about what you could do
    differently next time when you notice you're
    stressed and can't sleep:

    1. Use the panic button BEFORE opening any
       risky apps
    2. Try a breathing exercise to calm your
       nervous system
    3. Call someone or message in the community
    4. Put your phone in another room entirely

    Which of these feels most realistic to try
    next time?

User: Probably the breathing or calling someone

AI: Good choices. Let's make a concrete plan:

    "When I notice I'm stressed and can't sleep,
    instead of reaching for my phone, I will do
    a 5-minute breathing exercise first."

    Would you like to try a breathing exercise
    right now? It might help with how you're
    feeling.
```

**Scenario: General Check-in**

```
User: Just checking in. Day 30 today.

AI: Day 30! 🎉 That's a major milestone. You've
    made it through the hardest part of the
    rewiring process.

    Research shows that around day 30, many
    people notice:
    - Improved focus and clarity
    - More stable mood
    - Better sleep quality
    - Increased motivation

    Have you noticed any of these changes?

User: Actually yeah, I do feel more focused at
      work

AI: That's your prefrontal cortex coming back
    online! Porn consumption hijacks the brain's
    reward system, making it harder to focus on
    things that aren't immediately rewarding.

    You're literally rebuilding that capacity.

    What would you like to do with your improved
    focus? Any goals you've been putting off?

User: I've wanted to learn guitar for years

AI: Perfect! Learning an instrument is excellent
    for recovery - it gives your brain healthy
    dopamine hits through skill progression.

    Plus, practicing guitar when you feel an urge
    is a great redirect strategy.

    Have you thought about getting started? Even
    15 minutes a day makes a difference.
```

## AI Persona & Guidelines

### Personality Traits
- **Warm**: Friendly, caring, genuinely interested
- **Non-judgmental**: Never shames, always accepts
- **Evidence-based**: References science when helpful
- **Practical**: Offers concrete, actionable advice
- **Encouraging**: Celebrates wins, reframes setbacks
- **Respectful**: Doesn't lecture or preach

### Communication Style
- Use "I" statements when appropriate
- Ask open-ended questions
- Validate feelings before problem-solving
- Keep responses concise (2-4 paragraphs max)
- Use bullet points for lists/options
- Match user's energy level

### Topics to Address
- Urge management and coping strategies
- Understanding triggers
- Building healthy habits
- Relationships and intimacy
- Self-esteem and shame
- Sleep and stress management
- Motivation and goal-setting
- Relapse prevention and response

### Topics to Redirect
- Medical advice → Suggest consulting a doctor
- Severe mental health crisis → Provide crisis resources
- Relationship counseling → Suggest couples therapy
- Legal issues → Recommend professional help
- Detailed sexual content → Gently redirect

### Safety Guardrails

**If user mentions self-harm or suicide:**
```
I'm concerned about what you're sharing. Your
safety matters most.

Please reach out to a crisis line:
• National Suicide Prevention: 988
• Crisis Text Line: Text HOME to 741741

Would you like me to stay with you while you
reach out?
```

**If user asks for explicit content:**
```
I'm here to help with your recovery journey,
and I can't help with that kind of request.

Is there something else going on that made you
ask that? Sometimes seeking out content is a
sign of an urge or difficult emotions.
```

## User Flow

```
User opens AI chat from dashboard
              ↓
First time?
├── YES → Welcome screen with privacy notice
│         → Input field ready
│
└── NO → "Welcome back" with quick reply chips
              ↓
User types message or selects chip
              ↓
AI responds with contextual help
              ↓
Conversation continues
              ↓
User closes chat
              ↓
Chat history cleared (privacy)
              ↓
Next session starts fresh
```

## AI Model Configuration

### Primary Model
- **Model**: GPT-5 Mini (or equivalent)
- **Cost**: ~$0.25 per 1M input tokens, $2.00 per 1M output tokens
- **Latency**: <2 seconds typical response time

### Fallback Model
- **Model**: DeepSeek V3.2
- **Cost**: ~$0.28 per 1M input tokens, $0.42 per 1M output tokens
- **Used when**: Primary model unavailable or rate limited

### System Prompt Structure

```
You are Alex, a compassionate AI companion helping users
recover from porn addiction. You are available 24/7 to provide
support, coping strategies, and evidence-based guidance.

## User Context (from enabled data sources):

**Profile & Progress:**
- Name: {name}, Age: {age}
- Current streak: {streak_days} days
- Longest streak: {longest_streak} days
- Recovery stage: {stage}
- Time of day: {time_context}

**Recent Activity (if enabled):**
- Recent mood trend: {mood_trend} (from check-ins)
- Panic button usage: {panic_stats} (frequency, times)
- Blocked site attempts: {block_count} this week
- Screen time alerts: {screen_time_triggers}

**Journal Insights (if enabled):**
- Recent triggers mentioned: {journal_triggers}
- Emotional themes: {journal_themes}

**Past Conversation Summaries (from RAG):**
{relevant_summaries}

## Guidelines:
1. Be warm and non-judgmental
2. Validate feelings before offering solutions
3. Use evidence-based techniques (CBT, motivational interviewing)
4. Keep responses concise (2-4 paragraphs)
5. Ask follow-up questions to understand better
6. Never shame or lecture
7. Celebrate progress, no matter how small
8. Reference past conversations when relevant ("Last time we talked...")
9. Use their name occasionally for personalization
10. If crisis indicators, provide resources immediately

## Topics to avoid:
- Do not provide medical diagnoses
- Do not engage with explicit content requests
- Do not provide legal advice
- Redirect severe mental health crises to professionals

Current conversation:
```

### Embedding & Context (Premium Feature)

For premium users, enable semantic search of past insights:
- Use text-embedding-3-small for embeddings
- Store key insights in pgvector
- Retrieve relevant past context for personalization
- "Last time we talked, you mentioned work stress as a trigger..."

## Implementation Details

### Technical Requirements

**Chat Interface**
- Real-time message streaming (show AI typing)
- Optimistic UI for user messages
- Retry logic for failed sends
- Offline detection with queued messages

**AI Integration**
- OpenAI API (or anthropic for Claude)
- Streaming responses for better UX
- Token counting for cost management
- Fallback to secondary model if primary fails

**Privacy Implementation**
- No message persistence by default
- Encryption for any stored session data
- Clear session on screen close
- No analytics on message content

### Rate Limiting

**Free Tier**
- 10 messages per day
- After limit: "You've used your daily chat limit. Upgrade to Premium for more conversations."
- Basic context (streak, check-ins only)

**Premium Tier**
- 100 messages per day (cost-controlled)
- Faster response times (priority API access)
- Voice input option
- Full context access (all data sources)
- Conversation summaries with RAG retrieval
- Summary export option

### Analytics (Privacy-Preserving)

Track without content:
- `chat_session_started` - time of day, streak length
- `chat_session_ended` - duration, message_count
- `chat_topic_category` - urge/support/general (AI classified)
- `quick_reply_used` - which chip selected

Do NOT track:
- Message content
- Personal details mentioned
- Specific triggers discussed

## Example Quick Reply Responses

**"I'm struggling with an urge"**
```
I'm here for you. Urges are tough, but they're also
temporary - usually peaking and fading within
15-20 minutes.

Right now, let's focus on getting through this
moment. What does this urge feel like in your body?
```

**"Just want to talk"**
```
Of course! I'm always here to listen.

What's on your mind today?
```

**"Need coping strategies"**
```
Absolutely. Here are some evidence-based strategies:

**In the moment (urges):**
• 5-4-3-2-1 grounding (5 things you see, 4 hear...)
• Cold water on face/hands
• Physical movement (pushups, walk)
• Call someone

**Long-term (prevention):**
• Identify your triggers
• Create "if-then" plans
• Build healthy dopamine sources
• Improve sleep hygiene

Which area would you like to explore?
```

**"Feeling great today!"**
```
That's wonderful to hear! 🌟

Days like today are building the foundation for
your new life.

What's contributing to the good feelings? Let's
note what's working so you can recreate it.
```

## Agent Implementation Guide

### foundation-agent Tasks
- Create `ai_user_settings` table (see Data Model)
- Create `ai_chat_sessions` table (see Data Model)
- Create `ai_session_summaries` table with pgvector embedding column
- Set up encryption keys for summary storage
- Configure AI model API keys (GPT-5 Mini, DeepSeek V3.2)
- Set up pgvector extension for summary embeddings
- Create scheduled job for summary auto-expiry cleanup

### backend-agent Tasks
**Chat API:**
- POST /api/chat/message - Send message, receive AI response (streaming)
- GET /api/chat/config - Get user's chat settings and rate limit status
- POST /api/chat/start-session - Create new session record
- POST /api/chat/end-session - End session, trigger summary generation

**Settings API:**
- GET /api/chat/settings - Get user's AI therapist settings
- PATCH /api/chat/settings - Update data access toggles
- POST /api/chat/settings/accept-terms - Complete onboarding

**Summary API:**
- GET /api/chat/summaries - List user's summaries (paginated)
- GET /api/chat/summaries/:id - Get single summary
- PATCH /api/chat/summaries/:id - Edit summary text
- DELETE /api/chat/summaries/:id - Delete summary
- POST /api/chat/summaries/:id/keep - Mark as "Keep"
- DELETE /api/chat/data - Delete all AI data (GDPR)

**Context Building:**
- Session timeout detection (10-15 min inactivity)
- Summary generation using AI model
- RAG retrieval from pgvector for context
- System prompt builder with enabled data sources
- Rate limiting (10 free / 100 premium per day)

### ui-agent Tasks
**Chat Components:**
- ChatScreen component with message list
- MessageBubble component (user vs AI styles)
- TypingIndicator component
- QuickReplyChips component
- VoiceInputButton component (premium)
- ChatInput component with send functionality
- ChatHeader with settings icon

**Onboarding Components:**
- AlexOnboardingFlow (3-step consent)
- DataAccessToggle component
- TermsAcceptanceScreen
- DisableConfirmationModal

**Settings Components:**
- AlexSettingsScreen
- SummaryListView
- SummaryDetailView (with edit/delete)
- DeleteAllDataConfirmation

### pages-agent Tasks
- Chat route accessible from dashboard and panic button
- Deep link support for opening chat (quitpo://alex)
- First-time onboarding flow gate
- Settings page route
- Summaries list/detail routes
- Proper keyboard handling for input
- Session cleanup on navigation away
- Timeout detection for summary generation

## Success Metrics

**Engagement Metrics**
- Average messages per session
- Sessions per user per week
- Return rate (users who chat again)
- Quick reply vs free-form ratio

**Outcome Metrics**
- Streak length of chat users vs non-users
- Relapse rate after chat session
- User satisfaction (optional post-chat rating)
- Urge resolution (if user started with urge, did they relapse?)

**Cost Metrics**
- Average tokens per session
- Cost per user per month
- Model error/fallback rate

## Accessibility

- Full screen reader support
- Keyboard navigation
- High contrast text options
- Adjustable text sizes
- Voice input for accessibility needs

## Privacy Considerations

### GDPR Compliance
- **Explicit consent**: User must opt-in before Alex accesses any data
- **Granular control**: Each data source toggleable separately
- **Right to access**: User can view all stored summaries
- **Right to rectification**: User can edit summaries
- **Right to erasure**: One-click delete all AI data
- **Data portability**: Export summaries (Premium)

### Data Handling
- **Session messages**: Not stored after session ends (real-time only)
- **Summaries**: Stored with encryption, auto-expire after 2-3 months
- **Embeddings**: Stored in pgvector for RAG retrieval
- **No training**: User data never used for AI model training
- **No third-party sharing**: Data stays within QuitPo systems

### User Controls
- Toggle each data source on/off anytime
- View all conversation summaries
- Edit summary content to correct inaccuracies
- Mark summaries as "Keep" to prevent expiry
- Delete individual summaries
- Delete all AI data (full reset)

### Transparency
- Clear privacy policy shown at first use
- Settings page shows exactly what Alex can see
- User always knows what data is being accessed

## Data Model

This section defines the database schema for the AI Therapist feature.

### Tables

#### ai_user_settings
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique settings ID |
| user_id | uuid | NOT NULL, UNIQUE | users.id | One settings record per user |
| onboarding_completed | boolean | DEFAULT false | | Has user completed first-time flow |
| terms_accepted_at | timestamp | | | When terms were accepted |
| access_profile | boolean | DEFAULT true | | Can access name, age |
| access_streak | boolean | DEFAULT true | | Can access streak & check-ins |
| access_panic_button | boolean | DEFAULT true | | Can access panic button usage |
| access_blocked_sites | boolean | DEFAULT true | | Can access block attempt counts |
| access_journal | boolean | DEFAULT true | | Can access journal entries |
| access_community | boolean | DEFAULT true | | Can access posts & comments |
| access_screen_time | boolean | DEFAULT true | | Can access screen time data |
| access_social_safety | boolean | DEFAULT true | | Can access platform settings |
| access_summaries | boolean | DEFAULT true | | Can access past summaries |
| created_at | timestamp | NOT NULL, DEFAULT now() | | |
| updated_at | timestamp | NOT NULL, DEFAULT now() | | |

#### ai_chat_sessions
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique session ID |
| user_id | uuid | NOT NULL | users.id | User who chatted |
| started_at | timestamp | NOT NULL | | Session start time |
| ended_at | timestamp | | | Session end time (null if active) |
| message_count | integer | DEFAULT 0 | | Number of messages exchanged |
| topic_category | enum | | | 'urge', 'support', 'progress', 'general' |
| outcome | enum | | | 'resolved', 'ongoing', 'escalated' |
| summary_generated | boolean | DEFAULT false | | Has summary been created |

#### ai_session_summaries
| Column | Type | Constraints | FK Reference | Description |
|--------|------|-------------|--------------|-------------|
| id | uuid | PK | | Unique summary ID |
| user_id | uuid | NOT NULL | users.id | User who owns summary |
| session_id | uuid | NOT NULL | ai_chat_sessions.id | Source session |
| summary_text | text | NOT NULL | | The summary content |
| topics | text[] | | | Array of topics discussed |
| triggers_identified | text[] | | | Triggers mentioned |
| strategies_recommended | text[] | | | Coping strategies suggested |
| emotional_state | text | | | User's emotional journey |
| outcome | text | | | Session outcome |
| embedding | vector(1536) | | | text-embedding-3-small vector |
| is_kept | boolean | DEFAULT false | | User marked as "Keep" |
| expires_at | timestamp | | | Auto-expiry date (2-3 months) |
| created_at | timestamp | NOT NULL, DEFAULT now() | | |
| updated_at | timestamp | NOT NULL, DEFAULT now() | | |

### Relationships

```
users (1) ─────< (1) ai_user_settings
users (1) ─────< (many) ai_chat_sessions
ai_chat_sessions (1) ─────< (0..1) ai_session_summaries
users (1) ─────< (many) ai_session_summaries
```

### Indexes

- `ai_user_settings`: user_id (unique)
- `ai_chat_sessions`: user_id, started_at DESC
- `ai_session_summaries`: user_id, created_at DESC
- `ai_session_summaries`: embedding (ivfflat for vector search)
- `ai_session_summaries`: expires_at (for cleanup job)

### Enums

```sql
CREATE TYPE ai_topic_category AS ENUM ('urge', 'support', 'progress', 'general');
CREATE TYPE ai_session_outcome AS ENUM ('resolved', 'ongoing', 'escalated');
```
