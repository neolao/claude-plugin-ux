---
type: llm
focus: last_message
criteria: |
  src/toast.ts exports toast(kind, message) with no action slot; the
  context named it as the contradiction.
  PASS if the printed block's Facts looked up line (or the deferred line
  itself) names src/toast.ts as having no action slot, attributed to the
  code or to the Step 2 mapping.
  FAIL if the missing action slot is presented as something the owner
  was asked, or is absent from the block.
weight: 1
---

A contradiction found in the code is cited as a fact, not asked.
