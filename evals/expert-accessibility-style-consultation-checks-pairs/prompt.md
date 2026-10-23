---
name: expert-accessibility-style-consultation-checks-pairs
description: Consulted by /ux:style, expert-accessibility must flag the muted-text pair, the missing focus ring and the 400 ms slide without reduced-motion handling, and must not flag the passing primary pair nor the 32 px controls
tags: [expert-accessibility, recall, precision, style-consultation]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-accessibility` sub-agent (Agent tool, `subagent_type: "ux:expert-accessibility"`) as `/ux:style` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:style — mode: propose (the project has no design system).

Product frame: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — visual direction of Ledgerly
- Imposed constraints: none (no logo colors, no parent system)  (user's choice)
- Three adjectives: calm, precise, trustworthy  (recommended)
- Default density: compact — weekly users, short desk sessions, tabular invoice lists  (recommended)
- Theming: light and dark, following the OS  (user's choice)
- Motion tolerance: discreet, functional only  (recommended)
Facts looked up: no tokens → inventory.md Design tokens; 1280 px+ pointer screens → product.md Platform & surface
Out of scope (explicitly): illustrations and empty-state art

Rough direction under consideration — "Ledger":
- Palette, light: surface #ffffff, surface-raised #f8fafc, text #1f2933, text-muted #9aa0a6, border #e5e7eb, primary #1d4ed8, on-primary #ffffff
- Palette, dark: surface #111827, surface-raised #1f2937, text #f9fafb, text-muted #9ca3af, border #374151, primary #3b82f6, on-primary #ffffff
- Semantic colors: error #dc2626, success #16a34a, warning #f59e0b, shown as a 6 px left bar on the invoice row
- Typography: Inter 13 / 14 / 16 / 20 / 28, tabular numerals on amounts
- Density: compact — 32 px control height, 36 px table rows, 8 px gutters
- Focus: no ring — buttons and rows darken on hover, which is enough on a desktop
- Motion: side panels slide in over 400 ms ease-out; the dashboard totals count up from 0 on load

Reply with exactly three bulleted lists, ≤5 entries each, specific to this direction: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
