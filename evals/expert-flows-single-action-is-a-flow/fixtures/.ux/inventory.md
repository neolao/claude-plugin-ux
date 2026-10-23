# UI inventory — Blockout

## UI stack

- **Framework / UI layer:** Unity UI Toolkit (editor)
- **Component library / design system:** Unity EditorStyles + `Editor/Blockout/Controls/`
- **Routing / navigation:** editor windows and panels, menus
- **i18n:** hardcoded strings (English)

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| Blockout panel | Window > Blockout, docked next to the Hierarchy | Editor/Blockout/BlockoutPanel.cs | place, snap, group and inspect prefabs | |
| Prefab library | tab of the Blockout panel | Editor/Blockout/LibraryTab.cs | pick the prefab to place | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| ActionRow | Editor/Blockout/Controls/ActionRow.cs | the panel's action buttons (Snap, Group, Replace) | enabled, disabled when nothing is selected |
| ResultLine | Editor/Blockout/Controls/ResultLine.cs | one line under the actions showing the last result, with a link | info, warning |

## Interaction patterns in use

- every panel action (Snap, Group, Replace) acts on the current Hierarchy selection and is disabled when nothing is selected
- the result of the last action is shown in the ResultLine under the actions, with a link to the object it touched
- scene changes are registered with Unity's Undo (Ctrl/Cmd+Z)
