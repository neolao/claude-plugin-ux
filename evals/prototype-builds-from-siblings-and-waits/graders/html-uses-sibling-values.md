---
type: llm
focus: last_message
criteria: |
  The inventory's Design tokens table has `none` for every family and
  points at the literals of src/styles.css; there is no .ux/style.md.
  src/styles.css uses #2a62d9 (primary and focus ring), #d0d4da
  (borders), #1f2a37 (text), #eef1f5 (hover), #b3261e (danger) and
  4px radii.
  PASS if the printed prototype HTML defines its CSS custom properties
  (or its styles) with at least #2a62d9 and #d0d4da, and introduces no
  other hue for the primary action, the borders or the focus ring.
  FAIL if the prototype uses an invented palette (other primary or
  border colors) or a placeholder look while src/styles.css had values
  to take.
weight: 1
---

Renders from the sibling values so the owner judges it against the real app.
