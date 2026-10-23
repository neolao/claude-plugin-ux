import type { PropsWithChildren } from "react";

// Used by CueSheet and CueLibrary to frame a list.
export function Panel({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section style={{ background: "var(--color-panel)", borderRadius: "var(--radius)", padding: "var(--space-3)" }}>
      <h2 style={{ margin: 0, marginBottom: "var(--space-2)", fontSize: "1rem" }}>{title}</h2>
      {children}
    </section>
  );
}
