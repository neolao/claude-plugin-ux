---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportHistory.css uses `gap: calc(var(--space-2)
  * 2)` (computed from a token), `margin: 0`, `padding: 0`, `width: 100%`
  and `padding: var(--space-2) 0`, plus `1px solid var(--color-border)`
  — the hairline style.md § Spacing & shape and the inventory's borders
  row declare.
  PASS if no finding targets ExportHistory.css.
  FAIL if a finding reports a value in ExportHistory.css as off the scale
  or as a token bypass.
weight: 1
---

Does not flag values computed from tokens or structural literals.
