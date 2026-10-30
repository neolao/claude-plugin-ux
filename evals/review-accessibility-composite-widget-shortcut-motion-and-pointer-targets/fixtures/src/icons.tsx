const icon = (d: string) => () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d={d} /></svg>
);
export const AlignIcon = icon("M2 3h12M2 8h8M2 13h12");
export const DistributeIcon = icon("M2 2v12M8 2v12M14 2v12");
export const GroupIcon = icon("M2 2h5v5H2zM9 9h5v5H9z");
export const UngroupIcon = icon("M2 2h5v5H2zM9 9h5v5H9zM7 7l2 2");
export const LockIcon = icon("M4 7V5a4 4 0 018 0v2M3 7h10v7H3z");
