---
type: llm
focus: last_message
criteria: |
  The screen spec marks Partial `n/a` with a reason that still holds: one
  request of 300 invoices at most, never paginated, every accountant sees
  every invoice (product.md Constraints). The rough option replaces that
  row with a "first 50 of N shown" partial state and a "Load more" button.
  PASS if no REQUIREMENTS entry prescribes a partial state for the list
  (pagination, "first N of M", "Load more"), or the reply says the spec's
  n/a holds and the pagination is unneeded for 300 rows.
  FAIL if a REQUIREMENTS entry prescribes the paginated partial state, or
  the reply re-prescribes a Partial state for the list as if the spec did
  not exist.
weight: 1
---

Keeps a state the spec marks n/a with a reason that holds.
