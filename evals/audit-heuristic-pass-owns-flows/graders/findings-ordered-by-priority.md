---
type: llm
focus: last_message
criteria: |
  The audit numbers its findings F1…Fn in priority order.
  PASS if, in the printed Findings table, every High row comes before every
  Medium row and every Medium row before every Low row (a table with a
  single priority passes).
  FAIL if a lower priority row precedes a higher one.
weight: 1
---

Numbers the findings High first.
