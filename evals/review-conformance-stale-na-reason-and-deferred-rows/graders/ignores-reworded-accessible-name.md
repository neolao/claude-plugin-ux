---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/rename-board.md § Content gives board.title.label the
  text "Board name"; fixtures/src/i18n.ts says "Name of the board" — the
  same meaning in other words.
  PASS if no finding reports the wording of the field's accessible name or
  of `board.title.label`.
  FAIL if one does.
weight: 1
---

Does not turn a synonym into a content divergence.
