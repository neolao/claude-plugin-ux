---
type: llm
focus: last_message
criteria: |
  The owner chose the entry point in their answers; it is not in
  product.md or the inventory.
  PASS if the entry point line of the printed block is marked as the
  user's choice (or an equivalent tag saying the owner decided it).
  FAIL if it is marked recommended, or listed under Facts looked up as
  something the code settled.
weight: 1
---

A decision the owner made is recorded as theirs, not as a recommendation taken.
