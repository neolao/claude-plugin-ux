---
type: llm
focus: last_message
criteria: |
  The owner said there is no imagery: no illustrations, no photos, a
  plain text empty state.
  PASS if the printed `## Shared understanding` block has an imagery
  line (imagery, illustrations, photos or equivalent title) settling on
  none, tagged as the user's choice.
  FAIL if no line of the block settles imagery.
weight: 1
---

Imagery is a style.md section; the interview settles it.
