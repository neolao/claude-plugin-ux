---
type: llm
focus: last_message
criteria: |
  .ux/flows/ holds 001-rename-from-board.md (status validated) and
  002-undo-archive.md (status designed); neither is implemented.
  PASS if the repeated last message names both flows 001 and 002 as the
  ones left to implement, each with its status (validated / designed),
  and asks which one to implement.
  FAIL if either flow is missing, a status is missing or wrong, or no
  question is asked.
weight: 1
---

Lists what is left to build, with its status, and asks.
