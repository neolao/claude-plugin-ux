import "./styles.css";

export function DeleteBoardDialog({ name, onDelete, onCancel }: { name: string; onDelete: () => void; onCancel: () => void }) {
  return (
    <div className="dialog" role="dialog" aria-labelledby="del-title">
      <h2 id="del-title">Delete {name}?</h2>
      <p>All cards on this board will be removed.</p>
      <div className="dialog-actions">
        <button className="btn btn-primary" onClick={onCancel}>Keep board</button>
        <button className="btn btn-primary" onClick={onDelete}>Delete board</button>
      </div>
    </div>
  );
}
