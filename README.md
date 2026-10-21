# Forge — Portfolio / Resume Front

Monorepo for the Forge CLI landing + platform.

## Structure

```
resume-front/
├── portfolio.code-workspace   # VS Code multi-root (web + backend + design-system)
├── design-system/
│   ├── forge-cli/MASTER.md    # Single source of truth — colors, type, spacing, motion
│   ├── forge-cli/pages/       # Per-page overrides (landing.md, etc.)
│   └── tokens/                # Generated tokens.json + tokens.css (synced from MASTER.md)
├── web/                       # Nuxt 3 + Tailwind — landing, docs, marketing
│   ├── assets/css/tokens.css  # ← design-system/tokens/tokens.css (copy on change)
│   ├── components/landing/    # Hero, Features, FAQ, Pricing, Navbar, Footer
│   ├── layouts/default.vue
│   └── pages/index.vue
├── backend/                   # Go + chi — health, contact, future API
│   └── cmd/server/main.go
└── package.json               # Root scripts (concurrently dev)
```

## Quick start

```bash
# install all
npm install
npm --prefix web install
go mod tidy -C backend

# dev (web on :3000, api on :8080)
npm run dev          # both
npm run dev:web      # web only
npm run dev:api      # api only

# build
npm run build
```

## Design system

Edit `design-system/forge-cli/MASTER.md`, then regenerate tokens:

```bash
node design-system/tokens/generate.mjs  # (or copy manually for now)
cp design-system/tokens/tokens.css web/assets/css/tokens.css
```

`web/tailwind.config.ts` and `web/assets/css/tokens.css` are derived from the Master — keep them in sync.

## Env

```
# backend/.env
PORT=8080
APP_ENV=development
WEB_URL=http://localhost:3000
```
