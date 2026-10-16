---
type: llm
focus: last_message
criteria: |
  fixtures/src/styles.css gives `.settings-link` light gray text (#c8c8c8)
  on white, far below 4.5:1.
  PASS if a finding reports the low contrast of the settings link (styles.css
  or SettingsLink.tsx).
  FAIL otherwise.
weight: 1
---

Reports the low-contrast link.
