---
name: expert-states-batch-upload-offline-and-retry
description: On a forty-photo report upload from a site with a flaky network expert-states must require determinate progress the inspector can leave, an offline state that keeps the photos visible, per-photo failure with retry of the failed ones only, and a resume that redoes nothing already sent, and must prescribe neither the banner's wording nor the OS background mechanism
tags: [expert-states, recall, precision, mobile, offline, batch]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-states` sub-agent (Agent tool, `subagent_type: "ux:expert-states"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md, no .ux/flows/ yet).

## Shared understanding — send the inspection report from the site
- Who: inspector, expert, daily, walking the site in and out of network coverage, under time pressure  (recommended)
- Job: send the report so that the office can act on it the same day  (user's choice)
- Trigger: the inspection ends; the inspector taps Send on the Report screen  (recommended)
- Success: the report shows as sent on the Reports tab and the office has all forty photos  (recommended)
- Data and states: up to forty photos of 3 MB kept on the device; the network drops during the upload; the inspector may lock the phone or switch app meanwhile  (user's choice)
- Platform and input: mobile (iOS and Android), touch, one hand, gloves  (recommended)
Facts looked up: PhotoGrid, Banner, ModalSpinner, Toast → inventory.md Reusable components; Banner "Something went wrong" → inventory.md Interaction patterns; no offline state, ModalSpinner without count → inventory.md Known gaps; flaky network, forty photos → product.md Constraints
Out of scope (explicitly): compressing the photos

Rough option in mind:
- Send uploads the forty photos one after another under the ModalSpinner, which blocks the whole app until the last one is sent; nothing says how many are done
- Without network the Report screen shows an empty PhotoGrid and the Banner "Something went wrong"; Send does nothing
- If three photos fail, the Banner "Something went wrong" appears, the report is marked "not sent" on the Reports tab, and Retry re-sends all forty photos
- If the phone is locked or the app is killed mid-upload, the upload stops; the report shows as "not sent" and the next Send uploads all forty photos again
- When the last photo is sent, a Toast "Sent!" shows for two seconds

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
