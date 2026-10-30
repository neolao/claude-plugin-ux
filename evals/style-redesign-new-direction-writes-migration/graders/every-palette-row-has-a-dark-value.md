---
type: llm
focus: last_message
criteria: |
  The inventory's Theming row says the theme follows the OS with dark
  overrides in tokens.css: the product has theming.
  PASS if every row of the printed .ux/style.md Palette table has a
  non-empty Dark cell (a color value, or the same value as Light stated
  explicitly).
  FAIL if any Palette row has an empty Dark cell or the Dark column is
  missing.
weight: 1
---

A themed product gets both values for every role.
