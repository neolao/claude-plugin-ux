---
type: llm
focus: last_message
criteria: |
  The board-detail spec / flow 001 is designed, not implemented.
  PASS if the final report, outside its numbered findings (a "Not
  assessed" section, the Specs line with a status, or an equivalent line),
  says that board-detail or flow 001 (the rename) is designed / not
  implemented / not assessed for conformance.
  FAIL if the report does not mention it at all.
weight: 1
---

Names the spec it left out, so the reader knows why nothing was checked against it.
