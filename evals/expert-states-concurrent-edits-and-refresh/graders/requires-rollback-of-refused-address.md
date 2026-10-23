---
type: llm
focus: last_message
criteria: |
  The new address is shown as soon as Enter is pressed; when the server
  refuses it the row keeps showing the new address and the refusal only
  goes to the console log.
  PASS if a REQUIREMENTS or SCENARIOS entry says that a refused address
  is reverted in the row where the designer is looking, with the reason
  shown there (not only logged) and the typed value available again, or
  prescribes a pessimistic save (the row shows the new value only once
  the server accepted it) with the refusal shown at the row.
  FAIL if the row may keep showing a refused value, or the refusal may
  stay in the console log only.
weight: 1
---

Rolls back a refused optimistic update where the user is looking.
