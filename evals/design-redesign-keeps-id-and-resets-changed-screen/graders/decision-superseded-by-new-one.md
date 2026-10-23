---
type: llm
focus: last_message
criteria: |
  The fixture has .ux/decisions/001-rename-from-board.md with
  `status: accepted`, `flow: 001`, saying a click elsewhere cancels; the
  flow has `decision: 001`.
  PASS if a second decision file is printed (numbered 002 or the next
  free number) with `flow: 001` and the chosen save-on-focus-leave
  option, the old decision file still exists with `status: superseded by
  <that number>`, and the printed flow's `decision:` names the new
  number.
  FAIL if the old decision was edited into the new one or deleted, if
  no new decision exists, if the old one is still `accepted`, or if the
  flow's `decision:` still says 001.
weight: 1
---

Decisions are append-only: the redesign adds one and supersedes the old.
