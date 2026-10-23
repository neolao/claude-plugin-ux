---
name: expert-states-game-engine-loading-and-success-feedback
description: On a Unity editor prop panel expert-states must require a non-blocking catalog load with a loading state, an empty state that offers the filling action, an error distinct from empty, flag the redundant toast on a result visible in the viewport, deliver the States rows in the template's shape, and must prescribe neither where the host shows progress nor the empty hint's wording
tags: [expert-states, recall, precision, game-engine, success-feedback]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-states` sub-agent (Agent tool, `subagent_type: "ux:expert-states"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — find a prop by tag and apply it to the selected placeholder
- Who: level artist, expert, all day, the scene open in the viewport  (recommended)
- Job: find the right prop by tag and apply it to the selected placeholder without leaving the scene  (user's choice)
- Trigger: the artist selects a placeholder and opens the Propshelf panel  (recommended)
- Success: the prop stands in the placeholder's spot in the viewport  (recommended)
- Data and states: about 2,000 props fetched from the studio server in 5 to 10 s; the server is sometimes down; a tag may match nothing  (user's choice)
- Platform and input: game-engine tool (Unity editor), mouse + keyboard, the panel docked next to the Inspector  (recommended)
Facts looked up: PropGrid, TagFilter, Toast → inventory.md Reusable components; apply registers with the editor's undo, imports use the editor's progress bar → inventory.md Interaction patterns; main-thread fetch, one appearance for no result and not loaded → inventory.md Known gaps; 5 to 10 s fetch, editor must stay usable → product.md Constraints
Out of scope (explicitly): editing the catalog itself

Rough option in mind:
- Opening the panel fetches the whole catalog on the main thread; the editor does not respond until the 2,000 entries arrive, then the PropGrid shows them all
- When the chosen tag matches no prop, the PropGrid shows an empty area; when the catalog server is unreachable, the PropGrid shows the same empty area
- Double-clicking a prop applies it: the placeholder is replaced in the viewport at once, and the panel also shows a Toast "Applied!" for three seconds after every apply
- The TagFilter stays usable at all times, including before the catalog has arrived

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
