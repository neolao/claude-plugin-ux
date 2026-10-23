---
slug: board-archived
title: Board archived
flow: 002
status: designed
source:
---

# Board archived

## Purpose

Tell the operator the board is archived and let them undo it or leave.

## Layout

Navigation bar on top; the title "Board archived", one sentence naming the board, then two buttons: "Undo archive" (primary) and "Back to Boards". At narrow widths the buttons stack.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | n/a: the page always has a board | | |
| Loading | undo in progress | "Undo archive" disabled, labeled "Restoring…" | — |
| Partial | n/a: nothing is listed here | | |
| Success | the page opens | the title, the sentence, the two buttons | Undo archive |
| Error | the undo failed | error toast "The board could not be restored. Retry." | Undo archive |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| Undo archive | click | the board is listed again; the operator lands on it with a toast | the button is disabled and relabeled |
| Back to Boards | click | the Boards list | immediate |

## Content

| Key | Text | Notes |
|---|---|---|
| board.archived.undo | Undo archive | primary action |
| board.archived.restoring | Restoring… | while the undo runs |
| board.archived.back | Back to Boards | |
| board.archived.restored | {name} is back in Boards | success toast |
| board.archived.undoFailed | The board could not be restored. Retry. | error toast |

## Accessibility

- **Keyboard order:** navigation links, Undo archive, Back to Boards.
- **Focus after each action:** after undo, the board's title.
- **Announcements:** the toasts, as `src/toast.ts` does.
- **Contrast & targets:** the existing values of `src/styles.css`.
- **Motion:** none.
