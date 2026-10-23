---
type: llm
focus: last_message
criteria: |
  The trash IconButton shows only an icon; nothing in the rough option gives
  it a name for VoiceOver or TalkBack.
  PASS if a REQUIREMENTS entry demands an accessibility label (accessible
  name, accessibilityLabel, content description) on the trash button.
  FAIL otherwise.
weight: 1
---

Requires a name on the icon-only trash button.
