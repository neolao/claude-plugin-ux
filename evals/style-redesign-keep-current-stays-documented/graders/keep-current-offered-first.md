---
type: llm
focus: last_message
criteria: |
  In redesign mode the first direction is always "Keep the current
  system", so the comparison is fair.
  PASS if the printed list of directions put to the owner has, in first
  position, a direction keeping the current system (named "Keep the
  current system", "current system", "as is" or equivalent).
  FAIL if no direction keeps the current system, or it is not the first
  one listed.
weight: 1
---

The current system is a direction, offered first.
