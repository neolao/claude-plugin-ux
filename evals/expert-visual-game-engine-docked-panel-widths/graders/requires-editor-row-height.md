---
type: llm
focus: last_message
criteria: |
  The inventory records the editor's 20 px rows and theme metrics; the
  option gives the table 32 px rows with 12 px padding and a custom
  14 px font "so the table reads better than the Inspector".
  PASS if a REQUIREMENTS or RISKS entry requires the table to keep the
  editor's density — its row height or metrics variables — or flags the
  32 px rows and the custom font as at odds with the editor's panels
  around it.
  FAIL if the 32 px rows may stay unflagged.
weight: 1
---

Keeps the editor's density in a docked panel.
