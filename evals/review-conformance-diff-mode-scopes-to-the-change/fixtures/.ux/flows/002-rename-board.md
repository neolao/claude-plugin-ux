---
id: 002
title: Rename a board
status: implemented
date: 2026-10-08
job: keep a board's name meaningful as the work changes
screens: [board-header]
decision: 002
prototype: .ux/prototypes/002-rename-board.html
---

# 002 — Rename a board

## Need

A board owner wants to rename the board they are looking at, in place, without a settings page.

## Chosen approach

The name in the board header is edited in place: double-click, type, Enter.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | double-clicks the board name | the name becomes an editable field with the text selected | board-header |
| 2 | types a name and presses Enter | the new name in the header | board-header |

## Exit & failure paths

- **Abandon mid-flow:** Esc or blur restores the previous name.
- **Error at step 2:** the previous name is shown again with a toast saying the rename failed.
- **Undo / cancel:** renaming again is the undo.

## Acceptance criteria

- [ ] double-click the name, type, Enter → the header shows the new name

## Out of scope

- Renaming from the board list.
