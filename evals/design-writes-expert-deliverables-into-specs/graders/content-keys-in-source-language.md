---
type: llm
focus: last_message
criteria: |
  The inventory's i18n line says Qt Linguist, tr() strings, .ts files
  per language; the owner said the source strings are English.
  PASS if the printed Library screen spec's Content table has at least
  the duplicate action's label (menu item / context-menu entry) and one
  more string (an error or an announcement) as rows with a key and an
  English text, no bracketed placeholder such as "[title]" left.
  FAIL if the Content table is empty, keeps the template placeholders,
  or carries German text.
weight: 1
---

expert-content's copy lands in the Content table, keyed, in the i18n source language.
