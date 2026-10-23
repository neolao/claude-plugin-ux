# Product — Propshelf

Propshelf is a Unity editor tool with which a studio's level artists browse the studio's prop catalog and place props in the scene they are building.

## Platform & surface

- **Platform:** game-engine tool (Unity editor, 2022 LTS)
- **Devices & input:** mouse + keyboard, two monitors, the panel docked next to the Inspector
- **Runs with:** open the project in the Unity editor, Window > Propshelf

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Level artist | expert | daily, all day | at the desk, the scene open in the viewport, the catalog server on the studio network | the right prop placed without leaving the scene |

## Jobs to be done

1. When a spot in the scene needs a prop, the level artist wants to find it in the catalog by tag, so that it is placed in seconds.
2. When a prop is chosen, the level artist wants to apply it to the selected placeholder, so that the scene updates in place.

## Constraints

- **Brand / design system:** none — the editor's own look
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** the catalog holds about 2,000 props and comes from a server on the studio network, 5 to 10 s to fetch; the editor must stay usable while the scene renders

## Vocabulary

- **Prop:** a reusable scene object of the catalog.
- **Placeholder:** an empty object in the scene marking where a prop goes.
