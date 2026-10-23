# UI inventory — FieldCheck (iOS)

## UI stack

- **Framework / UI layer:** SwiftUI, iOS 17+
- **Component library / design system:** in-house `DesignSystem/` (colors, type, FormRow, IconButton, Toast)
- **Styling approach:** SwiftUI modifiers, tokens in `DesignSystem/Tokens.swift`
- **UI state management:** Observable view models
- **Routing / navigation:** NavigationStack, system Back
- **i18n:** String catalogs (`Localizable.xcstrings`), dates formatted with `Date.FormatStyle`
- **UI testing:** XCUITest

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Inspections | tab bar, first tab | Screens/InspectionsList.swift | today's inspections | |
| Inspection form | row of the Inspections list | Screens/InspectionForm.swift | fill in one inspection | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| FormRow | DesignSystem/FormRow.swift | one labeled row of a form | default, error |
| IconButton | DesignSystem/IconButton.swift | icon-only actions | default, disabled |
| Toast | DesignSystem/Toast.swift | confirmation with an undo link | default |

## Interaction patterns in use

- forms use the system keyboard and the system pickers inside a FormRow
- the Android build has its own components; the two builds share the data model, not the UI

## Known gaps

- no date control yet in `DesignSystem/`
