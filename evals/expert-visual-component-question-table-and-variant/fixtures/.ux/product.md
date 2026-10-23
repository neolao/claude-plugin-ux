# Product — Stagebook

Stagebook is a web application where a theatre's lighting technicians keep the rig's fixtures, their patch and their state during the season.

## Platform & surface

- **Platform:** web (Chrome on the lighting desk's laptop and on the office desktops)
- **Devices & input:** mouse + keyboard, 1366 px laptop at the desk, 1920 px in the office
- **Runs with:** `npm run dev`, http://localhost:5173

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Lighting technician | expert | daily | at the desk during focus sessions, in the office between shows, 120 fixtures on the rig | every fixture patched and working before the show |

## Jobs to be done

1. When a focus session starts, the technician wants to see every fixture with its position, channel, mode, gel color and state, so that the faulty ones are spotted and compared in seconds.
2. When a fixture is swapped, the technician wants to edit its patch from the list, so that the console matches the rig.

## Constraints

- **Brand / design system:** none — `.ux/style.md` adopted
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** none

## Vocabulary

- **Fixture:** one lighting instrument of the rig.
- **Patch:** the DMX channel and mode a fixture answers to.
