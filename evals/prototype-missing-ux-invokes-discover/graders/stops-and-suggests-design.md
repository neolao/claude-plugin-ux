---
type: llm
focus: last_message
criteria: |
  The fixture has no .ux/flows/ folder, so no flow 001 exists.
  PASS if the repeated last message says that the flow 001 (or the file
  .ux/flows/001-*.md) was not found and suggests running /ux:design.
  FAIL if the message claims a prototype was built, or does not point to
  /ux:design.
weight: 1
---

Stops on the missing spec and sends to /ux:design.
