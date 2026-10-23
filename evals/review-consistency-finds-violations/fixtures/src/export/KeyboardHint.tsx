import "./KeyboardHint.css";

// Shown next to an action that has a shortcut (ExportPanel.tsx).
export function KeyboardHint({ keys }: { keys: string }) {
  return <kbd className="kbd-hint">{keys}</kbd>;
}
