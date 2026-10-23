---
slug: rig
title: Rig
flow: 002
status: designed
source:
---

# Rig

## Purpose

See every fixture of the rig with its patch and state, and edit a patch in place.

## Layout

A list of the 120 fixtures with their eight attributes (name, position, universe, channel, mode, gel color, state, notes), sortable by any column; the patch is edited in place. At 1366 px every attribute stays visible; notes truncate with an ellipsis.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | no fixture in the rig yet | an empty state offering "Add fixture" | Add fixture |
| Loading | the rig is being read | the list's skeleton | — |
| Partial | n/a: one local read | | |
| Success | the rig is read | the 120 fixtures | Edit a patch |
| Error | the read failed | an inline error with Retry | Retry |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| channel cell | edit, blur | the patch is saved | the value shows in place |

## Content

| Key | Text | Notes |
|---|---|---|
| title | Rig | |
| empty.hint | No fixture yet | |
| error.generic | The rig could not be read | |

## Accessibility

- **Keyboard order:** header, then rows top to bottom
- **Focus after each action:** stays on the edited cell
- **Announcements (live regions / screen reader):** the saved value
- **Contrast & targets:** tokens of style.md
- **Motion:** none
