import { AlignIcon, DistributeIcon, GroupIcon, LockIcon, UngroupIcon } from "./icons";

export function GridToolbar({ onAlign, onDistribute, onGroup, onUngroup, onLock }: {
  onAlign: () => void;
  onDistribute: () => void;
  onGroup: () => void;
  onUngroup: () => void;
  onLock: () => void;
}) {
  return (
    <div className="grid-toolbar" role="toolbar" aria-label="Grid tools">
      <button aria-label="Align deliveries" onClick={onAlign}><AlignIcon /></button>
      <button aria-label="Distribute evenly" onClick={onDistribute}><DistributeIcon /></button>
      <button aria-label="Group deliveries" onClick={onGroup}><GroupIcon /></button>
      <button aria-label="Ungroup deliveries" onClick={onUngroup}><UngroupIcon /></button>
      <button aria-label="Lock positions" onClick={onLock}><LockIcon /></button>
    </div>
  );
}
