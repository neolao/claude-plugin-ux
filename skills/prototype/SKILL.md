---
name: prototype
description: Build a clickable single-file HTML prototype of a designed flow with the project's tokens, publish it, iterate on feedback, mark the flow validated.
argument-hint: "<NNN flow id> | <screen slug>"
version: 1.1.0
model: claude-sonnet-5-5
---

# /ux:prototype — Validate the UX before writing code

A prototype exists to get a **decision** from a human before implementation costs anything. Honest (real copy, real states, real constraints) and cheap (one HTML file, no build).

Reply in the user's language.

## Step 1 — Context and target

Read `.ux/product.md` and `.ux/inventory.md` — if either is missing, **invoke `ux:discover`** (Skill tool) first — then `.ux/style.md` if present. Resolve `$ARGUMENTS`:

| `$ARGUMENTS` | Target |
|---|---|
| `^\d+(-[\w-]+)?$` | the flow `.ux/flows/NNN-*.md` and every screen in its `screens:` list |
| anything else | the screen `.ux/screens/<slug>.md` and its parent flow |
| empty | list the flows still `designed` (none → say so, suggest `/ux:design`), ask in one line which one, stop until answered |

Missing file → say which path was looked for, suggest `/ux:design`, stop. Flow already `validated` or `implemented` → ask in one line whether to rebuild anyway.

## Step 2 — Build the prototype

Write `.ux/prototypes/NNN-slug.html` (or `<slug>.html` for one screen):

- **Single file**, inline CSS/JS, no external dependency, no build — opens from disk and still works in a year.
- **Tokens** as CSS custom properties at the top: the inventory's Design tokens; `.ux/style.md` instead when it is `adopted` (no tokens yet, or a redesign not yet migrated). Neither → there is no scale: take every value from the sibling screens the inventory's Values column points at, so the prototype looks like the app around it, and recommend `/ux:style` in the report; a neutral value, flagged in a comment, only for what nothing defines (no UI yet) — the report then says the look is a placeholder.
- **Every screen, every state** reachable: navigation follows the flow table; a compact **prototype bar** (fixed, visibly labeled "prototype") switches states (Empty / Loading / Partial / Success / Error) and steps, and toggles a numbered marker per flow step. Nothing reachable only by editing code. A States row marked `n/a: <reason>` gets no state — the bar shows the reason instead; a row marked `deferred:` is built anyway: the deferral is `/ux:implement`'s, the UX is what is being validated.
- **Real copy** inlined from each Content table — a prototype has no i18n layer; the keys are for `/ux:implement`; realistic fake data (long names, many items, zero items). **Real constraints**: the platform's viewport (phone frame, docked panel at the width `product.md` Devices & input states, desktop window, terminal), the stated density, dark mode if the product has one.
- **Keyboard operable** (tab order, visible focus, Enter/Escape per spec); `prefers-reduced-motion` respected.
- **Host-rendered parts** (menu bar, editor chrome, phone status bar, the terminal itself) drawn plainly as the host shows them, never with the product's tokens — the prototype shows what the app renders inside the host, not a restyled host.

Do not invent features beyond the spec — a prototype showing more than what will be built misleads the reviewer.

## Step 3 — Publish

Publish with the first that works: **Artifact tool** (follow its own instructions, including any design skill it asks to load; icon and one-line description) → **browser tools** (open the file, screenshot to confirm it renders) → the file path alone. Whichever worked: write the file path — and the artifact URL when there is one — in the flow's `prototype:` (`/ux:implement` finds the prototype through it), give the user the path with the command to open it, and tell them in one line how to use the prototype bar.

## Step 4 — Iterate

For each remark: changes the **UX** (step, state, wording, interaction) → update the spec **and** the prototype — the spec stays the source of truth; **cosmetic** → prototype only; contradicts a `.ux/decisions/` record → point it out and ask whether to supersede it (then `/ux:design NNN`, not a patch here). Republish to the same file/URL after each round; keep rounds short.

## Step 5 — Validate

When the user says it is right: `status: validated` in the flow and each screen; make sure every accepted deviation is in the specs — after validation **the specs describe the prototype exactly**; if git, stage `.ux/prototypes/`, `.ux/flows/`, `.ux/screens/` and commit `docs(ux): validate prototype NNN <title>`. If the user stops before validating, commit `wip(ux): prototype NNN` and say the flow is still `designed`.

## Step 6 — Report

Where the prototype lives and what it covers (screens × states); what changed in the specs; next: `/ux:implement NNN`.
