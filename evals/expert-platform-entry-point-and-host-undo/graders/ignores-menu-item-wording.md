---
type: llm
focus: last_message
criteria: |
  The wording of the menu item — its exact label, capitalization,
  whether it ends with an ellipsis — is expert-content's domain.
  PASS if no REQUIREMENTS entry prescribes the label text, the
  capitalization rule or the ellipsis of the menu item or the banner.
  Referring to the action as "Duplicate" or "Duplicate preset" to name
  it is fine.
  FAIL if a REQUIREMENTS entry prescribes the wording, casing or ellipsis
  rule of a string.
weight: 1
---

Leaves the wording of menu items and messages to expert-content.
