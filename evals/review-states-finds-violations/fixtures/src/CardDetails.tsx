import { useCallback, useEffect, useState } from "react";
import { fetchCards, Card } from "./api";
import { showToast } from "./toast";

export function CardDetails({ boardId }: { boardId: string }) {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [error, setError] = useState(false);
  const [refreshError, setRefreshError] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    let current = true;
    setError(false);
    setCards(null);
    fetchCards(boardId)
      .then((c) => current && setCards(c))
      .catch(() => current && setError(true));
    return () => {
      current = false;
    };
  }, [boardId]);

  useEffect(load, [load]);

  async function refresh() {
    setBusy(true);
    setRefreshError(false);
    try {
      setCards(await fetchCards(boardId));
      showToast("Cards refreshed");
    } catch {
      setRefreshError(true);
    } finally {
      setBusy(false);
    }
  }

  if (error) {
    return (
      <div role="alert">
        <p>Cards could not be loaded.</p>
        <button onClick={() => load()}>Retry</button>
      </div>
    );
  }
  if (cards === null) return <p aria-busy="true">Loading cards…</p>;

  return (
    <div>
      <button onClick={refresh} disabled={busy}>{busy ? "Refreshing…" : "Refresh"}</button>
      {refreshError && <p role="alert">Refresh failed. The cards below may be out of date.</p>}
      {cards.length === 0 ? (
        <p>No cards yet. Add the first card to this board.</p>
      ) : (
        <ul>{cards.map((c) => <li key={c.id}>{c.title}</li>)}</ul>
      )}
    </div>
  );
}
