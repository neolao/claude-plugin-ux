---
type: llm
focus: last_message
criteria: |
  VanRow is a function defined inside src/vans/VanList.tsx and used
  nowhere else.
  PASS if the printed .ux/inventory.md Reusable components table has no
  VanRow row.
  FAIL if it has one.
weight: 1
---

Leaves a screen-local component out of the shared components table.
