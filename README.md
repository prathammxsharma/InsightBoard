# InsightBoard (WeekBoard)

Premium, production-ready SaaS dashboard built with React + TypeScript + Tailwind CSS.

Live demo will be available after Vercel deployment.

## Features

- **Application shell** with collapsible sidebar, responsive mobile navigation, and sticky header
- **Design system** with CSS custom properties for light & dark themes
- **KPI metric cards**, upcoming deadlines list, team activity feed
- **Accessible**: semantic landmarks, focus rings, ARIA attributes, reduced-motion support
- **Theme persistence** via `localStorage`
- **Fully responsive** across desktop, tablet, and mobile

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React icons
- clsx

## Getting Started

```bash
git clone https://github.com/prathammxsharma/InsightBoard.git
cd InsightBoard
npm install
npm run dev
```

Open http://localhost:5173

## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Production build           |
| `npm run preview` | Preview production build   |

## Project Structure

```
src/
├── components/
│   ├── layout/     # Sidebar, Header
│   ├── ui/         # Button, Badge, MetricCard
│   └── Dashboard.tsx
├── hooks/          # useTheme
├── lib/            # utils (cn)
├── App.tsx
├── index.css       # Design system + Tailwind
└── main.tsx
```

## Deploy on Vercel

1. Push this repo to GitHub (already configured).
2. Go to [vercel.com](https://vercel.com) → New Project → Import this repository.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.
