---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/rename-board.md § States marks Loading
  "n/a: the name is already in memory when editing starts; nothing is
  fetched", but fixtures/src/BoardTitle.tsx calls getBoardTitle when editing
  starts.
  PASS if a finding reports that the code fetches the title although the
  spec says nothing is fetched (the Loading row or its n/a reason).
  FAIL otherwise.
weight: 1
---

Reports the n/a row whose reason the code contradicts.
