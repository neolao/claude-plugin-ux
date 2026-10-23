# Product

Opsboard — a web dashboard that shows the health of an SRE team's services, on a wall screen in the office and on the engineers' laptops.

## Platform & surface

- **Platform:** web
- **Devices & input:** a 4K wall screen seen from 3 to 5 m with no input device; laptops with mouse + keyboard
- **Runs with:** `npm run dev`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| On-call engineer | expert | continuously during a shift | glances at the wall screen, opens the laptop when something is off | notice a degraded service within seconds |

## Constraints

- **Brand / design system:** none
- **Accessibility target:** WCAG 2.2 AA; two engineers on the team are colorblind
- **Localization:** English only
- **Performance / offline / other:** the page stays open for days
