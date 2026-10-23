---
type: llm
focus: last_message
criteria: |
  The confirmation line builds the date as day + "/" + month + "/" + year
  by hand, while the inventory says dates go through useDateFormat()
  (Intl).
  PASS if the reply flags the hand-built date and requires locale
  formatting (Intl, useDateFormat or the i18n layer's date formatting).
  FAIL otherwise.
weight: 1
---

Flags the hand-formatted date.
