---
name: expert-flows-single-action-is-a-flow
description: On a need presented as "a single button, not a flow" expert-flows must still require the export to act on the selection in hand, land the designer on the result and be cancellable, and must not prescribe a progress indicator nor an undo for an export that changes nothing
tags: [expert-flows, recall, precision, game-engine]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-flows` sub-agent (Agent tool, `subagent_type: "ux:expert-flows"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — export the placed prefabs as a CSV for the art team
- Who: level designer, expert, daily, in the Unity editor with the scene open  (recommended)
- Job: hand the art team the list of placed prefabs so they know what to model next  (user's choice)
- Trigger: the designer has selected the prefabs to export in the Hierarchy and the Blockout panel is open  (recommended)
- Success: a CSV of the selected prefabs exists and the designer knows where it is  (recommended)
- Reversibility: nothing in the scene changes; an export that takes too long can be stopped  (user's choice)
- Platform and input: game-engine tool (Unity editor, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: Blockout panel → inventory.md Screens; panel actions act on the Hierarchy selection → inventory.md Interaction patterns
Out of scope (explicitly): the CSV columns

Rough option in mind:
- This is a single button, not a flow: no steps, no navigation. An "Export CSV" button at the bottom of the Blockout panel writes Exports/blockout-<date>.csv into the project folder
- The button exports the whole scene, whatever is selected in the Hierarchy
- The export takes 10–20 s on a large scene; nothing on screen changes while it runs or when it ends — the designer opens Finder or Explorer to check that the file is there
- Once started, an export cannot be stopped

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
