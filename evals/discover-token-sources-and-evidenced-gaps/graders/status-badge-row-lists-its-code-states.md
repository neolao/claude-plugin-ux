---
type: llm
focus: last_message
criteria: |
  src/components/StatusBadge.tsx is used by VanList and VanDetail and
  implements exactly three statuses: ok, late, offline.
  PASS if the printed .ux/inventory.md Reusable components table has a
  StatusBadge row whose States / variants cell names ok, late and offline
  (or their labels On time, Late, Offline) and nothing the code does not
  implement.
  FAIL if there is no StatusBadge row, or its states are missing or
  invented.
weight: 1
---

Reads a component's states from its code.
