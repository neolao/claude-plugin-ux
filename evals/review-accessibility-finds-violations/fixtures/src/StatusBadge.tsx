export function StatusBadge({ late }: { late: boolean }) {
  return <span className={late ? "badge badge-late" : "badge badge-ok"} />;
}
