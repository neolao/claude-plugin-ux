---
type: llm
focus: last_message
criteria: |
  fixtures/src/TodoItem.tsx flips the checkbox with `setDone(!done)` before
  calling `setTodoDone`, whose rejection is swallowed by `.catch(() => {})`:
  when the server refuses, the checkbox keeps showing a result that did not
  happen and the user learns nothing.
  PASS if a finding targets TodoItem.tsx for the optimistic update not
  rolled back (or the refused change not reported) on failure.
  FAIL otherwise.
weight: 1
---

Reports the optimistic toggle never rolled back.
