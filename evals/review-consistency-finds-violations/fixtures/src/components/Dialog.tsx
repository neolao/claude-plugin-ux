import type { ReactNode } from "react";
import "./Dialog.css";

export function Dialog({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={(e) => e.stopPropagation()}>
        <header className="dialog-header">
          <h2 id="dialog-title">{title}</h2>
          <button type="button" aria-label="Close" onClick={onClose}>×</button>
        </header>
        {children}
      </div>
    </div>
  );
}
