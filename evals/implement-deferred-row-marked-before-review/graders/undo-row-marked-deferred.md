---
type: llm
focus: last_message
criteria: |
  The fixture's .ux/screens/board-detail.md Interactions table has a row
  "Undo (toast) | click within 6 s | the previous name is saved back…";
  the owner deferred it.
  PASS if, in the printed .ux/screens/board-detail.md, that row (or the
  Undo it describes) is marked deferred with a reason — the word
  "deferred" followed by why or until when — rather than deleted or left
  as it was.
  FAIL if the row is unchanged, removed, or marked without a reason.
weight: 1
---

Marks the deferred row in the spec, with its reason, instead of deleting it or leaving it as a gap.
