---
name: expert-visual-style-consultation-delivers-scales
description: Consulted by /ux:style on a web dispatch tool, expert-visual must prescribe a compact density with its row and control heights, separate the semantic roles from the primary, require a dark value per palette role, flag the values off the direction's own spacing scale, keep the imposed brand teal, and must neither compute contrast ratios nor prescribe the system font or native control shapes
tags: [expert-visual, recall, precision, style-consultation, web]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-visual` sub-agent (Agent tool, `subagent_type: "ux:expert-visual"`) as `/ux:style` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:style — mode: propose (the project has no design system).

Product frame: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — visual direction of Dispatchly
- Imposed constraints: the brand teal #0f766e stays the primary color  (user's choice)
- Three adjectives: calm, dense, dependable  (recommended)
- Default density: the dispatchers scan 200 to 300 rows all day; the fleet manager visits weekly  (recommended)
- Theming: light and dark, following the OS  (user's choice)
- Motion tolerance: functional only  (recommended)
Facts looked up: no tokens, literals in every file → inventory.md Design tokens and Known gaps; 1440 px+ monitors, all day → product.md Platform & surface and Users
Out of scope (explicitly): the logo and the marketing site

Rough direction under consideration — "Clear":
- Palette, light: surface #ffffff, surface-raised #f1f5f9, text #0f172a, text-muted #64748b, border #e2e8f0, primary #0f766e, on-primary #ffffff; late shipments and errors are shown in the primary teal, bolder
- Palette, dark: none written — dark mode will be derived at the end by a CSS filter inverting the light palette
- Typography: Inter 13 / 15 / 18 / 23 / 31, weights 400 and 600
- Spacing: base 4 px — 4 / 8 / 12 / 16 / 24 / 32; the board's cells are padded 10 px and the page gutters are 14 px
- Density: comfortable — 44 px rows, 40 px controls, the board paginated 25 rows per page
- Radii: 6 px controls, 10 px cards
- Motion: 150 ms ease-out on state changes

Reply with exactly three bulleted lists, ≤5 entries each, specific to this direction: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
