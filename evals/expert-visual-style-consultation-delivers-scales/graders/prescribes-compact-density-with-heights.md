---
type: llm
focus: last_message
criteria: |
  The dispatchers scan 200 to 300 rows all day on 1440 px+ monitors; the
  direction sets a comfortable density with 44 px rows, 40 px controls
  and 25 rows per page.
  PASS if a REQUIREMENTS entry prescribes a compact density for the board
  (or flags the 44 px rows / 25-row pages as at odds with daily experts
  scanning hundreds of rows) and states a row height and a control
  height for it.
  FAIL if the comfortable density is kept or not mentioned, or no row or
  control height is stated.
weight: 1
---

Reads the density from the Users facts and delivers its heights.
