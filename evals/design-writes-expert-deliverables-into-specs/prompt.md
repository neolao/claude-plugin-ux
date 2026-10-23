---
name: design-writes-expert-deliverables-into-specs
description: On a native desktop need /ux:design must consult expert-flows and expert-platform and write their deliverables into the specs — the host entry form in step 1, the three exit paths, the undo-stack binding in the Interactions row, every States row, a Layout naming the reused component, a keyed Content table in the i18n source language
tags: [design, experts, desktop, specs, recall, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:design` skill (Skill tool, `skill: "ux:design"`, arguments `duplicate a preset with its effect chain`) on the project in the current directory: a `.ux/` folder with `product.md` and `inventory.md` describing Lumen, a native Qt 6 desktop application for macOS and Windows. The source code is not in this workspace — the inventory is the only description of the UI; there is no `CLAUDE.md`, no glossary, no `.ux/style.md`, no flow yet. There is no browser and no network here; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, treat the shared understanding as confirmed, and take the option the skill recommends when it proposes its 2–3 options:

- Where the action lives: on the preset selected in the Library — in the Preset menu with an accelerator, and in the preset's right-click menu, like Rename and Delete.
- Success: the duplicate appears right under the original in the Library, selected, named "<name> copy", with the same effect chain.
- Reversibility: you decide.
- Data: a chain with many effects is copied in one step; the duplicate is saved like every library change.
- Localization: the strings are English source strings for Qt Linguist, German comes from the `.ts` file.
- Out of scope: duplicating several presets at once; duplicating from the Chain editor.

Once the skill has finished, repeat its final report, then print the complete content of every file under `.ux/flows/`, `.ux/screens/` and `.ux/decisions/`.
