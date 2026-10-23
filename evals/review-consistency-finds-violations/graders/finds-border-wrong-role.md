---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportPanel.css sets `border: 1px solid
  var(--color-text-muted)` on `.export-panel`. style.md § Palette gives
  color.text-muted the usage "secondary text" and color.border "dividers,
  input borders"; the inventory's Radii / borders row says borders use
  `--color-border`.
  PASS if a finding reports the border color token as used for the wrong
  role and names `--color-border` (or color.border) as the token to use.
  FAIL otherwise.
weight: 1
---

Reports the token picked for a role its usage excludes.
