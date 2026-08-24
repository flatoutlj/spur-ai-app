---
name: visual-qa
description: Verify UI in a real browser rather than by reading source. Use after implementing or changing any interface, and whenever asked whether something looks right or works.
---

# Visual QA

Verify what renders, not what the JSX implies. This project shipped 154 uses of
an undefined CSS class to production across 53 files — every primary CTA
rendering white-on-white — and the source looked completely reasonable. Reading
`className` strings cannot catch that class of defect. Rendering it can.

## Run the app

```bash
npm run dev     # http://localhost:3000
```

`npm run build` will fail locally: `.env.production.local` contains empty
placeholder Supabase values that shadow the real ones in `.env.local`, and three
route handlers construct a Supabase client at module scope. That failure is
environmental, not a regression. To get a genuine production build locally:

```bash
export NEXT_PUBLIC_SUPABASE_URL=$(grep '^NEXT_PUBLIC_SUPABASE_URL=' .env.local | cut -d= -f2-)
export NEXT_PUBLIC_SUPABASE_ANON_KEY=$(grep '^NEXT_PUBLIC_SUPABASE_ANON_KEY=' .env.local | cut -d= -f2-)
export SUPABASE_SERVICE_ROLE_KEY=$(grep '^SUPABASE_SERVICE_ROLE_KEY=' .env.local | cut -d= -f2-)
npx next build
```

## Browser tooling

Use the `claude-in-chrome` skill and the `mcp__claude-in-chrome__*` tools. Load
the tools you need in a single `ToolSearch` call, call `tabs_context_mcp` first,
and open a new tab rather than reusing the user's.

Do not click anything that triggers a native `alert`/`confirm` — it blocks the
extension for the rest of the session. On this app that means the delete
controls in `/dashboard` and `/admin`. Use `read_console_messages` for
diagnostics instead.

## The loop

1. Navigate to the route.
2. Screenshot at 1440, then `resize_window` to 1024, 768, 375 and screenshot each.
3. `read_console_messages` — errors, hydration warnings, failed requests.
4. Exercise the actual flow, not just the initial paint: submit the form, trigger the loading state, force the error, view the empty state.
5. Write down what is wrong.
6. Fix the highest-impact items.
7. Re-render and confirm. A fix you did not re-verify is a guess.

## What to look for

**Layout** — horizontal page scroll at 375 (the most common failure here),
clipped or overlapping text, elements escaping their container, absolutely
positioned decoration pushing the viewport wide, collapsed or zero-height
containers.

**Type** — clipped descenders (especially on `gradient-text`, which uses
`background-clip: text`), unintended wrapping, orphans in headlines, line
lengths beyond ~75 characters at 1440.

**Spacing** — sections that touch, inconsistent gaps between siblings,
misalignment across a grid, uneven optical padding.

**Missing styles** — an element with no visible background or border where one
was clearly intended. This is the undefined-class signature. To confirm:

```bash
grep -oE 'className="[^"]*"' src/path/to/File.tsx     # collect the classes
grep -n "@utility <name>" src/app/globals.css          # is the custom one defined?
```

**States** — empty, loading, error, success, disabled, hover, focus. Reach each
one deliberately. Throttle the network or stub a failure to see the states that
only appear when things go wrong.

**Console** — hydration mismatches, `key` warnings, 404s on assets, CSP
violations (`next.config.ts` sets a real CSP).

**Accessibility, visually** — tab through the page and confirm the focus ring is
visible on every stop.

## Routes worth checking after design changes

| Route | Why |
|---|---|
| `/` | the hero, and 5 of the composite utilities land here |
| `/pricing` | dense comparison layout, many CTAs |
| `/tools/linkedin-post-generator` | the highest-traffic interactive flow |
| `/dashboard` | authenticated, dense, client-heavy |
| `/blog/how-to-write-linkedin-posts-that-get-engagement` | longest page, 823 lines |
| `/vs/taplio` | representative comparison-table page |

## Reporting

Say what you rendered, at which widths, what you found, what you changed, and
what you confirmed after the change. Attach screenshots for anything visual.
Never report a fix as verified unless you re-rendered it.
