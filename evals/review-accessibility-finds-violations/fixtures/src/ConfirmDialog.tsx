import { useEffect, useRef } from "react";

export function ConfirmDialog({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);
  return (
    <div ref={ref} className="dialog" role="dialog" aria-modal="true" aria-label="Confirm">
      <p>{message}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
