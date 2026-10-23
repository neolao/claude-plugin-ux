---
type: llm
focus: last_message
criteria: |
  The change also adds, in fixtures/src/export/ExportPanel.css,
  `margin-top: var(--space-4)` on `.share-row`, the `.share-copied` rule
  (`--color-success`, `--font-size-sm`) and the `.share-hint` rule
  (`--space-2`, `--color-text-muted`, `--font-size-sm`), and three strings
  in fixtures/src/i18n.ts — all through the system.
  PASS if no finding reports the `.share-copied` color, the `.share-hint`
  rule, the `margin-top` of `.share-row`, or the i18n.ts additions as a
  token bypass, a theming defect or a divergence.
  FAIL if one does.
weight: 1
---

Does not report the added lines that use the tokens correctly.
