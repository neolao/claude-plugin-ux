---
name: discover-desktop-shell-around-web-ui
description: /ux:discover must write Platform desktop (Electron) for a React renderer in an Electron shell, name the shell in the UI stack, give each screen its menu-bar entry point and source file, fill Theming with the OS-following data-theme mechanism and mark the dev command untested
tags: [discover, platform, inventory, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1500
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:discover` skill (Skill tool, `skill: "ux:discover"`, no arguments) on the project in the current directory: an Electron application with its main process under `electron/` and its React renderer under `src/renderer/`, its README at the root. The application cannot be launched here (no `node_modules`, no Electron binary, no network): the capture step degrades to code only, as the skill provides for. The workspace is not a git repository.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Users: one stage manager per show, expert, uses it daily during rehearsals and live during performances, on a laptop in the prompt corner, in the dark, under time pressure; mouse + keyboard only.
- Main jobs: write the cue sheet during rehearsals; fire cues in order during the show with one key; insert a preset cue from the library.
- Brand: none; accessibility target: none stated; language: English only; must keep working with no network.
- Vocabulary: cue, standby, GO, cue sheet, cue library — as used in the README and the strings.

Once the skill has finished, repeat its final report, then print the complete content of `.ux/product.md` and of `.ux/inventory.md`.
