---
type: llm
focus: last_message
criteria: |
  The close button (icon-only, no accessible name) in
  fixtures/src/FilterBar.tsx is on lines the diff neither adds nor modifies.
  PASS if no finding targets the close button or its missing name.
  FAIL if one does.
weight: 1
---

Does not flag the pre-existing close button outside the diff.
