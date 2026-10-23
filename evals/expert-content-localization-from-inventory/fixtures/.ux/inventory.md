# Inventory

## UI stack
Vue 3 + TypeScript, Tailwind. i18n: i18next (`vue-i18n` bridge), keys `screen.element.purpose`, ICU plurals, source strings in `src/locales/en.json`, Arabic in `src/locales/ar.json`; `dir` switched on `<html>` by the locale store.

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | tailwind.config.ts | navy #1b2a4a, sand #d9c7a3, surface #ffffff, text #1f2933 |
| Typography | tailwind.config.ts | 12 / 14 / 16 / 20 / 28 |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Floor plan | /plan | src/views/FloorPlan.vue | rooms and desks of the floor, live status | — |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| SidePanel | src/components/SidePanel.vue | details of a desk or room | open, closed |
| Toast | src/components/Toast.vue | success and failure messages | success, error |

## Interaction patterns in use

- dates shown through `useDateFormat()` (Intl), never hand-built
