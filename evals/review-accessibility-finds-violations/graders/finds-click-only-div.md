---
type: llm
focus: last_message
criteria: |
  fixtures/src/CardRow.tsx opens a card from a click handler on a `div`
  that is not focusable and has no key handling.
  PASS if a finding targets CardRow.tsx for keyboard operability (not
  focusable, no key handler, or no button/link role).
  FAIL otherwise.
weight: 1
---

Reports the click-only div.
