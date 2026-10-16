import { TrashIcon, PencilIcon } from "./icons";

export function CardToolbar({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="card-toolbar">
      <button onClick={onEdit}>
        <PencilIcon />
      </button>
      <button onClick={onDelete}>
        <TrashIcon />
      </button>
    </div>
  );
}
