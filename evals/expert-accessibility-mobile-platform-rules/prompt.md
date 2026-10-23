---
name: expert-accessibility-mobile-platform-rules
description: On a mobile need expert-accessibility must require an alternative to the swipe, 44 px targets, an accessibility label on the icon-only button and an undo that outlives the toast, and must not require keyboard shortcuts
tags: [expert-accessibility, recall, precision, mobile]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-accessibility` sub-agent (Agent tool, `subagent_type: "ux:expert-accessibility"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — delete an inspection from the list
- Who: technician, occasional user, daily on site, one hand, phone  (recommended)
- Job: remove an inspection created by mistake before it syncs  (user's choice)
- Trigger: the technician notices a duplicate row in the list  (recommended)
- Success: the row is gone and the technician is back on the list  (recommended)
- Reversibility: undo offered, no confirmation dialog  (user's choice)
- Platform and input: touch only, outdoors, sometimes gloves  (recommended)
Facts looked up: toast pattern → inventory.md Interaction patterns; VoiceOver/TalkBack → product.md Constraints
Out of scope (explicitly): bulk delete

Rough option in mind:
- Swiping an InspectionRow to the left reveals a red Delete area; releasing deletes the row
- A 32 × 32 px IconButton with a trash icon sits at the right end of each row: a short tap shows the tooltip "Delete", a long press deletes without swiping
- After a delete, a Toast "Inspection deleted — Undo" shows for 3 s at the bottom of the screen, then disappears

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
