---
type: llm
focus: last_message
criteria: |
  PASS if the first line under Known gaps in the printed .ux/inventory.md
  says there is no UI yet.
  FAIL if Known gaps is empty, or its first line is about something else.
weight: 1
---

Records the absence of a UI as the first gap.
