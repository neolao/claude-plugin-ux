---
type: llm
focus: last_message
criteria: |
  The owner said the green GO and amber standby colors must survive the
  redesign; tokens.css defines them as --color-go and --color-standby.
  PASS if the printed block has a line on what of the current system
  survives (keeps, must stay, is kept) that names the GO and standby
  colors (or the --color-go / --color-standby tokens).
  FAIL if no line says what survives, or it names neither color.
weight: 1
---

In redesign, what the new directions must keep is settled before they are drawn.
