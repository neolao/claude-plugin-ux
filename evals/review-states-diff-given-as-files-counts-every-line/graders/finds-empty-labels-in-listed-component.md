---
type: llm
focus: last_message
criteria: |
  fixtures/src/LabelPicker.tsx is one of the two files handed over as the
  change; it renders `labels.map` inside a <ul> with no branch for an
  empty array: a board with no labels gives an empty list with no guidance.
  PASS if a finding targets LabelPicker.tsx for the missing empty state.
  FAIL otherwise.
weight: 1
---

Reports the empty state missing from a listed file when the change is handed over as files.
