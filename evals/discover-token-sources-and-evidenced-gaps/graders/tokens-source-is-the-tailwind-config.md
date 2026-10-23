---
type: llm
focus: last_message
criteria: |
  The project's colors (brand, late, offline), breakpoints (screens) and
  card radius are defined in tailwind.config.js at the root.
  PASS if the printed .ux/inventory.md Design tokens table gives
  tailwind.config.js as the Source file of the Colors row.
  FAIL if that row's Source is empty, "none", a stylesheet, or another file.
weight: 1
---

Points a token family at the file that defines it.
