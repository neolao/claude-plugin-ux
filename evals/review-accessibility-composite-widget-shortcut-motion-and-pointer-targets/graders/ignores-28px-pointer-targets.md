---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/product.md lists mouse and keyboard only. The five buttons of
  fixtures/src/GridToolbar.tsx are 28 x 28 px (styles.css `.grid-toolbar
  button`), above the 24 px pointer minimum.
  PASS if no finding reports those buttons as too small, under 44 px, or
  below the touch target size.
  FAIL if one does.
weight: 1
---

Does not demand 44 px targets where the input is pointer only.
