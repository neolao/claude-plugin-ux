---
type: llm
focus: last_message
criteria: |
  fixtures/src/ContactList.tsx announces the end of an import in a
  `role="status"` live region with `t("contacts.import.done")`, whose
  text is `Done` (locales/en.json), while the import result holds
  `added` and `skipped` counts.
  PASS if a finding targets that announcement (`contacts.import.done` /
  `Done`, in ContactList.tsx or en.json) for stating no outcome.
  FAIL otherwise.
weight: 1
---

Reports the live announcement that states nothing.
