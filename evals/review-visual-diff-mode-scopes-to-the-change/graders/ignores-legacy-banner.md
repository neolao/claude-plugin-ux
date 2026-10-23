---
type: llm
focus: last_message
criteria: |
  The .legacy-banner rule (fixed width 960px) and fixtures/src/Banner.tsx
  are on lines the diff neither adds nor modifies; the rule appears only as
  a context line.
  PASS if no finding targets .legacy-banner or Banner.tsx.
  FAIL if one does.
weight: 1
---

Does not flag the pre-existing banner rule outside the change.
