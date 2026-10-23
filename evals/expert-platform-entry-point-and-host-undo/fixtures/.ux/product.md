# Product — Lumen

Lumen is a native desktop application where sound designers manage presets of audio effect chains for a hardware pedal, on macOS and Windows.

## Platform & surface

- **Platform:** desktop (native, Qt 6 Widgets, macOS and Windows)
- **Devices & input:** mouse + keyboard, one external monitor, the pedal connected by USB
- **Runs with:** `cmake --build build && ./build/lumen`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Sound designer | expert | daily | studio desk, pedal at hand, many presets open at once | a preset library ready to load on the pedal before a session |

## Jobs to be done

1. When a preset is close to what is needed, the sound designer wants to duplicate it with its whole effect chain, so that the variant is built without rebuilding the chain.
2. When a change was a mistake, the sound designer wants to take it back, so that the preset is never lost.

## Constraints

- **Brand / design system:** native Qt widgets with the OS style; in-house icons in `resources/icons/`
- **Accessibility target:** none stated
- **Localization:** English, German
- **Performance / offline / other:** none

## Vocabulary

- **Preset:** a named effect chain stored on the pedal.
- **Effect chain:** the ordered effects of one preset.
