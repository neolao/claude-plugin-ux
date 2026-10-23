---
type: llm
focus: last_message
criteria: |
  The fixture's board-detail spec marks the Undo (toast) Interactions
  row `deferred: the toast has no action slot yet — a later flow adds
  it`; the owner said the Undo stays deferred.
  PASS if the printed board-detail spec still has that row marked
  deferred (the word "deferred" with its reason), neither removed nor
  rewritten as something to build.
  FAIL if the row is gone, or no longer marked deferred.
weight: 1
---

A redesign updates in place: a row the owner keeps deferred is not silently reopened or dropped.
