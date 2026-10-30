---
type: llm
focus: last_message
criteria: |
  fixtures/src/LabelPicker.tsx is one of the two files handed over as the
  change; its Save labels button calls `saveLabels(boardId, selected)`
  without awaiting, catching or acknowledging it: no feedback, no error
  handling, no in-progress state.
  PASS if a finding targets that Save labels action (LabelPicker.tsx) for
  missing feedback, loading state or error handling.
  FAIL otherwise.
weight: 1
---

Reports the save action without feedback in a listed file.
