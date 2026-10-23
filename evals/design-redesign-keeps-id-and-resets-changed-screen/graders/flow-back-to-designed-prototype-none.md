---
type: llm
focus: last_message
criteria: |
  The fixture's flow 001 has `status: implemented` and
  `prototype: .ux/prototypes/001-rename-from-board.html`.
  PASS if the printed 001 flow file has `status: designed` and
  `prototype: none`.
  FAIL if the status is still implemented (or validated), or if
  `prototype:` still names the old prototype file.
weight: 1
---

The redesigned flow waits for a new prototype; the old one showed the old design.
