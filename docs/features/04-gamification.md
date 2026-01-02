# Gamification System

## Title
Life Tree Progression & Achievement System

## Description
The gamification system transforms the recovery journey into a visual, rewarding experience through two interconnected mechanics: the Life Tree (a growing plant metaphor that evolves with the user's streak) and the Achievement System (badges and milestones that recognize specific accomplishments). These systems leverage psychological principles of variable rewards, visual progress, and accomplishment recognition to maintain long-term motivation.

## Problem Statement

Addiction recovery is inherently difficult to gamify because:

1. **Invisible Progress**: Unlike weight loss or fitness, there's no visible body transformation. Users can't "see" their brain healing.

2. **Delayed Gratification**: Benefits of quitting (better focus, relationships, energy) emerge slowly over weeks, not days.

3. **Motivation Decay**: Initial enthusiasm fades. Users need ongoing reasons to continue when urges feel stronger than distant goals.

4. **Fear of Trivialization**: Poorly implemented gamification can make serious recovery feel like a game, undermining the gravity of the struggle.

5. **One-Dimensional Tracking**: Just counting days doesn't capture the full picture of engagement, learning, and community participation.

## Solution

Alex Friend's gamification addresses these challenges through:

### 1. Life Tree Metaphor
A growing tree serves as a visual representation of brain rewiring:
- **Scientifically grounded**: Tree growth parallels neural pathway development
- **Emotionally resonant**: Nurturing something mirrors self-care
- **Visually satisfying**: Beautiful animations show tangible progress
- **Recovery-appropriate**: Growth metaphor, not competitive gaming

### 2. Achievement System
Badges recognize diverse accomplishments:
- **Streak milestones**: Days clean
- **Engagement milestones**: Check-ins, AI chats, breathing exercises
- **Community milestones**: Posts, comments, helping others
- **Learning milestones**: Completing education modules
- **Personal records**: Beating previous streaks

### 3. Progressive Stages
Clear stages provide stepping stones:
- Prevents "90 days" from feeling impossibly distant
- Each stage has unique visuals and descriptions
- Stages align with neurological recovery phases

## Screen Content

### Dashboard Life Tree Display

**Central Visualization**
The dashboard prominently features the Life Tree, which changes based on streak:

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Life Tree Animation Area]          │
│                                             │
│              "Sprout"                       │
│              12 days                        │
│                                             │
│  (Previous stage)          (Next stage)    │
│   [small dim icon]        [small preview]  │
│    "Seed"                   "Pioneer"      │
│                              5 days        │
│                                             │
└─────────────────────────────────────────────┘
```

**Tree Stage Preview**
- Shows small preview of previous and next stages
- Next stage shows days required
- Tapping opens full stage detail

### Life Tree Stages

**Stage 1: Seed (Day 0)**
- Visual: A seed in soil, perhaps with tiny crack showing
- Color palette: Browns, dark earth tones
- Message: "Every great tree begins as a seed. You've planted yours."
- Description: "The first few days are tough—but you're tougher. You're already proving your strength. Keep your reasons close."

**Stage 2: Sprout (Days 1-4)**
- Visual: Small green shoot emerging from soil
- Color palette: Pale greens, brown soil
- Message: "You're breaking through the surface."
- Description: "You're pushing through the initial resistance. The hardest part is starting—and you've done that."

**Stage 3: Pioneer (Days 5-6)**
- Visual: Small plant with first leaves
- Color palette: Fresh greens
- Message: "Your first leaves are unfurling."
- Description: "You've pushed through the initial resistance. Momentum is building, and the shift has begun. Keep going."

**Stage 4: Momentum (Days 7-13)**
- Visual: Established seedling with multiple leaves
- Color palette: Vibrant greens
- Message: "You're building unstoppable momentum."
- Description: "You've made it through the hardest part. Your foundation is stronger. Reflect on how far you've come."

**Stage 5: Fortress (Days 14-29)**
- Visual: Young tree with sturdy trunk forming
- Color palette: Deep greens, brown bark
- Message: "Your roots run deep now."
- Description: "You're building resilience. These early days are laying deep roots. Stay focused and committed."

**Stage 6: Flourishing (Days 30-44)**
- Visual: Full tree with branches spreading
- Color palette: Rich greens, hints of flowers
- Message: "You're flourishing beautifully."
- Description: "One month strong! Your growth is visible now. Others can see the change in you."

**Stage 7: Thriving (Days 45-59)**
- Visual: Mature tree with full canopy
- Color palette: Lush greens, abundant leaves
- Message: "You're thriving in your freedom."
- Description: "Your brain has significantly rewired. The urges are weaker; your resolve is stronger."

**Stage 8: Enlightened (Days 60-89)**
- Visual: Majestic tree with golden glow
- Color palette: Greens with golden highlights
- Message: "Enlightenment is within reach."
- Description: "You've achieved what most only dream of. 60+ days of freedom. The final stretch to full rewiring."

**Stage 9: Nirvana (Days 90+)**
- Visual: Transcendent tree with celestial effects
- Color palette: Ethereal glows, cosmic elements
- Message: "You've achieved Nirvana."
- Description: "90 days. Your brain has fully rewired. You're not the same person who started this journey. You're free."

### Achievements Screen

```
┌─────────────────────────────────────────────┐
│  ← Back         Achievements            ↻   │
│                                             │
│  Achievements              [=====-----] 45% │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [Unlocked icon]                 ①   │   │
│  │ Sprout                              │   │
│  │ 0 Days Clean                        │   │
│  │ "The first few days are tough—      │   │
│  │  but you're tougher."               │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [🔒 Locked icon]               ②   │   │
│  │ Pioneer                             │   │
│  │ 5 Days Clean                        │   │
│  │ "You've pushed through the initial  │   │
│  │  resistance. Momentum is building." │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [🔒 Locked icon]               ③   │   │
│  │ Momentum                            │   │
│  │ 7 Days Clean                        │   │
│  │ "You've made it through the         │   │
│  │  hardest part."                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [🔒 Locked icon]               ④   │   │
│  │ Fortress                            │   │
│  │ 10 Days Clean                       │   │
│  │ "You're building resilience."       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ... (scrollable list continues)            │
│                                             │
└─────────────────────────────────────────────┘
```

### Achievement Categories

**Streak Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| Sprout | 0 days (started) | 🌱 |
| Pioneer | 5 days | 🌿 |
| Momentum | 7 days | 🌳 |
| Fortress | 10 days | 🏰 |
| Flourishing | 14 days | 🌸 |
| Warrior | 21 days | ⚔️ |
| Month Master | 30 days | 📅 |
| Resilient | 45 days | 💪 |
| Diamond | 60 days | 💎 |
| Rewired | 90 days | 🧠 |
| Century | 100 days | 💯 |
| Half Year | 180 days | 🎖️ |
| Annualized | 365 days | 👑 |

**Engagement Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| First Check-in | Complete 1 daily check-in | ✅ |
| Consistent | 7 consecutive check-ins | 📊 |
| Dedicated | 30 consecutive check-ins | 🔥 |
| Self-Aware | 100 total check-ins | 🪞 |
| Breather | Complete 1 breathing exercise | 🌬️ |
| Mindful | Complete 10 breathing exercises | 🧘 |
| Zen Master | Complete 50 breathing exercises | ☯️ |
| First Chat | Have 1 AI conversation | 💬 |
| Supported | Have 10 AI conversations | 🤝 |

**Community Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| First Post | Create 1 community post | 📝 |
| Contributor | Create 10 posts | ✍️ |
| Helper | Receive 10 upvotes on posts | 🙌 |
| Supporter | Comment on 10 posts | 💭 |
| Challenger | Join 1 challenge | 🎯 |
| Champion | Complete 5 challenges | 🏆 |

**Learning Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| Student | Complete 1 education module | 📚 |
| Scholar | Complete all education modules | 🎓 |
| Quiz Ace | Score 100% on any quiz | 💯 |
| Knowledge Seeker | Read 50 articles | 📖 |

**Personal Record Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| New Record | Beat your previous longest streak | 🥇 |
| Comeback Kid | Reach 7 days after a relapse | 🔄 |
| Rising Phoenix | Reach 30 days after 3+ relapses | 🔥 |

### Achievement Unlock Animation

When user earns an achievement:
```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│          ✨ Achievement Unlocked! ✨         │
│                                             │
│              [Badge Animation]              │
│                  💎                         │
│                                             │
│               "Diamond"                     │
│             60 Days Clean                   │
│                                             │
│   "You've achieved what seemed impossible   │
│    when you started. 60 days of freedom."   │
│                                             │
│              [Share]  [Close]               │
│                                             │
└─────────────────────────────────────────────┘
```

### Profile Achievement Display

```
┌─────────────────────────────────────────────┐
│  Profile                                    │
│                                             │
│  [Avatar]  Username                         │
│            Member since Jan 2025            │
│                                             │
│  ───────────────────────────────────────    │
│                                             │
│  Recent Achievements                        │
│  [🌳] [💎] [✅] [📚] [🎯]                  │
│                                             │
│  [View All Achievements →]                  │
│                                             │
└─────────────────────────────────────────────┘
```

## Visual Design Guidelines

### Life Tree Animation Requirements

**Rive Animation Integration**
- Use Rive for smooth, interactive tree animations
- Support state machine for stage transitions
- Include idle animations (leaves rustling, subtle movement)
- Day/night variants based on time

**Stage Transitions**
- Smooth morph between stages
- Celebration particles when advancing
- Sound effect option (with toggle)
- Duration: 2-3 seconds

**Interactive Elements**
- Tap tree for stage info
- Hold for detailed description
- Swipe to preview adjacent stages

### Achievement Badge Design

**Unlocked State**
- Full color
- Subtle glow effect
- Animated on first view

**Locked State**
- Grayscale or silhouette
- Lock icon overlay
- Requirement text visible

**Progress Badges**
- Show progress bar for in-progress achievements
- Example: "7/10 check-ins complete"

## User Flows

### Stage Advancement
```
User reaches day threshold for new stage
              ↓
Stage-up animation plays
              ↓
Tree morphs to new stage
              ↓
Achievement popup shows
              ↓
Confetti/celebration effect
              ↓
Update dashboard with new stage
              ↓
Optional: Prompt to share
```

### Achievement Unlock
```
User completes qualifying action
              ↓
Achievement unlocked in background
              ↓
If app in foreground: Show popup immediately
If app in background: Show on next open
              ↓
Achievement marked as "new"
              ↓
Badge added to profile
              ↓
Optional notification sent
```

### Viewing Achievements
```
User taps achievements from profile
              ↓
Achievements screen opens
              ↓
Shows all achievements (locked/unlocked)
              ↓
Locked show requirements
              ↓
Tapping any shows full description
              ↓
"New" badges highlighted until viewed
```

## Data Model

### Life Tree Stages
```
life_tree_stages {
  id: Integer (1-9)
  name: String
  display_name: String
  days_required: Integer
  description: Text
  short_message: Text
  rive_state: String (animation state name)
  icon_url: String
  color_palette: JSON (primary, secondary, accent)
}
```

### User Life Tree State
```
user_life_tree {
  user_id: UUID
  current_stage_id: Integer
  stage_entered_at: DateTime
  total_stage_ups: Integer
  highest_stage_reached: Integer
}
```

### Achievements
```
achievements {
  id: UUID
  category: Enum (streak, engagement, community, learning, personal)
  name: String
  display_name: String
  description: Text
  requirement_type: Enum (days, count, consecutive, score)
  requirement_value: Integer
  icon: String
  rarity: Enum (common, uncommon, rare, epic, legendary)
  sort_order: Integer
}
```

### User Achievements
```
user_achievements {
  id: UUID
  user_id: UUID
  achievement_id: UUID
  unlocked_at: DateTime
  viewed: Boolean (false until user sees it)
  shared: Boolean
  progress: Integer (for in-progress tracking)
}
```

## Notification Content

### Stage Advancement
- "🌳 You've evolved! Your Life Tree is now [Stage Name]. Keep nurturing your growth!"

### Achievement Unlocked
- "🏆 Achievement Unlocked: [Achievement Name]! You earned it."

### Approaching Milestone
- "You're 1 day away from [Stage Name]! One more day and you level up."

### Achievement Progress
- "You're 8/10 check-ins to earning 'Dedicated'! Keep checking in."

## Integration Points

### With Streak System
- Stage directly tied to streak length
- Stage regresses on relapse (softly - one stage back max)
- Recovery shows as "healing" animation

### With Check-ins
- Check-ins contribute to engagement achievements
- Consecutive check-ins tracked for streaks

### With Community
- Community actions tracked for achievements
- Profile shows achievement badges
- Leaderboard shows top achievers

### With Alex
- Chat sessions count toward engagement
- AI references current stage/achievements

### With Education
- Module completion tracked
- Quiz scores contribute to achievements

## Agent Implementation Guide

### foundation-agent Tasks
- Create life_tree_stages seed data
- Create achievements table with all definitions
- Create user_life_tree table
- Create user_achievements table
- Set up triggers for achievement checking

### backend-agent Tasks
- GET /api/gamification/life-tree - Current stage and progress
- GET /api/gamification/achievements - All achievements with status
- POST /api/gamification/achievement/view - Mark as viewed
- Webhook: Achievement check after qualifying events
- Cron: Daily achievement scan for time-based achievements

### ui-agent Tasks
- LifeTree component with Rive integration
- StageDisplay component with previews
- AchievementCard component (locked/unlocked states)
- AchievementUnlock modal with animation
- AchievementsList scrollable component
- ProgressBadge component for in-progress

### pages-agent Tasks
- Dashboard Life Tree integration
- Profile achievements section
- Full achievements gallery page
- Stage detail modal
- Share achievement functionality

## Success Metrics

**Engagement Metrics**
- Time spent viewing Life Tree
- Achievement screen visits
- Share rate for achievements
- Stage preview interactions

**Motivation Metrics**
- Retention by stage reached
- Streak recovery rate after relapse
- Correlation: achievements vs long-term retention

**Completion Metrics**
- Achievement unlock rate by type
- Time to reach each stage
- 90-day completion rate by cohort

## Gamification Philosophy

### Do's
- Celebrate every positive action
- Make progress visible and beautiful
- Use growth metaphors, not competition
- Reward consistency over intensity
- Acknowledge difficulty of the journey

### Don'ts
- Don't create anxiety about "losing" progress
- Don't make gamification feel mandatory
- Don't trivialize the addiction struggle
- Don't create unhealthy competition
- Don't punish relapse beyond natural consequence

## Accessibility

- Tree stages have text descriptions
- Achievements announced via screen reader
- Color not sole indicator of state
- Animations have reduced motion mode
- All icons have alt text

## Privacy

- Achievement data synced for backup
- Sharing is always optional
- Community display of badges is configurable
- No public leaderboard without opt-in
