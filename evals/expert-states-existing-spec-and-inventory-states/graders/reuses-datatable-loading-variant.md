---
type: llm
focus: last_message
criteria: |
  The rough option reloads the list under a new full-page Spinner overlay
  with the DataTable unmounted, although the inventory's DataTable already
  has a loading variant (skeleton rows keeping the column widths) and the
  screen spec's Loading row uses it.
  PASS if a REQUIREMENTS or RISKS entry requires the reload to use the
  DataTable's existing loading variant (or the spec's Loading row) instead
  of the new overlay, or flags the overlay as a second loading mechanism
  next to one the inventory already has.
  FAIL if the overlay is kept or not mentioned.
weight: 1
---

Reuses the state variant the inventory already lists.
