---
type: llm
focus: last_message
criteria: |
  An unreachable catalog server shows the same empty area as a tag that
  matches nothing — the inventory's Known gap.
  PASS if a REQUIREMENTS or SCENARIOS entry demands an error state for
  the unreachable server, distinct from the empty state, with a retry.
  FAIL if the two cases may still look the same, or no retry is offered.
weight: 1
---

Keeps error and empty apart.
