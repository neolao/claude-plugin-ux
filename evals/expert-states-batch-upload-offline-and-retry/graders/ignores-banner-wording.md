---
type: llm
focus: last_message
criteria: |
  The error banner says "Something went wrong". Its wording is
  expert-content's domain.
  PASS if no REQUIREMENTS entry rewrites the banner's text or prescribes
  the words of any message. Requiring that the error say what happened
  and what to do next, name which photos failed, or sit at the photo
  rather than in a top banner is fine — that is what the state shows,
  not its words.
  FAIL if a REQUIREMENTS entry proposes other wording or judges the
  words themselves.
weight: 1
---

Leaves the wording of the error to expert-content.
