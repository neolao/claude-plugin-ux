import { useState } from "react";
import { CloseIcon, SortIcon } from "./icons";

export function FilterBar({ onClose, onSort, onSearch }: { onClose: () => void; onSort: () => void; onSearch: (q: string) => void }) {
  const [advanced, setAdvanced] = useState(false);
  return (
    <div className="filter-bar">
      <button onClick={onClose}>
        <CloseIcon />
      </button>
      <button aria-label="Sort cards" onClick={onSort}>
        <SortIcon />
      </button>
      <div className="chip" onClick={() => setAdvanced(!advanced)}>
        Advanced
      </div>
      <input placeholder="Search cards" onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
}
