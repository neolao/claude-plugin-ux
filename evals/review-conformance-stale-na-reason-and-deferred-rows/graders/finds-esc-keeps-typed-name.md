---
type: llm
focus: last_message
criteria: |
  fixtures/.ux/screens/rename-board.md § Interactions and flow 003 § Exit &
  failure paths say Esc (or a click outside) brings the old name back and
  the typed name is lost; fixtures/src/BoardTitle.tsx `leave()` sets the
  title to the draft, so the header shows the typed name.
  PASS if a finding reports that Esc or leaving the field keeps the typed
  name instead of restoring the old one.
  FAIL otherwise.
weight: 1
---

Reports the abandon path that keeps what the spec says is lost.
