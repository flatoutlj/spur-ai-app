---
name: accessibility
description: Build accessible markup while implementing, not as a final audit. Use when writing any interactive UI — forms, dialogs, menus, tabs, buttons, loading and error states.
---

# Accessibility

Applied while writing the component. An audit at the end finds problems that are
expensive to fix because the markup is already wrong.

## Semantic HTML first

Most accessibility comes free from the right element. Reach for ARIA only when
no element expresses the semantics.

- `<button>` for actions, `<a href>` for navigation. A `<div onClick>` is not
  keyboard-reachable and is the single most common defect.
- `<form>` with a submit button, so Enter works.
- `<nav>`, `<main>`, `<header>`, `<footer>` — every page needs exactly one
  `<main>`. Several pages in this app currently open straight into `<section>`.
- One `<h1>` per page. Do not skip levels. The blog and `/vs/*` pages are long
  and are navigated by heading in screen readers — the outline is the table of
  contents.
- `<ul>`/`<li>` for lists, `<table>` with `<th scope>` for tabular data.

## Prefer Radix over hand-rolling

`@radix-ui/react-{dialog,dropdown-menu,select,tabs,toast,label,separator}` are
already installed. They handle focus trapping, focus restore, escape, arrow-key
navigation, `aria-expanded`/`aria-controls` wiring and screen-reader
announcement. A hand-built dropdown will get at least two of those wrong.

If you build a custom dialog anyway, it needs: focus moved into it on open,
focus trapped while open, focus returned to the trigger on close, Escape to
dismiss, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, and
background content inert.

## Forms

- Every input has a `<label htmlFor>`. A `placeholder` is not a label — it
  disappears on focus and fails at low vision.
- `type="email"`, `type="password"`, `autoComplete` set appropriately.
- Errors: `aria-invalid` on the field, message linked via `aria-describedby`,
  text adjacent to the field. Colour alone does not convey the error.
- Errors announced on submit — either move focus to the first invalid field or
  put the summary in a live region.
- Disabled submit during flight is not enough feedback; state that it is
  working.

## Focus

`globals.css` defines a global `:focus-visible` ring. Do not remove it.
`focus:outline-none` without a replacement ring is a defect — it makes the app
unusable by keyboard.

Check by tabbing the page top to bottom: can you reach every control, can you
always see where you are, does tab order follow visual order, does anything trap
you?

## Colour and contrast

4.5:1 for body text, 3:1 for large text (18.66px bold / 24px+) and for UI
boundaries.

Watch these in particular:
- `text-ink-subtle` (`#9ca3af`) on white is **2.54:1** — it fails at every size.
  Decoration only: never body copy, never a label, never anything a user has to
  read. Reach for `text-ink-muted` instead.
- `text-ink-muted` (`#6b7280`) on white is 4.83:1 — passes for body text.
- `text-ink` on white is 17.74:1.
- White on `gradient-bg` passes across the whole ramp (5.17:1 at the blue end,
  5.70:1 at the violet end), so white is the correct label colour on any primary
  button. `text-brand` on white is also 5.17:1.
- Never encode meaning in colour alone — status dots need a text label,
  chart series need direct labels.

## Motion

`globals.css` honours `prefers-reduced-motion` globally and disables
`glow-pulse` / `float-animation`. When you add animation, confirm the interface
still communicates the state change once motion is removed — a fade that carries
meaning must have a non-motion equivalent.

## Loading, empty and error states

- Loading regions: `aria-busy` or a live region, so the change is announced.
- Spinners need an accessible name (`<span className="sr-only">Loading…</span>`).
- Toasts and async results go in a live region — `@radix-ui/react-toast` does
  this correctly.
- Don't announce every keystroke; use `aria-live="polite"` for results,
  `assertive` only for errors that block progress.

## Do not over-ARIA

`role="button"` on a `<button>`, `aria-label` duplicating visible text, or
`role="list"` on a `<ul>` all make things worse. Wrong ARIA is worse than none —
it overrides correct native semantics.

## Quick pass before finishing

1. Tab through it. Everything reachable, focus always visible.
2. Every image has `alt` (empty `alt=""` if decorative).
3. Every input has a real label.
4. Heading levels form a sensible outline.
5. Nothing conveys meaning by colour alone.
6. Zoom to 200% — does it still work?
