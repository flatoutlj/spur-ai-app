@AGENTS.md

# Spur AI

AI LinkedIn content engine for B2B consultants, coaches and agency owners.
Production: https://trispur.com (Vercel).

## Stack

| | |
|---|---|
| Framework | Next.js 16.2.10 (App Router, Turbopack), React 19.2.4, TypeScript strict |
| Styling | Tailwind **v4** — configured in CSS via `@theme`, there is no `tailwind.config.*` |
| UI | Radix primitives + `lucide-react`. `cn()` in `src/lib/utils.ts` |
| Data | Supabase (Postgres) via `@supabase/ssr` |
| AI | `@anthropic-ai/sdk` |
| Payments / email | Stripe, Resend |
| Analytics | `@vercel/analytics` |

Read `node_modules/next/dist/docs/` before using a Next API — this version has
breaking changes from earlier ones. Notably: **Middleware is now `proxy.ts`**
(root or `src/`, one per project). Caching uses the `use cache` directive and
requires `cacheComponents: true`, which is currently **off**.

## Structure

```
src/
  app/
    (auth)/         login, signup            — client
    (dashboard)/    dashboard, onboarding    — client, authenticated
    api/            route handlers
    tools/          public generators — server page.tsx + <Name>Client.tsx island
    blog/ vs/       SEO content — server components
    ops/ admin/     operator surfaces, password-gated
    globals.css     DESIGN TOKENS — single source of truth
  components/
    ui/             shared primitives (currently empty)
    landing/ dashboard/ tools/ admin/ ops/
  lib/              utils, supabase clients, rateLimit, apiKeys, adminAuth
mcp/                public MCP server (see /developers)
ops/                python metrics + dashboard build scripts
```

## Commands

```bash
npm run dev      # localhost:3000
npm run build    # see caveat below
npm run lint     # eslint (flat config, next/core-web-vitals)
npx tsc --noEmit # typecheck
```

**`npm run build` fails locally.** `.env.production.local` holds empty
placeholder Supabase values that shadow the real ones in `.env.local`, and three
route handlers (`api/cron/*`, `api/telegram/webhook`) build a Supabase client at
module scope. Export the three `*SUPABASE*` vars from `.env.local` first — see
the `visual-qa` skill for the exact incantation. Vercel injects real values, so
production builds are fine.

There is **no test runner installed**. Vitest and Playwright are the intended
choices; add them before writing tests, don't improvise a third.

## Conventions

**Server-first.** Server Components by default. `"use client"` only for
interaction, local state, browser APIs or client-only libraries — and push it to
the smallest leaf. The `/tools/*` pages are the pattern to copy: server
`page.tsx` owning metadata and static content, one `<Name>Client.tsx` island for
the interactive part. Never mark a whole page client to make one button work.

**Design system.** Tokens live in `src/app/globals.css`. Use semantic utilities
(`bg-surface`, `text-ink-muted`, `border-line`, `rounded-card`, `shadow-raised`)
over raw palette classes and never over arbitrary values like
`rounded-[17px] bg-[#151515]`. Composite utilities `gradient-bg`,
`gradient-text`, `hero-gradient`, `glow-pulse` and `float-animation` are defined
there too — if you invent a custom class, define it there in the same commit.
`gradient-bg` means *primary action*; one per viewport.

Legacy markup uses raw Tailwind colours heavily (`gray` 2,528×). Do not
mass-migrate. New and edited markup uses tokens.

**Components.** Search before creating — there are already 27 copies of one
button `className`. Used twice is a signal, three times is a defect. Shared
primitives go in `src/components/ui/`, feature components in
`src/components/<feature>/`.

**Types.** The codebase currently has **zero `any`**. Keep it that way.

**Validation.** API routes hand-roll their checks today. New route handlers and
Server Functions should parse input with Zod at the boundary and infer types
from the schema. Zod is present transitively — promote it to an explicit
dependency when you first import it.

**Server Functions.** None exist yet; everything is a route handler. Both are
fine, but a Server Function is reachable by direct POST — authenticate and
authorize *inside* it, never rely on the UI gating it.

**Secrets.** `.env*` is gitignored. `OWNER_ACTIONS.md` and root `ops-status.json`
hold credentials and are local-only; the redacted copy lives in
`src/data/ops-status.json`. Never commit or echo a key.

**Accessibility and responsive** are implementation-time concerns, not a final
audit. Minimum bar: semantic elements, real `<label>`s, visible focus (the
global `:focus-visible` ring in `globals.css` — never `focus:outline-none`
without a replacement), 4.5:1 body contrast, 44px touch targets, no horizontal
page scroll at 375px. `text-ink-subtle` is 2.54:1 and is decoration only.

**Dependencies.** Prefer a smaller graph. `framer-motion` and `shadcn-ui` are
currently installed and entirely unused — don't add to that pile.

## Skills

In `.claude/skills/`. Invoke by name.

| Skill | When |
|---|---|
| `frontend-design` | before building a new page or major section |
| `design-system` | before writing any markup — what already exists |
| `responsive-design` | while writing layout; 375 / 768 / 1024 / 1440 |
| `accessibility` | while writing interactive UI |
| `visual-qa` | after implementing — verify in a real browser |
| `ui-critic` | reviewing a built screen; reports before it edits |

For substantial UI work: understand the feature → inspect the design system →
establish visual direction → design the hierarchy → implement with existing
components → check responsive → check accessibility → visual QA → critique →
fix the top findings → re-verify. Do not jump from the request straight to 500
lines of JSX.
