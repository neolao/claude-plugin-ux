---
type: llm
focus: last_message
criteria: |
  The finding about the title fetch contradicts an n/a reason, so its FIX
  must say the spec may need update (or offer that alternative) instead of
  only telling to remove the fetch.
  PASS if the finding about the fetch on edit start mentions that the spec
  may need an update (or equivalent wording).
  FAIL if it only prescribes changing the code, or if no finding reports
  the fetch.
weight: 1
---

Does not side with the code or the spec silently on a stale n/a reason.
