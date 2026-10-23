---
type: llm
focus: last_message
criteria: |
  120 fixtures with eight attributes are compared and sorted by daily
  experts on a 1366 px laptop; style.md sets a compact density and says
  cards are for history entries only.
  PASS if the recommendation is the table (DataTable, compact) and it is
  justified by at least one of those facts — attributes compared or
  sorted across rows, the compact density or Component intent of
  style.md, the number of rows per screen — with the card grid as the
  rejected alternative.
  FAIL if the recommendation is the card grid, leaves the choice open,
  or rests on no product or style fact.
weight: 1
---

Decides from the facts, not from what looks modern.
