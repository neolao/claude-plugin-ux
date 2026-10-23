---
type: llm
focus: last_message
criteria: |
  On failure the rough option shows the API body ("422 Unprocessable
  Entity: row 14: email is not valid") or a Node error code ("EACCES") as
  the toast text. The inventory says API errors carry a stable `code`
  (for example csv.invalid_email) next to a developer-facing `message`.
  PASS if the reply requires that the UI shows its own string per error
  cause (keyed, mapped from the code or the failure type) and never the
  raw API message, status line or Node error code.
  FAIL otherwise.
weight: 1
---

Maps external errors to UI-owned strings.
