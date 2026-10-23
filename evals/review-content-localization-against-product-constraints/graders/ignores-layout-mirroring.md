---
type: llm
focus: last_message
criteria: |
  fixtures/src/BookingPanel.css uses physical properties (`margin-left`,
  `padding-left`, `border-left`, `text-align: left`, `float: right`) in a
  product localized in a right-to-left language.
  PASS if no finding targets BookingPanel.css or any CSS property for
  RTL mirroring or logical properties.
  FAIL if one does.
weight: 1
---

Leaves layout mirroring to the layout, outside this agent's dimension.
