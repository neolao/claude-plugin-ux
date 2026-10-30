export function JobStatusDot({ blocked }: { blocked: boolean }) {
  return <span className={blocked ? "job-status-dot job-status-dot--blocked" : "job-status-dot job-status-dot--done"} />;
}
