---
type: llm
focus: last_message
criteria: |
  src/boards/BoardArchived.tsx, reached after "Archive board" on Board
  detail, still renders a title and one sentence: no navigation bar, no
  link, no way to undo the archive. The previous audit's F1.
  PASS if a finding reports the archived page as a dead end (no way forward
  or back) or the archive as having no undo.
  FAIL otherwise.
weight: 1
---

Still reports the persisting dead end.
