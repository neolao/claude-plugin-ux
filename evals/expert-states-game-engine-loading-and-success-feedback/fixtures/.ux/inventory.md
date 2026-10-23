# UI inventory — Propshelf

## UI stack

- **Framework / UI layer:** Unity UI Toolkit, one EditorWindow
- **Component library / design system:** the editor's built-in controls, a few custom elements in `Editor/UI/`
- **UI state management:** a ScriptableObject holding the catalog
- **Routing / navigation:** Window > Propshelf opens the panel; it docks like any editor window
- **i18n:** hardcoded strings (English)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Propshelf panel | Window > Propshelf | Editor/PropshelfWindow.cs | browse the catalog, apply a prop to the selection | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| PropGrid | Editor/UI/PropGrid.cs | thumbnails of props | default, selected |
| TagFilter | Editor/UI/TagFilter.cs | filter the grid by tag | default |
| Toast | Editor/UI/Toast.cs | a passing message inside the panel | default |

## Interaction patterns in use

- a prop applied to the selection replaces the placeholder in the viewport at once and registers with the editor's undo
- a long import shows the editor's own progress bar

## Known gaps

- the catalog is fetched on the main thread when the panel opens
- the grid has one appearance for "no result" and "catalog not loaded"
