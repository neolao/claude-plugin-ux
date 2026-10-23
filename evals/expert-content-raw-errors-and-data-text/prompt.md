---
name: expert-content-raw-errors-and-data-text
description: On a CSV import whose failures surface the API text and a Node error code raw, expert-content must require UI-owned error strings per cause with a next step, and must neither reword the contact names and notes the users typed nor prescribe wording for the native file dialog
tags: [expert-content, recall, precision, errors, data]
runs: 3
max_turns: 15
timeout_seconds: 300
allowed_tools: [Read, Grep, Glob, Agent]
---

Invoke the `ux:expert-content` sub-agent (Agent tool, `subagent_type: "ux:expert-content"`) as `/ux:design` does in its Step 4. Give it exactly this prompt:

```
Plan consultation, from /ux:design.

Product and inventory: fixtures/.ux/product.md, fixtures/.ux/inventory.md (no .ux/style.md).

## Shared understanding — import contacts from a CSV file
- Who: association volunteer, occasional user, once or twice a year after a members' day, on a laptop  (recommended)
- Job: bring the sign-up sheet (exported as CSV from a spreadsheet) into the member list without retyping it  (user's choice)
- Trigger: the volunteer chooses File > Import contacts…  (recommended)
- Success: the new contacts appear in the list, the duplicates are skipped and the volunteer knows how many of each  (recommended)
- Reversibility: an import can be undone as a whole from the Edit menu  (user's choice)
- Platform and input: desktop (Electron, macOS and Windows), mouse + keyboard  (recommended)
Facts looked up: terms Contact / Member list → product.md Vocabulary; toast and native dialogs → inventory.md Interaction patterns; API error shape → inventory.md UI stack
Out of scope (explicitly): mapping CSV columns by hand

Rough option in mind:
- File > Import contacts… opens the native file dialog (Electron dialog.showOpenDialog, filtered to .csv); the file is parsed, then sent to POST /contacts/import
- On success a toast shows "Imported " + added + " contacts, " + skipped + " duplicates skipped"
- On failure the toast shows the error as it comes: the API's body for a 4xx/5xx (for example "422 Unprocessable Entity: row 14: email is not valid") or the Node error code when the file cannot be read (for example "EACCES")
- The imported rows are listed in a review panel exactly as typed in the sheet, for example "jean-pierre DUPONT", "Mme Fatou Ndiaye (treasurer!!)", note "call back re: dues"

Reply with exactly three bulleted lists, ≤5 entries each, specific to this need: REQUIREMENTS: / RISKS: / SCENARIOS:.
```

Once the sub-agent returns, report its reply back verbatim.
