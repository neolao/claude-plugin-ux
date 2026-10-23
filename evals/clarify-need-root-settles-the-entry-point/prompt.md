---
name: clarify-need-root-settles-the-entry-point
description: On a need whose draft frame has no entry point, /ux:clarify kind=need must settle the entry point as the screen the owner names, say the job is new to product.md and take who from product.md Users as a fact
tags: [clarify, need, entry-point, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`) as `/ux:design` does in its Step 3, with these arguments:

```
kind=need topic="let the operator duplicate a board with its cards" context=
Who: the operator (product.md Users — expert, daily, at a desk, several boards open in a day).
Job: not in product.md Jobs to be done — the closest is job 2 (archive a finished board); duplicating starts a new project from a finished one.
Trigger: a new project starts with the same cards as an existing board.
Success: a second board exists with the same cards, with its own name.
Constraints: web (React SPA), mouse + keyboard, laptop screens; no design system, no accessibility target stated, English only (src/i18n.ts).
Existing material: Board detail (src/boards/BoardDetail.tsx) has the "Archive board" button; Settings › Boards (src/settings/SettingsBoards.tsx) renames and deletes; Button, ConfirmDialog, toast in the inventory; flow 001 (rename from the board) is designed.
```

The project is in the current directory: a React web application under `src/` with a `.ux/` folder (`product.md`, `inventory.md`, `flows/001-rename-from-board.md`, `audit/2026-09-14.md`). There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Where the action lives: on the board itself, next to "Archive board" — the operator is looking at the board they want to copy.
- Success: the copy opens as the current board, named "<name> (copy)", its cards in the same order.
- Reversibility: no confirmation before duplicating; the copy can be deleted from Settings › Boards like any board.
- Data: a board with many cards is duplicated in one request; while it runs the button shows "Duplicating…".
- Out of scope: duplicating from the Boards list or from Settings.

Once the skill has finished, print its `## Shared understanding` block in full, exactly as the skill ended with it.
