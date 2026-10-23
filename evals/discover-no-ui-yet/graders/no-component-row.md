---
type: llm
focus: last_message
criteria: |
  PASS if the printed .ux/inventory.md Reusable components table has no
  row (header only, or an explicit "none").
  FAIL if any component row is present.
weight: 1
---

Does not inventory components that do not exist.
