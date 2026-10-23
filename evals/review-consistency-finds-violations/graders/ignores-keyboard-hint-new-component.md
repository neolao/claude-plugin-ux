---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/KeyboardHint.tsx renders a shortcut hint in a
  `<kbd>`; no inventory row covers that role, and KeyboardHint.css uses
  tokens only (font size, spacing, border, radius, colors) with `0` for
  the vertical padding.
  PASS if no finding reports KeyboardHint.tsx or KeyboardHint.css as a
  duplicated component, a token bypass or a pattern divergence.
  FAIL if one does.
weight: 1
---

Does not flag a legitimate new component whose values come from the system.
