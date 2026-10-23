---
type: llm
focus: last_message
criteria: |
  Theming follows the OS, light and dark; the direction writes no dark
  palette and plans to derive it with a CSS filter inverting the light
  one.
  PASS if a REQUIREMENTS entry demands that every palette role (surface,
  text, border, primary, semantic colors…) carry its own dark value in the
  direction, or flags the filter-inverted dark mode.
  FAIL if the filter-derived dark mode is kept or not mentioned.
weight: 1
---

Requires a dark value per role, not an inverted light palette.
