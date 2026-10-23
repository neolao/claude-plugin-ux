---
type: llm
focus: last_message
criteria: |
  src/boards/BoardArchived.tsx, reached after "Archive board" on Board
  detail, renders a title and one sentence: no navigation bar, no link, no
  way to undo the archive — and nothing in src/ restores an archived board.
  PASS if a finding reports the archived page as a dead end (no way forward
  or back) or the archive as having no undo.
  FAIL otherwise.
weight: 1
---

Reports the page that leads nowhere after the archive.
