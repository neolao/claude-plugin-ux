# UI inventory — Rigger

## UI stack

- **Framework / UI layer:** Unity UI Toolkit (editor), `Editor/Rigger/*.uxml`, `*.uss`
- **Component library / design system:** Unity EditorStyles and built-in editor controls; a few custom elements in `Editor/Rigger/Elements/`
- **Styling approach:** USS, no variables of its own; the editor's theme variables (`--unity-colors-*`) are used in two files
- **UI state management:** ScriptableObject per rig
- **Routing / navigation:** editor windows and panels, the Rigger menu in the menu bar, right-click menus on bones
- **i18n:** hardcoded strings (English)
- **UI testing:** none

## Design tokens

| Token family | Source file | Values / scale |
|---|---|---|
| Colors | — | none of its own; the editor's theme |
| Typography | — | the editor's font (Inter at the editor's size) |
| Spacing | — | none |

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Rigger panel | Window > Rigger, docked next to the Inspector | Editor/Rigger/RiggerPanel.cs | set up and check a rig | |
| Bone list | tab of the Rigger panel | Editor/Rigger/BoneList.cs | select and inspect bones | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| BoneRow | Editor/Rigger/Elements/BoneRow.cs | one bone of the list | default, selected, has warning |
| PropertyBlock | Editor/Rigger/Elements/PropertyBlock.cs | the editor's property fields for the selected bone | default, mixed values |

## Interaction patterns in use

- export goes through the editor's EditorUtility.SaveFilePanel
- the panel's menus are the editor's (Rigger menu, right-click GenericMenu on a bone)
- rig changes are registered with Unity's Undo (Ctrl/Cmd+Z)

## Known gaps

- no design tokens of its own — the two custom elements hardcode their colors
