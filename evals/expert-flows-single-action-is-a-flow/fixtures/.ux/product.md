# Product — Blockout

Blockout is a Unity editor tool where level designers assemble a level's rough geometry from a library of prefabs, before the art team models the final assets.

## Platform & surface

- **Platform:** game-engine tool (Unity editor, macOS and Windows)
- **Devices & input:** mouse + keyboard, two monitors, the Blockout panel docked next to the Hierarchy
- **Runs with:** open the project in Unity 2022 LTS, Window > Blockout

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Level designer | expert | daily, all day | at the desk, scene open, art team waiting for the list | a playable blockout handed to the art team on time |

## Jobs to be done

1. When a level's blockout is far enough, the level designer wants to hand the art team the list of placed prefabs, so that they know what to model next.
2. When a prefab is misplaced, the level designer wants to move or replace it without touching the rest.

## Constraints

- **Brand / design system:** Unity editor look (EditorStyles)
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** the editor must stay usable while a large scene is open

## Vocabulary

- **Prefab:** a reusable placed object of the blockout.
- **Blockout:** the level's rough geometry made of placed prefabs.
