import { Button } from "../components/Button";
import { Panel } from "../components/Panel";
import { strings } from "../strings";

const presets = [
  { kind: "LX", label: "Blackout" },
  { kind: "LX", label: "House lights" },
  { kind: "SND", label: "Pre-show music" },
  { kind: "FLY", label: "Curtain in" },
];

// Route "/library" — opened from Window › Cue Library.
export function CueLibrary() {
  return (
    <div className="screen">
      <h1>{strings.library.title}</h1>
      <Panel title={strings.library.title}>
        <ul>
          {presets.map((preset) => (
            <li key={preset.label}>
              {preset.kind} — {preset.label} <Button>{strings.library.insert}</Button>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
