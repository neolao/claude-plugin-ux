---
type: llm
focus: last_message
criteria: |
  Which menu holds the item, its accelerator and its OS-specific
  placement are expert-platform's domain.
  PASS if no REQUIREMENTS entry demands a keyboard accelerator, moving the
  item to another menu, or an OS-specific menu placement.
  FAIL if a REQUIREMENTS entry requires one of those.
weight: 1
---

Does not place the menu item or assign its accelerator.
