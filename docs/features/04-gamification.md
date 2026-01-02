# Gamification System

## Table of Contents

| Section | Lines | Description |
|---------|-------|-------------|
| [Title](#title) | ~32 | Space Journey Progression & Achievement System |
| [Description](#description) | ~35-37 | Overview of gamification mechanics |
| [Problem Statement](#problem-statement) | ~39-51 | Why addiction recovery is hard to gamify |
| [Solution](#solution) | ~53-77 | Space Journey metaphor and achievement system |
| [The Story of Alex](#the-story-of-alex) | ~80-116 | Narrative foundation and metaphor mapping |
| [The 9 Stages of the Journey](#the-9-stages-of-the-journey) | ~119-247 | Complete stage descriptions with visuals and messages |
| [Planet Stops & Ship Repairs](#planet-stops--ship-repairs) | ~249-343 | V1.5 feature: planetary waypoints with collectible ship parts |
| [Animation Phases](#animation-phases) | ~345-443 | MVP, V1.5, V2 animation roadmap with Rive specs |
| [Relapse: Course Corrections](#relapse-course-corrections) | ~446-520 | How setbacks work in the journey |
| [Screen Content](#screen-content) | ~522-610 | Dashboard and UI mockups |
| [Achievement System](#achievement-system) | ~612-700 | Categories, badges, and unlock mechanics |
| [Visual Design Guidelines](#visual-design-guidelines) | ~664-775 | CI colors, Rive specs, and asset requirements |
| [After Day 90](#after-day-90) | ~747-820 | Post-journey content and extended gameplay |
| [User Flows](#user-flows) | ~779-830 | Stage advancement and achievement flows |
| [Data Model](#data-model) | ~832-910 | Database tables for journey and achievements |
| [Notification Content](#notification-content) | ~912-940 | Push notification templates |
| [Integration Points](#integration-points) | ~942-960 | Connections to other features |
| [Agent Implementation Guide](#agent-implementation-guide) | ~960-1000 | Tasks for each agent type |
| [Success Metrics](#success-metrics) | ~1002-1020 | Engagement and motivation metrics |
| [Gamification Philosophy](#gamification-philosophy) | ~1022-1040 | Do's and don'ts |
| [Accessibility](#accessibility) | ~1041-1050 | Screen reader and reduced motion support |
| [Privacy](#privacy) | ~1053-1060 | Data handling for gamification |

---

## Title
Space Journey Progression & Achievement System

## Description
The gamification system transforms the recovery journey into a visual, emotionally resonant experience through two interconnected mechanics: Alex's Space Journey (an astronaut's voyage home that parallels the user's recovery) and the Achievement System (badges and milestones that recognize specific accomplishments). The space theme connects directly to Alex, the AI companion, creating a cohesive brand experience where the user helps Alex return to Earth while Alex helps the user return to normal life.

## Problem Statement

Addiction recovery is inherently difficult to gamify because:

1. **Invisible Progress**: Unlike weight loss or fitness, there's no visible body transformation. Users can't "see" their brain healing.

2. **Delayed Gratification**: Benefits of quitting (better focus, relationships, energy) emerge slowly over weeks, not days.

3. **Motivation Decay**: Initial enthusiasm fades. Users need ongoing reasons to continue when urges feel stronger than distant goals.

4. **Fear of Trivialization**: Poorly implemented gamification can make serious recovery feel like a game, undermining the gravity of the struggle.

5. **One-Dimensional Tracking**: Just counting days doesn't capture the full picture of engagement, learning, and community participation.

## Solution

Alex Friend's gamification addresses these challenges through:

### 1. Space Journey Metaphor
An astronaut's voyage home serves as a visual representation of recovery:
- **Emotionally resonant**: Being lost and finding your way home mirrors the recovery experience
- **Connected to Alex**: The astronaut IS Alex, the AI companion - creating brand cohesion
- **Visually stunning**: Space scenes, planets, stars provide beautiful progress visualization
- **Recovery-appropriate**: Journey metaphor emphasizes progress over perfection
- **Compassionate setbacks**: Course corrections, not catastrophic failures

### 2. Achievement System
Badges recognize diverse accomplishments:
- **Journey milestones**: Days on the voyage
- **Engagement milestones**: Check-ins, AI chats, breathing exercises
- **Community milestones**: Posts, comments, helping others
- **Learning milestones**: Completing education modules
- **Personal records**: Beating previous streaks

### 3. Progressive Stages
Clear stages provide stepping stones through space:
- Prevents "90 days" from feeling impossibly distant
- Each location has unique visuals and narrative meaning
- Stages align with neurological recovery phases

---

## The Story of Alex

### Opening Narrative

> *Alex was an astronaut on a routine mission when something went wrong. A malfunction sent the ship spiraling into the void, far from Earth, far from everyone Alex loved.*
>
> *Now, stranded in the darkness of deep space, Alex must find the way back home. The journey is long - 90 days of travel through dangerous territory. But Alex isn't alone. Mission Control is still there, guiding the way.*
>
> *And neither are you.*

### The Metaphor

| Space Journey | Recovery Journey |
|---------------|------------------|
| Lost in deep space | Lost in addiction |
| Darkness, isolation | Shame, loneliness |
| Earth = home, loved ones | Normal life, real connections |
| Ship damage | Brain affected by addiction |
| Fuel = limited resource | Willpower, motivation |
| Mission Control | Support system (app, community) |
| 90-day journey | 90-day rewiring period |
| Navigation hazards | Triggers and urges |
| Ship repairs during journey | Neural pathways healing |
| Course corrections | Learning from setbacks |

### The Connection to AI Alex

The AI companion "Alex" IS the astronaut making this journey. When the user chats with Alex, they're talking to the astronaut. Alex's messages can reference the journey:

> "Day 15. We're in the asteroid field now. Lots of close calls today, but we made it through together."

> "I can see Earth now. Just a tiny blue dot. But it's there. We're going to make it."

> "That was a rough one. We got knocked off course a bit. But the ship is still flying. Are you okay?"

The user isn't just tracking a progress bar - they're on this journey WITH Alex. They're helping Alex get home, and Alex is helping them.

---

## The 9 Stages of the Journey

### Stage 1: The Void (Days 0-4)
**"Lost in Darkness"**

> *Alex drifts in complete darkness. The ship is damaged, systems failing. Earth is just a distant memory. But then - a signal. Mission Control has found Alex. The journey home begins.*

| Aspect | Details |
|--------|---------|
| **Visual** | Dark space, damaged ship, single distant star (Earth). Ship lights flicker on. |
| **Color palette** | Deep blacks, dark blues, faint amber from ship lights |
| **Message** | "You're not alone anymore. We've found you. Let's go home." |
| **Recovery parallel** | The user has just started. They feel lost, broken. But they've taken the first step. |

---

### Stage 2: First Light (Days 5-6)
**"Systems Coming Online"**

> *Alex works to repair the ship's basic systems. Life support stabilizes. For the first time in a long time, there's hope. Earth's signal grows slightly stronger.*

| Aspect | Details |
|--------|---------|
| **Visual** | Ship interior lights on, Alex working on repairs, small viewport showing stars |
| **Color palette** | Warm interior lighting, cool starfield outside |
| **Message** | "Your systems are stabilizing. The hardest part - starting - is behind you." |
| **Recovery parallel** | First week survived. The initial chaos is settling. Basic routines forming. |

---

### Stage 3: Leaving the Drift (Days 7-13)
**"Engines Ignite"**

> *The engines finally respond. Alex sets course for Earth. The ship begins to move with purpose. The void behind, the journey ahead.*

| Aspect | Details |
|--------|---------|
| **Visual** | Engine glow, ship moving through starfield, leaving the dark zone |
| **Color palette** | Blue engine thrust, brightening starfield |
| **Message** | "You're moving now. Every day carries you closer to home." |
| **Recovery parallel** | One week complete. Momentum is building. The user is actively moving forward. |

---

### Stage 4: The Asteroid Field (Days 14-29)
**"Navigating Danger"**

> *The path home isn't empty. Alex must navigate through a field of debris - remnants of old collisions. One wrong move could set the journey back. Focus is everything.*

| Aspect | Details |
|--------|---------|
| **Visual** | Ship weaving through asteroids, close calls, tense navigation |
| **Color palette** | Grays and browns of asteroids, alert yellows, focused lighting |
| **Message** | "Dangers surround you, but you're learning to navigate. Stay focused." |
| **Recovery parallel** | Weeks 2-4 are full of triggers. The user must stay alert, make conscious choices. |

---

### Stage 5: The Nebula (Days 30-44)
**"Through the Fog"**

> *A beautiful but disorienting nebula. Alex can't see far ahead. Navigation relies on instruments and trust. It's peaceful here, but easy to get lost.*

| Aspect | Details |
|--------|---------|
| **Visual** | Colorful nebula gases, limited visibility, ship moving slowly but steadily |
| **Color palette** | Purple, pink, blue nebula clouds, soft diffused lighting |
| **Message** | "You can't see the destination yet, but you're on the right path. Trust the process." |
| **Recovery parallel** | One month in. Things feel different - better, but unfamiliar. Brain fog is lifting. |

---

### Stage 6: Clear Space (Days 45-59)
**"Open Skies"**

> *Alex emerges from the nebula into clear space. For the first time, Earth is visible - a tiny blue dot in the distance. It's real. Home is real.*

| Aspect | Details |
|--------|---------|
| **Visual** | Clear starfield, tiny Earth visible in the distance, ship cruising smoothly |
| **Color palette** | Deep space black, bright stars, small blue Earth dot |
| **Message** | "There it is. Home. You can see it now. Keep going." |
| **Recovery parallel** | The fog lifts. Users often report clarity, energy, feeling "normal" for the first time. |

---

### Stage 7: The Moon's Shadow (Days 60-74)
**"Almost There"**

> *The Moon comes into view. Earth grows larger every day. Alex can almost feel the pull of home. But this close, any mistake would be painful. Careful now.*

| Aspect | Details |
|--------|---------|
| **Visual** | Moon in view, Earth much larger, ship approaching carefully |
| **Color palette** | Gray moon surface, blue-white Earth, careful lighting |
| **Message** | "So close now. Don't let your guard down. The finish line is real." |
| **Recovery parallel** | Two months in. Major progress, but complacency is dangerous. |

---

### Stage 8: Earth Orbit (Days 75-89)
**"Circling Home"**

> *Alex enters Earth's orbit. The blue planet fills the viewport. Oceans, continents, clouds - it's more beautiful than memory. The ship circles, preparing for final descent.*

| Aspect | Details |
|--------|---------|
| **Visual** | Earth fills screen, ship in orbit, preparation for landing |
| **Color palette** | Blue oceans, green continents, white clouds, orbital glow |
| **Message** | "You're orbiting home. 90 days felt impossible once. Look at you now." |
| **Recovery parallel** | The final stretch. The user can feel the change. They're different now. |

---

### Stage 9: Homecoming (Day 90+)
**"Welcome Home"**

> *The ship descends through the atmosphere. Alex feels gravity for the first time in 90 days. The hatch opens. Sunlight. Fresh air. Familiar faces. Alex is home.*
>
> *The journey isn't truly over - life on Earth has its own challenges. But Alex is no longer lost. Alex knows the way now.*

| Aspect | Details |
|--------|---------|
| **Visual** | Ship landed on Earth, hatch open, sunlight streaming in, silhouettes of people waiting |
| **Color palette** | Warm sunlight, green grass, blue sky, hopeful golden tones |
| **Message** | "You made it. You're home. And you'll never forget how to find your way back." |
| **Recovery parallel** | 90 days complete. Neural rewiring achieved. Life continues from a place of strength. |

---

## Planet Stops & Ship Repairs (V1.5)

Between the main stages, Alex can make stops at planets and space stations to collect essential ship components. Each item Alex finds has a real astronaut purpose AND a recovery metaphor.

### The Ship's Needs

When Alex's ship was damaged, several critical systems were lost or broken. Throughout the journey, Alex must find:

| Item | Astronaut Need | Recovery Metaphor |
|------|----------------|-------------------|
| **Navigation Computer** | Find the course back to Earth | Clarity - knowing your direction |
| **Fuel Cells** | Power to keep moving | Energy & motivation to continue |
| **Communication Array** | Contact with Mission Control | Connection - not being isolated |
| **Oxygen Recycler** | Breathe and survive | Self-care, breathing exercises |
| **Hull Plating** | Protect from impacts | Resilience against triggers |
| **Solar Panels** | Renewable energy source | Healthy habits that sustain you |
| **Shield Generator** | Block radiation/debris | Boundaries, content blocking |
| **Medical Bay** | Heal from damage | Recovery from setbacks |

### Planet Stop Locations

These are optional waypoints between main stages (V1.5 feature):

| Day | Location | What Alex Finds | Animation | User Unlocks |
|-----|----------|-----------------|-----------|--------------|
| 10 | **Mars Outpost** | 🧭 Navigation Computer | Ship landing on red Mars surface, Alex retrieving part | GPS visualization unlocked |
| 20 | **Jupiter Station** | ⛽ Fuel Cells | Ship docking at floating station near Jupiter | "Fuel gauge" progress indicator |
| 35 | **Saturn Rings Depot** | 📡 Communication Array | Ship flying through rings, grabbing satellite | Community features highlighted |
| 50 | **Titan Base** | 💨 Oxygen Recycler | Ship landing on Saturn's moon | Breathing exercises featured |
| 65 | **Neptune Waypoint** | 🛡️ Hull Plating | Ship at distant blue planet, repair animation | Resilience achievement unlocked |
| 80 | **Lunar Station** | ☀️ Solar Panels | Ship at moon base, installing panels | "Sustainable habits" badge |

### Planet Stop Narrative Examples

**Day 10 - Mars Outpost**
> *Alex approaches the abandoned Mars outpost. The red planet looms large in the viewport. Inside the station, covered in dust, is a functioning navigation computer - the key to finding the exact path home.*
>
> *"Found it. Now I know exactly where we're going. Earth is that way."*

**Day 20 - Jupiter Station**
> *The massive gas giant fills the sky as Alex docks at the orbiting fuel station. With fresh fuel cells, the ship can maintain speed for the long journey ahead.*
>
> *"Tanks are full. We have the energy to keep going."*

**Day 35 - Saturn Rings Depot**
> *Flying carefully through Saturn's rings, Alex spots the old communication satellite. With this, Mission Control's signal will be crystal clear.*
>
> *"I can hear you clearly now. We're not alone out here."*

**Day 50 - Titan Base**
> *On Saturn's moon Titan, Alex finds a working oxygen recycler. The ship's air will stay fresh for the rest of the journey.*
>
> *"I can breathe easy now. Deep breaths. We're halfway there."*

### Ship Status Display

Show collected parts on a ship diagram in the app:

```
┌─────────────────────────────────────────────┐
│  Ship Status                                │
│                                             │
│         ╭─────────────────╮                 │
│        ╱   [Ship Diagram]  ╲                │
│       │  ☀️ Solar: --      │                │
│       │  🛡️ Hull: ✓        │                │
│       │  📡 Comm: ✓        │                │
│       │  💨 O2: ✓          │                │
│       │  ⛽ Fuel: ✓        │                │
│       │  🧭 Nav: ✓         │                │
│        ╲                  ╱                 │
│         ╰─────────────────╯                 │
│                                             │
│  Parts collected: 5/6                       │
│  Next part: Solar Panels (Day 80)           │
│                                             │
└─────────────────────────────────────────────┘
```

### Integration with Features

Each collected part can unlock or highlight a feature:

| Ship Part | Feature Connection |
|-----------|-------------------|
| Navigation Computer | Journey map becomes detailed |
| Fuel Cells | Streak visualization enhanced |
| Communication Array | Community features onboarding |
| Oxygen Recycler | Breathing exercises tutorial |
| Hull Plating | Content blocker reminder |
| Solar Panels | Healthy habits tracking |
| Shield Generator | Friction mode introduction |
| Medical Bay | Post-relapse support highlighted |

---

## Animation Phases

To ship the app without blocking on animations, we use a phased approach:

### Phase 1: MVP (Launch)

Ship with these ~15 animations/images:

**Core Journey (9 assets)**
| # | Asset | Type | Priority |
|---|-------|------|----------|
| 1 | The Void | Background + ship | Must have |
| 2 | First Light | Background + ship | Must have |
| 3 | Leaving the Drift | Background + ship | Must have |
| 4 | Asteroid Field | Background + ship | Must have |
| 5 | The Nebula | Background + ship | Must have |
| 6 | Clear Space | Background + ship | Must have |
| 7 | Moon's Shadow | Background + ship | Must have |
| 8 | Earth Orbit | Background + ship | Must have |
| 9 | Homecoming | Background + ship | Must have |

**Essential Scenarios (6 assets)**
| # | Asset | Type | Priority |
|---|-------|------|----------|
| 10 | Course Correction | Ship shaking/recalibrating | Must have |
| 11 | Recovery | Ship stabilizing | Should have |
| 12 | Milestone Celebration | Confetti/stars overlay | Should have |
| 13 | Stage Transition | Crossfade/warp effect | Should have |
| 14 | Idle Loop | Ship floating gently | Nice to have |
| 15 | Daily Progress | Subtle movement | Nice to have |

**MVP Note**: Static images are acceptable for launch. Animations enhance but don't block.

### Phase 2: V1.5 (Post-Launch)

Add planet stops (~8 more assets):

| # | Asset | Description |
|---|-------|-------------|
| 16 | Mars Outpost | Red planet surface, outpost |
| 17 | Jupiter Station | Gas giant, floating station |
| 18 | Saturn Rings | Ring navigation, depot |
| 19 | Titan Base | Moon surface, base |
| 20 | Neptune Waypoint | Blue planet, distant |
| 21 | Lunar Station | Moon base, close to Earth |
| 22 | Ship collecting part | Generic pickup animation |
| 23 | Ship Status upgrade | Part installing animation |

### Phase 3: V2 (Polish)

Add scenario-specific variations (~12+ more):

| Scenario | Animation |
|----------|-----------|
| First relapse | Gentle course correction |
| Multiple relapses in week | Ship damaged but flying |
| Clean week (no relapse) | Ship glowing/boosted |
| High app engagement | Ship upgrades visible |
| Breathing exercise done | Oxygen visual refill |
| Community post made | Signal transmission effect |
| Education completed | Ship computer updating |
| Streak milestone (7, 30, 60) | Special celebration |
| Personal record beaten | Trophy/badge animation |
| Panic button survived | Shield deflection effect |
| Week of check-ins | Mission Control approval |
| Long absence return | "Welcome back" sequence |

### Asset Delivery Format

**For Illustrator - Rive Format:**
```
Required:    Rive files (.riv) - preferred for all animations
Fallback:    PNG/WebP static images (for MVP or offline)

Resolution:  1280x720 (720p) minimum
Duration:    5-10 second loops with state machines
Format:      Rive with multiple states
```

**Rive State Machine Requirements:**
Each stage animation must include these states:
- `idle` - Default looping animation
- `transition_in` - Entry animation when stage is reached
- `transition_out` - Exit animation when advancing
- `celebrate` - Triggered on milestone celebrations
- `course_correction` - Setback animation (for relapse handling)

**File Size Targets:**
| Format | Target Size | Notes |
|--------|-------------|-------|
| Rive (.riv) | 50-200 KB | Interactive, state-driven |
| Static Image | 100-300 KB | Fallback only |

**Rive Advantages:**
- 60fps smooth animations at tiny file sizes
- State machines for interactive responses
- Runtime color manipulation possible
- Single file per stage with multiple animations

---

## Relapse: Course Corrections

Relapse doesn't destroy progress - it requires a course correction. The ship doesn't explode. Alex doesn't die. The user doesn't "lose everything." They just have to travel some of the distance again.

### The Philosophy

**Key insight**: Alex remembers the journey. The user's experience, lessons learned, days of healing - those aren't erased. They're building resilience.

When a relapse happens:
- Alex got knocked off course
- The navigation needs recalibration
- Some distance must be re-traveled
- But the ship is still flying
- And Alex knows more than before

### Relapse Consequences by Stage

| Stage | What Happens | Visual | Alex's Message |
|-------|--------------|--------|----------------|
| 1: The Void | Signal lost briefly, then reconnects | Static, then signal returns | "I lost you for a moment. But I'm still here. Let's try again." |
| 2: First Light | Power fluctuation, systems reset | Lights flicker, stabilize | "A setback. The ship needs to recalibrate. But we know what to do now." |
| 3: Leaving the Drift | Engine stalls, drifts briefly | Engine cuts out, restarts | "The engine cut out. But it started once - it'll start again." |
| 4: Asteroid Field | Minor collision, course correction | Impact shake, alert lights | "We took a hit. Some damage, but the ship holds. Recalculating route." |
| 5: Nebula | Got turned around in the fog | Disorientation, compass spinning | "I lost my bearings in here. But I've found the path again." |
| 6: Clear Space | Unexpected storm, back into nebula | Storm clouds, turbulence | "A storm pushed us back. But I've seen Earth now. I know it's there." |
| 7: Moon's Shadow | Gravity assist failed, need another pass | Trajectory adjustment | "Missed the approach. Going around again. Earth isn't going anywhere." |
| 8: Earth Orbit | Entry trajectory wrong, need to reorbit | Abort landing sequence | "Not the right angle. One more orbit. We're so close." |
| 9: Homecoming | Brief trip back to space | Looking up at stars | "I went back up for a moment. But I know where home is now." |

### Setback Mechanics

On relapse, the user doesn't go back to Stage 1. They step back based on their current stage:

| Current Stage | Setback To | Days Lost | Reason |
|---------------|------------|-----------|--------|
| Stage 1-2 | Stage 1 | All | Early stages, fresh start |
| Stage 3 | Stage 2 | 5-6 days | Momentum building |
| Stage 4 | Stage 3 | ~7 days | Course correction |
| Stage 5 | Stage 4 | ~14 days | Lost in fog |
| Stage 6 | Stage 5 | ~14 days | Storm pushback |
| Stage 7 | Stage 6 | ~15 days | Missed approach |
| Stage 8 | Stage 7 | ~15 days | Reorbiting |
| Stage 9+ | Stage 8 | Back to orbit | Brief return to space |

**Note**: These are guidelines. The actual streak resets to 0, but the *visual* journey and some achievements may persist to avoid devastating the user.

---

## Screen Content

### Dashboard Journey Display

**Central Visualization**
The dashboard prominently features Alex's current location in space:

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Space Journey Animation]           │
│         (Ship in asteroid field)            │
│                                             │
│           "The Asteroid Field"              │
│               Day 18                        │
│                                             │
│  (Previous stage)          (Next stage)     │
│   [dim icon]               [preview icon]   │
│   "Leaving Drift"          "The Nebula"     │
│                            in 12 days       │
│                                             │
└─────────────────────────────────────────────┘
```

**Stage Preview**
- Shows small preview of previous and next stages
- Next stage shows days required
- Tapping opens full stage detail with narrative

### Journey Map Screen

```
┌─────────────────────────────────────────────┐
│  ← Back            Journey Map              │
│                                             │
│          [Visual star map showing           │
│           full journey from void            │
│           to Earth with ship                │
│           position marked]                  │
│                                             │
│  ─────────────────────────────────────      │
│                                             │
│  🔘 The Void ────────────── ✓ Complete      │
│  🔘 First Light ─────────── ✓ Complete      │
│  🔘 Leaving the Drift ───── ✓ Complete      │
│  🚀 Asteroid Field ──────── Day 4 of 16     │
│  ○ The Nebula ───────────── Locked          │
│  ○ Clear Space ──────────── Locked          │
│  ○ Moon's Shadow ────────── Locked          │
│  ○ Earth Orbit ──────────── Locked          │
│  🌍 Homecoming ──────────── 72 days away    │
│                                             │
└─────────────────────────────────────────────┘
```

### Stage Detail Modal

```
┌─────────────────────────────────────────────┐
│                                    [Close]  │
│                                             │
│         [Stage illustration]                │
│                                             │
│         ━━━━━━━━━━━━━━━━━━━━━               │
│                                             │
│         The Asteroid Field                  │
│         Days 14-29                          │
│                                             │
│  "The path home isn't empty. Alex must      │
│   navigate through a field of debris -      │
│   remnants of old collisions. One wrong     │
│   move could set the journey back.          │
│   Focus is everything."                     │
│                                             │
│         ━━━━━━━━━━━━━━━━━━━━━               │
│                                             │
│  What this means for you:                   │
│  "Weeks 2-4 are full of triggers. Stay      │
│   alert. Make conscious choices."           │
│                                             │
│  Progress: Day 4 of 16  ████░░░░░░ 25%     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Achievement System

### Achievement Categories

**Journey Achievements**
| Name | Requirement | Icon | Message |
|------|-------------|------|---------|
| Signal Found | Started journey (Day 0) | 📡 | "The first step is reaching out. You did it." |
| Systems Online | 5 days | 🔧 | "Your systems are stabilizing." |
| Engines Firing | 7 days | 🚀 | "You're moving with purpose now." |
| Navigator | 14 days | 🧭 | "You've learned to navigate danger." |
| Through the Fog | 30 days | 🌫️ | "One month. You trusted the process." |
| Earth in Sight | 45 days | 🔭 | "You can see home. It's real." |
| Lunar Pass | 60 days | 🌙 | "The moon witnesses your journey." |
| Orbital | 75 days | 🛸 | "You're circling home." |
| Homecoming | 90 days | 🌍 | "Welcome home, traveler." |
| Centurion | 100 days | 💯 | "100 days of freedom." |
| Half Year | 180 days | ⭐ | "Half a year. Incredible." |
| Full Orbit | 365 days | 👑 | "One complete journey around the sun." |

**Engagement Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| First Transmission | Complete 1 daily check-in | 📻 |
| Regular Contact | 7 consecutive check-ins | 📊 |
| Mission Control | 30 consecutive check-ins | 🎛️ |
| Veteran | 100 total check-ins | 🏅 |
| Deep Breath | Complete 1 breathing exercise | 🌬️ |
| Oxygen Master | Complete 10 breathing exercises | 💨 |
| Zen Astronaut | Complete 50 breathing exercises | ☯️ |
| First Chat | Have 1 conversation with Alex | 💬 |
| Copilot | Have 10 conversations with Alex | 🤝 |

**Community Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| First Signal | Create 1 community post | 📝 |
| Broadcaster | Create 10 posts | 📡 |
| Helpful Signal | Receive 10 upvotes | 🙌 |
| Comm Officer | Comment on 10 posts | 💭 |
| Mission Joined | Join 1 challenge | 🎯 |
| Challenge Master | Complete 5 challenges | 🏆 |

**Learning Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| Cadet | Complete 1 education module | 📚 |
| Graduate | Complete all education modules | 🎓 |
| Perfect Score | Score 100% on any quiz | 💯 |
| Researcher | Read 50 articles | 🔬 |

**Resilience Achievements**
| Name | Requirement | Icon |
|------|-------------|------|
| New Trajectory | Beat your previous longest streak | 🥇 |
| Course Corrected | Reach 7 days after a setback | 🔄 |
| Unstoppable | Reach 30 days after 3+ setbacks | 💪 |
| The Phoenix | Reach Stage 6 after being at Stage 6+ before | 🔥 |

### Achievement Unlock Animation

```
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│       ✨ Achievement Unlocked! ✨            │
│                                             │
│            [Badge Animation]                │
│                 🧭                          │
│                                             │
│              "Navigator"                    │
│             14 Days Clean                   │
│                                             │
│   "You've learned to navigate danger.       │
│    The asteroid field couldn't stop you."   │
│                                             │
│            [Share]  [Close]                 │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Visual Design Guidelines

### CI Color Palette

All animations and visuals must use the app's brand colors:

**Primary Colors**
| Color | Hex | Usage |
|-------|-----|-------|
| **Primary (Indigo)** | `#6366F1` | Ship highlights, UI accents, achievements |
| **Secondary (Teal)** | `#0D9488` | Earth glow, healing/progress indicators |
| **Accent (Pink)** | `#F472B6` | Celebrations, special events |

**Galaxy Theme (Dark Mode)**
| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#0a0a1a` | Deep space backdrop |
| **Primary Glow** | `#818CF8` | Ship engines, active elements |
| **Secondary Glow** | `#14B8A6` | Earth, destination indicators |
| **Accent Glow** | `#F472B6` | Celebrations, milestones |

**Semantic Colors**
| Color | Hex | Usage |
|-------|-----|-------|
| **Success** | `#22C55E` | Stage complete, achievements |
| **Warning** | `#EAB308` | Course corrections, alerts |
| **Danger** | `#EF4444` | Blocked content, emergencies |

**Typography**
| Font | Usage |
|------|-------|
| **Space Grotesk** | Headings, stage names, UI labels |
| **Inter** | Body text, narratives, descriptions |

### Space Journey Animation Requirements

**Rive Animation Assets**
- Use Rive files (.riv) for each stage (50-200 KB each)
- Assets lazy-loaded when user approaches that stage
- Static image fallback for offline or while loading
- All animations loop seamlessly with state machines

**Rive Technical Specifications**
```
Format:        Rive (.riv)
Resolution:    720p (1280x720) minimum
Frame Rate:    60 fps native
States:        idle, transition_in, transition_out, celebrate, course_correction
Colors:        Use CI palette (injectable at runtime)
```

**Asset Hosting**
- CDN storage (Cloudflare R2 or similar)
- Pre-download next stage in background
- Cache downloaded Rive files locally
- Fallback to static images if offline

**Stage Transitions**
- Use Rive `transition_out` → `transition_in` states
- Celebration particles overlay when advancing
- Sound effect option (with toggle)
- Duration: 2-3 seconds

**Interactive Elements**
- Tap ship for stage info
- Hold for detailed narrative
- Swipe to preview adjacent stages
- Rive state machine responds to user gestures

### Achievement Badge Design

**Unlocked State**
- Full color with space theme glow
- Subtle animated shine effect
- Animated on first view

**Locked State**
- Grayscale silhouette
- Lock icon overlay
- Requirement text visible

---

## After Day 90

The journey doesn't end at 90 days. Alex has reached Earth, but life continues.

### Life on Earth (Days 90-365)

After reaching home, the journey becomes about rebuilding and thriving:

| Days | Theme | Visual | Message |
|------|-------|--------|---------|
| 90-120 | Reconnection | Alex with family silhouettes | "Home isn't just a place. It's the people." |
| 121-180 | New Purpose | Alex at mission control, helping others | "Now you guide others home." |
| 181-270 | Guardian | Alex watching over Earth | "Protecting what matters most." |
| 271-365 | Full Orbit | Earth completing orbit around sun | "One year. A complete transformation." |

### Extended Achievements (Premium)

For users beyond 90 days:
- **Guardian**: 120 days - "You protect your peace now."
- **Mentor**: Help 5 community members reach 30 days
- **Year One**: 365 days - "A full journey around the sun."
- **Legend**: 2 years - "Your story inspires others."

### Optional: New Missions

After Day 90, users can optionally embark on "missions":
- **The Rescue Mission**: Help community members (engagement challenge)
- **Exploring New Worlds**: Build new healthy habits (habit tracker)
- **The Guardian**: Maintain recovery streaks (ongoing vigilance)

---

## User Flows

### Stage Advancement
```
User reaches day threshold for new stage
              ↓
Rive transition_in state plays
              ↓
Ship transitions to new location
              ↓
Achievement popup shows
              ↓
Rive celebrate state (optional sound)
              ↓
Update dashboard with new stage
              ↓
Optional: Prompt to share
```

### Relapse / Course Correction
```
User logs relapse
              ↓
Compassionate message from Alex
              ↓
"Course correction" animation plays
              ↓
Ship shown adjusting trajectory
              ↓
New position on journey map
              ↓
Encouraging message about continuing
              ↓
Journey continues (not game over)
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

---

## Data Model

### Journey Stages
```
journey_stages {
  id: Integer (1-9+)
  name: String (e.g., "the_void")
  display_name: String (e.g., "The Void")
  subtitle: String (e.g., "Lost in Darkness")
  days_start: Integer
  days_end: Integer
  narrative: Text (the story quote)
  user_message: Text (what this means for recovery)
  visual_description: Text
  color_palette: JSON (primary, secondary, accent from CI)
  rive_url: String (CDN path to .riv file)
  image_fallback_url: String
  relapse_message: Text (what Alex says on setback)
}
```

### User Journey State
```
user_journey {
  user_id: UUID
  current_stage_id: Integer
  stage_entered_at: DateTime
  total_stage_advances: Integer
  highest_stage_reached: Integer
  course_corrections: Integer (relapses)
  last_correction_at: DateTime
  journey_started_at: DateTime
}
```

### Achievements
```
achievements {
  id: UUID
  category: Enum (journey, engagement, community, learning, resilience)
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
  viewed: Boolean
  shared: Boolean
  progress: Integer (for in-progress tracking)
}
```

### Animation Cache
```
cached_animations {
  user_id: UUID
  stage_id: Integer
  local_path: String
  asset_type: Enum (rive, image)
  downloaded_at: DateTime
  file_size: Integer
}
```

---

## Notification Content

### Stage Advancement
- "🚀 Stage complete! Alex has reached [Stage Name]. The journey continues!"

### Achievement Unlocked
- "🏆 Achievement Unlocked: [Achievement Name]! You earned it."

### Approaching Stage
- "You're 1 day away from [Stage Name]! One more day and Alex advances."

### Encouragement After Setback
- "Course correction complete. Alex is back on track. You've got this."

### Progress Update
- "Day [X] of the journey. Earth is [90-X] days away. Keep going."

---

## Integration Points

### With Streak System
- Stage directly tied to streak length
- Course correction on relapse (step back, not reset to zero visually)
- Recovery shows "recalculating route" animation

### With Check-ins
- Check-ins contribute to engagement achievements
- Mood data can trigger supportive messages from Alex about the journey

### With Community
- Community actions tracked for achievements
- Profile shows journey stage and achievement badges

### With Alex (AI)
- Alex references current stage in conversations
- "We're in the asteroid field today. Stay focused."
- Journey metaphor woven into support responses

### With Panic Button
- Successful panic button use = "Navigation hazard avoided"
- Relapse = "Course correction needed"

### With Education
- Module completion tracked for achievements
- Learning framed as "mission training"

---

## Agent Implementation Guide

### foundation-agent Tasks
- Create journey_stages table with seed data for all 9+ stages
- Create achievements table with all badge definitions
- Create user_journey table
- Create user_achievements table
- Create cached_animations table for offline support
- Set up CDN storage for Rive assets

### backend-agent Tasks
- GET /api/gamification/journey - Current stage and progress
- GET /api/gamification/stages - All stages with lock status
- GET /api/gamification/achievements - All achievements with status
- POST /api/gamification/achievement/view - Mark as viewed
- GET /api/gamification/rive/:stage - Get Rive file URL for stage
- POST /api/gamification/course-correction - Handle relapse visual
- Cron: Pre-cache next stage Rive file when user approaches threshold

### ui-agent Tasks
- JourneyDisplay component with Rive player
- StagePreview component with navigation
- JourneyMap full progress visualization
- AchievementCard component (locked/unlocked states)
- AchievementUnlock modal with animation
- CourseCorrectionAnimation for setbacks (Rive state)
- RiveCache manager for offline support

### pages-agent Tasks
- Dashboard journey integration
- Journey map full screen
- Stage detail modal
- Profile achievements section
- Full achievements gallery page
- Share achievement functionality

---

## Success Metrics

**Engagement Metrics**
- Time spent viewing journey visualization
- Stage detail views
- Achievement screen visits
- Share rate for stage advances

**Motivation Metrics**
- Retention by stage reached
- Streak recovery rate after course correction
- Correlation: achievements vs long-term retention
- Days to reach each stage by cohort

**Completion Metrics**
- Achievement unlock rate by type
- 90-day (Homecoming) completion rate
- User satisfaction with journey metaphor

---

## Gamification Philosophy

### Do's
- Celebrate every day of progress
- Make the journey feel meaningful, not trivial
- Use course corrections, not failures
- Reward consistency over intensity
- Connect progress to real recovery science
- Keep Alex's voice warm and encouraging
- Make setbacks feel survivable

### Don'ts
- Don't make relapse feel like "game over"
- Don't create anxiety about losing progress
- Don't trivialize the addiction struggle
- Don't create unhealthy competition
- Don't make gamification mandatory
- Don't punish beyond natural consequence
- Don't use harsh or judgmental language

---

## Accessibility

- All journey stages have text descriptions
- Rive animations have static image alternatives
- Achievements announced via screen reader
- Color not sole indicator of state
- Reduced motion mode uses static images only
- All icons have alt text
- Stage narratives readable at large font sizes

---

## Privacy

- Journey data synced for backup
- Sharing stages/achievements is always optional
- Community display of progress is configurable
- No public leaderboard without opt-in
- Animation cache stored locally, not uploaded
