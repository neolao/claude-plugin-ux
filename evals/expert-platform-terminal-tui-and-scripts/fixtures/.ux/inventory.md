# UI inventory — shipctl

## UI stack

- **Framework / UI layer:** Go, cobra commands in `cmd/shipctl/`
- **Component library / design system:** none; table output through `internal/output/table.go`
- **Styling approach:** colors through fatih/color, always on
- **UI state management:** none
- **Routing / navigation:** subcommands (`rollout start`, `rollout list`, `rollout abort`)
- **i18n:** hardcoded strings (English)
- **UI testing:** `go test` on the output package

## Screens / views

| Screen | Entry point (route / menu / panel) | Source | Purpose | Capture |
|---|---|---|---|---|
| rollout list | `shipctl rollout list [--output table|json]` | cmd/shipctl/rollout_list.go | list the rollouts and their state | |
| rollout abort | `shipctl rollout abort <id>` | cmd/shipctl/rollout_abort.go | abort a rollout | |

## Reusable components

| Component | Source | Used for | States / variants supported |
|---|---|---|---|
| table | internal/output/table.go | aligned columns on stdout | table, json |

## Interaction patterns in use

- list commands take `--output table|json`; json goes to stdout untouched by colors
- errors are printed on stderr as `error: <what>` and the exit code is 1
- no full-screen command yet

## Known gaps

- colors are always on, `NO_COLOR` is ignored
- no command checks whether stdout is a terminal
