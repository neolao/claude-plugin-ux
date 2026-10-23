# Product — Fixturelab

Fixturelab is a desktop application where show designers patch the lighting fixtures of a show: which fixture sits where, on which address, with which profile.

## Platform & surface

- **Platform:** desktop (Electron, macOS and Windows)
- **Devices & input:** mouse + keyboard, one or two consoles per venue, laptop at the venue
- **Runs with:** `npm run start`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Show designer | expert | daily during a production | at the venue, on setup day, under time pressure | a complete, correct patch before the first rehearsal |

## Jobs to be done

1. When a venue sends its fixture list, the show designer wants to import it into the show, so that patching starts from real data.
2. When a fixture is wrong, the show designer wants to fix it without losing the rest of the patch.

## Constraints

- **Brand / design system:** in-house, dark theme only
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** two consoles may edit the same show on the venue's network

## Vocabulary

- **Fixture:** one lighting device of the show.
- **Patch:** the table of all fixtures with their addresses and profiles.
