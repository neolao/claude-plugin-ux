import { useEffect, useState } from "react";
import { fetchBoards, Board } from "./api";

export function BoardList() {
  const [boards, setBoards] = useState<Board[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetchBoards().then(setBoards).catch(() => setFailed(true));
  }, []);

  if (failed) return <p role="alert">Could not load your boards. Reload the page to try again.</p>;
  if (boards === null) return <p>Loading boards…</p>;

  return (
    <ul>
      {boards.map((b) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
}
