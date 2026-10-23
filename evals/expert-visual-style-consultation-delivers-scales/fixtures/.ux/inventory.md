# UI inventory — Dispatchly

## UI stack

- **Framework / UI layer:** React 18, Vite
- **Component library / design system:** none — in-house `src/components/`
- **Styling approach:** CSS modules, literal values in every file
- **UI state management:** Zustand
- **Routing / navigation:** react-router, `/board`, `/drivers`, `/shipments/:id`
- **i18n:** react-intl, keys `board.*`, `shipment.*`
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | — | none (literals) |
| Typography | — | none (system-ui, sizes vary per file) |
| Spacing | — | none |
| Theming (dark mode…) | — | none |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Board | /board | src/pages/Board.tsx | the day's shipments, assign and follow | |
| Drivers | /drivers | src/pages/Drivers.tsx | the drivers and their load | |
| Shipment | /shipments/:id | src/pages/Shipment.tsx | one shipment's detail | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| DataTable | src/components/DataTable.tsx | the board and the drivers list | default, selected row |
| Button | src/components/Button.tsx | every action | primary, secondary |

## Interaction patterns in use

- assigning a driver is done inline on the board row, undo in a toast

## Known gaps

- no design tokens — every file has its own colors and sizes
