---
name: expert-visual-no-tokens-dialog-hierarchy-and-state-look
description: On an archive dialog in a project with neither tokens nor style.md expert-visual must separate the two same-styled buttons, refuse the destructive default, keep the disabled button visible, lay the error out without covering the field, keep the dialog's layout while loading, prescribe by role and name the token gap once, and must prescribe neither the error's wording nor the handling of a failed request
tags: [expert-visual, recall, precision, web, no-style]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-visual` sub-agent (Agent tool, `subagent_type: "ux:expert-visual"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — archive a client from its page
- Who: account manager, occasional, weekly, between two calls  (recommended)
- Job: archive a client that left the firm so that it leaves the active list but stays searchable  (user's choice)
- Trigger: the account manager clicks "Archive" on the client page  (recommended)
- Success: the client is gone from /clients and found by search with an "archived" mark  (recommended)
- Data and states: one request; a reason is required; the request can fail  (user's choice)
- Platform and input: web, 1366 px laptops and a few 13" screens, mouse + keyboard  (recommended)
Facts looked up: Dialog, Button, TextField, Toast → inventory.md Reusable components; inline validation on blur, Toast on save → inventory.md Interaction patterns; no tokens, Dialog has no busy state → inventory.md Known gaps
Out of scope (explicitly): restoring an archived client

Rough option in mind:
- "Archive" opens the Dialog: a title, a TextField "Reason", and two Buttons side by side, "Keep" and "Archive client", both in the primary style, #2563eb filled, white text, 13 px; Enter triggers "Archive client"
- While the reason is empty, the "Archive client" button is not rendered; it appears once the field has text
- An empty reason on blur shows "Reason required" in #2563eb, absolutely positioned over the bottom edge of the TextField so the dialog keeps its height
- While the request runs, the dialog's body is replaced by a centered spinner and the dialog shrinks around it; when it succeeds, the dialog closes and the client page shows an "archived" badge in #2563eb; when it fails, the dialog closes and nothing is shown

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
