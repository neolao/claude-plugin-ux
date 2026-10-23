# Inventory

## UI stack
React Native (Expo) + TypeScript. No component library.

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| InspectionRow | src/components/InspectionRow.tsx | one inspection in the list | default, selected |
| IconButton | src/components/IconButton.tsx | icon-only actions | default, pressed, disabled |
| Toast | src/components/Toast.tsx | short confirmations | info, success |

## Interaction patterns in use
- confirmations shown as a toast at the bottom of the screen
