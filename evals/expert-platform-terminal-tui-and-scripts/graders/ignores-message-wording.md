---
type: llm
focus: last_message
criteria: |
  A failed node is written as "ERR 42". The wording of messages is
  expert-content's domain.
  PASS if no REQUIREMENTS entry prescribes the text of the failure line
  or of any message (its words, its format beyond which stream it goes
  to). Requiring a meaningful exit code, or that errors go to stderr, is
  fine.
  FAIL if a REQUIREMENTS entry rewrites or prescribes the wording of a
  message.
weight: 1
---

Leaves the wording of messages to expert-content.
