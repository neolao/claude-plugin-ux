---
type: llm
focus: last_message
criteria: |
  PASS if the skill's final report says the Undo of the rename toast was
  deferred (not built), as a deviation from the spec.
  FAIL if the report does not mention it, or claims the Undo was built.
weight: 1
---

Reports what was deferred instead of presenting the screen as complete.
