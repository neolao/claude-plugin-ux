---
type: llm
focus: last_message
criteria: |
  The owner said not to plan the Undo.
  PASS if no settled line of the printed block (the "- <title>: <answer>"
  lines) says the toast is extended with an action, a duration or an
  Undo, or that the Undo is built.
  FAIL if a settled line plans or builds the Undo, or extends
  src/toast.ts with an action slot.
weight: 1
---

Nothing is settled for a row the owner deferred.
