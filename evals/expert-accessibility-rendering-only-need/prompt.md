---
name: expert-accessibility-rendering-only-need
description: On a need with nothing to operate expert-accessibility must still answer with requirements on color-only status, the white-on-amber label and the pulse animation, and must not require focus or keyboard handling for the tiles
tags: [expert-accessibility, recall, precision, rendering-only]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-accessibility` sub-agent (Agent tool, `subagent_type: "ux:expert-accessibility"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — service health tiles on the overview
- Who: on-call engineer, expert, watching the wall screen all shift  (recommended)
- Job: see within seconds which service is degraded or down  (user's choice)
- Trigger: a health check changes state  (recommended)
- Success: the engineer names the affected service from across the room  (recommended)
- Interaction: none — the overview is display only; details are opened from the laptop's service page, not from the tiles  (user's choice)
- Platform and input: wall screen without input, laptops with mouse + keyboard  (recommended)
Facts looked up: tokens --ok/--warn/--down → inventory.md Design tokens; two colorblind engineers → product.md Constraints
Out of scope (explicitly): acknowledging or muting an incident

Rough option in mind:
- One tile per service, filled with --ok, --warn or --down according to its state; the service name in white, 28 px, centered on the tile
- While an incident is open, the tile's background pulses between its color and the surface color every 600 ms
- Tiles are plain <div> elements laid out in a CSS grid; nothing on the overview is clickable

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
