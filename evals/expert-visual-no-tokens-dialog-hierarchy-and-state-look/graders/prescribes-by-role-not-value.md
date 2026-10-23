---
type: llm
focus: last_message
criteria: |
  The project has no design tokens and no .ux/style.md; the rough
  option carries literal values (#2563eb, 13 px).
  PASS if the REQUIREMENTS prescribe colors and sizes by role or token
  (the primary, a destructive or error color, a secondary style, a
  spacing step) and the reply names once that the project has no tokens
  or style.md to take values from (pointing at /ux:style or at creating
  tokens is fine). Quoting the option's own literals to flag them is
  fine.
  FAIL if a REQUIREMENTS entry prescribes a new literal value (a hex
  color, a px size) as the value to use, or the token gap is not
  mentioned.
weight: 1
---

Prescribes by role when there is no system to take values from.
