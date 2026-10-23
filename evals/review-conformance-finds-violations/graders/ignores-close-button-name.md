---
type: llm
focus: last_message
criteria: |
  fixtures/src/Dialog.tsx renders the close button as "×" with no
  accessible name. No spec states that name; the gap is
  review-accessibility's.
  PASS if no finding targets the close button's accessible name (label,
  aria-label or screen-reader text).
  FAIL if one does.
weight: 1
---

Leaves an accessibility gap the spec does not state to review-accessibility.
