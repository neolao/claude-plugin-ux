---
name: prototype
description: Build a clickable single-file HTML prototype of a designed flow with the project's tokens, publish it, iterate on feedback, mark the flow validated.
argument-hint: "<NNN flow id> | <screen slug>"
---

# /ux:prototype — Validate the UX before writing code

A prototype exists to get a **decision** from a human before implementation costs anything. Honest (real copy, real states, real constraints) and cheap (one HTML file, no build).

Reply in the user's language.

## Step 1 — Context and target

Read `.ux/product.md`, `.ux/inventory.md`, and `.ux/style.md` if present. `$ARGUMENTS` matching `^\d+(-[\w-]+)?$` → the flow `.ux/flows/NNN-*.md` and every screen in its `screens:` list; otherwise → the screen `.ux/screens/<slug>.md` and its parent flow; missing file → say which path was looked for, suggest `/ux:design`, stop. Flow already `validated` or `implemented` → ask in one line whether to rebuild anyway.

## Step 2 — Build the prototype

Write `.ux/prototypes/NNN-slug.html` (or `<slug>.html` for one screen):

- **Single file**, inline CSS/JS, no external dependency, no build — opens from disk and still works in a year.
- **Tokens** as CSS custom properties at the top, by precedence: (1) the inventory's Design tokens; (2) `.ux/style.md` when the project has no tokens or a redesign is being validated; (3) a neutral palette only for what neither defines, flagged in a comment — and say in the report that the look is a placeholder, recommend `/ux:style`.
- **Every screen, every state** reachable: navigation follows the flow table; a compact **prototype bar** (fixed, visibly labeled "prototype") switches states (Empty / Loading / Partial / Success / Error) and steps, and toggles a numbered marker per flow step. Nothing reachable only by editing code.
- **Real copy** from each Content table; realistic fake data (long names, many items, zero items). **Real constraints**: the platform's viewport (phone frame, docked panel of the stated width, desktop window), the stated density, dark mode if the product has one.
- **Keyboard operable** (tab order, visible focus, Enter/Escape per spec); `prefers-reduced-motion` respected.

Do not invent features beyond the spec — a prototype showing more than what will be built misleads the reviewer.

## Step 3 — Publish

In order: **Artifact tool** (follow its own instructions, including any design skill it asks to load; favicon and one-line description; record the URL in the flow's `prototype:`) → **browser tools** (open the file, screenshot to confirm it renders, give the path) → the file path and the command to open it. Tell the user in one line how to use the prototype bar.

## Step 4 — Iterate

For each remark: changes the **UX** (step, state, wording, interaction) → update the spec **and** the prototype — the spec stays the source of truth; **cosmetic** → prototype only; contradicts a `.ux/decisions/` record → point it out and ask whether to supersede it (then `/ux:design NNN`, not a patch here). Republish to the same file/URL after each round; keep rounds short.

## Step 5 — Validate

When the user says it is right: `status: validated` in the flow and each screen; make sure every accepted deviation is in the specs — after validation **the specs describe the prototype exactly**; if git, stage `.ux/prototypes/`, `.ux/flows/`, `.ux/screens/` and commit `docs(ux): validate prototype NNN <title>`. If the user stops before validating, commit `wip(ux): prototype NNN` and say the flow is still `designed`.

## Step 6 — Report

Where the prototype lives and what it covers (screens × states); what changed in the specs; next: `/ux:implement NNN`.
