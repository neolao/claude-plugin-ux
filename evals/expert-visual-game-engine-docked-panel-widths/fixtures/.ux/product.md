# Product — Lightbook

Lightbook is a Unity editor tool with which a studio's lighting artists review every light of the open scene in one table and tune them without hunting through the hierarchy.

## Platform & surface

- **Platform:** game-engine tool (Unity editor 2022 LTS, macOS and Windows)
- **Devices & input:** mouse + keyboard, two monitors; the panel is docked next to the Inspector most of the day, sometimes in the bottom dock under the Scene view, sometimes undocked full width on the second monitor
- **Runs with:** open the project in Unity, Window > Lightbook

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Lighting artist | expert | daily, all day | at the desk, the scene open in the viewport, 80 to 200 lights per scene | every light reviewed and tuned before the lighting bake |

## Jobs to be done

1. When a scene is lit, the lighting artist wants to see every light with its type, intensity and range in one table, so that the odd one stands out.
2. When a light is off, the lighting artist wants to change its intensity from the table, so that the viewport updates without selecting the light.

## Constraints

- **Brand / design system:** none — the editor's own look
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** the panel must stay usable while the scene renders

## Vocabulary

- **Light:** a Unity Light component in the scene.
- **Bake:** the lightmap computation run once the lights are tuned.
