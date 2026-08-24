---
name: responsive-design
description: Design and verify layout behaviour across viewport sizes as part of building UI, not after. Use when writing or changing any layout, navigation, table, form, dialog, grid or dashboard.
---

# Responsive design

Responsive behaviour is part of the design, decided while you write the markup.
Retrofitting `md:` prefixes onto a finished desktop layout produces a shrunken
desktop layout, which is not the same thing.

Roughly half of Spur AI's traffic arrives from search and directory listings on
phones, lands on `/blog/*`, `/tools/*` or `/vs/*`, and decides in seconds. The
375px rendering of those pages is the product for those users.

## Widths to reason about

| Width | Represents | Question |
|---|---|---|
| 375 | iPhone SE / mini | Is the hierarchy still legible, or is it one flat column? |
| 768 | tablet portrait, split-screen | Does the layout commit, or sit in an awkward middle state? |
| 1024 | small laptop, tablet landscape | Do sidebars and multi-column grids start working here? |
| 1440 | typical desktop | Is content capped, or stretched to unreadable line lengths? |

Tailwind's defaults map to these: `sm:640 md:768 lg:1024 xl:1280 2xl:1536`. Base
styles are the 375px design; every breakpoint prefix is an enhancement upward.

## Per-element checklist

**Navigation** — `Navbar.tsx` must collapse to a menu, and the primary CTA
should stay reachable without opening it. Test that the menu closes on route
change.

**Tables** — Never let a table scroll the page body. Either wrap in
`overflow-x-auto` with a visible affordance, or restructure to stacked cards
below `md`. The dashboard's post history and the ops metrics tables are the live
cases.

**Forms** — Full-width inputs and a full-width submit at 375. The hero's
`flex-col sm:flex-row` email capture is the right pattern; reuse it. Labels
above inputs on mobile, never beside.

**Dialogs** — Full-screen or bottom-sheet on mobile, centred panel from `md` up.
A centred modal with fixed width at 375 will clip. `ExitIntentPopup.tsx` is the
one to watch.

**Cards and grids** — `grid-cols-1` base, then step up. Going straight from 1 to
4 skips the width where 2 is right.

**Typography** — The `text-5xl sm:text-6xl lg:text-7xl` hero pattern is
established; follow it rather than inventing a new ramp. Body copy stays around
16px everywhere — do not shrink it on mobile. Cap prose at `max-w-prose` or
`max-w-3xl` so 1440 does not produce 140-character lines.

**Touch targets** — 44×44px minimum for anything tappable. Icon-only buttons at
`w-4 h-4` need padding to reach it. Adjacent targets need spacing between them.

**Overflow** — The page body must never scroll horizontally. Long unbroken
strings (generated post text, API keys, URLs) need `break-words` or
`overflow-x-auto` on their own container. The generated-output panels in
`/tools/*` are where this bites.

**Absolutely positioned decoration** — The hero's `-top-4 -right-4` floating
cards will push the viewport wide on mobile. Hide them below `sm` rather than
scaling them down.

**Dense data** — `/dashboard`, `/admin` and `/ops` cannot simply reflow. Decide
what a phone user actually needs from that screen and show that; the full grid
can be desktop-only, provided nothing is exclusively reachable there.

## Verifying

```bash
npm run dev
```

Then use `visual-qa` to resize and screenshot. Checking each width in a real
browser takes a minute and catches what reading `className` strings does not.
