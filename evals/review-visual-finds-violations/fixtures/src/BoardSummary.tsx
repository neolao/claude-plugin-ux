import "./styles.css";

export function BoardSummary({ name, owner, open, done, onOpen, onShare }: { name: string; owner: string; open: number; done: number; onOpen: () => void; onShare: () => void }) {
  return (
    <section className="summary">
      <h1 className="summary-title">{name}</h1>
      <p className="summary-meta">Owned by {owner}</p>
      <p className="summary-numbers">{open} open · {done} done</p>
      <div className="summary-actions">
        <button className="btn btn-primary" onClick={onOpen}>Open board</button>
        <button className="btn" onClick={onShare}>Share</button>
      </div>
    </section>
  );
}
