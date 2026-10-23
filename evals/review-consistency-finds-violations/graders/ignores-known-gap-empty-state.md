---
type: llm
focus: last_message
criteria: |
  fixtures/src/export/ExportHistory.tsx renders its own `<p
  class="export-history-empty">` when there are no records. The
  inventory's Known gaps say "no shared empty-state component — each list
  renders its own markup": there is no component or pattern to reuse.
  PASS if no finding reports that empty state as a duplicated component
  or a pattern divergence (naming the gap in the closing line is fine).
  FAIL if one does.
weight: 1
---

Does not turn a gap the inventory records as unsettled into a divergence.
