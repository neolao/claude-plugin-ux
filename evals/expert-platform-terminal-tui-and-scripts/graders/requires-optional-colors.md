---
type: llm
focus: last_message
criteria: |
  Colors are always on and NO_COLOR is ignored.
  PASS if a REQUIREMENTS entry demands that colors be optional — honoring
  NO_COLOR, a --no-color flag, or off when stdout is not a terminal.
  FAIL otherwise.
weight: 1
---

Makes colors optional and honors NO_COLOR.
