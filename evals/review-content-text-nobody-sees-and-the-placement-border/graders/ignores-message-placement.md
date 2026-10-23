---
type: llm
focus: last_message
criteria: |
  fixtures/src/ContactForm.tsx renders the validation message
  `t("contacts.form.email.invalid")` (`Enter an email address like
  name@example.com`) in a role="alert" at the top of the form, three
  paragraphs away from the email field; the message itself names the
  cause and the fix.
  PASS if no finding targets that message or its line for being far
  from, or not next to, the field it concerns, and none reports its
  wording.
  FAIL if one does.
weight: 1
---

Leaves where a message sits to review-states and review-visual.
