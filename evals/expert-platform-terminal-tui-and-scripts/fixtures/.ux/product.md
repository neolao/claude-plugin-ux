# Product — shipctl

shipctl is a command-line tool with which deploy engineers start, watch and abort the rollouts of a service fleet, from their terminal and from CI pipelines.

## Platform & surface

- **Platform:** terminal
- **Devices & input:** a terminal emulator (macOS, Linux), keyboard; also run without a terminal in CI jobs
- **Runs with:** `go run ./cmd/shipctl`

## Users

| Role | Expertise | Frequency of use | Context of use | Main goal |
|---|---|---|---|---|
| Deploy engineer | expert | daily | at the desk during a rollout, or writing the CI job that runs the same commands | a rollout watched and stopped in time when it goes wrong |

## Jobs to be done

1. When a rollout is running, the deploy engineer wants to watch its progress node by node, so that a failing node is seen before it spreads.
2. When a rollout goes wrong, the deploy engineer wants to abort it at once, so that the fleet stays up.

## Constraints

- **Brand / design system:** none
- **Accessibility target:** none stated
- **Localization:** English
- **Performance / offline / other:** every command must work in a CI job with no terminal attached

## Vocabulary

- **Rollout:** the deployment of one version to the fleet, node by node.
- **Node:** one machine of the fleet.
