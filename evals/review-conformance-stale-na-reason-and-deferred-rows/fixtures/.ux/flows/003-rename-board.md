---
id: 003
title: Rename a board
status: implemented
date: 2026-10-12
job: keep board names meaningful
screens: [rename-board]
decision: 003
prototype: .ux/prototypes/003-rename-board.html
---

# 003 — Rename a board

## Need

A board owner wants the board name to say what the board is for. They are on the board and want to change the name without leaving it.

## Chosen approach

An inline edit of the board title in the header: the title becomes a field in place, Enter saves, Esc puts the old name back.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | double-clicks the board title | the title as a field holding the current name, selected | rename-board |
| 2 | types a name and presses Enter | the new name in the header | rename-board |

## Exit & failure paths

- **Abandon mid-flow:** Esc or a click outside leaves the old name in the header; what was typed is lost.
- **Error at step 2:** deferred to flow 004 (server-side name rules).
- **Undo / cancel:** none needed — the old name is restored by renaming again.

## Acceptance criteria

- [ ] type a new name, press Enter → the header shows it
- [ ] type a new name, press Esc → the header shows the old name

## Out of scope

- Renaming from the board list.
