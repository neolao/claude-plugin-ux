# Product — FieldCheck

FieldCheck is a mobile application where technicians fill in equipment inspections on site, on iPhone and on Android phones, with two native codebases.

## Platform & surface

- **Platform:** mobile (iOS — SwiftUI, and Android — Jetpack Compose; this repository is the iOS one)
- **Devices & input:** touch, one hand, phones from 5.4" to 6.7"; sometimes gloves
- **Runs with:** open `FieldCheck.xcodeproj`, run on the iPhone simulator

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Technician | occasional | daily on site, a few inspections a day | outdoors, standing, one hand, in a hurry | an inspection filled in and synced before leaving the site |

## Jobs to be done

1. When an inspection is done, the technician wants to record its result and the date of the next one, so that the office plans the follow-up.

## Constraints

- **Brand / design system:** the company palette and type in `DesignSystem/`; each OS keeps its own components
- **Accessibility target:** platform guidelines (VoiceOver / TalkBack)
- **Localization:** English, French, Spanish — dates in the device locale
- **Performance / offline / other:** offline first; syncs when back online

## Vocabulary

- **Inspection:** one visit on one piece of equipment, with its result.
- **Due date:** the date of the next inspection.
