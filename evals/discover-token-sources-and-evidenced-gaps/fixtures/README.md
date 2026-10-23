# Fleetboard

Fleetboard is the web application a delivery company's dispatchers use to follow the vans of the fleet during the day: which van is on which run, which one is late, which one has gone offline. Dispatchers work from the control room on two monitors, and one of them walks the depot with a tablet in the morning.

## Development

```
npm install
npm run dev
```

The app is a Vite + React single-page application styled with Tailwind. Strings live in `src/i18n.ts`. Domain terms are defined in `docs/glossary.md`.
