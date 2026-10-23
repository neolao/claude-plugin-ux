---
type: llm
focus: last_message
criteria: |
  The theme follows the OS: electron/main.ts sends nativeTheme to the
  renderer, which sets data-theme; tokens.css holds the dark values. The
  owner's answers say nothing about theming.
  PASS if the printed block's theming line says the theme follows the OS
  (or system / nativeTheme) with light and dark values, and attributes
  it to tokens.css, electron/main.ts or the data-theme mechanism — on
  the line or in Facts looked up.
  FAIL if theming is missing from the block, presented as the owner's
  choice, or given with no source.
weight: 1
---

A fact the code settles is cited, not asked.
