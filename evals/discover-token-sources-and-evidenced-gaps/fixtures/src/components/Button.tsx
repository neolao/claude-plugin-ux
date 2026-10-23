import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

// Used by VanDetail and Settings.
export function Button({ variant = "primary", className = "", ...rest }: Props) {
  const look =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-700 disabled:opacity-50"
      : "border border-gray-300 text-gray-800 hover:bg-gray-50 disabled:opacity-50";
  return <button className={`rounded-card px-3 py-1 ${look} ${className}`} {...rest} />;
}
