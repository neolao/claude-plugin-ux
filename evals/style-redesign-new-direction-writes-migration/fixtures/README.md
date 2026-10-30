# Cuecard

Cuecard is the desktop application a theatre's stage manager uses to write and run the cue sheet of a show: one line per cue (lights, sound, fly), edited during rehearsals and followed live during the performance from the prompt corner, on a laptop next to the stage.

## Development

```
npm install
npm run dev
```

Electron hosts a React renderer; the main process owns the menus and the window, the renderer owns everything drawn inside it. Strings are in `src/renderer/strings.ts`.
