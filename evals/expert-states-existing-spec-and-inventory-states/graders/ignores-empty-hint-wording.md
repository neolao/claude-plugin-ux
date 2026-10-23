---
type: llm
focus: last_message
criteria: |
  The empty variant shows "No invoices match 🙁" with a "Clear filters"
  action. The wording of the empty-state message is expert-content's
  domain.
  PASS if no REQUIREMENTS entry rewrites or prescribes the text of the
  empty-state hint. Requiring that the filtered empty state exist and
  offer the action that clears the filters is fine; naming the string to
  refer to it is fine.
  FAIL if a REQUIREMENTS entry proposes other wording for the hint or
  judges its words.
weight: 1
---

Leaves the empty-state wording to expert-content.
