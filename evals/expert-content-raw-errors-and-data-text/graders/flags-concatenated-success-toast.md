---
type: llm
focus: last_message
criteria: |
  The success toast is built as "Imported " + added + " contacts, " +
  skipped + " duplicates skipped" in a product localized in English and
  French with ICU plurals available.
  PASS if the reply flags the concatenation or requires one keyed message
  with placeholders and plural forms for the two counts.
  FAIL otherwise.
weight: 1
---

Flags the concatenated success toast.
