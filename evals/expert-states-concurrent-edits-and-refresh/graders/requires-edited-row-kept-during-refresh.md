---
type: llm
focus: last_message
criteria: |
  A reload replaces the cell being typed in by the server's value while
  the designer is typing.
  PASS if a REQUIREMENTS or SCENARIOS entry says that a refresh never
  replaces the row or cell under edit (the typed value is kept until
  Enter or Esc), whatever the mechanism (the refresh skips the edited
  row, is paused during the edit, or merges without touching it).
  FAIL otherwise.
weight: 1
---

Never replaces a row under edit by a refresh.
