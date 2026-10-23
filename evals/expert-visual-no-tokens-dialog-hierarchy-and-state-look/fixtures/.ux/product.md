# Product — Clientbook

Clientbook is a web application where a small accounting firm keeps its clients, their contacts and their yearly engagements.

## Platform & surface

- **Platform:** web (Chrome, Firefox and Safari)
- **Devices & input:** mouse + keyboard on 1366 px laptops; a few account managers use a 13" screen
- **Runs with:** `npm run dev`, http://localhost:5173

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Account manager | occasional | weekly | at the desk, between two client calls | the client's file up to date |
| Partner | novice | rare | at the desk, year end | the list of clients still active |

## Jobs to be done

1. When a client leaves the firm, the account manager wants to archive it with its contacts, so that it leaves the active list but stays searchable.
2. When a contact changes, the account manager wants to edit it from the client's page, so that the next call reaches the right person.

## Constraints

- **Brand / design system:** none
- **Accessibility target:** none stated
- **Localization:** French
- **Performance / offline / other:** none

## Vocabulary

- **Client:** a company or a person the firm works for.
- **Archive:** remove a client from the active list, keeping its history.
