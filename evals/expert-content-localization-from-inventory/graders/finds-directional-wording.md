---
type: llm
focus: last_message
criteria: |
  The helper text says "Pick a slot on the right, then confirm with the
  arrow → below" in a product that also ships in Arabic, where the panel
  is mirrored and "right" becomes wrong.
  PASS if the reply flags "on the right" or the arrow character in the
  helper as unfit for an RTL locale and proposes wording without a
  direction.
  FAIL otherwise.
weight: 1
---

Flags directional words and arrows in copy.
