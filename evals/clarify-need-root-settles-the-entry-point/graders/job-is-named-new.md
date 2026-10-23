---
type: llm
focus: last_message
criteria: |
  product.md Jobs to be done lists rename, archive and delete; it has no
  duplicate job.
  PASS if the printed block's job line says duplicating a board is a new
  job (not in product.md, to be added, or equivalent wording).
  FAIL if the job line quotes one of the three existing jobs as the job
  served, or does not say whether the job is new.
weight: 1
---

Quotes the job from Jobs to be done or says it is new.
