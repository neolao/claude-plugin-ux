import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "default" | "go" | "standby" };

// Used by CueSheet, CueLibrary and Preferences.
export function Button({ tone = "default", style, ...rest }: Props) {
  const background =
    tone === "go" ? "var(--color-go)" : tone === "standby" ? "var(--color-standby)" : "var(--color-panel)";
  const color = tone === "default" ? "var(--color-text)" : "#ffffff";
  return (
    <button
      style={{
        background,
        color,
        border: 0,
        borderRadius: "var(--radius)",
        padding: "var(--space-1) var(--space-3)",
        transition: `opacity var(--duration-fast)`,
        ...style,
      }}
      {...rest}
    />
  );
}
