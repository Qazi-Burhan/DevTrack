<div align="center">

# 🚀 DevTrack

### A premium, dark-first developer project & task management dashboard

Built with **React 18**, **Vite**, and a fully custom design system — no UI libraries, no shortcuts.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white&style=flat-square)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)]()

</div>

---

## 📖 Overview

**DevTrack** is a SaaS-style productivity dashboard for developers to track projects and tasks — dashboard analytics, a project catalog, a kanban task board, and user settings, all wrapped in a polished, glassmorphic dark UI.

> This is a portfolio/demo project. All data is seeded locally and persisted only in the browser via `localStorage` — there is no backend.

---

## ✨ Features

| Module | What it does |
|---|---|
| **Dashboard** | Personalized welcome header, KPI stat cards, project progress overview, recent projects & tasks, live activity feed |
| **Projects** | Grid/list toggle, live search, status filtering, tech-stack tags, progress bars, priority badges |
| **Project Details** | Full project hero, task breakdown, visual timeline, recent activity |
| **Tasks** | Kanban board (`To Do` → `In Progress` → `Completed`) with search, priority & project filters, one-click status advance |
| **Settings** | Editable profile, accent color & density preferences, notification toggles |
| **Persistence** | Every change — tasks, projects, settings — survives a page refresh via `localStorage` |

---

## 🎨 Design System

DevTrack uses a token-driven design system defined entirely in CSS custom properties (`src/index.css`) — no Tailwind, no component library.

- **Palette** — near-black canvas (`#0A0B0F`) · indigo primary (`#6366F1`) · cyan secondary (`#22D3EE`)
- **Type** — [Inter](https://fonts.google.com/specimen/Inter) for UI, [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for tech tags
- **Surface** — glassmorphic cards (`backdrop-filter: blur()`) with soft borders & gradients
- **Motion** — staggered fade-ins, hover lift, animated progress fills, smooth focus states
- **Accessibility** — visible focus rings, `aria-label` / `aria-pressed` on toggles, semantic `role="progressbar"`
- **Responsive** — breakpoints at `1100px`, `900px`, `640px`; sidebar collapses to a slide-in drawer on mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 18 (hooks — `useState`, `useReducer`, `useMemo`, `useEffect`) |
| Routing | React Router 6 |
| Build tool | Vite |
| Styling | Plain CSS3 — custom properties, Grid, Flexbox |
| State | Context API + `useReducer` |
| Persistence | Browser `localStorage` |
| Fonts | Google Fonts (Inter, JetBrains Mono) |

**Deliberately not used:** Tailwind, Bootstrap, Redux, Material UI / Ant Design, or any other external UI kit — every component is hand-built.

---

## 📁 Project Structure

```
devtrack/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 # React root + providers
    ├── App.jsx                  # Route table
    ├── index.css                # Design tokens & global styles
    ├── styles/
    │   └── common.css           # Shared panel / toolbar / input styles
    ├── context/
    │   └── AppContext.jsx       # Global state + localStorage sync
    ├── data/
    │   └── seedData.js          # Seed projects, tasks, activity feed
    ├── components/
    │   ├── layout/
    │   │   ├── Sidebar.jsx / .css
    │   │   ├── Header.jsx  / .css
    │   │   └── AppLayout.jsx / .css
    │   └── ui/
    │       ├── Badge.jsx        # Status / priority / tech-tag pills
    │       ├── Button.jsx
    │       ├── ProgressBar.jsx
    │       ├── StatCard.jsx
    │       └── ui.css
    └── pages/
        ├── Dashboard.jsx / .css
        ├── Projects.jsx / .css
        ├── ProjectDetails.jsx / .css
        ├── Tasks.jsx / .css
        ├── Settings.jsx / .css
        └── NotFound.jsx / .css
```

---

## 🗂️ Routes

| Route | Path | In Sidebar? | Description |
|---|---|---|---|
| Dashboard | `/` | ✅ | Overview, KPIs, activity |
| Projects | `/projects` | ✅ | Browse & filter all projects |
| Project Details | `/projects/:projectId` | — | Deep dive into a single project |
| Tasks | `/tasks` | ✅ | Kanban board across all projects |
| Settings | `/settings` | ✅ | Profile & preferences |
| 404 | `*` | — | Fallback not-found page |

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

```bash
# production build
npm run build
npm run preview
```

---

## 💡 What This Project Demonstrates

- Multi-page React architecture with React Router and a shared layout shell
- A hand-rolled design-token system (color, spacing, radius, motion) in plain CSS
- Global state management with `useReducer` + Context, synced to `localStorage`
- Reusable, prop-driven UI primitives (`Badge`, `ProgressBar`, `StatCard`, `Button`) with zero dependencies
- A kanban workflow built from derived/grouped state — no drag-and-drop library
- Responsive navigation patterns (sidebar → drawer collapse)
- Baseline accessibility: focus-visible states, ARIA roles/labels on interactive elements

---

## 🔮 Roadmap

- [ ] Drag-and-drop between kanban columns
- [ ] Authentication & multi-user accounts
- [ ] Real backend (REST/GraphQL) instead of `localStorage`
- [ ] Project/task creation modal
- [ ] Light/dark theme toggle
- [ ] Unit tests with Vitest + React Testing Library
- [ ] Analytics charts (burndown, velocity) on Dashboard & Project Details
- [ ] Deploy to Vercel/Netlify with a live demo link

---

## ⚠️ Disclaimer

DevTrack is a fictional product built for educational and portfolio purposes. All projects, tasks, and activity shown are seeded sample data and do not represent real users or work.

---

<div align="center">

**Built with React & Vite** · © 2026 DevTrack

**Author:** Syed Qazi Burhan · Software Engineer
[GitHub](https://github.com/Qazi-Burhan) · [LinkedIn](https://linkedin.com/in/syed-qazi-burhan-ul-haq-36aa90333)

</div>
