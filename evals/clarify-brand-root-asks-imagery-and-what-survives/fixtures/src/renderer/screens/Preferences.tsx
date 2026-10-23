import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { strings } from "../strings";

// Route "/preferences" — opened from File › Preferences… (Cmd/Ctrl+,).
export function Preferences() {
  const navigate = useNavigate();
  const [goKey, setGoKey] = useState("Space");
  const [standby, setStandby] = useState(5);

  return (
    <div className="screen">
      <h1>{strings.preferences.title}</h1>
      <label>
        {strings.preferences.goKey}
        <input value={goKey} onChange={(event) => setGoKey(event.target.value)} />
      </label>
      <label>
        {strings.preferences.standbySeconds}
        <input type="number" value={standby} onChange={(event) => setStandby(Number(event.target.value))} />
      </label>
      <Button onClick={() => navigate("/")}>{strings.preferences.done}</Button>
    </div>
  );
}
