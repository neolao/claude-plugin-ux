import { Dialog } from "./Dialog";

export function CloseJobDialog({ jobNumber, onConfirm, onCancel }: { jobNumber: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <Dialog title={`Close job ${jobNumber}?`} onClose={onCancel}>
      <p>The technician will no longer see this job.</p>
      <button onClick={onConfirm}>Close job</button>
      <button onClick={onCancel}>Keep it open</button>
    </Dialog>
  );
}
