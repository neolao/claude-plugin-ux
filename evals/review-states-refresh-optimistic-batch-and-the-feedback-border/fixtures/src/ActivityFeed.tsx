import { useCallback, useEffect, useState } from "react";
import { fetchEvents, Event } from "./api";
import { showToast } from "./toast";

export function ActivityFeed({ boardId }: { boardId: string }) {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [refreshFailed, setRefreshFailed] = useState(false);

  const load = useCallback(() => {
    setFailed(false);
    fetchEvents(boardId).then(setEvents).catch(() => setFailed(true));
  }, [boardId]);

  useEffect(load, [load]);

  async function refresh() {
    setUpdating(true);
    setRefreshFailed(false);
    try {
      setEvents(await fetchEvents(boardId));
      showToast("Activity updated");
    } catch {
      setRefreshFailed(true);
    } finally {
      setUpdating(false);
    }
  }

  if (failed) {
    return (
      <div role="alert">
        <p>Could not load the activity.</p>
        <button onClick={load}>Try again</button>
      </div>
    );
  }
  if (events === null) return <p aria-busy="true">Loading activity…</p>;

  return (
    <section aria-busy={updating}>
      <button onClick={refresh} disabled={updating}>{updating ? "Updating…" : "Refresh"}</button>
      {refreshFailed && <p role="alert">Refresh failed. The activity below may be out of date.</p>}
      {events.length === 0 ? (
        <p>Nothing happened on this board yet.</p>
      ) : (
        <ol>{events.map((e) => <li key={e.id}>{e.text}</li>)}</ol>
      )}
    </section>
  );
}
