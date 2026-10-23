---
type: llm
focus: last_message
criteria: |
  The screen template's States table has five rows: Empty, Loading,
  Partial, Success, Error.
  PASS if, in the printed Library screen spec, each of the five rows
  either has its Trigger, "What the user sees" and Primary action cells
  filled, or is marked `n/a:` followed by a reason specific to this
  screen.
  FAIL if any row is blank, missing, or marked n/a without a reason.
weight: 1
---

Every States row written from expert-states' rows, none left blank.
