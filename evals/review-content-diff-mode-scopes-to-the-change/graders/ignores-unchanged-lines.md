---
type: llm
focus: last_message
criteria: |
  fixtures/src/InvoiceRow.tsx line 6 contains the literal `Loading…`, on a
  line the diff neither adds nor modifies (diff mode only covers strings the
  change adds or modifies).
  PASS if no finding targets the `Loading…` string.
  FAIL if it is flagged.
weight: 1
---

Does not flag a pre-existing string outside the diff.
