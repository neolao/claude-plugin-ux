# UI inventory — Fieldnote

## UI stack

- **Framework / UI layer:** React Native (Expo) + TypeScript
- **Component library / design system:** in-house `src/ui/`
- **UI state management:** zustand store, photos kept on the device until sent
- **Routing / navigation:** react-navigation stack
- **i18n:** hardcoded strings (English)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Reports | Reports tab | src/reports/ReportsScreen.tsx | the inspector's reports and whether each is sent | |
| Report | tap a report | src/reports/ReportScreen.tsx | the photos and notes of one report, the Send button | |
| Camera | Add photo | src/camera/CameraScreen.tsx | take a photo into the report | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| PhotoGrid | src/ui/PhotoGrid.tsx | the photos of a report | default, selected |
| Banner | src/ui/Banner.tsx | a message at the top of the screen | error, info |
| ModalSpinner | src/ui/ModalSpinner.tsx | blocking wait | default |
| Toast | src/ui/Toast.tsx | confirmations | success |

## Interaction patterns in use

- a failed request shows the Banner in its error variant with "Something went wrong"
- a completed action is confirmed by a toast

## Known gaps

- no screen has an offline state; the app does not check connectivity
- ModalSpinner shows no count and cannot be dismissed
