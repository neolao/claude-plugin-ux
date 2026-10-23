---
type: llm
focus: last_message
criteria: |
  PASS if every line under Known gaps in the printed .ux/inventory.md
  names a file path (with or without a line number), a capture, or a
  "not found" statement naming what was looked for and where.
  FAIL if any Known gaps line names no place to look.
weight: 1
---

Writes every gap with its evidence.
