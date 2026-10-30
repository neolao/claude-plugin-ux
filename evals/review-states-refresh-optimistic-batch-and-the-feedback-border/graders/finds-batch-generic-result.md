---
type: llm
focus: last_message
criteria: |
  fixtures/src/BulkArchive.tsx archives every selected card with
  `Promise.allSettled`, then on any rejection shows one message, "Some
  cards could not be archived.", with a Retry that calls `archiveAll` on
  the whole list again: the cards that failed are not named, the ones
  already archived are not shown as done, and the retry re-sends them all.
  PASS if a finding targets BulkArchive.tsx for the batch reported as one
  generic result (failed items not named, successes not shown as done)
  and/or the retry that redoes the items that already succeeded.
  FAIL otherwise.
weight: 1
---

Reports the bulk action with one generic result and a retry over everything.
