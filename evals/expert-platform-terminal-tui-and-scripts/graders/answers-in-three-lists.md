---
type: llm
focus: last_message
criteria: |
  The expert's plan consultation reply must be three bulleted lists labeled
  REQUIREMENTS, RISKS and SCENARIOS, none with more than 5 entries.
  PASS if the reported reply contains those three labeled lists and none of
  them has more than 5 entries.
  FAIL if a list is missing, unlabeled, or has 6 entries or more.
weight: 1
---

Answers in the three-list shape the skills fold into specs.
