---
name: expert-content-tone-from-style-and-vocabulary
description: With a style.md stating a terse tone, expert-content must prescribe that tone over the warm copy of the rough option, flag "shipment"/"order" against the vocabulary term "Delivery" and the "Yes!" button, and must not reword "titles" nor require a loading state
tags: [expert-content, recall, precision, tone, vocabulary]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-content` sub-agent (Agent tool, `subagent_type: "ux:expert-content"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product, inventory and style: fixtures/.ux/product.md, fixtures/.ux/inventory.md, fixtures/.ux/style.md.

## Shared understanding — mark a delivery as received
- Who: shop clerk, occasional user, a few times a week, at the counter between customers  (recommended)
- Job: confirm that a delivery announced by the supplier has arrived, so its titles become sellable  (user's choice)
- Trigger: the clerk opens the delivery from the "Expected" list with the parcel in hand  (recommended)
- Success: the delivery leaves the "Expected" list and its titles show as in stock  (recommended)
- Reversibility: undo for 10 s, no confirmation dialog  (user's choice)
- Platform and input: web, desktop browser, mouse + keyboard  (recommended)
Facts looked up: terms Delivery / Title / Shop → product.md Vocabulary; tone → style.md Tone of content; i18n → inventory.md UI stack
Out of scope (explicitly): partial deliveries (some titles missing)

Rough option in mind:
- The delivery page gets a primary button at the top right; clicking it marks the delivery as received and shows a toast
- Proposed copy — page title: "Woohoo, your shipment is here! 🎉"; subtitle under the title: "12 titles are waiting to hit the shelves"; primary button: "Yes!"; toast on success: "Order received, nice one! 🙌"; toast on failure: "Oops, something went wrong 😅 — try again?"; "Expected" list when it is empty: "No orders yet — hang tight!"
- While the request runs nothing changes on screen; on failure the toast above shows

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
