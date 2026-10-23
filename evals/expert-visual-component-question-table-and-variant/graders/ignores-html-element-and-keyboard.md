---
type: llm
focus: last_message
criteria: |
  Which host control carries the table (a native <table>, a grid role)
  is expert-platform's domain; keyboard navigation between cells is
  expert-accessibility's.
  PASS if the reply does not prescribe the HTML element or ARIA role to
  use, nor the keyboard navigation of the rows or cells. Naming
  DataTable as the component is fine.
  FAIL if the reply prescribes <table>, role="grid" or arrow-key
  navigation.
weight: 1
---

Leaves the host control and keyboard operability to their owners.
