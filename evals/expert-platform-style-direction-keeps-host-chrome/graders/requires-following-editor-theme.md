---
type: llm
focus: last_message
criteria: |
  The direction keeps the panel light whatever theme the editor runs,
  while most artists run the dark theme and the panel is docked next to
  the Inspector.
  PASS if a REQUIREMENTS entry demands that the panel follow the editor's
  theme (dark when the editor is dark, light when it is light — the
  editor's theme variables), or flags the always-light panel as fighting
  the host.
  FAIL otherwise.
weight: 1
---

Dark mode follows the host's setting.
