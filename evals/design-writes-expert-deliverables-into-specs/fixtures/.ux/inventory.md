# UI inventory — Lumen

## UI stack

- **Framework / UI layer:** Qt 6 Widgets (C++), OS native style on macOS and Windows
- **Component library / design system:** Qt widgets, `src/ui/widgets/`
- **Styling approach:** OS style, a few QSS rules in `src/ui/theme.qss`
- **UI state management:** QUndoStack per library document
- **Routing / navigation:** native menu bar (File, Edit, Preset, Window, Help), dock panels
- **i18n:** Qt Linguist, `tr()` strings, `.ts` files per language
- **UI testing:** Qt Test, `tests/ui/`

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Library | main window, Window > Library | src/ui/LibraryView.cpp | list and select presets | |
| Chain editor | Preset > Edit chain, Cmd/Ctrl+E, double-click a preset | src/ui/ChainEditor.cpp | edit the effect chain of one preset | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| PresetRow | src/ui/widgets/PresetRow.cpp | one preset of the Library | default, selected, loaded on the pedal |
| Banner | src/ui/widgets/Banner.cpp | a message under the toolbar with one link, auto-hides after 5 s | info, warning |

## Interaction patterns in use

- every preset action (Rename, Delete, Edit chain) is in the Preset menu with its accelerator and in the preset's right-click context menu
- every change to the library goes through the document's QUndoStack and is undone with Edit > Undo (Cmd/Ctrl+Z)
- the Library is saved on every change; there is no Save command

## Known gaps

- File > Export opens a custom in-app file browser instead of the OS file dialog
