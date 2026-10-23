---
name: design-redesign-keeps-id-and-resets-changed-screen
description: On /ux:design NNN of an implemented flow, the skill must redesign in place — same id, file and finding, status back to designed, prototype none, a new decision superseding the old — reset the changed screen to designed with its source kept, and leave the untouched specs implemented
tags: [design, redesign, status, decision, precision, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:design` skill (Skill tool, `skill: "ux:design"`, arguments `001`) on the project in the current directory: a React web application under `src/`, with a `.ux/` folder (`product.md`, `inventory.md`, flows under `.ux/flows/`, screens under `.ux/screens/`, a decision under `.ux/decisions/`, a previous audit under `.ux/audit/`). There is no browser and no network here; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, treat the shared understanding as confirmed, and take the option the skill recommends when it proposes its 2–3 options:

- What is wrong with flow 001: when focus leaves the rename input (a click elsewhere, a switch to another window) the typed name is thrown away; the operator loses a name several times a week. Leaving the input must save the name like Enter does; Escape alone cancels.
- Entry point, who, trigger: unchanged from the flow.
- Success: the title shows the new name whether the operator pressed Enter or clicked elsewhere.
- Error: as today — the input stays with the typed name and the error toast offers to retry.
- The Undo of the toast stays deferred as the spec says; do not design it here.
- Out of scope: renaming from the Boards list or from Settings.

Once the skill has finished, repeat its final report, then print the list of files under `.ux/flows/`, `.ux/screens/` and `.ux/decisions/`, then the complete content of `.ux/flows/001-rename-from-board.md`, `.ux/screens/board-detail.md` and every file under `.ux/decisions/`, and the frontmatter (the lines between the first two `---`) of `.ux/screens/settings-boards.md` and `.ux/flows/003-delete-from-settings.md`.
