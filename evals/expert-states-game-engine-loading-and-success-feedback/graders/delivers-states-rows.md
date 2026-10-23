---
type: llm
focus: last_message
criteria: |
  The REQUIREMENTS should let /ux:design fill the panel's States table.
  PASS if the REQUIREMENTS name, for the Propshelf panel, at least the
  empty, loading and error states each with what triggers it and what
  the artist sees (a primary action where one exists), in a form that
  maps to the States table rows.
  FAIL if the states are only listed by name, or one of empty, loading
  and error has no trigger or no description of what is shown.
weight: 1
---

Delivers the States rows in the template's shape.
