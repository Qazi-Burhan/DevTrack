🚀 DEVTRACK | Developer Project & Task Management Platform
A single-page-app style dashboard for tracking developer projects and tasks. Built with React + Vite and a fully custom dark-themed design system as a portfolio project.

📖 About the Project
DevTrack is a fictional, SaaS-style productivity dashboard designed to showcase frontend engineering skills through a premium developer-tool aesthetic. The app presents a workspace overview, project management, a task kanban board, and user settings — all within a polished, responsive, component-driven React application.

Note: This is not a live production tool. It is a personal portfolio and learning project, and all data is seeded locally and stored only in the browser.

🎯 Project Purpose
Demonstrate proficiency in React component architecture, routing, and state management
Build a visually rich, portfolio-ready SaaS dashboard without external UI component libraries
Practice a token-based design system (colors, spacing, radius, shadows) using plain CSS
Create an interactive, data-driven application suitable for a frontend development internship application

✨ Key Features
Feature | Description
--- | ---
Sidebar navigation | Fixed sidebar with active-route highlighting, collapses into a slide-in drawer on mobile
Sticky header | Blurred, sticky top bar with global search, notifications, and profile avatar
Dashboard | Personalized welcome message, 4 KPI stat cards, project progress overview, recent projects/tasks, activity feed
Projects | Searchable & filterable project grid/list toggle view, with progress bars, tech tags, status and priority badges
Project Details | Hero overview, full task list, visual project timeline, and recent activity panel
Tasks (Kanban) | Three-column board (To Do / In Progress / Completed) with search, priority filter, project filter, and one-click status advancement
Settings | Editable profile form, accent color & density preferences, notification toggles
Persistent state | All projects, tasks, and settings persist across sessions via localStorage

🎨 Design Highlights
Dark-first SaaS aesthetic — Near-black canvas (#0A0B0F) with an indigo primary accent (#6366F1) and a cyan secondary accent (#22D3EE)
Typography — Inter for UI text and JetBrains Mono for tech tags, via Google Fonts
CSS custom properties — Centralized design tokens for color, spacing, radius, shadow, and motion (:root variables in index.css)
Glassmorphism — Frosted-glass cards using backdrop-filter: blur() with subtle borders and gradients
CSS Grid & Flexbox — Responsive layouts for stat cards, project grid, kanban columns, and settings panels
Micro-interactions — Card lift on hover, animated progress fills, smooth focus/active states, staggered fade-in entrances
Accessibility — Visible focus rings, aria-label/aria-pressed on interactive controls, semantic roles on progress bars and toggles
Responsive breakpoints — Layout adjustments at max-width: 1100px, 900px, and 640px

🛠️ Technologies Used
Technology | Role
--- | ---
React 18 | Component architecture, hooks (useState, useReducer, useMemo, useEffect)
React Router | Client-side routing across Dashboard, Projects, Project Details, Tasks, and Settings
Vite | Dev server and build tooling
CSS3 | Design tokens, Grid/Flexbox layout, transitions, media queries
Google Fonts | Inter & JetBrains Mono web typography
localStorage | Client-side persistence for projects, tasks, and settings

Not used: Tailwind, Bootstrap, Redux, or any external UI component library (Material UI, Ant Design, etc.) — every component is hand-built.

📁 Project Structure
devtrack/
├── index.html                    # App shell / Vite entry point
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                  # React root, router & context providers
│   ├── App.jsx                   # Route definitions
│   ├── index.css                 # Design tokens & global styles
│   ├── styles/
│   │   └── common.css            # Shared panel/toolbar/input styles
│   ├── context/
│   │   └── AppContext.jsx        # Global state (projects, tasks, settings) + localStorage sync
│   ├── data/
│   │   └── seedData.js           # Realistic seed projects, tasks & activity feed
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx / .css
│   │   │   ├── Header.jsx / .css
│   │   │   └── AppLayout.jsx / .css
│   │   └── ui/
│   │       ├── Badge.jsx         # Status / priority / tech-tag pills
│   │       ├── Button.jsx
│   │       ├── ProgressBar.jsx
│   │       ├── StatCard.jsx
│   │       └── ui.css
│   └── pages/
│       ├── Dashboard.jsx / .css
│       ├── Projects.jsx / .css
│       ├── ProjectDetails.jsx / .css
│       ├── Tasks.jsx / .css
│       ├── Settings.jsx / .css
│       └── NotFound.jsx / .css
└── README.md

🗂️ Main Application Routes
The app has 5 primary routes, all reachable from the sidebar nav.

Route | Path | In Nav? | Content
--- | --- | --- | ---
Dashboard | / | Yes | Welcome message, stat cards, progress overview, recent activity
Projects | /projects | Yes | Grid/list of all projects with search & status filter
Project Details | /projects/:projectId | No (linked from cards) | Single project overview, tasks, timeline
Tasks | /tasks | Yes | Kanban board across all projects
Settings | /settings | Yes | Profile, appearance, and notification preferences
Not Found | * | — | Fallback 404 page

Sidebar nav links: Dashboard, Projects, Tasks, Settings

🚀 How to Run Locally
Node.js and npm are required.

Option 1 — Standard dev server

npm install
npm run dev

Then visit: http://localhost:5173

Option 2 — Production build

npm run build
npm run preview

📸 Screenshots
(Add screenshots to a /screenshots folder and reference them here once captured.)

Dashboard | Projects
--- | ---
— | —

Project Details | Tasks (Kanban)
--- | ---
— | —

Settings | Mobile View
--- | ---
— | —

💡 What I Learned
Structuring a multi-page React app with React Router and a shared layout shell
Designing a small CSS design-token system for color, spacing, radius, and motion
Managing global app state with useReducer + Context and syncing it to localStorage
Building reusable, prop-driven UI primitives (Badge, ProgressBar, StatCard, Button) without a component library
Implementing a kanban-style workflow with derived/grouped state instead of drag-and-drop libraries
Handling responsive navigation patterns — sidebar-to-drawer collapse on smaller viewports
Adding baseline accessibility: focus-visible states, aria-pressed/aria-label on toggle controls, progressbar roles

🔮 Future Improvements
Add drag-and-drop between kanban columns
Add authentication and per-user accounts instead of a single local profile
Connect projects/tasks to a real backend (REST or GraphQL API) instead of localStorage
Add a project/task creation modal (currently seeded data only)
Implement dark/light theme toggle using the existing design tokens
Add unit tests (Vitest + React Testing Library) for reducer logic and key components
Add charts (e.g., burndown, velocity) to the Dashboard and Project Details pages
Deploy to Vercel/Netlify and add a live demo link

⚠️ Disclaimer
This project is an unofficial educational and portfolio application. DevTrack is a fictional product created for demonstration purposes only and is not a live commercial tool.

All projects, tasks, and activity shown are seeded sample data for presentation purposes and do not represent real work or users.

👤 Author
Syed
Software Engineer

GitHub: (add your GitHub link)
LinkedIn: (add your LinkedIn link)

Built with React & Vite · © 2026 DevTrack
