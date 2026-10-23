---
name: expert-content-platform-wording-and-accessible-text
description: On a desktop export need expert-content must flag the lowercase menu item without ellipsis, the mixed button capitalization, the "Are you sure?"/OK dialog, the "trash-icon" accessible name and the "Done." announcement, and must neither place the menu item or its accelerator nor prescribe where focus lands
tags: [expert-content, recall, precision, platform, accessible-text]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-content` sub-agent (Agent tool, `subagent_type: "ux:expert-content"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — export the selected fixtures to a file
- Who: lighting designer, expert, daily, two screens  (recommended)
- Job: hand a subset of the rig (the selected fixtures) to a colleague as a file  (user's choice)
- Trigger: the designer has a selection in the viewport and wants it out of the show file  (recommended)
- Success: a file exists on disk with exactly the selected fixtures, and the designer knows where it is  (recommended)
- Reversibility: exporting changes nothing in the show; removing fixtures from the selection panel is undoable  (user's choice)
- Platform and input: desktop (Electron, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: terms Fixture / Rig / Show → product.md Vocabulary; menu bar and dialogs → inventory.md Interaction patterns; screen reader support → product.md Constraints
Out of scope (explicitly): choosing the export format

Rough option in mind:
- A menu item "export selection" in the File menu opens the native save dialog, then writes the file
- Before writing, a dialog titled "Are you sure?" says "This will export 12 fixtures." with the buttons "OK" and "Cancel"
- In the selection panel each row has an icon-only button to remove the fixture from the selection; its accessible name is "trash-icon"
- Two buttons at the bottom of the selection panel: "Export Selection" and "Clear selection"
- When the file is written, a screen-reader announcement says "Done." and a toast shows the file name

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
