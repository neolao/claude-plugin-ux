---
name: discover-no-ui-yet
description: /ux:discover on a project with no UI must still write product.md, write an inventory that says none yet with no screen rows and no screen derived from the API routes, and send to /ux:style then /ux:design
tags: [discover, no-ui, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:discover` skill (Skill tool, `skill: "ux:discover"`, arguments `the invoicing back end of an accounting firm, about to get its first web dashboard`) on the project in the current directory: a Node + Express API under `src/`, its README at the root. There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Users: accountants, occasional computer users, weekly, at a desk on a laptop; mouse + keyboard.
- Main jobs: see which invoices are overdue; mark an invoice as paid; issue an invoice for a client.
- Platform of the coming dashboard: web, in the browser the firm already uses.
- Brand: the firm's logo and dark green; accessibility target: none stated; language: French; no offline use.
- Vocabulary: invoice, client, overdue, paid — as the API names them.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/product.md` and of `.ux/inventory.md`.
