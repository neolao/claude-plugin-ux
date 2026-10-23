---
type: llm
focus: last_message
criteria: |
  Every 10 s patch.reload() empties the patch table until the rows
  arrive — the inventory's Known gap.
  PASS if a REQUIREMENTS entry demands that the periodic refresh keep the
  current rows on screen while the new ones are fetched (the table is
  never emptied or blanked by a reload), whatever the indicator used.
  FAIL otherwise.
weight: 1
---

Keeps the content on screen during a refresh.
