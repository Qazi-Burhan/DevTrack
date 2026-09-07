# DevTrack

A premium, dark-first developer project & task management dashboard built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## What's inside

- **Dashboard** — welcome section, KPI stat cards, project progress overview, recent projects/tasks, activity feed
- **Projects** — searchable/filterable grid & list views with progress, tech tags, status and priority
- **Project Details** — hero overview, task list, timeline, recent activity
- **Tasks** — kanban board (To Do / In Progress / Completed) with search, priority & project filters
- **Settings** — profile, appearance (accent color, density), notification preferences

## Notes

- All state (projects, tasks, settings) is persisted to `localStorage` under the key `devtrack:v1`.
- No external UI libraries — all components (buttons, badges, progress bars, cards) are custom-built with plain CSS using a design-token system defined in `src/index.css`.
- Fully responsive: sidebar collapses into a slide-in drawer below 900px, grids reflow to single columns on mobile.
