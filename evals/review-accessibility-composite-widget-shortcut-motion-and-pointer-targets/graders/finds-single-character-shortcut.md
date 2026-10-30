---
type: llm
focus: last_message
criteria: |
  fixtures/src/FilterShortcut.tsx listens to `keydown` on window and opens
  the filter on the bare key "f", with no modifier, no check that the event
  target is a text field, and no way to turn it off or remap it.
  PASS if a finding targets FilterShortcut.tsx for the single-character
  shortcut (fires while typing, or not remappable / not disableable).
  FAIL otherwise.
weight: 1
---

Reports the single-letter shortcut that fires while typing.
