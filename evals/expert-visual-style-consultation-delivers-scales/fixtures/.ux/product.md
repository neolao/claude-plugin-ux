# Product — Dispatchly

Dispatchly is a web application where a courier company's dispatchers assign the day's shipments to drivers and follow them until delivery.

## Platform & surface

- **Platform:** web (Chrome and Edge on the office desktops)
- **Devices & input:** mouse + keyboard, 1440 px and wider monitors, two monitors per dispatcher; the board is open on one of them all day
- **Runs with:** `npm run dev`, http://localhost:5173

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Dispatcher | expert | daily, all day | at the desk, phone on the shoulder, 200 to 300 shipments on the board | every shipment assigned and on time |
| Fleet manager | occasional | weekly | at the desk, a few minutes per visit | see the week's delays per driver |

## Jobs to be done

1. When shipments come in, the dispatcher wants to see which are unassigned and late, so that the right driver gets them first.
2. When a driver calls, the dispatcher wants to find their shipments in seconds, so that the call stays short.

## Constraints

- **Brand / design system:** the company brand: teal #0f766e on the vans and the logo; no design system yet
- **Accessibility target:** none stated
- **Localization:** French and English
- **Performance / offline / other:** none

## Vocabulary

- **Shipment:** one parcel or pallet to deliver.
- **Board:** the table of the day's shipments.
