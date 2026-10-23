---
type: llm
focus: last_message
criteria: |
  The change adds `.share-row { gap: 10px; }` in
  fixtures/src/export/ExportPanel.css. The spacing scale (inventory Design
  tokens, style.md § Spacing & shape, `--space-1` … `--space-6` in
  src/tokens.css) is 4 / 8 / 12 / 16 / 24 / 32 px: 10px is not a step.
  PASS if a finding reports that gap (10px or the `.share-row` line) as off
  the spacing scale or bypassing the spacing tokens.
  FAIL otherwise.
weight: 1
---

Reports the literal spacing the change adds.
