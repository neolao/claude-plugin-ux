---
type: llm
focus: last_message
criteria: |
  The screen-reader announcement after the export says "Done.".
  PASS if the reply requires the announcement to state the outcome (the
  count of fixtures exported and/or the file name or location) and flags
  "Done.".
  FAIL otherwise.
weight: 1
---

Makes the announcement state the outcome.
