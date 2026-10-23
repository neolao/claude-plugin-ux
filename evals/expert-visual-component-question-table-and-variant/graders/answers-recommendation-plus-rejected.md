---
type: llm
focus: last_message
criteria: |
  In implementation consultation the expert replies with one concrete
  recommendation plus the rejected alternative, in a few sentences — not
  the three lists of a plan consultation.
  PASS if the reported reply gives one recommendation and names the
  alternative it rejects, in prose of a few sentences (a short list of
  reasons is fine).
  FAIL if the reply is the REQUIREMENTS / RISKS / SCENARIOS shape, gives
  several competing recommendations, or names no rejected alternative.
weight: 1
---

Answers in the implementation-consultation shape.
