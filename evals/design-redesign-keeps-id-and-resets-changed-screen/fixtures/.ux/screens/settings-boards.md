---
slug: settings-boards
title: Settings › Boards
flow: 003
status: implemented
source: src/settings/SettingsBoards.tsx
---

# Settings › Boards

## Purpose

Rename or delete boards.

## Layout

Navigation bar on top; the title; one row per board (`.settings-row`): the name, "Rename", "Delete permanently". Rows wrap at narrow widths.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | no board | "No boards yet. Create one from the Boards list." | — |
| Loading | the boards are being fetched | "Loading boards…" | — |
| Partial | n/a: the list is fetched whole | | |
| Success | the boards are loaded | the rows | Rename |
| Error | the fetch failed | "The boards could not be loaded. Check your connection and retry." with Retry | Retry |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| Delete permanently | click | ConfirmDialog opens, naming the board | the dialog opens |
| Delete board (dialog) | click | the row disappears; toast "{name} deleted" | the dialog closes |
| Cancel (dialog) | click or Escape | the dialog closes; nothing changes | immediate |

## Content

| Key | Text | Notes |
|---|---|---|
| settings.boards.delete | Delete permanently | |
| settings.boards.deleteTitle | Delete {name} permanently? | dialog title |
| settings.boards.deleteBody | The board and all its cards are deleted for good. This cannot be undone. | |
| settings.boards.deleteConfirm | Delete board | |
| settings.boards.deleted | {name} deleted | success toast |

## Accessibility

- **Keyboard order:** navigation links, then per row: Rename, Delete permanently.
- **Focus after each action:** the dialog traps focus; after it closes, the row's Rename button.
- **Announcements:** the toasts, as `src/toast.ts` does.
- **Contrast & targets:** the existing values of `src/styles.css`.
- **Motion:** none.
