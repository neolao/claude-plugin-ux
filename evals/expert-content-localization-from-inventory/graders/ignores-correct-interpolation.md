---
type: llm
focus: last_message
criteria: |
  The success toast is correct: keyed (booking.toast.success), one message
  with a named placeholder, "Room {room} booked".
  PASS if the reply does not flag the toast's key, its placeholder or its
  mechanism as a localization problem (proposing a different wording for
  the same keyed message is fine).
  FAIL if the reply presents the toast as concatenated, hardcoded, wrongly
  keyed or otherwise not localizable.
weight: 1
---

Does not flag the correctly keyed and interpolated toast.
