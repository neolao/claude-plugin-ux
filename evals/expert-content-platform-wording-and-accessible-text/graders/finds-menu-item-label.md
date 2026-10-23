---
type: llm
focus: last_message
criteria: |
  The menu item is "export selection": lowercase while the inventory says
  the File menu's items are title case ("Save As…", "Import Fixtures…"),
  and without the ellipsis those items carry when they open a dialog
  before acting.
  PASS if the reply requires the ellipsis on the item, or its title case
  to match the existing menu items (either one is enough), and proposes
  the corrected label.
  FAIL otherwise.
weight: 1
---

Aligns the menu item with the host's label conventions.
