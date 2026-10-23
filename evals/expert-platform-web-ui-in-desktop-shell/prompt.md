---
name: expert-platform-web-ui-in-desktop-shell
description: On a React-inside-Electron need expert-platform must judge the app as desktop — menu bar with Undo on the app's actions, close protection, no hamburger in a desktop window, no browser Back or shareable URL — and must prescribe neither a saving indicator nor what the list does at narrow widths
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

## Shared understanding — rename and reorder the cues of a show
- Who: lighting technician, expert, daily during a production, backstage on a 13" laptop  (recommended)
- Job: rename and reorder the affected cues so that the cue list matches the run order  (user's choice)
- Trigger: the director changes the order of scenes between two rehearsals  (recommended)
- Success: the cue list shows the new order and names, saved on disk, and the technician can go back to the previous version  (user's choice)
- Reversibility: every rename and reorder can be undone, no confirmation dialog  (user's choice)
- Platform and input: desktop (Electron, macOS and Windows), mouse + keyboard, window often tiled next to the console software  (recommended)
Facts looked up: Show screen and its route → inventory.md Screens; no app action in the menu, Cmd/Ctrl+Z only in text fields → inventory.md Interaction patterns
Out of scope (explicitly): the cue numbering rules

Rough option in mind:
- The Show screen gets a "Reorder" mode: drag the CueRows into the new order, double-click a name to rename it; the URL /shows/:id/reorder reflects the mode so technicians can bookmark and share it, and the browser Back button leaves the mode
- A "Revert changes" button in the Toolbar restores the list as it was when the mode was entered; Cmd/Ctrl+Z stays what Electron gives (text fields only)
- The Shows list moves behind a hamburger icon at the top left, at every window width, to leave room for the cue list
- Saving happens on every drop and every rename; nothing on screen changes while it saves
- Closing the window or pressing Cmd/Ctrl+W during a reorder closes it immediately; whatever was not saved yet is lost
- At narrow widths the CueRow name and number stay on one line; the rest wraps

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
