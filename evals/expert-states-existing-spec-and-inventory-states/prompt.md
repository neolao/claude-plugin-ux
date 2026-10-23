---
name: expert-states-existing-spec-and-inventory-states
description: On the redesign of a web invoice list with an existing screen spec expert-states must reuse the DataTable's loading variant over a new overlay, keep the spec's Partial n/a row, follow the inventory's inline validation pattern, flag the FilterBar known gap, and must not rewrite the empty-state wording
tags: [expert-states, recall, precision, web, redesign]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-states` sub-agent (Agent tool, `subagent_type: "ux:expert-states"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design (redesign of flow 002).

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md. Existing screen spec: fixtures/.ux/screens/invoice-list.md (no .ux/style.md).

## Shared understanding — filter the invoice list
- Who: accountant, expert, daily, at the desk on the office network  (recommended)
- Job: see the invoices still unpaid so that each one is chased  (user's choice)
- Trigger: the month closes and the accountant opens /invoices  (recommended)
- Success: the list shows only the invoices matching the chosen status and due-date range, and the filters are still set after the accountant comes back from an invoice  (recommended)
- Data and states: one request of 300 invoices at most, every accountant sees every invoice; a filter change refetches the list  (user's choice)
- Platform and input: web, laptop browser, mouse + keyboard  (recommended)
Facts looked up: DataTable variants, FilterBar, DateRange → inventory.md Reusable components; inline validation on blur, inline error with Retry → inventory.md Interaction patterns; FilterBar stays clickable while the table reloads → inventory.md Known gaps
Out of scope (explicitly): saved filter presets

Rough option in mind:
- A FilterBar above the DataTable: a status select (all / unpaid / overdue) and a DateRange for the due date, plus an Apply button; changing a filter and clicking Apply refetches the list
- While the list reloads, a new full-page Spinner overlay covers the page until the rows arrive; the DataTable is left unmounted meanwhile
- The screen spec's Partial row is replaced: the list now shows the first 50 rows and a "Load more" button, so Partial becomes "first 50 of N shown"
- The DateRange is checked only when Apply is clicked: a "to" date before the "from" date then shows "Invalid range" under the bar
- Filters stay clickable while a reload is in flight; a second Apply during the reload sends a second request and the last response wins
- When no invoice matches, the DataTable empty variant shows "No invoices match 🙁" with a "Clear filters" action

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
