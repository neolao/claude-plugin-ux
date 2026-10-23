---
slug: invite-member
title: Invite a member
flow: 001
status: implemented
source: src/InviteMemberDialog.tsx
---

# Invite a member

## Purpose

Send one invitation to a colleague's email address.

## Layout

The inventory's `Dialog`, with its standard close button in the header. Top to bottom: the title, the email field with its label, the message area under the field, then the actions row — "Send invitation" as the primary action, "Cancel" beside it. At narrow widths the dialog takes the full width and the actions stack.

## States

| State | Trigger | What the user sees | Primary action |
|---|---|---|---|
| Empty | the dialog opens | the blank form, email field focused | Send invitation |
| Loading | n/a: the dialog fetches nothing; sending progress is the Send row of Interactions | | |
| Partial | n/a: a single invitation has no partial result | | |
| Success | the server accepted the invitation | a confirmation that the invitation was sent to that address; the dialog closes | — |
| Error | the server refused or the network failed | the generic error under the email field, the address kept | Send invitation (retry) |

## Interactions

| Element | Action | Result | Feedback (<100 ms) |
|---|---|---|---|
| email field | type, blur | the format is validated | the invalid-address hint under the field |
| Send invitation | click, Enter | the invitation is sent | the button reads "Sending…" and is disabled |
| Cancel | click, Esc | the dialog closes, the draft is kept | the dialog closes |

## Content

| Key | Text | Notes |
|---|---|---|
| invite.title | Invite a member | |
| invite.email.label | Email address | |
| invite.email.invalid | Enter a valid email address | |
| invite.send | Send invitation | |
| invite.sending | Sending… | |
| invite.cancel | Cancel | |
| invite.success | Invitation sent to {email} | |
| invite.error.generic | The invitation could not be sent. Check the address and try again. | |

## Accessibility

- **Keyboard order:** close button → email field → Send invitation → Cancel
- **Focus after each action:** on open → the email field; after close → the Invite button that opened the dialog
- **Announcements (live regions / screen reader):** the invalid-address hint and the generic error
- **Contrast & targets:** the project's tokens
- **Motion:** none
