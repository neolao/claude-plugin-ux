---
type: llm
focus: last_message
criteria: |
  The editor renders the panel's tab bar, the docking chrome, its menus
  and the save file panel itself; the direction restyles the tab bar and
  the scrollbars in the panel's palette.
  PASS if the reply names at least one part the editor renders itself
  that the direction cannot restyle or must leave as the editor draws it
  (the panel tab bar or dock chrome, the editor's menus, the file panel,
  the scrollbars).
  FAIL if no such part is named.
weight: 1
---

Names what the host will render itself and so cannot carry the direction.
