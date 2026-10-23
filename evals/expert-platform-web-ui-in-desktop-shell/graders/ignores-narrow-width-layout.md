---
type: llm
focus: last_message
criteria: |
  The rough option says what stays on one line and what wraps at narrow
  widths. What wraps, stacks or truncates is expert-visual's domain.
  PASS if no REQUIREMENTS entry prescribes what the CueRow or the list
  wraps, stacks, truncates or scrolls at narrow widths. Naming the
  smallest supported window width as a constraint is fine.
  FAIL if a REQUIREMENTS entry prescribes the wrapping, stacking or
  truncation rule.
weight: 1
---

Leaves the narrow-width layout to expert-visual.
