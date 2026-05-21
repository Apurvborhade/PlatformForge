# PlatformForge

Monorepo scaffold with:

- `apps/frontend`: small frontend (Vite)
- `apps/backend`: Express.js API
- `apps/worker`: simple Node.js worker

## Prereqs

- Node.js 20+

## Install

```bash
npm install
```

## Run (dev)

```bash
# frontend (http://localhost:5173)
npm run dev -w @platformforge/frontend

# backend (http://localhost:3001)
npm run dev -w @platformforge/backend

# worker (one-shot)
npm run start -w @platformforge/worker
```

