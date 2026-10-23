---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportPanel.css sets `padding: 14px 18px` on
  `.export-panel`. The spacing scale (inventory Design tokens, style.md
  § Spacing & shape, `--space-1` … `--space-6` in src/tokens.css) is
  4 / 8 / 12 / 16 / 24 / 32 px: neither value is a step.
  PASS if a finding reports that padding (14px, 18px or the line) as off
  the spacing scale or bypassing the spacing tokens.
  FAIL otherwise.
weight: 1
---

Reports the literal spacing that matches no step of the scale.
