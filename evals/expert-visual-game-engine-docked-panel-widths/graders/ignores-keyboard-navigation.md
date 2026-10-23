---
type: llm
focus: last_message
criteria: |
  The rows are mouse-only, with no focus and no arrow keys — keyboard
  operability is expert-accessibility's domain.
  PASS if no REQUIREMENTS entry demands keyboard navigation between the
  rows, focusable rows or arrow-key handling. Requiring that a selected
  or focused row *look* distinct is fine.
  FAIL if a REQUIREMENTS entry requires the keyboard navigation itself.
weight: 1
---

Leaves keyboard operability to expert-accessibility.
