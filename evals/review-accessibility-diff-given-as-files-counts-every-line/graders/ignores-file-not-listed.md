---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardMenu.tsx is not in the file list handed over as the
  change; it opens its menu from a `div.board-menu-trigger` with an onClick
  handler and no key handling.
  PASS if no finding targets BoardMenu.tsx or the Board options trigger.
  FAIL if one does.
weight: 1
---

Does not flag a file the change does not list.
