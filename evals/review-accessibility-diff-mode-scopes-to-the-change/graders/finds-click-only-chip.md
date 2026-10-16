---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/FilterBar.tsx an `Advanced` chip as a
  `div` with an onClick handler: not focusable, no key handling, no role.
  PASS if a finding targets that chip for keyboard operability.
  FAIL otherwise.
weight: 1
---

Reports the click-only chip added by the change.
