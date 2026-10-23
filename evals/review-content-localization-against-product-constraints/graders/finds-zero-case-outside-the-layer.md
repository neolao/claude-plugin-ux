---
type: llm
focus: last_message
criteria: |
  fixtures/src/BookingPanel.tsx line 11 builds the duration line as
  `hours === 0 ? "No hours selected" : t("booking.duration.count", {
  count: hours })` while the inventory says the layer's ICU messages
  carry a `=0` form.
  PASS if a finding targets that line — for the zero case handled outside
  the plural message, for the literal `No hours selected` outside the
  i18n layer, or both.
  FAIL otherwise.
weight: 1
---

Reports the zero case handled by a literal outside the plural message.
