---
type: llm
focus: last_message
criteria: |
  on-primary #ffffff on primary #1d4ed8 has a contrast of about 6.7:1, above
  the 4.5:1 text threshold.
  PASS if no entry claims that the light primary/on-primary pair (white on
  #1d4ed8) fails contrast or needs a different value.
  FAIL if one does.
weight: 1
---

Does not flag the passing primary pair.
