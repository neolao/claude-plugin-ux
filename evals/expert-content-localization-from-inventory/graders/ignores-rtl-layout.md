---
type: llm
focus: last_message
criteria: |
  Mirroring the panel, CSS logical properties and the dir attribute belong
  to the layout (expert-visual) and the platform, not to the wording; the
  inventory already switches dir on <html>.
  PASS if no REQUIREMENTS entry demands a mirrored layout (panel side, slot
  list order, alignment), CSS logical properties, or setting dir="rtl".
  FAIL if a REQUIREMENTS entry requires one of those.
weight: 1
---

Does not prescribe RTL layout mirroring.
