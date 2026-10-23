---
name: prototype-missing-ux-invokes-discover
description: /ux:prototype 001 without a .ux/ folder must invoke ux:discover first, then stop on the missing flow with a pointer to /ux:design — no flow designed, no prototype written
tags: [prototype, discover, delegation, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:prototype` skill (Skill tool, `skill: "ux:prototype"`, arguments `001`) on the project in the current directory: a React web application under `src/` with no `.ux/` folder. The application cannot be launched here (no `node_modules`, no browser, no network); the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever a skill would ask the user, take the product owner's answers below as given and pick the recommended option for anything they do not cover:

- Taskboard is a web application where a small team keeps one board per project, with the cards of the work in progress.
- Users: an operator (expert, daily, at a desk) who keeps the boards current; team members (occasional, weekly) who read them.
- Jobs: rename a board; archive a finished board; delete a board created by mistake from Settings.
- Platform: web, mouse and keyboard, laptop screens. Not runnable locally — built and deployed by CI only.
- Constraints: no brand or design system, no accessibility target stated, English only with strings in `src/i18n.ts`.
- There is no flow to prototype yet; do not design one in this run.

Once the skill has stopped, repeat its last message verbatim, then list every file you wrote or edited during the run (or say "none").
