---
id: 001
title: Attach a receipt to an expense
status: implemented
date: 2026-06-02
job: attach receipts to the matching expenses
screens: [expenses-list]
decision: 001
prototype: .ux/prototypes/001-attach-receipt.html
---

# 001 — Attach a receipt to an expense

## Need

The accountant has one receipt from the client and knows which expense it belongs to. They are on the Expenses list. They succeed when the receipt shows on the expense row.

## Chosen approach

Drop the file straight on the expense row: the accountant is already on the list, the expense is in front of them, and FileDrop is the attachment pattern everywhere else in Ledgerly. No page change, no dialog.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | drops the receipt file on the expense row | the row's drop zone highlights, then a receipt thumbnail on the row | expenses-list |
| 2 | — | a toast "Receipt attached" with Undo (10 s) | expenses-list |

## Exit & failure paths

- **Abandon mid-flow:** releasing the file outside a row does nothing.
- **Error at step 1:** the row shows the upload error inline; the file is not attached; dropping again retries.
- **Undo / cancel:** "Undo" in the toast detaches the receipt; no confirmation.

## Acceptance criteria

- [x] dropping a file on a row attaches it and shows the thumbnail on that row
- [x] "Undo" within 10 s detaches it

## Out of scope

- several receipts at once
