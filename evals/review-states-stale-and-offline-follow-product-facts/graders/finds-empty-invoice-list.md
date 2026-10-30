---
type: llm
focus: last_message
criteria: |
  fixtures/src/InvoiceList.tsx renders `invoices.map` inside a <table> with
  no branch for an empty array: a company file with no invoices yet gives
  an empty table with no guidance.
  PASS if a finding targets InvoiceList.tsx for the missing empty state.
  FAIL otherwise.
weight: 1
---

Still reports the real missing state.
