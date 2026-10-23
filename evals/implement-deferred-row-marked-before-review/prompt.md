---
name: implement-deferred-row-marked-before-review
description: When the owner defers the Undo of the rename toast, /ux:implement must mark that spec row deferred with a reason, build nothing for it, still mark the screen implemented, record the deferral under Known gaps and name it in the report
tags: [implement, deferred, conformance, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:implement` skill (Skill tool, `skill: "ux:implement"`, arguments `001`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). The application cannot be launched here (no `node_modules`, no browser, no network) and there is no test or lint command; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding and the plan as approved:

- Defer the Undo in the success toast to a later flow: do not build it, do not touch `src/toast.ts`; the toast just says "Board renamed to {name}". Everything else in `.ux/screens/board-detail.md` is built as described.
- Strings: add the Content table's keys to `src/i18n.ts`; no other place for strings.
- Values: keep the literal values the sibling classes of `src/styles.css` already use; add no new color, spacing or radius.
- Tests: the project has none; do not add a test stack.
- Verification: the app cannot be launched; say so, do not claim it was verified.
- Review findings: fix those the skill says to fix; leave the others open in the report.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/screens/board-detail.md`, `.ux/inventory.md` and `src/toast.ts`.
