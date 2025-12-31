<p align="center">
  <img src="docs/design-system/logo-placeholder.svg" alt="QuitPo Logo" width="120" height="120" />
</p>

<h1 align="center">QuitPo</h1>

<p align="center">
  <strong>Your Recovery Journey Starts Here</strong>
</p>

<p align="center">
  A modern, AI-powered recovery app helping you break free from porn addiction.
  <br />
  Built with empathy, science, and cutting-edge technology.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#design-system">Design System</a> •
  <a href="#documentation">Documentation</a>
</p>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🚨 Panic Button
Instant support when urges hit. Camera overlay with motivational messages and haptic feedback to ground you in the moment.

### 🤖 AI Therapist
24/7 empathetic support powered by GPT-5 Mini. Talk through challenges, get personalized advice, and process emotions anytime.

### 🔥 Streak Tracking
Visual progress toward the 90-day brain rewiring goal. Daily check-ins, mood tracking, and milestone celebrations.

### 🌳 Life Tree
Watch your progress grow from a seed to nirvana. 8 beautiful stages of gamified achievement to keep you motivated.

</td>
<td width="50%">

### 👥 Community
Anonymous posting, supportive comments, and community challenges. You're never alone on this journey.

### 🛡️ Content Blocker
Cross-platform protection with 1M+ blocked sites, keyword filtering, and safe search enforcement.

### 📚 Education
Science-based learning modules explaining addiction, brain chemistry, and recovery strategies.

### 🧘 Mindfulness
Guided breathing exercises, meditation sessions, and calming soundscapes for difficult moments.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<table>
<tr>
<td><strong>Frontend</strong></td>
<td>

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-54-000020?style=flat-square&logo=expo&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</td>
</tr>
<tr>
<td><strong>Backend</strong></td>
<td>

![tRPC](https://img.shields.io/badge/tRPC-11-2596BE?style=flat-square&logo=trpc&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=flat-square&logo=drizzle&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)

</td>
</tr>
<tr>
<td><strong>AI & Auth</strong></td>
<td>

![OpenAI](https://img.shields.io/badge/GPT--5_Mini-412991?style=flat-square&logo=openai&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)

</td>
</tr>
<tr>
<td><strong>Tooling</strong></td>
<td>

![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=flat-square&logo=pnpm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)

</td>
</tr>
</table>

---

## 📁 Project Structure

```
quitpo/
├── 📱 apps/
│   ├── web/                    # Next.js 15 web app
│   ├── mobile/                 # Expo SDK 54 mobile app
│   └── extension/              # Chrome Extension (Manifest V3)
│
├── 📦 packages/
│   ├── ui/                     # Shared React components
│   ├── api/                    # tRPC routers & procedures
│   ├── db/                     # Drizzle ORM schemas
│   └── shared/                 # Types, utils, constants
│
├── 📚 docs/
│   ├── design-system/          # CI preview & design tokens
│   └── *.md                    # Implementation guides
│
└── 🐳 docker-compose.yml       # PostgreSQL + pgvector
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **pnpm** 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/quitpo.git
cd quitpo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all packages and apps |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format code with Prettier |

---

## 🎨 Design System

<table>
<tr>
<td align="center">
<img src="https://img.shields.io/badge/Primary-6366F1-6366F1?style=for-the-badge" alt="Primary Color" />
<br /><sub>Softer Indigo</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Secondary-0D9488-0D9488?style=for-the-badge" alt="Secondary Color" />
<br /><sub>Teal</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Accent-DDD6FE-DDD6FE?style=for-the-badge" alt="Accent Color" />
<br /><sub>Lavender</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Success-10B981-10B981?style=for-the-badge" alt="Success Color" />
<br /><sub>Emerald</sub>
</td>
</tr>
</table>

### Design Principles

- **Pill-shaped** buttons and inputs for a friendly, approachable feel
- **Borderless cards** with soft shadows for a clean, modern look
- **Galaxy dark mode** with subtle star animations for immersive night use
- **Space Grotesk** for headings, **Inter** for body text

> 📖 Preview the full design system by opening `docs/design-system/ci-preview.html`

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [CLAUDE.md](./CLAUDE.md) | Project context for AI assistants |
| [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Full 74-step implementation roadmap |
| [QUITTR_ANALYSIS.md](./QUITTR_ANALYSIS.md) | Competitor analysis & feature mapping |

---

## 🎯 Roadmap

- [x] Project setup & monorepo configuration
- [x] Design system & UI components
- [ ] Authentication (Firebase)
- [ ] Core features (streaks, check-ins, panic button)
- [ ] AI therapist integration
- [ ] Gamification (Life Tree)
- [ ] Community features
- [ ] Content blocker
- [ ] Mobile app (Expo)
- [ ] Chrome extension
- [ ] App store submissions

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<p align="center">
  <sub>Built with 💜 for those on their recovery journey</sub>
</p>
