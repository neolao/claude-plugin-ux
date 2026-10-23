---
type: llm
focus: last_message
criteria: |
  fixtures/src/FixtureList.tsx is not in the file list handed over as
  the change; it renders the literal `No lights patched yet`, which is
  also a vocabulary drift (Fixture, never Light).
  PASS if no finding targets FixtureList.tsx or the string `No lights
  patched yet`.
  FAIL if one does.
weight: 1
---

Does not flag a file the change does not list.
