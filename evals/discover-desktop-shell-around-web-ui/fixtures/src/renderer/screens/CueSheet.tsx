import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Panel } from "../components/Panel";
import { strings } from "../strings";

type Cue = { number: number; kind: "LX" | "SND" | "FLY"; label: string };

// Route "/" — the window's first screen; also File › New Cue Sheet and Window › Cue Sheet.
export function CueSheet() {
  const [cues, setCues] = useState<Cue[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.cuecard.onSave(() => {
      /* serialization lives in the main process */
    });
  }, []);

  function addCue() {
    setCues((list) => [...list, { number: list.length + 1, kind: "LX", label: "" }]);
  }

  return (
    <div className="screen">
      <h1>{strings.sheet.title}</h1>
      <Panel title={strings.sheet.title}>
        {cues.length === 0 ? (
          <p>{strings.sheet.empty}</p>
        ) : (
          <table className="cue-table">
            <thead>
              <tr>
                <th>{strings.sheet.columns.number}</th>
                <th>{strings.sheet.columns.kind}</th>
                <th>{strings.sheet.columns.label}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cues.map((cue, index) => (
                <tr key={cue.number} style={{ fontWeight: index === current ? 600 : 400 }}>
                  <td className="number">{cue.number}</td>
                  <td>{cue.kind}</td>
                  <td>{cue.label}</td>
                  <td>
                    <Button tone="standby" onClick={() => setCurrent(index)}>
                      {strings.sheet.columns.standby}
                    </Button>{" "}
                    <Button tone="go" onClick={() => setCurrent(index + 1)}>
                      {strings.sheet.columns.go}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Button onClick={addCue}>{strings.sheet.add}</Button>
      </Panel>
    </div>
  );
}
