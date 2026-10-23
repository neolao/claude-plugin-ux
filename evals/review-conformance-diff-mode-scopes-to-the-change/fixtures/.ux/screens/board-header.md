---
slug: board-header
title: Board header
flow: 002
status: implemented
source: src/BoardHeader.tsx
---

# Board header

## Purpose

Show the board's name and let the owner rename it in place.

## Layout

The board name as the page title, alone on the header's left; no separate rename control.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | n/a: a board always has a name | | |
| Loading | n/a: the name arrives with the page | | |
| Partial | n/a | | |
| Success | the rename was saved | the new name in the header | — |
| Error | the rename failed | the previous name again, a toast saying the rename failed | — |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| board name | double-click | the name becomes an editable field, text selected; Enter saves, Esc restores | the field appears in place |

## Content

| Key | Text | Notes |
|---|---|---|
| board.rename.failed | The board could not be renamed. | toast |

## Accessibility

- **Keyboard order:** the name is focusable; Enter on it starts editing
- **Focus after each action:** stays on the name
- **Announcements (live regions / screen reader):** the failure toast
- **Contrast & targets:** the project's tokens
- **Motion:** none
