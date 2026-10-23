import { useEffect, useState } from "react";
import { fetchHistory, type ExportRecord } from "./api";
import "./ExportHistory.css";

// Rendered inside ExportPanel.tsx under the export action.
export function ExportHistory({ boardId }: { boardId: string }) {
  const [records, setRecords] = useState<ExportRecord[]>([]);

  useEffect(() => {
    fetchHistory(boardId).then(setRecords);
  }, [boardId]);

  if (records.length === 0) {
    return <p className="export-history-empty">No exports yet</p>;
  }

  return (
    <ul className="export-history">
      {records.map((r) => (
        <li key={r.id}>
          <span>{r.format.toUpperCase()}</span>
          <time>{r.date}</time>
        </li>
      ))}
    </ul>
  );
}
