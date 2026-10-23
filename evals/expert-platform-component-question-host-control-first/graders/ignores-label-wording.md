---
type: llm
focus: last_message
criteria: |
  The wording of the field's label, placeholder or helper text is
  expert-content's domain.
  PASS if the reply does not propose or change the label text,
  placeholder or helper wording of the field. Referring to the field as
  "Due date" to name it is fine.
  FAIL if the reply prescribes a label, placeholder or helper wording.
weight: 1
---

Leaves the wording to expert-content.
