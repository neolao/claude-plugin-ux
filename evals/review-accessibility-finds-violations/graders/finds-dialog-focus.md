---
type: llm
focus: last_message
criteria: |
  fixtures/src/ConfirmDialog.tsx opens a modal dialog but only scrolls it
  into view: focus is never moved into it, nor restored on close.
  PASS if a finding targets ConfirmDialog.tsx for missing focus management.
  FAIL otherwise.
weight: 1
---

Reports the dialog that never takes focus.
