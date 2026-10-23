---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportPanel.css sets `background: #ffffff` on
  `.export-panel`. `#ffffff` is the light value of `--color-surface`
  (src/tokens.css), which `[data-theme="dark"]` redefines; the inventory's
  Theming row and style.md Palette's Dark column both record the second
  theme.
  PASS if a finding reports that background literal — as a token bypass
  of `--color-surface`, as a value fixed for one theme, or both.
  FAIL otherwise.
weight: 1
---

Reports the literal that equals a token's value and stays light in dark mode.
