---
type: llm
focus: last_message
criteria: |
  The light palette puts text-muted #9aa0a6 on surface #ffffff, a contrast of
  about 2.6:1, below the 4.5:1 the WCAG 2.2 AA target requires for text.
  PASS if the reply flags the light muted-text pair (#9aa0a6 on white, or
  "text-muted on surface in light") as insufficient contrast.
  FAIL otherwise.
weight: 1
---

Flags the failing muted-text pair of the light palette.
