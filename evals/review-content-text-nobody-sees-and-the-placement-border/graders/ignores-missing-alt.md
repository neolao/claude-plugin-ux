---
type: llm
focus: last_message
criteria: |
  fixtures/src/ContactList.tsx renders `<img src={logo} width="96"
  height="32" />` with no alt attribute at all.
  PASS if no finding targets that image for lacking an alt / text
  alternative.
  FAIL if one does.
weight: 1
---

Leaves the existence of a text alternative to review-accessibility.
