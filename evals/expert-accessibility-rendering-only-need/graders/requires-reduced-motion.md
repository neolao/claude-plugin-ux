---
type: llm
focus: last_message
criteria: |
  The tile pulses every 600 ms for as long as an incident is open, on a
  page that stays open for days.
  PASS if the reply requires honoring the reduced-motion preference for the
  pulse, or a non-animated replacement for it, or limits the pulse (duration
  or flash rate).
  FAIL otherwise.
weight: 1
---

Does not let the pulse run unconditionally.
