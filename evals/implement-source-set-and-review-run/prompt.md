---
name: implement-source-set-and-review-run
description: /ux:implement 001 must run clarify and review, fill the screen's source and mark it implemented, extend the existing toast with the Undo action instead of a copy and record the variant in the inventory, key the new strings through the i18n layer, and recommend /ux:style since the project has no scale
tags: [implement, source, reuse, i18n, recall, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:implement` skill (Skill tool, `skill: "ux:implement"`, arguments `001`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The application cannot be launched here (no `node_modules`, no browser, no network) and there is no test or lint command; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding and the plan as approved:

- Build the rename exactly as `.ux/screens/board-detail.md` describes it; nothing is deferred.
- Strings: add the Content table's keys to `src/i18n.ts`; no other place for strings.
- The Undo in the toast: give the existing `src/toast.ts` an optional action; never a second toast helper.
- Values: keep the literal values the sibling classes of `src/styles.css` already use; add no new color, spacing or radius.
- Tests: the project has none; do not add a test stack.
- Verification: the app cannot be launched; say so, do not claim it was verified.
- Review findings: fix those the skill says to fix; leave the others open in the report.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/screens/board-detail.md`, `.ux/inventory.md`, `src/toast.ts` and `src/boards/BoardDetail.tsx`.
