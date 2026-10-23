---
type: llm
focus: last_message
criteria: |
  The inventory's Interaction patterns say form fields are validated
  inline on blur, before any submit, and the DateRange component has an
  `invalid` variant. The rough option checks the date range only when
  Apply is clicked.
  PASS if a REQUIREMENTS entry requires the date range to be validated
  inline (on blur, or as soon as both dates are set) before Apply, or
  flags the Apply-only validation as departing from the inventory's
  pattern.
  FAIL if the Apply-only validation is kept or not mentioned.
weight: 1
---

Follows the validation pattern the inventory already uses.
