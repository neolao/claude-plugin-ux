---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md Constraints lists Arabic (right-to-left).
  fixtures/locales/en.json `booking.slots.helper` reads `Pick a slot on
  the right, then confirm with the arrow → below`.
  PASS if a finding targets that helper (en.json or BookingPanel.tsx)
  for its "on the right" and/or its arrow, as copy that breaks in an
  RTL language.
  FAIL otherwise.
weight: 1
---

Reports the directional words in copy of an RTL-localized product.
