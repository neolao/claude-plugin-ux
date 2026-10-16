---
type: llm
focus: last_message
criteria: |
  The change adds a sort button with an icon only but with
  aria-label="Sort cards".
  PASS if no finding claims that the sort button lacks an accessible name.
  FAIL if a finding does.
weight: 1
---

Does not flag the correctly named sort button.
