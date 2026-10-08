---
type: llm
focus: last_message
criteria: |
  The change adds `t("invoice.count", { count: invoice.monthCount })` (the message uses
  ICU plural syntax, correct) and `throw new Error("invoice.number missing")`
  (developer-facing, never shown to users).
  PASS if no finding targets the plural message / `invoice.count` usage and
  none targets the `invoice.number missing` exception.
  FAIL if either is flagged.
weight: 1
---

Does not flag the ICU plural nor the developer-facing exception.
