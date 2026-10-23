---
name: expert-platform-entry-point-and-host-undo
description: On a native desktop need expert-platform must give the new action its menu item, accelerator and context-menu entry, put it on Edit > Undo, place Preferences where each OS expects it and require the OS file dialog, and must prescribe neither the menu item's wording nor where focus lands
tags: [expert-platform, recall, precision, desktop]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-platform` sub-agent (Agent tool, `subagent_type: "ux:expert-platform"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — duplicate a preset with its effect chain
- Who: sound designer, expert, daily, at the studio desk with many presets open  (recommended)
- Job: duplicate a preset with its whole effect chain so that a variant is built without rebuilding the chain  (user's choice)
- Trigger: a preset selected in the Library is close to what is needed  (recommended)
- Success: the duplicate sits under the original in the Library, selected, with the same chain  (recommended)
- Reversibility: the duplicate can be taken back like any other library change  (user's choice)
- Platform and input: desktop (native Qt, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: Library and Chain editor entries → inventory.md Screens; preset actions in the Preset menu and the context menu, QUndoStack → inventory.md Interaction patterns
Out of scope (explicitly): duplicating several presets at once

Rough option in mind:
- A new "duplicate" toolbar icon above the Library, visible when a preset is selected; it is the only way to duplicate — no menu item, no keyboard accelerator, no entry in the preset's right-click menu
- The duplicate is not pushed on the QUndoStack: a Banner "Duplicate created — Remove duplicate" shows for 5 s under the toolbar, then disappears; Edit > Undo keeps undoing the previous change
- After the duplicate, keyboard focus stays on the toolbar icon
- While we are in the menus: the Preferences item moves to the Edit menu on both macOS and Windows so it sits in the same place everywhere
- File > Export keeps its in-app file browser (resources/FileBrowser.ui) so the export looks the same on both OSes

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
