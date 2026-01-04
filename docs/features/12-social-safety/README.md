# Social Media Safety Guides

## Overview

Since Alex Friend cannot directly filter content inside third-party social media apps, this feature provides comprehensive step-by-step guides for users to configure each platform's built-in safety settings. This empowers users to take control of their algorithm and reduce triggering content without needing to delete apps entirely.

Each addiction type has platform-specific configurations focused on their particular triggers.

## Addiction-Specific Content

| Addiction | Content File | Focus |
|-----------|--------------|-------|
| Pornography | [porn.md](porn.md) | NSFW content filtering, explicit media blocking |
| Gambling | [gambling.md](gambling.md) | Betting ads, sports content, gambling promotion |
| Social Media | [social-media.md](social-media.md) | Algorithm reset, time controls, infinite scroll |
| Gaming | [gaming.md](gaming.md) | Gaming content, gaming servers, streamer content |

---

## Title
Platform-Specific Safety Configuration Tutorials

## Problem Statement

Social media can be a major trigger source for all addictions:

1. **Algorithm Exploitation**: Platforms learn what engages users and serve progressively more stimulating content.
2. **Trigger Content**: Platforms surface content related to the user's addiction.
3. **DM Vulnerability**: Unsolicited messages and spam accounts.
4. **Unhelpful Defaults**: Many platforms default to showing triggering content.
5. **User Helplessness**: Users don't know platforms have safety settings.
6. **Complex Settings**: Each platform buries settings differently; users give up searching.

## Solution

### 1. Platform-Specific Guides
Step-by-step tutorials for:
- Instagram
- TikTok
- Twitter/X
- YouTube
- Snapchat
- Reddit
- Discord

### 2. Visual Instructions
- Annotated screenshots
- Step-by-step navigation
- Clear action items
- Progress tracking

### 3. Completion Checklists
- Track which settings configured
- Reminder for uncompleted platforms
- Periodic re-check prompts (platforms update)

### 4. Algorithm Reset Tips
- Beyond settings: behavioral changes
- "Not interested" training
- History clearing
- Account restart options

---

## Screen Content

### Social Media Safety Hub

```
┌─────────────────────────────────────────────┐
│  ← Settings    Social Media Safety          │
│                                             │
│  Social Media Safety Guides                 │
│                                             │
│  Configure your social apps to show         │
│  less triggering content.                   │
│                                             │
│  These guides walk you through each         │
│  platform's safety settings.                │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Instagram               [View Guide]│   │
│  │     ✓ Completed                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ TikTok                  [View Guide]│   │
│  │     ○ Not started                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Twitter/X               [View Guide]│   │
│  │     ◐ In progress                   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [More platforms...]                        │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Tip: Do all of these for best results     │
│                                             │
└─────────────────────────────────────────────┘
```

### Guide Step Screen

```
┌─────────────────────────────────────────────┐
│  ← Back    Platform Safety Guide       1/6  │
│                                             │
│  Step 1: [Step Title]                       │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │     [Annotated Screenshot]          │   │
│  │     showing the settings path       │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  1. [First instruction]                     │
│                                             │
│  2. [Second instruction]                    │
│                                             │
│  3. [Third instruction]                     │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Explanation of what this does]            │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│          [Next Step →]                      │
│                                             │
│          ● ○ ○ ○ ○ ○                        │
│                                             │
└─────────────────────────────────────────────┘
```

### Guide Completion Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│            ✅ [Platform] Setup              │
│               Complete!                     │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Settings configured:                       │
│                                             │
│  ☑ [Setting 1]                             │
│  ☑ [Setting 2]                             │
│  ☑ [Setting 3]                             │
│  ☑ [Setting 4]                             │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  Great job! Your [platform] is now safer.   │
│                                             │
│  Remember: It takes 1-2 weeks of            │
│  consistent signals for the algorithm       │
│  to fully adjust.                           │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  [Back to Guides]    [I'm Done]             │
│                                             │
└─────────────────────────────────────────────┘
```

---

## General Tips (All Platforms)

### The Nuclear Options
If a platform is too triggering:
1. **Delete the app entirely** - Most effective
2. **Web version only** - More friction to access
3. **Time restrictions** - Alex Friend Screen Time + platform limits
4. **Account reset** - Fresh account, clean algorithm

### Algorithm Training Timeline
- Most platforms need 1-2 weeks of consistent signals
- Don't give up after a few days
- Every interaction matters - even pausing counts

### The Scroll Trap
- Platforms are designed to be endless
- Set hard time limits
- Use Alex Friend's friction feature

### Late Night = High Risk
- Algorithms show more engaging content at night
- Platforms know you're more vulnerable
- Consider blocking access after 10 PM

---

## Data Model

### Guide Progress
```
social_safety_progress {
  user_id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  platform: String (instagram, tiktok, twitter, youtube, snapchat, reddit, discord)
  steps_completed: JSON Array (step numbers)
  started_at: DateTime
  completed_at: DateTime
  needs_recheck: Boolean
  last_recheck_prompt: DateTime
}
```

### Guide Content
```
social_safety_guides {
  id: UUID
  addiction_type: Enum (porn, gambling, social_media, gaming)
  platform: String
  version: Integer
  total_steps: Integer
  last_updated: DateTime
  content: JSON (steps array with titles, instructions, screenshots)
}
```

---

## User Flows

### Completing a Guide
```
User opens Social Media Safety hub
              ↓
Selects platform (e.g., Instagram)
              ↓
Guide opens at first incomplete step
(steps are addiction-type specific)
              ↓
User reads instructions
              ↓
User performs action in platform (leaves app)
              ↓
User returns, taps "Next Step"
              ↓
Progress saved
              ↓
Repeat until all steps complete
              ↓
Completion screen + checklist shown
```

### Re-check Prompt
```
30 days after completion
              ↓
Notification: "Platforms update. Re-check your [platform] settings?"
              ↓
User opens guide
              ↓
Quick checklist shown
              ↓
User confirms settings still correct
              ↓
Next recheck scheduled
```

---

## Integration Points

### With Friction Mode
- If platform friction high → prompt safety guide
- "Configure [platform]'s settings to see less triggering content"

### With Screen Time
- High usage in platform → suggest safety guide
- "You're spending a lot of time on [platform]. Want to make it safer?"

### With Alex
- AI can reference guides
- "Have you configured [platform]'s safety settings?"

### With Check-ins
- Social media trigger selected → prompt relevant guide

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create social_safety_progress table
- Create social_safety_guides table
- Seed guide content for all platforms per addiction type
- Set up recheck scheduling

### backend-agent Tasks
- GET /api/safety-guides?addiction_type=X - All guides with progress
- GET /api/safety-guides/:platform - Guide detail
- POST /api/safety-guides/:platform/step - Mark step complete
- POST /api/safety-guides/:platform/complete - Mark guide complete
- POST /api/safety-guides/:platform/recheck - Confirm recheck

### ui-agent Tasks
- SafetyGuideHub component
- GuideCard component (with status)
- GuideStepViewer component
- StepProgressIndicator component
- CompletionChecklist component

### pages-agent Tasks
- Safety guides hub page
- Individual guide viewer
- Completion flow
- Recheck flow

---

## Success Metrics

**Completion Metrics**
- Guide start rate
- Guide completion rate
- Steps completed per guide
- Platform coverage

**Outcome Metrics**
- Screen time change after guide completion
- Trigger reports involving platform
- Friction deflection rates for configured apps

---

## Content Updates

### Maintenance Requirements
- Platforms update UIs frequently
- Screenshot updates needed
- Setting names change
- New features require new steps

### Update Strategy
- Guide version tracking
- Push notifications for major updates
- "Guide may be outdated" warning after 6 months
- Community reporting of inaccuracies

---

## Accessibility

- Text descriptions for all screenshots
- Step-by-step text works without images
- High contrast mode
- VoiceOver compatible navigation
