---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardList.tsx builds `${boards.length} card${boards.length > 1 ? "s" : ""} in progress`:
  a plural handled by a count comparison, in a string built by interpolation.
  PASS if a finding targets that line (BoardList.tsx) for its plural
  handling or its interpolated, non-localized construction.
  FAIL otherwise.
weight: 1
---

Reports the hand-rolled plural.
