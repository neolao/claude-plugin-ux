---
type: llm
focus: last_message
criteria: |
  The implemented flow 001 (attach a receipt) relies on dropping a file on
  the expense row; the rough option removes that drop target.
  PASS if the reply names flow 001 (by number or by its title "attach
  receipt") and says that removing the drop target changes or breaks it —
  requiring either that 001's path be kept or that 001 be redesigned
  (/ux:design 001) rather than silently broken.
  FAIL if flow 001 is not mentioned, or the removal of the drop target is
  accepted without naming the flow it belongs to.
weight: 1
---

Names the existing flow the need contradicts and the step it loses.
