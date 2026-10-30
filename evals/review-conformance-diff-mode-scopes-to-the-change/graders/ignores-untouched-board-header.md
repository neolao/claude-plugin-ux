---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/board-header.md and flow 002 specify an in-place
  rename on double-click; fixtures/src/BoardHeader.tsx uses a window.prompt
  behind a Rename button instead. The change does not touch
  BoardHeader.tsx: it is absent from fixtures/change.diff.
  PASS if no finding block (SPEC/CODE/SEVERITY/KIND/ISSUE/FIX) targets
  BoardHeader.tsx, board-header.md or flow 002 (naming them in the closing
  line as untouched or not covered is fine).
  FAIL if a finding block does.
weight: 1
---

Does not report a divergence in a file the change does not touch, even with its spec in hand.
