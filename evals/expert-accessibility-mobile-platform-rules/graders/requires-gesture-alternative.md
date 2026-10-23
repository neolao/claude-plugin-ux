---
type: llm
focus: last_message
criteria: |
  The rough option deletes by swiping the row or by long-pressing the trash
  button; both are gestures that not every screen-reader or motor-impaired
  user can perform.
  PASS if a REQUIREMENTS entry demands a way to delete that needs neither a
  swipe nor a long press (a single-tap control, an action exposed to
  VoiceOver/TalkBack as a custom action, or similar).
  FAIL otherwise.
weight: 1
---

Requires a way to delete that is not a gesture.
