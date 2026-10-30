---
type: llm
focus: last_message
criteria: |
  fixtures/src/GridToolbar.tsx is a `role="toolbar"` holding five native
  buttons, each a tab stop, with no roving tabindex and no arrow-key
  handling between them.
  PASS if a finding targets GridToolbar.tsx for the composite widget whose
  every item is a tab stop or that has no arrow-key navigation (roving
  tabindex or equivalent).
  FAIL otherwise.
weight: 1
---

Reports the toolbar whose every button is a tab stop.
