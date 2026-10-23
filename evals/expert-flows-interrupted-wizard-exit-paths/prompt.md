---
name: expert-flows-interrupted-wizard-exit-paths
description: On a four-step import wizard expert-flows must require resuming at the failed step with the input kept, a cancel at every step, no confirmation on every Next and an undo of the whole import, and must not prescribe how a colleague's concurrent edits are handled
tags: [expert-flows, recall, precision, desktop]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-flows` sub-agent (Agent tool, `subagent_type: "ux:expert-flows"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — import the venue's fixture list into the show
- Who: show designer, expert, daily, at the venue under time pressure  (recommended)
- Job: import the venue's fixture list into the show so that patching starts from real data  (user's choice)
- Trigger: the venue's CSV arrives on setup day while the designer is in the Patch view  (recommended)
- Success: the imported fixtures appear in the Patch view and a wrong import can be taken back  (recommended)
- Reversibility: the import is taken back as a whole; no step-by-step confirmation  (user's choice)
- Platform and input: desktop (Electron, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: Wizard component → inventory.md Reusable components; Edit > Undo, 50 levels → inventory.md Interaction patterns; second console → product.md Constraints
Out of scope (explicitly): the CSV format itself

Rough option in mind:
- File > Import… opens a four-step Wizard: 1 choose the CSV file · 2 map its columns to fixture fields · 3 review the rows, conflicts highlighted · 4 import
- Every Next button first opens a dialog "Are you sure you want to continue?"
- Past step 2 the Wizard has no Cancel button: closing the window is the only way out, and it drops the mapping
- If the import fails at step 4 (a row has an unknown fixture type) the Wizard closes and the designer starts again at step 1 with a fresh file picker
- The imported fixtures are added to the Patch view; the import itself cannot be undone — a wrong import is fixed by deleting the fixtures one by one
- While the designer is in the Wizard, a colleague on the second console may be editing the same patch

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
