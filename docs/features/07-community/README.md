# Community

## Overview

The community feature creates a safe, anonymous space where users can share their experiences, seek support, and encourage others on similar recovery journeys. It includes an anonymous posting feed, community challenges, peer support comments, and optional accountability partnerships.

Community feeds are **filtered by addiction type** - users only see posts and challenges from their own recovery community. Users with multiple addictions can switch between communities.

## Addiction-Specific Content

| Addiction | Content File |
|-----------|--------------|
| Pornography | [porn.md](porn.md) |
| Gambling | [gambling.md](gambling.md) |
| Social Media | [social-media.md](social-media.md) |
| Gaming | [gaming.md](gaming.md) |

---

## Title
Anonymous Support Network with Challenges and Peer Accountability

## Problem Statement

Addiction thrives in isolation:

1. **Shame and Secrecy**: Users feel alone, believing no one else struggles with this issue.
2. **No Safe Space**: Most online forums are either too clinical or too triggering.
3. **Lack of Understanding**: Friends and family often don't understand the struggle.
4. **Accountability Gap**: Without others who know, there's no external accountability.
5. **Milestone Loneliness**: Hitting 30 days feels hollow when you can't share it with anyone.
6. **Relapse Isolation**: After a slip, users often spiral without support.

## Solution

### 1. Anonymous Feed
Reddit-style anonymous posts where users share:
- Recovery wins and struggles
- Questions and advice requests
- Motivational content
- Personal milestones

### 2. Community Challenges
Gamified group challenges specific to each addiction type:
- Streak challenges (7-day, 14-day, 30-day)
- Behavior modification challenges
- Engagement challenges

### 3. Support Interactions
- Upvote supportive posts
- Comment with encouragement
- Report inappropriate content
- Save helpful posts

### 4. Accountability Partners (Premium)
Optional 1:1 partnerships:
- Matched by streak length and addiction type
- Daily check-in reminders
- Anonymous messaging
- Mutual support

---

## Screen Content

### Community Feed

```
┌─────────────────────────────────────────────┐
│  Community                   🔍  [+ Post]   │
│                                             │
│  [All] [Wins] [Struggles] [Questions]       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Anonymous • 2h • Day 45             │   │
│  │                                     │   │
│  │ [Post content - varies by          │   │
│  │  addiction type]                    │   │
│  │                                     │   │
│  │ ▲ 127    💬 23    🔖               │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Anonymous • 5h • Day 12             │   │
│  │                                     │   │
│  │ [Struggle post example]             │   │
│  │                                     │   │
│  │ ▲ 45     💬 31    🔖               │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Create Post Modal

```
┌─────────────────────────────────────────────┐
│  New Post                        [Post]     │
│                                             │
│  Category:                                  │
│  ○ Win 🏆   ○ Struggle 💪   ○ Question ❓  │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │ What's on your mind?               │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Your post will be anonymous. Your          │
│  current streak (Day 15) will be shown.     │
│                                             │
│  ☐ Show my journey stage                    │
│  ☐ Allow comments                           │
│                                             │
│         [Post to Community]                 │
│                                             │
└─────────────────────────────────────────────┘
```

### Post Detail with Comments

```
┌─────────────────────────────────────────────┐
│  ← Back                         ⋮ (menu)    │
│                                             │
│  Anonymous • 5h • Day 12                    │
│                                             │
│  [Post content]                             │
│                                             │
│  ▲ 45     💬 31    🔖                       │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Comments (31)                              │
│                                             │
│  Anonymous • Day 67 • 4h                    │
│  [Helpful comment]                          │
│  ▲ 18                                       │
│                                             │
│  Anonymous • Day 8 • 3h                     │
│  [Supportive response]                      │
│  ▲ 12                                       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Add a comment...                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Challenges Tab

```
┌─────────────────────────────────────────────┐
│  Community           [Feed] [Challenges]    │
│                                             │
│  Active Challenges                          │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 🔥 [Challenge Name]                 │   │
│  │                                     │   │
│  │ [Challenge description specific     │   │
│  │  to addiction type]                 │   │
│  │                                     │   │
│  │ 234 participants  •  Ends in 5d    │   │
│  │                                     │   │
│  │ Your progress: Day 3 of 7 ███░░░░  │   │
│  │                                     │   │
│  │ [View Challenge]                    │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Post Categories

### Win Posts 🏆
Posts celebrating achievements:
- Streak milestones
- Overcoming difficult situations
- Personal growth observations
- Technique successes

### Struggle Posts 💪
Posts seeking or offering support during hard times:
- Urge reports
- Relapse processing
- Challenging circumstances
- Emotional difficulties

### Question Posts ❓
Posts asking for advice or information:
- "How do you handle X?"
- "Does anyone else experience Y?"
- Technique inquiries
- General questions

---

## Moderation System

### Automated Moderation
- Profanity filter
- Triggering content detection (addiction-specific)
- Link blocking (no external URLs)
- Spam detection (repeated posts)

### Community Guidelines (Universal)
1. Keep posts supportive and recovery-focused
2. No explicit descriptions of content or behavior
3. No sharing personal contact information
4. No promotion of other services
5. Be kind - everyone is struggling

See addiction-specific files for tailored moderation rules.

### Reporting Flow
```
User taps ⋮ menu on post
          ↓
Selects "Report"
          ↓
Chooses reason:
├── Inappropriate content
├── Spam
├── Harassment
├── Self-harm concern
└── Other
          ↓
Optional: Add details
          ↓
Report submitted
          ↓
Moderation queue review
          ↓
Action taken (remove, warn, ban)
```

### Moderation Actions
| Severity | Action | Appeal |
|----------|--------|--------|
| Low | Post removed, warning | Yes |
| Medium | Post removed, 24h mute | Yes |
| High | Post removed, 7d ban | Yes |
| Severe | Permanent ban | Admin only |

---

## Data Model

### Posts
```
community_posts {
  id: UUID
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  category: Enum (win, struggle, question)
  content: Text
  streak_at_post: Integer
  stage_at_post: String
  show_stage: Boolean
  allow_comments: Boolean
  upvotes: Integer
  comment_count: Integer
  created_at: DateTime
  is_reported: Boolean
  is_hidden: Boolean
}
```

Note: Community feeds are filtered by addiction_type. Users with multiple addictions see posts from all their addiction types.

### Comments
```
community_comments {
  id: UUID
  post_id: UUID
  user_id: UUID
  content: Text
  streak_at_comment: Integer
  upvotes: Integer
  created_at: DateTime
  is_reported: Boolean
  is_hidden: Boolean
}
```

### Challenges
```
challenges {
  id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  name: String
  description: Text
  type: Enum (streak, behavior, engagement)
  duration_days: Integer
  start_date: Date
  end_date: Date
  requirement: JSON
  is_premium: Boolean
  participant_count: Integer
  icon: String
}
```

Note: Challenges are addiction-specific. See addiction-specific files for challenge definitions.

### Challenge Participation
```
challenge_participants {
  id: UUID
  challenge_id: UUID
  user_id: UUID
  joined_at: DateTime
  current_progress: Integer
  completed: Boolean
  completed_at: DateTime
  dropped_out: Boolean
}
```

### User Votes
```
user_votes {
  id: UUID
  user_id: UUID
  voteable_type: Enum (post, comment)
  voteable_id: UUID
  vote: Integer (+1 only, upvotes)
  created_at: DateTime
}
```

---

## User Flows

### Creating a Post
```
User taps [+ Post] button
          ↓
Create post modal opens
          ↓
User selects category
          ↓
User writes content
          ↓
User configures options
          ↓
User taps "Post to Community"
          ↓
Post appears in feed
          ↓
User receives notification on engagement
```

### Joining a Challenge
```
User browses challenges tab
          ↓
User taps challenge card
          ↓
Challenge detail opens
          ↓
User reviews requirements
          ↓
User taps "Join Challenge"
          ↓
User added to participants
          ↓
Daily progress tracked
          ↓
Completion badge on finish
```

---

## Notification Content

### Post Engagement
- "Your post received 10 upvotes! Others found it helpful."
- "Someone commented on your post."

### Challenge Updates
- "Challenge starts tomorrow! Are you ready?"
- "You're on Day 4 of the challenge. Keep going!"
- "You completed the challenge! Achievement unlocked."

### Community Highlights
- "Popular post: '[Preview text]...'"
- "New challenge available!"

---

## Integration Points

### With Gamification
- Challenge completion grants achievements
- "Supporter" badge for helpful comments
- "Community Member" badge for first post

### With Streak System
- Posts display current streak
- Challenge progress tied to streak
- Relapse ends active challenge participation

### With Alex
- AI can suggest posting for support
- "Have you tried sharing this in the community?"

### With Analytics
- Community engagement tracked
- Correlation: community activity vs streak success

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create community_posts table with indexes on addiction_type
- Create community_comments table
- Create challenges table with seed data per addiction type
- Create challenge_participants table
- Create user_votes table
- Set up moderation queue table

### backend-agent Tasks
- GET /api/community/posts?addiction_type=X - Feed with pagination, filters
- POST /api/community/posts - Create post
- GET /api/community/posts/:id - Post detail with comments
- POST /api/community/posts/:id/comments - Add comment
- POST /api/community/posts/:id/vote - Upvote
- GET /api/community/challenges?addiction_type=X - Available challenges
- POST /api/community/challenges/:id/join - Join challenge
- POST /api/community/report - Report content

### ui-agent Tasks
- PostCard component
- PostDetail component with comments
- CommentCard component
- CreatePostModal component
- ChallengeCard component
- ChallengeDetail component
- FeedFilters component
- UpvoteButton component

### pages-agent Tasks
- Community feed page (with addiction type filter)
- Post detail page
- Challenges tab
- Challenge detail page
- Create post flow

---

## Success Metrics

**Engagement Metrics**
- Daily active community users per addiction type
- Posts per user per week
- Comments per post average
- Upvote rate

**Challenge Metrics**
- Challenge join rate
- Challenge completion rate
- Return challenge participants

**Support Metrics**
- Response time on struggle posts
- Helpful comment ratio
- Report rate (lower is better)

---

## Free vs Premium

### Free Tier
- Read all posts
- Create 3 posts per week
- Comment unlimited
- Join 1 challenge at a time
- Basic challenges only

### Premium Tier
- Unlimited posts
- Join unlimited challenges
- Premium-only challenges
- Accountability partner matching
- Challenge creation (future)

---

## Privacy & Safety

### Anonymity Guarantees
- No usernames displayed
- No profile pictures
- Only streak/stage shown
- No cross-referencing with other data

### Content Safety
- No external links allowed
- No image uploads
- No personal info requests
- Automated trigger word filtering (addiction-specific)

### Data Handling
- Posts not tied to identity in analytics
- Deletion removes all content
- Report data anonymized
