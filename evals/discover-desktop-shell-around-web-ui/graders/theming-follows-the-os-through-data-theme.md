---
type: llm
focus: last_message
criteria: |
  src/renderer/styles/tokens.css overrides the color tokens under
  :root[data-theme="dark"]; electron/main.ts sends the OS theme
  (nativeTheme.shouldUseDarkColors) to the renderer, which sets
  document.documentElement.dataset.theme in src/renderer/App.tsx.
  PASS if the printed .ux/inventory.md Theming row names the data-theme
  (or [data-theme="dark"]) mechanism with tokens.css as a source, and says
  the theme follows the OS (or system / nativeTheme) setting.
  FAIL if the row is empty, says "single theme", or does not say the theme
  follows the OS.
weight: 1
---

Fills Theming with the mechanism and what it follows.
