---
type: llm
focus: last_message
criteria: |
  The review panel lists the rows as typed in the sheet: "jean-pierre
  DUPONT", "Mme Fatou Ndiaye (treasurer!!)", note "call back re: dues".
  These are the users' own data, not UI copy.
  PASS if the reply does not require normalizing, capitalizing, rewording
  or cleaning those values (asking for a column label, a count or a hint
  around them is fine).
  FAIL if a REQUIREMENTS entry demands that the imported names or notes be
  rewritten, capitalized, stripped of punctuation or otherwise edited.
weight: 1
---

Does not reword the users' own data.
