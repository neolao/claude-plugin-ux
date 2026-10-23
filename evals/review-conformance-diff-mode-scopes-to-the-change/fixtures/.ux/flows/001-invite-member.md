---
id: 001
title: Invite a member
status: implemented
date: 2026-10-01
job: invite colleagues to a board
screens: [invite-member]
decision: 001
prototype: .ux/prototypes/001-invite-member.html
---

# 001 — Invite a member

## Need

A board owner wants a colleague on the board. They are in the Members panel and want to send one invitation without leaving it. They know it worked when the invitation is confirmed as sent to that address.

## Chosen approach

A small dialog over the board: one email field, one action.

## Flow

| Step | User does | System shows | Screen |
|---|---|---|---|
| 1 | clicks "Invite" in the Members panel | the Invite a member dialog, email field focused | invite-member |
| 2 | types an address and sends | the button reads "Sending…" and is disabled | invite-member |
| 3 | — | a confirmation that the invitation was sent to that address; the dialog closes | invite-member |

## Exit & failure paths

- **Abandon mid-flow:** Cancel, Esc or the close button closes the dialog; the typed address is kept and shown again when the dialog reopens.
- **Error at step 2:** the generic error appears under the email field, the address stays in the field, the button is enabled again for a retry.
- **Undo / cancel:** an invitation cannot be undone; none is needed — nothing is sent before the user acts.

## Acceptance criteria

- [ ] send a valid address → confirmation naming the address, dialog closed
- [ ] send fails → message under the field, address kept, Send enabled again

## Out of scope

- Bulk invitation from a CSV file — a different job, left for a later flow.
