import "./styles.css";

export function RowActions({ canArchive, onArchive }: { canArchive: boolean; onArchive: () => void }) {
  return (
    <button className="row-action" disabled={!canArchive} onClick={onArchive}>
      Archive
    </button>
  );
}
