---
name: expert-visual-component-question-table-and-variant
description: On an implementation question that only names a component expert-visual must recommend the table from the facts with the card grid as the rejected alternative and its cost, require the swatch cell as a variant added to DataTable rather than a copied FixtureTable, and must prescribe neither the HTML element or keyboard navigation nor the column headers' wording
tags: [expert-visual, recall, precision, web, implementation-consultation]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-visual` sub-agent (Agent tool, `subagent_type: "ux:expert-visual"`) as `/ux:implement` does when a question falls in its domain. Give it exactly this prompt:

```
Implementation consultation, from /ux:implement.

Product, inventory and style: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md. Screen spec: fixtures/.ux/screens/rig.md.

Question: cards or a table for the fixture list of the Rig screen? The spec says "a list of the 120 fixtures with their eight attributes, sortable by any column", the inventory's DataTable has default and compact variants but no cell type for the gel color swatch, and the team leans towards a new CardGrid component (one card per fixture, three per row, the swatch as a colored top border) because it looks more modern than the cue list. If a table is kept, the team would copy DataTable into a FixtureTable to add the swatch cell without touching the cue list.

Code context — src/pages/Rig.tsx:

    export function Rig() {
      const fixtures = useRig();
      // TODO: list — <CardGrid items={fixtures} /> or <DataTable variant="compact" rows={fixtures} columns={...} /> ?
      return <main>...</main>;
    }

src/components/DataTable.tsx takes `variant`, `columns` (each with a `type`: text, number, badge) and `rows`.

Reply with one concrete, justified recommendation plus the rejected alternative, in a few sentences.
```

Once the sub-agent returns, report its reply back verbatim.
