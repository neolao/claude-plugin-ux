---
type: llm
focus: last_message
criteria: |
  The wording of the "Reason required" message and of the buttons is
  expert-content's domain.
  PASS if no REQUIREMENTS entry rewrites "Reason required", "Keep" or
  "Archive client", or proposes other wording for them. Naming them to
  refer to the elements is fine.
  FAIL if a REQUIREMENTS entry proposes a wording.
weight: 1
---

Leaves the wording to expert-content.
