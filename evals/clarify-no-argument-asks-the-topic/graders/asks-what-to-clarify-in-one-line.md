---
type: llm
focus: last_message
criteria: |
  The skill was run with no argument.
  PASS if the final message is a short question (one line, or one
  sentence) asking what to clarify — the topic, the need, the subject —
  and nothing else of substance.
  FAIL if the final message names a topic the skill picked itself, lists
  questions about the product, the flows or the audit, or runs longer
  than a short question with at most one line of framing.
weight: 1
---

Asks for the topic instead of inventing one.
