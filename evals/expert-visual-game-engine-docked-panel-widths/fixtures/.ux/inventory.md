# UI inventory — Lightbook

## UI stack

- **Framework / UI layer:** Unity UI Toolkit (editor), `Editor/Lightbook/*.uxml`, `*.uss`
- **Component library / design system:** the editor's built-in controls (EditorStyles); two custom elements in `Editor/Lightbook/Elements/`
- **Styling approach:** USS; the editor's theme variables (`--unity-colors-*`, `--unity-metrics-single_line-height`)
- **UI state management:** a ScriptableObject holding the scene's light list
- **Routing / navigation:** Window > Lightbook opens the panel; it docks like any editor window
- **i18n:** hardcoded strings (English)
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | — | the editor's theme variables |
| Typography | — | the editor's font at the editor's size |
| Spacing | — | the editor's metrics: 20 px rows (`--unity-metrics-single_line-height` 18 px plus 2 px) |
| Theming (dark mode…) | — | the editor's dark and light themes |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Lightbook panel | Window > Lightbook | Editor/Lightbook/LightbookWindow.cs | the scene's lights in one table | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| LightRow | Editor/Lightbook/Elements/LightRow.cs | one light of the table | default, selected |
| HelpBox | the editor's HelpBox | a paragraph of guidance at the top of a panel | info, warning |

## Interaction patterns in use

- a value edited in a panel registers with the editor's undo
- the editor's dark and light themes are followed through the theme variables

## Known gaps

- the panel has never been tried docked in the bottom dock
