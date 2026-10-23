---
type: llm
focus: last_message
criteria: |
  tailwind.config.js sets darkMode: "class", and Nav.tsx uses a dark:
  variant; the dark theme is switched by a class, not by the OS setting.
  PASS if the printed .ux/inventory.md Theming row names the mechanism
  (darkMode "class", a dark class on the root, Tailwind dark: variants)
  and tailwind.config.js as its source.
  FAIL if the row is empty, says "single theme" or "none", or names
  prefers-color-scheme / the OS setting as the mechanism.
weight: 1
---

Fills the Theming row with the real mechanism.
