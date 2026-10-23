---
id: 002
title: Undo an archive from the archived page
status: designed
date: 2026-10-02
job: 2 — when a project is finished, the operator wants to archive its board
screens: [board-archived]
decision: none
prototype: none
finding: F1 (audit 2026-09-14)
---

# 002 — Undo an archive from the archived page

## Need

The operator archives a board and lands on the archived page, which today offers no way back. Once a week an archive is a mistake: they want to undo it from there and return to the board.

## Chosen approach

The archived page keeps the navigation bar and offers two actions: "Undo archive" (the board is listed again and the operator lands on it) and "Back to Boards". No confirmation: undo is the reversal.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | archives a board | the archived page with its name, "Undo archive" and "Back to Boards" | board-archived |
| 2 | clicks "Undo archive" | the board, with a toast "{name} is back in Boards" | board-detail |

## Exit & failure paths

- **Abandon mid-flow:** "Back to Boards" or the navigation bar; the board stays archived.
- **Error at step 2:** an error toast says the undo failed and offers to retry; the page stays.
- **Undo / cancel:** archiving again from the board.

## Acceptance criteria

- [ ] "Undo archive" lists the board again and opens it

## Out of scope

- undo from the Boards list
