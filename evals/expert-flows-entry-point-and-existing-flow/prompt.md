---
name: expert-flows-entry-point-and-existing-flow
description: On a web need expert-flows must start the flow on the Expenses list the accountant is on, name the implemented flow 001 whose step the rough option removes, land the user where the receipts show, and must not prescribe the route shape nor an upload progress indicator
tags: [expert-flows, recall, precision, web]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-flows` sub-agent (Agent tool, `subagent_type: "ux:expert-flows"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product, inventory and existing flows: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/flows/001-attach-receipt.md (no .ux/style.md).

## Shared understanding — attach a batch of receipts to their expenses
- Who: accountant, expert, daily, at the desk with the client's receipts folder open  (recommended)
- Job: attach a batch of receipts to their expenses in one go, so the month closes without missing documents  (user's choice)
- Trigger: a client sends 20–50 receipts at month end while the accountant is on the Expenses list  (recommended)
- Success: every receipt shows on its expense row in the Expenses list  (recommended)
- Reversibility: a wrong match can be taken back  (user's choice)
- Platform and input: web, desktop browser, mouse + keyboard  (recommended)
Facts looked up: single-receipt drop → .ux/flows/001-attach-receipt.md (implemented); undo from a toast → inventory.md Interaction patterns; pages and routes → inventory.md Screens
Out of scope (explicitly): reading amounts from the receipts (OCR)

Rough option in mind:
- A new page "Receipt inbox" under Settings > Imports: the accountant opens it, uploads a zip of receipts, then matches each receipt to an expense from a dropdown listing every expense
- While the zip uploads and unpacks nothing changes on screen; the receipts appear once it is fully processed
- When every receipt is matched, a "Done" button takes the accountant back to Settings
- The drop target on the expense row is removed: from now on every receipt goes through the inbox

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
