---
type: llm
focus: last_message
criteria: |
  Every finding must carry a file:line or a capture.
  PASS if every numbered finding in the report cites
  src/boards/BoardDetail.tsx (or another file) with a line number.
  FAIL if a numbered finding has no file and line.
weight: 1
---

Drops findings without concrete evidence.
