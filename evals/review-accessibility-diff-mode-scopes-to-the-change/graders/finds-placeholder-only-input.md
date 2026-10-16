---
type: llm
focus: last_message
criteria: |
  The change adds in fixtures/src/FilterBar.tsx a search input whose only
  label is its placeholder: no <label>, aria-label or aria-labelledby.
  PASS if a finding targets that input for the missing programmatic label.
  FAIL otherwise.
weight: 1
---

Reports the placeholder-only search input.
