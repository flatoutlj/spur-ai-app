---
name: design-system
description: Inspect and reuse this project's existing tokens and components before writing any new UI. Use whenever adding or editing markup, choosing a colour, spacing, radius, shadow, or considering a new component.
---

# Design system

The tokens live in `src/app/globals.css`. That file is the single source of
truth. There is no `tailwind.config.*` — this is Tailwind v4, configured in CSS
via `@theme`.

## Inspect before you write

```bash
sed -n '1,120p' src/app/globals.css        # tokens
ls src/components/ui/                       # shared primitives (see caveat below)
ls src/components/{landing,dashboard,tools} # feature components
grep -rn "className=\"[^\"]*<pattern>" src  # is this pattern already here?
```

Before creating a component, search for the pattern you are about to write. This
codebase has 27 identical copies of one button `className`, 16 of another and 13
of a third. Adding a 28th is the failure mode to avoid.

## The tokens

| Need | Token | Utility |
|---|---|---|
| page / card background | `--color-surface` | `bg-surface` |
| well, alternating band | `--color-surface-sunken` | `bg-surface-sunken` |
| dark band, footer | `--color-surface-inverted` | `bg-surface-inverted` |
| hairline | `--color-line` | `border-line` |
| input / interactive border | `--color-line-strong` | `border-line-strong` |
| primary text | `--color-ink` | `text-ink` |
| secondary text | `--color-ink-muted` | `text-ink-muted` |
| metadata | `--color-ink-subtle` | `text-ink-subtle` |
| primary action | `--color-brand` | `bg-brand`, `text-brand` |
| gradient action | — | `gradient-bg` |
| success / warning / error | `--color-positive` / `-caution` / `-critical` | `text-positive` etc. |
| input, small button radius | `--radius-control` | `rounded-control` |
| card radius | `--radius-card` | `rounded-card` |
| panel, modal radius | `--radius-panel` | `rounded-panel` |
| lifted card | `--shadow-raised` | `shadow-raised` |
| popover | `--shadow-overlay` | `shadow-overlay` |
| modal | `--shadow-modal` | `shadow-modal` |

Composite utilities, also defined in `globals.css`: `gradient-bg`,
`gradient-text`, `hero-gradient`, `glow-pulse`, `float-animation`.

> These five had **no definition at all** until recently — `gradient-bg` alone
> appears 154 times across 53 files, so every primary CTA was rendering white
> text on a transparent background. If you find yourself writing a class that
> "should" exist, verify it is defined before shipping:
> `grep -n "@utility <name>" src/app/globals.css`

## Rules

**Never write an arbitrary value when a token expresses the intent.**

```tsx
// no
<div className="rounded-[17px] bg-[#151515] px-[23px] shadow-[0_2px_8px_rgba(0,0,0,.1)]">

// yes
<div className="rounded-card bg-surface-inverted px-6 shadow-raised">
```

Arbitrary values are acceptable for genuine one-offs with no design meaning — a
specific illustration width, an aspect ratio. They are not acceptable for
colour, radius, elevation or type.

**New colour, radius or shadow → add a token, not a hex literal.** If you need a
value that is not in the table above, the question is whether the design system
is missing a role, not whether you can inline it. Add it to `@theme` with a
role-based name (`--color-line-strong`, not `--color-gray-300`).

**Reused twice → extract a component.** Once is fine. Twice is a signal. Three
times is a defect. Put shared primitives in `src/components/ui/`, feature
components in `src/components/<feature>/`.

## The legacy palette

The app currently uses raw Tailwind colours heavily — `gray` 2,528 times, `blue`
877, plus 15 other families. This predates the token layer.

Do not mass-migrate. Do follow this rule: **new and edited markup uses semantic
tokens; untouched markup stays as it is.** A file you are already changing for
another reason is fair game for its own colours, nothing wider. Mixing
`text-gray-500` and `text-ink-muted` in one file you just wrote is the thing to
avoid.

## shadcn/ui

Radix primitives are installed (`dialog`, `dropdown-menu`, `label`, `select`,
`separator`, `slot`, `tabs`, `toast`) and `cn()` exists in `src/lib/utils.ts`,
but `src/components/ui/` is **empty** and there is no `components.json` — shadcn
has not actually been initialised. The `shadcn-ui` package in `dependencies` is
the deprecated CLI and is unused.

If you need a primitive, prefer initialising shadcn properly
(`npx shadcn@latest init`) over hand-rolling one, so the project lands on the
conventional structure rather than a bespoke half-copy. Then map the generated
CSS variables onto the tokens above rather than keeping shadcn's default
`--background`/`--foreground` names alongside them.
