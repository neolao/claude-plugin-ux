---
id: 003
title: Delete a board from Settings
status: implemented
date: 2026-08-30
job: 3 — when cleaning up the boards in Settings, the operator wants to delete a board created by mistake
screens: [settings-boards]
decision: none
prototype: none
---

# 003 — Delete a board from Settings

## Need

The operator, cleaning up the boards in Settings, deletes a board created by mistake. Deletion is irreversible: the board and its cards are gone for good.

## Chosen approach

A "Delete permanently" button on each row of Settings › Boards, confirmed by ConfirmDialog, which names the board and says its cards are lost.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | clicks "Delete permanently" on a row | ConfirmDialog "Delete {name} permanently?" | settings-boards |
| 2 | clicks "Delete board" | the row disappears, a toast "{name} deleted" | settings-boards |

## Exit & failure paths

- **Abandon mid-flow:** "Cancel" or Escape closes the dialog; nothing changes.
- **Error at step 2:** an error toast says the deletion failed and offers to retry; the row stays.
- **Undo / cancel:** none — the dialog says it cannot be undone.

## Acceptance criteria

- [x] Confirming the dialog removes the row and shows the toast

## Out of scope

- deleting from the board itself
