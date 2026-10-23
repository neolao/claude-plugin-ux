---
type: llm
focus: last_message
criteria: |
  Applying a prop replaces the placeholder in the viewport at once, where
  the artist is looking, and the panel also shows a Toast "Applied!"
  after every apply.
  PASS if the reply says the toast is unnecessary because the result is
  visible in the viewport (or requires an explicit confirmation only when
  the result is not visible), or flags the toast after every apply as
  noise.
  FAIL if the reply keeps or requires the toast after every apply, or
  does not mention it.
weight: 1
---

Does not add a confirmation on top of a visible result.
