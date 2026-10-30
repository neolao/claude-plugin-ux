---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md states online-only use on a wired office
  network. fixtures/src/InvoiceList.tsx shows "Could not load the
  invoices." with a Try again button on any load failure, and
  fixtures/src/InvoiceEditor.tsx shows an inline message on save failure;
  neither distinguishes being offline.
  PASS if no finding asks for an offline state, offline detection,
  `navigator.onLine`, a reconnect handler or an offline-specific message in
  either file.
  FAIL if one does.
weight: 1
---

Does not demand an offline state where the product is online only.
