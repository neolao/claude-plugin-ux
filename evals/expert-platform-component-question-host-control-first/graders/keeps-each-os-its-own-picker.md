---
type: llm
focus: last_message
criteria: |
  The team wants the iOS field to look exactly like the Android build's
  custom grid; product.md says each OS keeps its own components.
  PASS if the reply says the iOS field need not mirror the Android grid —
  each OS uses its own picker — or flags visual parity with Android as
  imposing one platform's convention on the other.
  FAIL otherwise.
weight: 1
---

Does not let one surface's convention be imposed on the other.
