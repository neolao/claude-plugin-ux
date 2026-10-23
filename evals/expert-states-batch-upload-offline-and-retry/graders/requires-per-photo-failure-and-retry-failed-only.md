---
type: llm
focus: last_message
criteria: |
  When three of forty photos fail, the whole report is marked not sent
  and Retry re-sends all forty.
  PASS if a REQUIREMENTS or SCENARIOS entry says that the thirty-seven
  sent photos stay sent and shown as such, the three failed ones are
  identified (which photos, with the reason) and Retry re-sends only
  those.
  FAIL if the whole report may still be marked failed as one, or Retry
  may re-send photos already received.
weight: 1
---

Keeps what succeeded, names what failed, retries only the failed items.
