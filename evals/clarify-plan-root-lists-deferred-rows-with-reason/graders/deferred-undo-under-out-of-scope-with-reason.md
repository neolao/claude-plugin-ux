---
type: llm
focus: last_message
criteria: |
  The owner deferred the Undo of the success toast because src/toast.ts
  has no action slot and the release is next week.
  PASS if the printed `## Shared understanding` block's Out of scope line
  (or a deferred line of the block) names the Undo of the rename toast
  and gives a reason — the toast's missing action slot, the release
  date, or "a later flow".
  FAIL if the Undo is not in the block, is listed without a reason, or
  appears only as a settled decision without being marked deferred or
  out of scope.
weight: 1
---

A deferred row is recorded with its reason, where implement marks it in the spec.
