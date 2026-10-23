---
name: clarify-undecided-answer-keeps-the-recommendation
description: /ux:clarify must record a decision stated in the topic as the user's choice, settle an "I don't know" answer on the recommended option tagged as deferred by the user, and cite the product.md fact behind it
tags: [clarify, need, undecided, precision, skill]
runs: 3
max_turns: 40
timeout_seconds: 1200
allowed_tools: [Read, Grep, Glob, Agent, Skill]
---

Run the `ux:clarify` skill (Skill tool, `skill: "ux:clarify"`) as `/ux:design` does in its Step 3, with these arguments:

```
kind=need topic="archive a board from the Boards list, with an undo toast and no confirmation dialog" context=
Who: the operator (product.md Users — expert, daily, at a desk, several boards open in a day).
Job: product.md job 2 — when a project is finished, the operator wants to archive its board, so that the Boards list only shows live projects.
Trigger: a project is finished while the operator is on the Boards list.
Success: the board is gone from the list; the operator stays on the list.
Constraints: web (React SPA), mouse + keyboard, laptop screens; no design system; product.md Constraints says accessibility target "none stated"; English only (src/i18n.ts).
Existing material: Boards list (src/boards/BoardList.tsx) has one row per board; Board detail archives through "Archive board" and lands on Board archived (audit F1 flagged that dead end); ConfirmDialog and toast in the inventory.
```

The project is in the current directory: a React web application under `src/` with a `.ux/` folder (`product.md`, `inventory.md`, `flows/001-rename-from-board.md`, `audit/2026-09-14.md`). There is no browser and no network here; the workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Entry point: an "Archive" action on each row of the Boards list.
- Accessibility target: I don't know — you decide.
- Data: a list of up to fifty boards; archiving is one request per board; while it runs the row is dimmed.
- Out of scope: archiving several boards at once.

Once the skill has finished, print its `## Shared understanding` block in full, exactly as the skill ended with it.
