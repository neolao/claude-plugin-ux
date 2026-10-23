---
type: llm
focus: last_message
criteria: |
  fixtures/src/BoardSummary.tsx has one primary action next to a secondary
  one, a clear title/meta hierarchy, consistent gaps, a bounded line length
  and tabular digits.
  PASS if no finding targets BoardSummary.tsx for hierarchy, spacing,
  alignment, responsive or typography defects.
  FAIL if a finding reports one of those defects on BoardSummary.tsx.
weight: 1
---

Does not flag the well-built view.
