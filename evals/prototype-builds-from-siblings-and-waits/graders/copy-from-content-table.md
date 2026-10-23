---
type: llm
focus: last_message
criteria: |
  The screen spec's Content table gives "Board renamed to {name}",
  "Undo", "The board could not be renamed. Retry." and "Board name"; its
  States table gives "No cards yet — cards appear here when the team
  adds them." and "This board could not be loaded. Check your connection
  and retry."
  PASS if the printed prototype HTML carries the success toast text
  ("Board renamed to" followed by a name), the error toast text ("The
  board could not be renamed. Retry.") and the empty-state text, as
  given.
  FAIL if any of the three is missing, paraphrased or replaced by
  placeholder text such as "Lorem ipsum" or "Toast message".
weight: 1
---

Real copy, inlined from the spec.
