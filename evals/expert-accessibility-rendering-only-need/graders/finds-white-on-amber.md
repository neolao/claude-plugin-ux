---
type: llm
focus: last_message
criteria: |
  The service name is white on the tile; on --warn #f59e0b that is about
  2.2:1, below 3:1 even for 28 px large text.
  PASS if the reply flags the white label on the amber (--warn) tile as
  insufficient contrast, or requires a darker label color on that tile.
  FAIL otherwise.
weight: 1
---

Flags the white label on the amber tile.
