---
type: llm
focus: last_message
criteria: |
  .ux/flows/002-undo-archive.md is the only flow with status designed
  (001 is validated, 003 is implemented).
  PASS if the repeated last message names flow 002 as a flow left to
  prototype and asks which flow to prototype (or whether to prototype
  002).
  FAIL if 002 is missing or no question is asked.
weight: 1
---

Lists what is left to prototype and asks.
