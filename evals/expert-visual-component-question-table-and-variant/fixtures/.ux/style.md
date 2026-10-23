---
status: adopted
mode: propose
date: 2026-09-14
decision: 001
previews: [.ux/prototypes/style-desk.html]
---

# Look and feel — Stagebook

> Written by `/ux:style`. This is the visual reference for `/ux:design`, `/ux:prototype`, `/ux:implement` and the review agents. Every value here is the one shown in the previews.

## Intent

A desk tool that reads at a glance in a dark theatre: calm, dense, exact.
**Not this:** consumer dashboards with cards and illustrations — the technicians compare 120 rows, they do not browse.

## Palette

| Token | Light | Dark | Usage | Contrast (on its usual background) |
|---|---|---|---|---|
| color.primary | #1d4ed8 | #60a5fa | primary actions, active states | 6.3:1 / 7.1:1 |
| color.on-primary | #ffffff | #0b1220 | text/icons on primary | 6.3:1 / 7.1:1 |
| color.surface | #ffffff | #0f172a | page / panel background | — |
| color.surface-raised | #f8fafc | #1e293b | cards, popovers | — |
| color.text | #0f172a | #f1f5f9 | body text | 16:1 / 15:1 |
| color.text-muted | #475569 | #94a3b8 | secondary text | 7.5:1 / 6.9:1 |
| color.border | #e2e8f0 | #334155 | dividers, input borders | 3.1:1 / 3.2:1 |
| color.focus | #1d4ed8 | #60a5fa | focus ring | 6.3:1 / 7.1:1 |
| color.error / success / warning / info | #b91c1c / #15803d / #b45309 / #1d4ed8 | #f87171 / #4ade80 / #fbbf24 / #60a5fa | semantic states — never the only carrier of meaning | ≥ 4.5:1 |

## Typography

- **Families:** Inter, system-ui fallback
- **Scale:** 12 / 13 / 14 / 18 / 24 — line-heights 16 / 18 / 20 / 24 / 32
- **Weights:** 400 body, 600 headings and emphasis
- **Figures:** tabular numerals on channels, addresses and counts

## Spacing & shape

- **Base unit and scale:** 4 px — 4 / 8 / 12 / 16 / 24 / 32
- **Radii:** 4 px controls, 6 px cards
- **Borders:** 1 px color.border between rows and around inputs; no shadows on tables
- **Elevation / shadows:** one level, popovers only

## Density

compact — daily experts, 120 fixtures compared during a focus session on a 1366 px laptop. Row height 32 px, control height 28 px.

## Motion

- **Durations & easing:** 120 ms ease-out for state changes; nothing over 200 ms
- **What animates:** hover and focus states, popovers; tables never animate
- **Reduced motion:** transitions disabled

## Iconography

Lucide outlined, 16 px, always next to a label in tables.

## Imagery

none

## Component intent

- **Buttons:** one primary per view; secondary outlined; destructive outlined in color.error
- **Inputs:** label above, error under the field in color.error with its icon
- **Surfaces:** tables flat on color.surface; cards only for history entries
- **Status & feedback:** Badge in the row; a saved cell shows its value in place, no toast
- **Tables / lists:** 32 px rows, 1 px lines, selected row tinted with color.primary at 8 %

## Tone of content

Terse and exact: the words of the lighting desk.

## Source of truth

`existing — src/styles/tokens.css`
