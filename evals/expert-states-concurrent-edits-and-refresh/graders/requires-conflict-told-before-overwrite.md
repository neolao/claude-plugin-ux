---
type: llm
focus: last_message
criteria: |
  Enter writes the new address as is; a change the colleague made to
  that fixture since the table was loaded is overwritten without being
  detected.
  PASS if a REQUIREMENTS or SCENARIOS entry demands that a change made
  on the other console since the row was loaded be detected and shown to
  the designer before their value overwrites it, with the designer's
  typed value kept — whatever the mechanism (version or timestamp
  check, a warning with both values, a merge).
  FAIL if the silent overwrite is kept or not mentioned.
weight: 1
---

Detects the colleague's change and tells the designer before overwriting.
