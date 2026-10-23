---
type: llm
focus: last_message
criteria: |
  fixtures/src/ContactList.tsx renders the delete button as
  `<button aria-label="trash" …>` around an aria-hidden icon: its
  accessible name says the icon, not the action, and is a literal outside
  the i18n layer.
  PASS if a finding targets that aria-label (ContactList.tsx) — for naming
  the icon instead of the action (deleting the contact), for being
  hardcoded, or both.
  FAIL otherwise.
weight: 1
---

Reports the accessible name that says the icon.
