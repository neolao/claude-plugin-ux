---
slug: board-detail
title: Board detail
flow: 001
status: designed
source:
---

# Board detail

## Purpose

Read one board and keep its name current.

## Layout

Navigation bar on top; a header row (`.board-header`) with the title and the "Archive board" button; the card list below. When renaming, the title becomes a text input in place, same width and position. At narrow widths the header wraps and the input takes the full width.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | the board has no cards | the header, then "No cards yet — cards appear here when the team adds them." | Archive board |
| Loading | the board is being fetched | "Loading the board…" | — |
| Partial | n/a: a board is fetched whole, with its cards | | |
| Success | the board is loaded | the header with the title, the card list | rename the title |
| Error | the fetch failed | "This board could not be loaded. Check your connection and retry." with Retry | Retry |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| title | click, or F2 while focused | the title becomes an input holding the name, text selected, focused | the input appears at once |
| rename input | Enter | the name is saved; the title shows it; toast "Board renamed to {name}" with Undo | the input is disabled while saving |
| rename input | Escape, or focus leaves | the previous name is restored; the title is back | immediate |
| Undo (toast) | click within 6 s | the previous name is saved back; the title shows it | toast "Board renamed to {previous}" |
| rename input | Enter, save fails | the input stays with the typed name; error toast "The board could not be renamed. Retry." | immediate |

## Content

| Key | Text | Notes |
|---|---|---|
| board.rename.label | Board name | accessible name of the input |
| board.renamed | Board renamed to {name} | success toast |
| board.rename.undo | Undo | action in the toast |
| board.rename.failed | The board could not be renamed. Retry. | error toast |

## Accessibility

- **Keyboard order:** navigation links, the title (focusable), Archive board, the cards.
- **Focus after each action:** Enter, Escape and Undo return focus to the title.
- **Announcements:** the toasts are `role="status"` (success) and `role="alert"` (error), as `src/toast.ts` does.
- **Contrast & targets:** the existing values of `src/styles.css`.
- **Motion:** none.
