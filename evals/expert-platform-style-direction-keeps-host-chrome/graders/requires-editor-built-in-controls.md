---
type: llm
focus: last_message
criteria: |
  The direction replaces the editor's built-in property fields with
  re-skinned custom elements and the editor's menus (Rigger menu,
  right-click GenericMenu) with custom dropdowns.
  PASS if a REQUIREMENTS or RISKS entry says the property fields must stay
  the editor's built-in controls (EditorStyles, the editor's font) and/or
  that the menus must stay the editor's own menus rather than custom
  dropdowns — at least one of the two, as a requirement or a named risk.
  FAIL otherwise.
weight: 1
---

Keeps the host's built-in controls and menus where the UI sits next to them.
