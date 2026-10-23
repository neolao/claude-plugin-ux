---
status: documented
mode: document
date: 2026-09-12
decision: none
previews: none
---

# Look and feel — Taskboard

> Written by `/ux:style`. Documents the system as it exists in `src/tokens.css`.

## Palette

| Token | Light | Dark | Usage | Contrast (on its usual background) |
|---|---|---|---|---|
| color.primary | #2563eb | #60a5fa | primary actions, active states | 4.6:1 on surface |
| color.on-primary | #ffffff | #0b1220 | text/icons on primary | 4.6:1 |
| color.surface | #ffffff | #111827 | page / panel background | — |
| color.surface-raised | #f8fafc | #1f2937 | cards, popovers | — |
| color.text | #111827 | #f9fafb | body text | 16:1 |
| color.text-muted | #6b7280 | #9ca3af | secondary text | 4.8:1 |
| color.border | #d1d5db | #374151 | dividers, input borders | — |
| color.focus | #2563eb | #60a5fa | focus ring | — |
| color.error / success | #dc2626 / #16a34a | #f87171 / #4ade80 | semantic states — never the only carrier of meaning | 4.5:1 |

## Typography

- **Families:** system UI stack
- **Scale:** sm 12 / md 14 / lg 16 — line-height 1.4

## Spacing & shape

- **Base unit and scale:** 4 px — 4 / 8 / 12 / 16 / 24 / 32
- **Radii:** 4 px controls, 8 px cards
- **Borders:** 1 px hairlines in `color.border`, no shadows

## Density

comfortable — occasional users, short tasks. Control height 32 px.

## Source of truth

`existing — src/tokens.css`
