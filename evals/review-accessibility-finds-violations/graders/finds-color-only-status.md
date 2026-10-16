---
type: llm
focus: last_message
criteria: |
  fixtures/src/StatusBadge.tsx conveys late/ok only through a green or red
  background; the span has no text and no other cue.
  PASS if a finding targets StatusBadge.tsx for meaning carried by color only
  (or the missing text alternative).
  FAIL otherwise.
weight: 1
---

Reports the color-only status.
