# X-Template V.0.0.0-Genesis

> Cyberpunk Glassmorphism starter template — React + TypeScript + Vite

[![Deploy to GitHub Pages](https://github.com/Ex2-Axon/x-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ex2-Axon/x-template/actions/workflows/deploy.yml)
[![Bluesky](https://img.shields.io/badge/Bluesky-%40microtronic.bsky.social-0085ff?logo=bluesky&logoColor=white)](https://bsky.app/profile/microtronic.bsky.social)

**Live demo:** https://ex2-axon.github.io/x-template/

![Screenshot](screenshot.png)

---

## Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build tool** | Vite 8 |
| **Styling** | CSS (Glassmorphism + Neon) + Tailwind CSS 4 |
| **Package manager** | pnpm |
| **Deploy** | GitHub Pages (auto on push) |

---

## Features

- Cyberpunk glassmorphism UI with full animation
- Neon glow effects — cyan, pink, purple, green
- Animated grid background + floating particles
- Glitch text effect on title
- Scanline CRT overlay
- Orbit rings on hero image
- Staggered entrance animations
- Auto-deploy to GitHub Pages on push
- Auto-post to Discord, Bluesky, X on push

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## GitHub Actions Workflows

| Workflow | Trigger | Description |
|---|---|---|
| `deploy.yml` | push to main | Build & deploy to GitHub Pages |
| `discord-notify.yml` | push to main | Send release embed to Discord |
| `bluesky-notify.yml` | push to main | Post release to Bluesky |
| `x-notify.yml` | push to main | Post release to X (Twitter) |

### Required Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `DISCORD_WEBHOOK_URL` | Discord webhook URL |
| `BSKY_IDENTIFIER` | Bluesky handle (e.g. `microtronic.bsky.social`) |
| `BSKY_APP_PASSWORD` | Bluesky app password |
| `X_API_KEY` | X Consumer Key |
| `X_API_SECRET` | X Consumer Secret |
| `X_ACCESS_TOKEN` | X Access Token |
| `X_ACCESS_TOKEN_SECRET` | X Access Token Secret |

---

## Project Structure

```
x-template/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       ├── discord-notify.yml
│       ├── bluesky-notify.yml
│       └── x-notify.yml
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## Connect

- Bluesky: [@microtronic.bsky.social](https://bsky.app/profile/microtronic.bsky.social)
- Discord: [Join server](https://discord.gg/8Zeq8VCU)
- GitHub: [Ex2-Axon](https://github.com/Ex2-Axon)

## Generation Prompt
```text
You are building a daily UI project. Below is the theme specification for today.

## Theme Context (daily-context.json)
```json
{
  "day": 33,
  "date": "2026-05-30",
  "version": "1.33.0",
  "project_name": "x-template-033",
  "theme": {
    "name": "Synthwave",
    "style": "synthwave",
    "mood": "electric, retro, neon, 80s"
  },
  "palette": {
    "background": "#0a0015",
    "surface": "#120025",
    "primary": "#f72585",
    "accent": "#7209b7",
    "text": "#e0aaff",
    "muted": "#3a0068"
  },
  "typography": {
    "heading": "Orbitron",
    "body": "Rajdhani",
    "size": "large"
  },
  "layout": {
    "structure": "centered",
    "density": "normal",
    "border_style": "neon pink glow"
  },
  "animation": {
    "level": "high",
    "style": "grid scroll, neon pulse, scanlines"
  },
  "components": {
    "hero_text": "DRIVE",
    "subtitle": "Outrun the future.",
    "button_label": "IGNITE_",
    "badge_text": "SYNTHWAVE — ONLINE"
  },
  "commit_message": "feat: UI Day 33 — Synthwave [fallback]",
  "source": "fallback",
  "selected_component": {
    "category": "Buttons",
    "component": "Deri-Kurniawan_moody-bulldog-20.html",
    "path": "C:\\Users\\User\\Documents\\GitHub\\Axon\\x-components\\Buttons\\Deri-Kurniawan_moody-bulldog-20.html",
    "content": "<!-- Kurniawan  - Tags:  -->\n<button\n  class=\"relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0\"\n>\n  HOVER ME!\n</button>"
  }
}
```

## Selected Component Reference
- Category: Buttons
- Component: Deri-Kurniawan_moody-bulldog-20.html
- Path: C:\Users\User\Documents\GitHub\Axon\x-components\Buttons\Deri-Kurniawan_moody-bulldog-20.html

Use the selected component HTML below as the primary design reference for the new UI. Keep the structure and styling assumptions in mind while rewriting the requested files.
```html
<!-- Kurniawan  - Tags:  -->
<button
  class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
>
  HOVER ME!
</button>
```

## Your Task
Completely redesign the UI by rewriting these three files from scratch:
- `src/App.tsx`
- `src/App.css`
- `src/index.css`

## Rules for App.tsx
1. Keep ALL existing imports:
   - `import { useState, useEffect, useRef } from 'react'`
   - `import reactLogo from './assets/react.svg'`
   - `import viteLogo from './assets/vite.svg'`
   - `import heroImg from './assets/hero.png'`
   - `import './App.css'`
2. Keep the `CounterNum` component (useRef + useEffect animation)
3. Keep the counter button with `onClick` / `setCount` handler
4. Keep the Documentation section (Vite/React links)
5. Keep the Social section (GitHub/Discord/X/Bluesky links + SVG icons)
6. Do NOT use CSS custom properties (`--var-name`) in inline `style` attributes — TypeScript will error

## Rules for CSS
- Apply the palette, typography, layout structure, animation level, and component text from the JSON above
- Use Google Fonts via `@import` in `index.css`
- Match the theme mood: electric, retro, neon, 80s

## Mandatory Requirements (apply to every build)

### 1. Responsive — Mobile First
- Design for mobile (320px) first, scale up with `min-width` breakpoints
- Touch targets minimum 44×44px
- No horizontal scroll on any screen size
- Fluid typography: use `clamp()` or responsive units (`rem`, `%`, `vw`)
- Images and layout must reflow gracefully at 320px, 768px, 1280px

### 2. Footer Copyright
- The page MUST have a `<footer>` at the bottom
- Footer text: `© 2026 Microtronic. All rights reserved.`
- Style the footer to match the theme palette (muted text on surface background)

### 3. SEO Standards
- `index.html` must have a descriptive `<title>`: `DRIVE — Synthwave | Microtronic`
- Add `<meta name="description">` with the subtitle: `Outrun the future.`
- Add `<meta name="keywords">` relevant to the theme
- Add Open Graph tags: `og:title`, `og:description`, `og:type` (website)
- All images must have meaningful `alt` attributes
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` where appropriate
- Heading hierarchy: one `<h1>` (hero), `<h2>` for sections — no skipping levels

## After saving all files
1. Update `version` in `package.json` to `1.33.0`
2. Update `<title>` and meta tags in `index.html` as specified above
3. Run: `pnpm build`
4. If build succeeds → write `done` to `scripts/build-done.flag`
5. If build fails with TypeScript errors → fix them and rebuild

```
