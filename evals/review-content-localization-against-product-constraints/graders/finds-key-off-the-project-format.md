---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/inventory.md says keys follow `screen.element.purpose`;
  fixtures/locales/en.json has the key `btnOk` (used in
  BookingPanel.tsx for the confirm button) beside keys such as
  `booking.panel.title`.
  PASS if a finding targets `btnOk` (en.json, ar.json or
  BookingPanel.tsx) for not following the project's key format, and its
  SUGGESTION proposes a key of the form booking.<element>.<purpose>.
  FAIL otherwise.
weight: 1
---

Reports the key named unlike the project's format.
