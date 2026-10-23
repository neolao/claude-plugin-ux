---
type: llm
focus: last_message
criteria: |
  fixtures/src/BookingPanel.tsx shows the success toast with
  `t("booking.toast.success", { room: roomName, start:
  formatTime(slot.start) })`; the message is `{room} booked from
  {start}` (en.json) and the time is formatted by Intl.
  PASS if no finding targets `booking.toast.success`, its text, or the
  toast line.
  FAIL if one does.
weight: 1
---

Does not flag the interpolated, locale-formatted toast.
