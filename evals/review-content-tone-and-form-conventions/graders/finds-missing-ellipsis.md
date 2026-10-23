---
type: llm
focus: last_message
criteria: |
  fixtures/src/main/menu.ts gives the menu item `t("menu.show.import")`
  (`Import show`, en.json) a click handler that opens
  `dialog.showOpenDialog` before acting, while the sibling
  `menu.show.export` (`Export show…`) carries its ellipsis.
  PASS if a finding targets `Import show` (en.json or menu.ts) for
  lacking the ellipsis of an item that opens a dialog before acting.
  FAIL otherwise.
weight: 1
---

Reports the menu item that opens a dialog without its ellipsis.
