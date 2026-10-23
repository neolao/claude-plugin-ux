# Product — Taskboard

> Written by `/ux:discover`. Edit freely — re-run `/ux:discover` to refresh.

## What it is

Taskboard is a web application where a small team keeps one board per project, with the cards of the work in progress. The team's operator keeps the boards current from a desk, every day; the other members read them.

## Platform & surface

- **Platform:** web (React single-page application)
- **Devices & input:** mouse + keyboard, laptop screens
- **Runs with:** not runnable locally — built and deployed by CI only

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Operator | expert | daily | at a desk, several boards open in a day | keep every board's name and cards current |
| Team member | occasional | weekly | at a desk | read the board of their project |

## Jobs to be done

1. When looking at a board, the operator wants to rename it, so that its name matches what the project is called today.
2. When a project is finished, the operator wants to archive its board, so that the Boards list only shows live projects.
3. When cleaning up the boards in Settings, the operator wants to delete a board created by mistake, so that its cards never resurface.

## Constraints

- **Brand / design system:** none
- **Accessibility target:** none stated
- **Localization:** English only, strings in `src/i18n.ts`
- **Performance / offline / other:** none

## Vocabulary <!-- keep -->

- **Board**: one project's set of cards.
- **Card**: one unit of work on a board.
- **Archive**: hide a finished board from the Boards list; its cards are kept.
- **Operator**: the one team member who edits boards; never call them "admin" in the UI, the team rejected that word in the 2026-09 review.
