---
id: 001
title: Rename a board from the board
status: implemented
date: 2026-09-20
job: 1 — when looking at a board, the operator wants to rename it
screens: [board-detail]
decision: none
prototype: .ux/prototypes/001-rename-from-board.html
finding: F3 (audit 2026-09-14)
---

# 001 — Rename a board from the board

## Need

The operator, looking at a board, notices its name is out of date and renames it there, several times a week. Success: the title shows the new name and the Boards list follows.

## Chosen approach

Inline rename on the board's title, the pattern Settings › Boards already uses: the title becomes an input, Enter saves, Escape cancels. No new screen, no dialog.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | clicks the title or presses F2 | the title as an input, its text selected | board-detail |
| 2 | types the new name, presses Enter | the title with the new name, a toast "Board renamed to …" | board-detail |

## Exit & failure paths

- **Abandon mid-flow:** Escape or a click elsewhere restores the previous name.
- **Error at step 2:** the input stays with the typed name; an error toast says the rename failed and offers to retry.
- **Undo / cancel:** the toast offers Undo for 6 s; it restores the previous name.

## Acceptance criteria

- [x] Enter on the input saves the name and the title shows it

## Out of scope

- renaming from the Boards list — the job arises on the board
