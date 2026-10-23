---
type: llm
focus: last_message
criteria: |
  PASS if the printed .ux/product.md has a Users table naming accountants
  and a Jobs to be done list with the overdue, paid and issue jobs, and its
  Platform line says web.
  FAIL if product.md was not written, or lacks one of those.
weight: 1
---

Writes the product context even when there is no UI to inventory.
