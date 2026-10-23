---
type: llm
focus: last_message
criteria: |
  A service's state is shown only by the tile's fill color (--ok, --warn,
  --down), on a team with two colorblind engineers.
  PASS if a REQUIREMENTS entry demands a carrier of the state other than
  color (a word, an icon, a pattern, a shape) on the tile.
  FAIL otherwise.
weight: 1
---

Requires the state to be carried by more than color.
