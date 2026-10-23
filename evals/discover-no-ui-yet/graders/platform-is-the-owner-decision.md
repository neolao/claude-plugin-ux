---
type: llm
focus: last_message
criteria: |
  The code has no UI; the owner said the coming dashboard is web.
  PASS if the printed .ux/product.md Platform line says web.
  FAIL if it is empty, says none, or names another platform.
weight: 1
---

Takes the platform from the owner's decision when the code cannot tell.
