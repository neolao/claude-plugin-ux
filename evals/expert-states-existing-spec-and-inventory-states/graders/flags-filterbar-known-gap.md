---
type: llm
focus: last_message
criteria: |
  The inventory's Known gaps say FilterBar has no loading state and its
  controls stay clickable while the table reloads; the rough option sends
  a second request on a second Apply and lets the last response win.
  PASS if a REQUIREMENTS or RISKS entry names this gap — the filters
  acting, or a second Apply firing, while a reload is in flight — and
  requires or recommends guarding it (Apply disabled but visible during
  the reload, the stale response discarded, or the FilterBar given a
  loading state).
  FAIL if the gap is not mentioned.
weight: 1
---

Turns a Known gap of the inventory into a risk for the screen that reuses the component.
