# Product

Majlis — the intranet of a consulting firm's Dubai office: employees find a desk, book a meeting room and see who is in.

## Platform & surface

- **Platform:** web
- **Devices & input:** laptops, mouse + keyboard; the floor plan is also shown on a lobby screen
- **Runs with:** `npm run dev`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Office employee | occasional | a few times a month | at their desk, a meeting about to start | get a room without walking to reception |
| Receptionist | expert | daily | front desk | keep the room plan accurate |

## Constraints

- **Brand / design system:** firm colors imposed (navy, sand)
- **Accessibility target:** WCAG 2.2 AA
- **Localization:** English (source) and Arabic (RTL); Arabic strings run about 25 % longer
- **Performance / offline / other:** none

## Vocabulary

| Term | Meaning | Never say |
|---|---|---|
| Room | A bookable meeting room | Meeting space, Salle |
| Slot | A free period of a room on a given day | Time window |
| Booking | A room reserved by an employee for a slot | Reservation |
