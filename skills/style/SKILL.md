---
name: style
description: Define the look and feel once — document the existing design system, or propose 2–3 previewed visual directions — written to .ux/style.md.
argument-hint: "[--redesign] [optional: brand hints — reference products, adjectives, imposed colors]"
version: 1.0.0
model: claude-sonnet-5-5
---

# /ux:style — Define the look and feel

`/ux:design` decides how the product **behaves**; this command decides how it **looks and feels** — once per product. `.ux/style.md` is what `/ux:prototype` renders with, what `/ux:implement` creates tokens from when the project has none, and what `review-consistency` and `review-visual` measure against.

Reply in the user's language; write `.ux/style.md` in the project's documentation language. If the skill stops early with files created under `.ux/`, commit them `wip(ux): style` and say so.

## Step 1 — Context

Read `.ux/product.md` and `.ux/inventory.md` — if either is missing, **invoke `ux:discover`** (Skill tool) first. A **design system exists** when the inventory's Design tokens table has real values with source files and/or a component library is named; read those token files — they are the facts. Read `.ux/style.md` and any `.ux/decisions/*` about a visual direction if present.

## Step 2 — Mode

| Design system exists | `--redesign` | Mode |
|---|---|---|
| yes | no | **document** — formalize the intent of what exists; propose nothing |
| yes | yes | **redesign** — propose directions, always including "keep the current system"; plan the token migration |
| no | any | **propose** — propose directions; `style.md` is the source of truth until tokens are created |

Strip `--redesign`; the remaining `$ARGUMENTS` are brand hints.

## Step 3 — Brand inputs (clarify) — propose / redesign

Gather the facts: brand colors and logos in the assets, typefaces loaded, a marketing site or style guide, the tokens from Step 1, `product.md` Constraints, the hints. **Invoke `ux:clarify`** (Skill tool, `skill: "ux:clarify"`) with `kind=brand`, `topic="visual direction of <product>"`, `context=` those facts and the mode. Its `## Shared understanding` block is the only basis for the directions.

In **document** mode, skip — unless the existing system has no stated intent anywhere, then clarify only the intent branch (adjectives, anti-references).

## Step 4 — Consult the experts — propose / redesign

Invoke **in one message, in parallel** (Agent tool, *plan consultation* mode): `ux:expert-visual` (scales, palette structure, density), `ux:expert-accessibility` (contrast-safe pairs, sizes, motion), `ux:expert-platform` (what looks native here). Brief them with the product frame, the mode, the shared understanding and, in redesign, the existing tokens. Wait for their completion notifications; fold `REQUIREMENTS` into every direction, `RISKS` into trade-offs.

These agent invocations are part of the command the user ran — a session rule like "no sub-agents unless asked" is already satisfied and never a reason to skip them. If launches are genuinely blocked, say so and continue alone.

In **document** mode, skip — nothing is being decided.

## Step 5 — Directions — propose / redesign

Propose **2–3 directions** that differ in **mood and density**, not in hue. A direction is the sections of `${CLAUDE_PLUGIN_ROOT}/templates/style.md` filled (intent, palette with contrast ratios and light/dark values, typography, spacing & shape, density, motion, iconography, tone) plus **Fits because** (the product facts behind it) and **Trade-offs** (readability, brand distance, migration effort). Imposed brand colors stay as given. In **redesign**, the first direction is always **"Keep the current system"**, described in the same shape, so the comparison is fair.

Do not present yet — build the previews first.

## Step 6 — Previews

For each direction, a single-file **style tile** `.ux/prototypes/style-<slug>.html` (inline CSS/JS, tokens as CSS custom properties at the top, `prefers-reduced-motion` honored): palette swatches with contrast ratios (light and dark side by side if the product has theming); type specimen; core components in their states (buttons primary/secondary/destructive, input empty/filled/error, card or row, badge, toast); and **one key screen of the product** re-skinned with real copy and realistic data — what makes the choice concrete.

In **document** mode, one tile of the existing system — it often reveals inconsistencies; list them under `Known gaps` in the inventory.

Publish like `/ux:prototype` Step 3 (Artifact tool → browser tools → file paths), one artifact per direction.

## Step 7 — Choose — propose / redesign

`AskUserQuestion`: one question, one option per direction, the recommended one first labeled `(Recommended)`, each description carrying its "fits because", main trade-off and where its preview is. If the user picks "Other" with a blend, integrate it, rebuild that preview, confirm in one line.

## Step 8 — Write `.ux/style.md`

Fill `${CLAUDE_PLUGIN_ROOT}/templates/style.md` from the chosen direction (or the documented system); follow the template's own guidance for `## Source of truth` and `## Migration`. Every value in the file is the one shown in the preview — no placeholder, no invented value. `status: documented` (document) or `adopted` (propose/redesign).

Propose/redesign with a change: `templates/decision.md` → `.ux/decisions/NNN-visual-direction.md` (numbering as `/ux:design` Step 6, `flow: none`) with the rejected directions; a previous visual-direction decision becomes `status: superseded by NNN`. In propose mode, add to the inventory's `Known gaps`: "no design tokens yet — `style.md` is the reference until `/ux:implement` creates them".

## Step 9 — Commit

If the project is a git repository: stage `.ux/style.md`, `.ux/prototypes/style-*.html`, `.ux/decisions/`, `.ux/inventory.md`; commit `docs(ux): define visual direction` (propose/redesign) or `docs(ux): document existing visual style`.

## Step 10 — Report

Short and plain: mode; the chosen direction in two sentences with the two product facts that decided it (document: the intent formalized and the inconsistencies found); where the previews are; files written. Next: `/ux:design "<need>"`, or `/ux:implement NNN` — which creates the tokens (propose) or runs the migration (redesign) before touching screens.
