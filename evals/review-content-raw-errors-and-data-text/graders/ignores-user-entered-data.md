---
type: llm
focus: last_message
criteria: |
  fixtures/src/ContactList.tsx renders `{c.name}` and `{c.note}` from
  fixtures/data/contacts.json, where volunteers typed values such as
  `jean-pierre DUPONT`, `Mme Fatou Ndiaye (treasurer!!)` and `call back
  re: dues!!!`.
  PASS if no finding targets those values, data/contacts.json, or the
  lines rendering them, for capitalization, punctuation, tone or
  wording.
  FAIL if one does.
weight: 1
---

Does not reword what the users typed.
