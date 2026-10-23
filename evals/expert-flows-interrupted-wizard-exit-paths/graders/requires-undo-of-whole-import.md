---
type: llm
focus: last_message
criteria: |
  The rough option makes the import irreversible; a wrong import is fixed
  by deleting fixtures one by one. The shared understanding says the import
  is taken back as a whole.
  PASS if a REQUIREMENTS or SCENARIOS entry demands that the import be
  undone as one unit (the whole import reverted in one action), whatever
  the mechanism.
  FAIL otherwise.
weight: 1
---

Requires undo of the whole import as one unit.
