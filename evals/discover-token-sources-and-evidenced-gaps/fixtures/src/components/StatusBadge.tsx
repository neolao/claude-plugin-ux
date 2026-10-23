import { t } from "../i18n";
import type { VanStatus } from "../api";

const tone: Record<VanStatus, string> = {
  ok: "bg-brand-50 text-brand-700",
  late: "bg-amber-100 text-late",
  offline: "bg-gray-100 text-offline",
};

// Used by VanList and VanDetail.
export function StatusBadge({ status }: { status: VanStatus }) {
  return (
    <span className={`rounded-card px-2 py-0.5 text-sm ${tone[status]}`}>
      {t(`van.status.${status}`)}
    </span>
  );
}
