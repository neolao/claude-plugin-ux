# Inventory

## UI stack

- **Framework / UI layer:** React 18 + TypeScript
- **Styling approach:** plain CSS in `src/styles.css`
- **i18n:** `t(key, params)` from `src/i18n.ts`, strings in the same file
- **UI testing:** none

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| Dialog | src/Dialog.tsx | modal forms; standard close button in the header, Esc closes | open, closed |

## Interaction patterns in use

- success shown as a toast (`showToast` from `src/toast.ts`)
- validation inline on blur
