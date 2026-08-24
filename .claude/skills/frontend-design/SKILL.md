---
name: frontend-design
description: Establish a coherent visual direction before implementing any substantial new interface in this app. Use when building a new page, a new major section, or redesigning an existing screen — before writing JSX.
---

# Frontend design

Use this before writing a new page or major section. Not for a copy tweak or a
one-component bugfix.

## Product context (do not re-derive this every time)

Spur AI is a LinkedIn content engine. Three audiences, three very different
needs — know which one the screen serves before you design it:

| Surface | Who | What they came to do | Design consequence |
|---|---|---|---|
| `/`, `/pricing`, `/vs/*`, `/blog/*` | cold visitor from search or a directory | decide in ~10s whether this is credible | persuasion, proof, one obvious CTA |
| `/tools/*`, `/free-tools` | someone who wants output *now*, unauthenticated | paste a topic, get a post | the input and the result dominate; everything else recedes |
| `/dashboard`, `/onboarding`, `/billing`, `/admin`, `/ops` | a paying customer or the operator | do repeat work efficiently | density, scanability, no marketing voice |

The buyer is a consultant, coach or agency owner. They are not impressed by
software that looks like software. They are persuaded by specificity — a real
post, a real number, a real before/after. Design toward showing the artifact,
not describing it.

## Answer these before writing JSX

1. Which of the three surfaces is this, and does the density match the table above?
2. What is the single most important element? Name it, then make it visually dominant — size, weight, position, or isolation. Not all four.
3. What is secondary, and is it *actually* subordinate in the design?
4. What is the one action you want taken? Is it the only thing using `gradient-bg`?
5. What can be hidden until needed (progressive disclosure) rather than shown at 60% opacity?
6. What happens when there is no data, when it is loading, and when it fails?
7. At 375px, does the hierarchy still hold, or does it become a single undifferentiated column?

If you cannot answer 2 and 4 in one sentence each, the design is not ready.

## The visual direction, already decided

Do not re-invent this per page. It lives in `src/app/globals.css`.

- **Ink does the work.** Near-black `--color-ink` on white. Hierarchy comes from weight and scale, not from colour.
- **The gradient is the CTA and nothing else.** `gradient-bg` marks the primary action. `gradient-text` may accent one phrase in one headline per page. Two gradients competing in a viewport means neither reads as the action.
- **Flat by default.** `shadow-raised` for a card that must lift off the page, `shadow-overlay` for popovers, `shadow-modal` for modals. A card sitting on white usually needs a `border-line` hairline, not a shadow.
- **Three radii.** `rounded-control` (inputs, small buttons), `rounded-card`, `rounded-panel`. `rounded-full` is for pills, avatars and status dots. The existing CTAs use `rounded-full` — that is the established button shape here; keep it.
- **Geist, tight tracking on large text.** `tracking-tight` at `text-4xl` and above. Body copy stays at default tracking.

## Avoid

These are the failure modes this codebase is most at risk of, given what is
already in it:

- A fourth "hero with badge pill, big headline, gradient phrase, email capture" — that pattern already exists on ~30 pages. Reuse it, do not clone it with new spacing values.
- Purple/blue gradient as a *background* for large areas. It is an action colour here.
- Card grids as the default answer to "several things". Consider a table, a list with rules, or prose.
- Emoji as iconography in product surfaces. `lucide-react` is installed. Emoji is acceptable in marketing copy where it reads as voice, not as UI.
- Decorative floating elements. `float-animation` exists for the hero mockup; it is not a general-purpose garnish.
- Giant headings on dashboard screens. `/dashboard` is a workspace, not a landing page.

## Motion

`framer-motion` is installed but unused. Do not import it to fade a div in — a
CSS transition is cheaper and the bundle is already paying for the dependency
without benefit. Reach for it only when you need orchestration, layout
animation, or gesture handling. Use `--ease-out-quint` for entrances and
`--ease-in-out-quart` for reversible state.

Everything animated must survive `prefers-reduced-motion` — the global rule in
`globals.css` handles the common case, but check that your interface still
communicates state change when the animation is removed.

## Then

Run `design-system` before you write the markup, `responsive-design` and
`accessibility` while you write it, and `ui-critic` on what you produced.
