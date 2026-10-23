---
type: llm
focus: last_message
criteria: |
  The "Archive client" button is not rendered while the reason is empty
  and appears once the field has text.
  PASS if a REQUIREMENTS entry demands that the button stay visible in a
  disabled state while the reason is empty, or flags the hidden button.
  FAIL if the button may still be hidden, or the point is not mentioned.
weight: 1
---

Shows a disabled control instead of hiding it.
