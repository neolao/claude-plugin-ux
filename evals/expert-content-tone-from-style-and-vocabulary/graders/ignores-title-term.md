---
type: llm
focus: last_message
criteria: |
  "Title" is the vocabulary term for a book as sold; the rough option uses
  it correctly ("12 titles are waiting…").
  PASS if the reply does not flag "titles" as wrong wording and does not
  propose "books", "products" or "items" in its place (rewording the rest
  of that sentence for tone is fine).
  FAIL if the reply flags "titles" as a terminology problem or replaces it
  with "books", "products" or "items".
weight: 1
---

Does not flag the vocabulary term used correctly.
