---
type: llm
focus: last_message
criteria: |
  The smallest breakpoint in tailwind.config.js is sm: 640px, and the
  product owner said one dispatcher uses a tablet.
  PASS if the printed .ux/product.md Devices & input line states a
  smallest width of 640 px (or "the sm breakpoint, 640px") and lists touch
  alongside mouse + keyboard.
  FAIL if the line gives no width, another width, or no touch input.
weight: 1
---

Carries the width the experts read from product.md.
