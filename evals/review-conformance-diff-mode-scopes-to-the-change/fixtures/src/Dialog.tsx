import { ReactNode } from "react";

// Inventory component: modal container with the standard close button in its header.
export function Dialog({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <header>
        <h2>{title}</h2>
        <button type="button" aria-label="Close" onClick={onClose}>×</button>
      </header>
      {children}
    </div>
  );
}
