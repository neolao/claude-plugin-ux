---
name: expert-visual-game-engine-docked-panel-widths
description: On a Unity editor light table expert-visual must say what collapses when the panel is docked narrow, keep the editor's row height, cap the help text's line length on the wide monitor, require tabular numerals on the intensity column, and must prescribe neither the host undo registration nor the keyboard navigation of the rows
tags: [expert-visual, recall, precision, game-engine, responsive]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-visual` sub-agent (Agent tool, `subagent_type: "ux:expert-visual"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — review and tune every light of the scene from one table
- Who: lighting artist, expert, all day, the scene open in the viewport  (recommended)
- Job: see every light with its type, intensity and range in one table and change an intensity from it  (user's choice)
- Trigger: the artist opens Window > Lightbook on a lit scene  (recommended)
- Success: the odd light stands out in the table and its new intensity shows in the viewport  (recommended)
- Data and states: 80 to 200 lights, read from the open scene; an intensity edit applies at once  (user's choice)
- Platform and input: game-engine tool (Unity editor), mouse + keyboard, two monitors; docked next to the Inspector, in the bottom dock, or undocked full width on the second monitor  (recommended)
Facts looked up: LightRow, HelpBox → inventory.md Reusable components; the editor's 20 px rows and theme variables → inventory.md Design tokens; edits register with the editor's undo → inventory.md Interaction patterns; never tried in the bottom dock → inventory.md Known gaps
Out of scope (explicitly): the bake itself

Rough option in mind:
- A table of six columns (name, type, intensity, range, color, shadows) fixed at 920 px wide; every column has a fixed width and its header and cells never wrap; when the panel is docked narrower than 920 px, the whole panel gets a horizontal scrollbar
- Rows are 32 px high with 12 px of padding and a custom 14 px font loaded from the package, so the table reads better than the Inspector
- A HelpBox paragraph at the top explains the columns; when the panel is undocked on the second monitor (2200 px wide) the paragraph and every column stretch to the full width
- Intensity and range are right-aligned numbers in the editor's proportional font; editing the intensity cell applies the value to the Light component directly, without going through Undo.RecordObject, to keep it fast
- The rows are mouse-only: no focus, no arrow keys between rows

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
