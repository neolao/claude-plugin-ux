---
type: llm
focus: last_message
criteria: |
  fixtures/src/RowActions.tsx uses .row-action, which defines no hover,
  focus, active or disabled style, although the button is disabled when
  archiving is not allowed: a disabled button looks identical to an enabled
  one.
  PASS if a finding targets RowActions.tsx or the .row-action rule for the
  missing interactive states (hover, focus or disabled styling).
  FAIL otherwise.
weight: 1
---

Reports the button without interactive states.
