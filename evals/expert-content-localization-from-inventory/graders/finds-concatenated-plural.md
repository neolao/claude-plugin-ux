---
type: llm
focus: last_message
criteria: |
  The confirmation line is built by concatenation ("Booked " + roomName +
  " for " + count + " hour(s) …") with a "hour(s)" plural hack, in a
  product whose i18n layer has ICU plurals and whose second language is
  Arabic (different word order, six plural forms).
  PASS if the reply flags the concatenation or the "hour(s)" form and
  requires one keyed message with placeholders and plural forms handled by
  the i18n layer.
  FAIL otherwise.
weight: 1
---

Flags the concatenated line and its plural hack.
