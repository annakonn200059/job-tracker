# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Job Tracker is a monorepo managed with **Turborepo** and **npm workspaces**. It contains two Next.js apps and a shared UI package.

- `apps/landing` — public-facing marketing/landing page
- `apps/web` — the main job tracker application (early stage)
- `packages/ui` — shared component library (shadcn-based, with Storybook)
- `packages/eslint-config` — shared ESLint configurations
- `packages/typescript-config` — shared TypeScript configurations

## Commands

All commands run from the repo root via Turborepo unless you want to target a specific workspace.

```bash
# Run all apps in dev mode
npm run dev

# Run a single app
npm run dev --workspace=apps/landing
npm run dev --workspace=apps/web

# Build all
npm run build

# Lint all
npm run lint

# Format all (Prettier + tailwindcss plugin)
npm run format

# Typecheck all
npm run typecheck

# Storybook (packages/ui only)
cd packages/ui && npm run storybook
```

## Architecture

### Shared UI (`packages/ui`)
Components live in `packages/ui/src/components/` and are exported via path aliases defined in `packages/ui/package.json` exports. Consuming apps import like:

```ts
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
```

The `cn()` helper (clsx + tailwind-merge) is the standard way to compose class names. Always use it instead of string concatenation.

Components are built on **Radix UI** primitives via the `radix-ui` package, styled with **Tailwind CSS v4**, and follow the **shadcn** pattern. Icon library is **HugeIcons** (`@hugeicons/react` + `@hugeicons/core-free-icons`).

When adding a new component to `packages/ui`, also add a `.stories.tsx` file alongside it.

### Landing app (`apps/landing`)
Page sections are plain React components in `apps/landing/components/`. They use a local `Container` component for max-width/padding layout, and import shared UI components from `@workspace/ui`.

No `"use client"` by default — add it only when needed (e.g., interactive components like `Hero.tsx`).

### Styling
- Tailwind CSS v4 with PostCSS — config is via CSS (`packages/ui/src/styles/globals.css`)
- Prettier sorts Tailwind classes automatically via `prettier-plugin-tailwindcss`
- Fonts: `Nunito Sans` (body, `--font-sans`), `Geist Mono` (headings `--font-heading` and mono `--font-mono`)

### Code style
- No semicolons, double quotes, 2-space indent (see `.prettierrc`)
- `trailingComma: "es5"`
- ESLint config per workspace (`eslint.config.js`), shared base from `packages/eslint-config`
