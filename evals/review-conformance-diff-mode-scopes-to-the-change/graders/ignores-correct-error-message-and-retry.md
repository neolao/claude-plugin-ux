---
type: llm
focus: last_message
criteria: |
  The change renders `invite.error.generic` with role="alert" right under
  the email field when the request fails, and re-enables the Send button
  through `finally { setSending(false) }` — the message, its position, its
  announcement and the retry match the spec.
  PASS if no finding claims that the error message, its placement, its
  announcement or the retry (the button enabled again) is missing or
  different.
  FAIL if one does.
weight: 1
---

Does not report the parts of the error branch that conform.
