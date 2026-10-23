---
type: llm
focus: last_message
criteria: |
  The team would copy DataTable into a FixtureTable to add the swatch
  cell type.
  PASS if the reply says the swatch cell is added to DataTable itself —
  a new cell type or variant next to text, number and badge — rather
  than a copied FixtureTable, or flags the copy as a parallel component.
  FAIL if the copy is accepted or not mentioned.
weight: 1
---

Extends the existing component with the variant it lacks.
