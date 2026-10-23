import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ variant = "secondary", className = "", ...rest }: Props) {
  return <button type="button" {...rest} className={`btn btn-${variant} ${className}`.trim()} />;
}
