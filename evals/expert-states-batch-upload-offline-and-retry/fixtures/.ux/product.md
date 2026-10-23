# Product — Fieldnote

Fieldnote is a mobile application with which building inspectors photograph the defects they find on a construction site and send the inspection report to the office.

## Platform & surface

- **Platform:** mobile (iOS and Android)
- **Devices & input:** phone, touch, one hand, often with gloves
- **Runs with:** `npx expo start`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Inspector | expert | daily | on the site, walking, in and out of network coverage, under time pressure | a complete report at the office before leaving the site |

## Jobs to be done

1. When a defect is found, the inspector wants to photograph it and note it, so that the report is complete.
2. When the inspection ends, the inspector wants to send the report, so that the office can act on it the same day.

## Constraints

- **Brand / design system:** in-house
- **Accessibility target:** platform guidelines
- **Localization:** English
- **Performance / offline / other:** sites often have no network or a weak one; a report holds up to forty photos of 3 MB each

## Vocabulary

- **Report:** one inspection of one site, with its photos and notes.
- **Sent:** a report the office has received in full.
