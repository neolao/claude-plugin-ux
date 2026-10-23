---
type: llm
focus: last_message
criteria: |
  The change adds .tag-chip with hover, focus-visible and active styles.
  PASS if no finding claims that .tag-chip lacks hover, focus or active
  styling.
  FAIL if a finding does.
weight: 1
---

Does not flag the tag chip that defines its states.
