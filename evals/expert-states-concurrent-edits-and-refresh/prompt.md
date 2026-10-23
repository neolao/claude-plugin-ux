---
name: expert-states-concurrent-edits-and-refresh
description: On an in-place address edit in a patch table shared by two consoles expert-states must keep the content on screen during a refresh, keep the row under edit, detect the colleague's change before overwriting with the input kept, roll back the refused address visibly, and must prescribe neither the conflict wording nor the host undo stack
tags: [expert-states, recall, precision, desktop, concurrency]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-states` sub-agent (Agent tool, `subagent_type: "ux:expert-states"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — fix a fixture's address in the patch table
- Who: show designer, expert, daily, at the venue under time pressure  (recommended)
- Job: fix a wrong fixture without losing the rest of the patch  (user's choice)
- Trigger: a fixture does not respond on stage; the designer finds its row in the Patch view  (recommended)
- Success: the corrected address is saved and the other console sees it within seconds  (recommended)
- Data and states: two consoles edit the same show on the venue's network; the patch table is reloaded from the server  (user's choice)
- Platform and input: desktop (Electron, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: EditableCell variants, patch.reload() → inventory.md Reusable components and Interaction patterns; reload empties the table → inventory.md Known gaps; two consoles → product.md Constraints
Out of scope (explicitly): resolving two consoles editing the same cell at the same instant

Rough option in mind:
- The address cell of a row becomes an EditableCell on double-click; Enter saves, Esc cancels
- The Patch view calls patch.reload() every 10 s so the other console's changes show up; every reload empties the table until the rows arrive, including the row being edited, whose cell is replaced by the server's value while the designer is typing
- Enter writes the new address to the server as is; if the colleague changed that fixture since the table was loaded, the designer's value replaces it — the colleague's change is not detected
- The new address is shown in the row as soon as Enter is pressed; if the server refuses it (address already used by another fixture) the row keeps showing the new address and the refusal is written to the console log
- When the server refuses, a toast says "Conflict! Someone changed this."

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
