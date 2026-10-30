---
name: style-redesign-new-direction-writes-migration
description: In redesign mode, when the owner takes a new direction, /ux:style must write style.md as adopted with a Migration table naming tokens.css, keep the GO and standby colors with dark values, and record a flow-less decision that style.md points at
tags: [style, redesign, migration, precision, skill]
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

When the skill puts its directions to the owner, the owner takes the **first direction that is not "Keep the current system"** — the current screen is hard to read in the dark and the next production starts in two months.

Once the skill has finished, repeat its final report, then list the directions it put to the owner in the order it presented them (one line each), then print the complete content of `.ux/style.md` and of every file under `.ux/decisions/` (or say the folder is empty or absent).
