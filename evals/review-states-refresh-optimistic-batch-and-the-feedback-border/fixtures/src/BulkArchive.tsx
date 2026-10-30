import { useState } from "react";
import { archiveCard } from "./api";
import { showToast } from "./toast";

export function BulkArchive({ cardIds, onDone }: { cardIds: string[]; onDone: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function archiveAll() {
    setBusy(true);
    setError(null);
    const results = await Promise.allSettled(cardIds.map((id) => archiveCard(id)));
    setBusy(false);
    if (results.some((r) => r.status === "rejected")) {
      setError("Some cards could not be archived.");
      return;
    }
    showToast(`${cardIds.length} cards archived`);
    onDone();
  }

  return (
    <div>
      <button onClick={archiveAll} disabled={busy || cardIds.length === 0}>
        {busy ? "Archiving…" : `Archive ${cardIds.length} cards`}
      </button>
      {error && (
        <p role="alert">
          {error} <button onClick={archiveAll}>Retry</button>
        </p>
      )}
    </div>
  );
}
