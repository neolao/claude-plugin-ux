import "./styles.css";

export function FilterPanel({ labels, onApply, onReset }: { labels: string[]; onApply: () => void; onReset: () => void }) {
  return (
    <aside className="side-panel">
      <h2>Filters</h2>
      <div className="side-panel-row">
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
      <div className="side-panel-row">
        <button className="btn btn-primary" onClick={onApply}>Apply filters</button>
        <button className="btn" onClick={onReset}>Reset all filters</button>
      </div>
    </aside>
  );
}
