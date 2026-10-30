# Product — Dispatch

## What it is

Dispatch is an internal web tool: dispatchers assign field jobs to technicians and follow their status during the shift.

## Platform & surface

- **Platform:** web
- **Devices & input:** mouse + keyboard; two desktop monitors from 1920 px wide

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Dispatcher | expert | daily, all shift | control desk, two monitors; all dispatchers are sighted and work with a mouse | keep every job assigned and every technician's status current |

## Jobs to be done

1. When a job comes in, the dispatcher wants to assign it to a free technician, so that it starts within the hour.
2. When a technician reports, the dispatcher wants to see the job's status change, so that the next job can be planned.

## Constraints

- **Brand / design system:** in-house tokens, `src/tokens.css`
- **Accessibility target:** none stated
- **Localization:** English only
- **Performance / offline / other:** online only, office network
