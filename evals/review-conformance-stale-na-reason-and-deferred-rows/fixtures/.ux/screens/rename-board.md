---
slug: rename-board
title: Rename a board
flow: 003
status: implemented
source: src/BoardTitle.tsx
---

# Rename a board

## Purpose

Change the name of the board from its header.

## Layout

The board header. The title is plain text; in edit mode it is a single text field of the same width, with no buttons.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Idle | the board is open | the board name as text | double-click to edit |
| Editing | double-click on the title | the field holding the current name, selected | Enter to save |
| Loading | n/a: the name is already in memory when editing starts; nothing is fetched | | |
| Partial | n/a: a single name has no partial result | | |
| Success | Enter on a non-empty name | the new name in the header | — |
| Error | deferred: server-side name rules, flow 004 | | |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| title | double-click | edit mode | the field appears, name selected |
| field | Enter | the name is saved | the header shows the new name |
| field | Esc, click outside | edit mode ends, the old name is back | the header shows the old name |

## Content

| Key | Text | Notes |
|---|---|---|
| board.title.label | Board name | accessible name of the field |

## Accessibility

- **Keyboard order:** the field only
- **Focus after each action:** on edit → the field; after Enter or Esc → the title text
- **Announcements (live regions / screen reader):** none
- **Contrast & targets:** the project's tokens
- **Motion:** none
