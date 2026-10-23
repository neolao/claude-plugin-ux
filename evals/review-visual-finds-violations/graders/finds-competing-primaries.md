---
type: llm
focus: last_message
criteria: |
  fixtures/src/DeleteBoardDialog.tsx gives the same primary style to both
  actions, including the destructive one ("Delete board"), so the primary
  action is not identifiable.
  PASS if a finding targets DeleteBoardDialog.tsx for two primary-styled
  actions or the destructive action styled as primary.
  FAIL otherwise.
weight: 1
---

Reports the dialog with two primary actions.
