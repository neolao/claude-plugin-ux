# Product — Cue

Cue is a desktop application where lighting technicians prepare the cue list of a show before the performance, on the venue's laptop.

## Platform & surface

- **Platform:** desktop (Electron, macOS and Windows)
- **Devices & input:** mouse + keyboard, one 13" laptop screen, the window often tiled next to the lighting console software
- **Runs with:** `npm run dev` (Electron window)

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Lighting technician | expert | daily during a production, idle between productions | backstage, between rehearsals, under time pressure | a cue list that matches the director's latest notes before the next run |

## Jobs to be done

1. When the director changes the order of scenes, the lighting technician wants to rename and reorder the affected cues, so that the cue list matches the run order.
2. When a cue is wrong, the lighting technician wants to go back to the previous version, so that a rehearsal is never run on a broken list.

## Constraints

- **Brand / design system:** in-house, `src/renderer/theme/`
- **Accessibility target:** none stated
- **Localization:** English, French
- **Performance / offline / other:** works offline; the venue's laptop has no reliable network

## Vocabulary

- **Cue:** one lighting change, numbered, triggered during the show.
- **Show:** the ordered list of cues of one production.
