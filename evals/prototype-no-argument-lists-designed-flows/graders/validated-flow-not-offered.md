---
type: llm
focus: last_message
criteria: |
  .ux/flows/001-rename-from-board.md has status validated and its
  prototype: line names .ux/prototypes/001-rename-from-board.html.
  PASS if flow 001 is not among the flows offered as a choice
  (mentioning it as already validated, or as rebuildable on an explicit
  `/ux:prototype 001`, is fine).
  FAIL if 001 is offered as a flow still to prototype.
weight: 1
---

Does not offer a flow a prototype already validated.
