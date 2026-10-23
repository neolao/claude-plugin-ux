---
type: llm
focus: last_message
criteria: |
  .ux/flows/003-delete-from-settings.md has status implemented and its
  screen settings-boards has status implemented with source filled.
  PASS if flow 003 is not among the flows offered as a choice (mentioning
  it as already implemented is fine).
  FAIL if 003 is offered as a flow to implement.
weight: 1
---

Does not offer a flow that is already implemented.
