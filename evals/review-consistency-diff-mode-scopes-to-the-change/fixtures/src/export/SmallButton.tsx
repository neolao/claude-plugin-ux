import type { ReactNode } from "react";
import "./SmallButton.css";

// Used by ExportPanel.tsx for the action under the history list.
export function SmallButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" className="small-btn" onClick={onClick}>
      {children}
    </button>
  );
}
