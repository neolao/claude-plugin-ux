# Inventory

## UI stack
React 18 + TypeScript, CSS modules. i18n: react-intl, keys `screen.element.purpose`, source strings in `src/locales/en.json`.

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | src/styles/tokens.css | --surface #ffffff, --text #1f2933, --primary #1d4ed8, --error #dc2626 |
| Typography | src/styles/tokens.css | 13 / 14 / 16 / 20 / 28 |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Expected deliveries | /deliveries | src/views/Deliveries.tsx | deliveries announced and not yet received | — |
| Delivery | /deliveries/:id | src/views/Delivery.tsx | one delivery and its titles | — |

## Interaction patterns in use

- success and failure shown as a toast at the bottom right
