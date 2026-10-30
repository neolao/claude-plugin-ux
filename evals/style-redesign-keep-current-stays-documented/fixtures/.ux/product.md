# Product — Cuecard

Cuecard is the desktop application a theatre's stage manager uses to write the cue sheet of a show during rehearsals and to run it live during the performance, from a laptop in the prompt corner next to the stage.

## Platform & surface

- **Platform:** desktop (Electron) — `electron/` hosts the menu bar and the window, `src/renderer/` draws everything inside it
- **Devices & input:** mouse + keyboard; one laptop screen, window 1280×800 by default and never narrower than 900 px (`electron/main.ts`)
- **Runs with:** `npm run dev` (untested)

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Stage manager | expert | daily during a run of shows | prompt corner, in the dark, headset on, under time pressure during the performance | fire every cue at the right moment without looking away from the stage |

## Jobs to be done

1. When a rehearsal settles a cue, the stage manager wants to write it in the sheet in seconds, so that the sheet is complete before the first performance.
2. When the show runs, the stage manager wants to put the next cue on standby and fire GO from the keyboard, so that the crew hears the call on time.
3. When a cue is reused between shows, the stage manager wants to insert it from the library, so that it is not retyped.

## Constraints

- **Brand / design system:** none stated; the renderer's tokens in `src/renderer/styles/tokens.css`
- **Accessibility target:** none stated
- **Localization:** English only, strings in `src/renderer/strings.ts`
- **Performance / offline / other:** must work with no network; nothing may distract from the stage during a performance

## Vocabulary

- **Cue:** one numbered line of the sheet — lights (LX), sound (SND) or fly (FLY) — with a label the stage manager calls out.
- **Standby:** the warning given to the crew before a cue; shown in amber.
- **GO:** the call that fires the cue; shown in green.
