---
name: style-redesign-keep-current-stays-documented
description: In redesign mode, when the owner keeps the current system, /ux:style must offer that direction first and write style.md as a documented system — status documented, the tokens.css values, Source of truth the token file, no Migration, no decision
tags: [style, redesign, keep-current, recall, skill]
runs: 3
max_turns: 80
timeout_seconds: 1800
allowed_tools: [Read, Grep, Glob, Write, Edit, Agent, Skill]
---

Run the `ux:style` skill (Skill tool, `skill: "ux:style"`, arguments `--redesign`) on the project in the current directory: an Electron application with its main process under `electron/` and its React renderer under `src/renderer/`, with a `.ux/` folder holding `product.md` and `inventory.md` describing Cuecard. The design tokens are in `src/renderer/styles/tokens.css`. There is no `.ux/style.md` yet, no `.ux/decisions/` folder, no `CLAUDE.md`. The application cannot be launched here (no `node_modules`, no browser, no network); the Artifact tool and the browser tools are not available, so the style tiles can only be published as file paths; the workspace is not a git repository, so there is nothing to commit.

`AskUserQuestion` is not available in this run. Whenever the skill or `ux:clarify` would ask the user, take the product owner's answers below as given, pick the recommended option for anything they do not cover, and treat the shared understanding as confirmed:

- Adjectives: calm, legible, instant. Anti-references: consumer apps with gradients and illustrations.
- What must survive the redesign: the green GO and amber standby colors — stage managers read them in the dark and they are the same in every theatre's cue software.
- Imagery: none — no illustrations, no photos, a plain text empty state.
- Density: compact; the cue table must show forty cues on the laptop screen.
- Motion: none beyond the 120 ms state changes; nothing animates during the show.
- Iconography: none; labels only.
- Tone of content: terse, the words a stage manager calls out.

When the skill puts its directions to the owner, the owner chooses **Keep the current system** — the show opens next week and the crew knows the screen as it is.

Once the skill has finished, repeat its final report, then list the directions it put to the owner in the order it presented them (one line each), then print the complete content of `.ux/style.md` and of every file under `.ux/decisions/` (or say the folder is empty or absent).
