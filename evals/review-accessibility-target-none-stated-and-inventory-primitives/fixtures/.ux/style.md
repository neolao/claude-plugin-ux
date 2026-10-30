---
status: documented
mode: document
date: 2026-10-01
decision: none
previews: none
---

# Look and feel — Dispatch

## Intent

Calm and dense: a control-desk tool read all shift. Quiet, precise, steady.

## Palette

| Token | Light | Dark | Usage | Contrast (on its usual background) |
|---|---|---|---|---|
| color.primary | #005fcc | #4d9fff | primary actions, active states | 6.2:1 on color.surface |
| color.on-primary | #ffffff | #0b1a2b | text/icons on primary | 6.2:1 on color.primary |
| color.surface | #ffffff | #121212 | page / panel background | — |
| color.text | #1a1a1a | #f0f0f0 | body text | 16.1:1 on color.surface |
| color.text-muted | #8a8a8a | #9a9a9a | secondary text at 18 px and above, icons | 3.5:1 on color.surface — large text and icons only |
| color.border | #c9c9c9 | #3a3a3a | dividers, input borders | 1.8:1 on color.surface |
| color.focus | #005fcc | #4d9fff | focus ring | 6.2:1 on color.surface |
| color.success / color.error | #2e9e4f / #d33b3b | #4cc46e / #ff6b6b | job status — never the only carrier of meaning | 3.4:1 / 4.6:1 on color.surface |

## Typography

- **Families:** system UI stack
- **Scale:** 13 / 14 / 16 / 20 px

## Source of truth

`existing — src/tokens.css`
