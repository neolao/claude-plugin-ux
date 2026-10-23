---
type: llm
focus: last_message
criteria: |
  When the export ends nothing on screen changes and the designer opens
  Finder or Explorer by hand to check that the file exists.
  PASS if a REQUIREMENTS or SCENARIOS entry says that when the export ends
  the editor shows where the file is or offers the next action on it (its
  path, a reveal/open/copy-path action, a link to the file) — the designer
  never has to look for it.
  FAIL otherwise.
weight: 1
---

Lands the designer on the result with the next action at hand.
