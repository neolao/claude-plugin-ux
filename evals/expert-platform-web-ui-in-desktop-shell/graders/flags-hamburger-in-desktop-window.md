---
type: llm
focus: last_message
criteria: |
  The rough option hides the Shows list behind a hamburger icon at every
  window width, a mobile idiom in a desktop window with a menu bar and
  a sidebar available.
  PASS if a REQUIREMENTS or RISKS entry flags the hamburger menu as a
  mobile convention out of place on desktop, or prescribes a desktop
  navigation instead (sidebar, menu item, window-level navigation).
  FAIL otherwise.
weight: 1
---

Flags a mobile idiom imposed on a desktop window.
