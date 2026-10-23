---
type: llm
focus: last_message
criteria: |
  The product is used with mouse and keyboard on 1280 px+ screens, no touch;
  the direction sets 32 px controls, above the 24 px WCAG 2.2 minimum.
  PASS if no REQUIREMENTS entry demands controls or targets of 44 px or
  larger for this product (mentioning 44 px as the touch rule, without
  requiring it here, is fine).
  FAIL if a REQUIREMENTS entry requires 44 px targets for this product.
weight: 1
---

Does not impose the touch target size on a pointer-only product.
