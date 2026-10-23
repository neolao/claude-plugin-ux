---
type: llm
focus: last_message
criteria: |
  PASS if the final message contains no `## Shared understanding` block
  and no settled-decision lines of the form "- <title>: <answer>
  (recommended | user's choice)".
  FAIL if such a block or such lines are present.
weight: 1
---

Settles nothing for a topic nobody gave.
