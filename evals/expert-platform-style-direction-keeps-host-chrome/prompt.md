---
name: expert-platform-style-direction-keeps-host-chrome
description: Consulted by /ux:style on a Unity editor tool, expert-platform must require the panel to follow the editor's theme and built-in controls, name the parts the editor renders itself, flag the in-tool save dialog, and must neither compute contrast ratios nor prescribe a type or spacing scale
tags: [expert-platform, recall, precision, style-consultation, game-engine]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-platform` sub-agent (Agent tool, `subagent_type: "ux:expert-platform"`) as `/ux:style` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:style — mode: propose (the project has no design system of its own).

Product frame: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — visual direction of Rigger
- Imposed constraints: none (no studio brand; the tool lives inside the Unity editor)  (user's choice)
- Three adjectives: calm, precise, studio-grade  (recommended)
- Default density: compact — daily experts, panel docked next to the Inspector  (recommended)
- Theming: the artists run the editor's dark theme; a few run the light one  (recommended)
- Motion tolerance: none beyond the editor's own  (recommended)
Facts looked up: no tokens of its own, editor theme variables → inventory.md Design tokens; docked next to the Inspector → product.md Platform & surface
Out of scope (explicitly): icons for the bone types

Rough direction under consideration — "Studio":
- Palette: the panel is always light — surface #fafafa, text #1f2933, primary #6d28d9 — whatever theme the editor runs, so Rigger stands out from the Inspector
- Typography: Space Grotesk 15 / 17 / 22 for everything in the panel, including the PropertyBlock fields, instead of the editor's font
- Controls: the PropertyBlock fields are re-skinned custom elements (rounded, 36 px high) replacing the editor's built-in fields; the Rigger menu and the bone right-click menu become custom dropdowns styled like the panel
- Chrome: the panel's tab bar and its scrollbars are restyled in the panel's palette; the dark editor chrome around it is "the editor's problem"
- Export: a custom in-panel "Save rig" dialog with the panel's look replaces EditorUtility.SaveFilePanel
- Motion: none

Reply with exactly three bulleted lists, ≤5 entries each, specific to this direction: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
