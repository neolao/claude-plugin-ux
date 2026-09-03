---
status: documented | adopted
mode: document | propose | redesign
date: YYYY-MM-DD
decision: [NNN of the decision in .ux/decisions/, or none]
previews: [.ux/prototypes/style-<slug>.html or artifact URLs]
---

# Look and feel — [PROJECT_NAME]

> Written by `/ux:style`. This is the visual reference for `/ux:design`, `/ux:prototype`, `/ux:implement` and the review agents. Every value here is the one shown in the previews.

## Intent

[One sentence stating what the interface should feel like, then the three adjectives.]
**Not this:** [the references or moods deliberately avoided, and why they would not fit these users]

## Palette

| Token | Light | Dark | Usage | Contrast (on its usual background) |
|---|---|---|---|---|
| color.primary | | | primary actions, active states | |
| color.on-primary | | | text/icons on primary | |
| color.surface | | | page / panel background | |
| color.surface-raised | | | cards, popovers | |
| color.text | | | body text | |
| color.text-muted | | | secondary text | |
| color.border | | | dividers, input borders | |
| color.focus | | | focus ring | |
| color.error / success / warning / info | | | semantic states — never the only carrier of meaning | |

## Typography

- **Families:** [UI family + fallback stack; reading/mono family if any]
- **Scale:** [e.g. 12 / 14 / 16 / 20 / 24 / 32 — names and line-heights]
- **Weights:** [which weights, for what]
- **Figures:** [tabular numerals where numbers align; locale formatting]

## Spacing & shape

- **Base unit and scale:** [e.g. 4 px — 4 / 8 / 12 / 16 / 24 / 32 / 48]
- **Radii:** [e.g. 4 px controls, 8 px cards, 999 px pills]
- **Borders:** [weights and where they are used instead of shadows]
- **Elevation / shadows:** [levels and what sits at each]

## Density

[compact / comfortable / spacious — and the Users-table facts that justify it (expertise, frequency, screen size, task length). State the default row height / control height.]

## Motion

- **Durations & easing:** [e.g. 120 ms ease-out for state changes, 200 ms for panels; nothing over 300 ms in UI]
- **What animates:** [orientation and continuity only — what never animates]
- **Reduced motion:** [what is disabled or replaced]

## Iconography

[Set or style (outlined/filled, stroke weight), sizes, how icons pair with labels; when an icon may stand alone.]

## Imagery

[Illustrations, photos, empty-state art — style and when used; or "none".]

## Component intent

Principles, not code — the components live in the project.

- **Buttons:** [primary vs secondary vs destructive — how they differ; one primary per view]
- **Inputs:** [label position, helper/error placement, focus and error appearance]
- **Surfaces:** [how panels, cards, dialogs and menus are distinguished — border vs elevation vs tint]
- **Status & feedback:** [badges, toasts, inline messages — where each belongs]
- **Tables / lists:** [row height, zebra or lines, selection appearance] (if the product has them)

## Tone of content

[One or two lines on how copy sounds under this look — terse and precise, or warm and guiding — inherited by `/ux:design` and `expert-content`.]

## Source of truth

<!-- document / keep the current system: `existing — <token source files>`. propose: `this file — until /ux:implement creates the tokens in the project`. redesign with a new direction: the current token files, and fill ## Migration below. /ux:implement rewrites this line once tokens exist in the project. -->
[`existing — <token source files>` | `this file — until /ux:implement creates the tokens in the project`]

## Migration

_(redesign only — delete otherwise)_
<!-- Token by token: what changes, in which files, in which order — shared primitives first, then semantic tokens, then components — and what to visually re-check after each step. /ux:implement runs it in this order as its first sub-task. -->

| Order | Token / area | From | To | Files | Re-check after |
|---|---|---|---|---|---|
| 1 | | | | | |
