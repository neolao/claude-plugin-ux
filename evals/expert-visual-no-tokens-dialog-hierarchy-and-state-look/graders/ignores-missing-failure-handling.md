---
type: llm
focus: last_message
criteria: |
  When the request fails, the dialog closes and nothing is shown —
  whether an error state exists and offers a retry is expert-states'
  domain.
  PASS if no REQUIREMENTS entry demands that a failed request show an
  error, keep the dialog open or offer a retry. Saying how an error
  message looks if one is shown is fine.
  FAIL if a REQUIREMENTS entry requires an error state or a retry for the
  failed request.
weight: 1
---

Leaves whether the failure is handled to expert-states.
