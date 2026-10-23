---
name: clarify-plan-root-lists-deferred-rows-with-reason
description: When the owner defers the Undo of the rename toast, /ux:clarify kind=plan must list that row under Out of scope with its reason, settle nothing that builds it, keep the other rows and cite the toast's missing action slot as a fact
tags: [clarify, plan, deferred, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`) as `/ux:implement` does in its Step 2b, with these arguments:

```
kind=plan topic="implementation of 001 — Rename a board from the board" context=
Spec: .ux/flows/001-rename-from-board.md (validated), .ux/screens/board-detail.md (validated, source empty). Screen mounts in src/boards/BoardDetail.tsx (route /boards/:id in src/App.tsx).
Reuse: Button (src/components/Button.tsx); the inline-rename pattern of src/settings/SettingsBoards.tsx (input in place, Enter saves, Escape cancels); toast(kind, message) from src/toast.ts for the success and error toasts; strings through t() in src/i18n.ts, keys per the spec's Content table.
Extend: the title of BoardDetail becomes focusable and editable (click or F2), as the spec's Interactions rows say.
Contradiction: the spec's success toast carries an Undo for 6 s; src/toast.ts takes a kind and a message only — no action slot, no duration. Building the Undo means extending toast.ts with an action.
Tokens: the inventory has none and there is no .ux/style.md — values come from the sibling classes of src/styles.css.
Tests: none in the project. Verification: the app cannot be launched here (no node_modules, no browser).
```

The project is in the current directory: a React web application under `src/` with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`). There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- The Undo in the success toast is deferred to a later flow: the toast has no action slot and the release is next week. Do not plan it; the toast just says "Board renamed to {name}".
- Everything else in the board-detail spec is built as described: click or F2 to rename, Enter saves, Escape restores, the error toast with Retry.
- Strings: the Content table's keys go into src/i18n.ts; no other place for strings.
- Values: keep the literal values the sibling classes of src/styles.css use; add no new color, spacing or radius.
- Tests: none; do not add a test stack. Verification: the app cannot be launched; the plan says so.

Once the skill has finished, print its `## Shared understanding` block in full, exactly as the skill ended with it.
