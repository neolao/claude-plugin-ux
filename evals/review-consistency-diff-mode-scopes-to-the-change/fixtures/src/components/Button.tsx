import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "md" | "sm";
};

export function Button({ variant = "secondary", size = "md", className, ...rest }: Props) {
  return <button className={["btn", `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(" ")} {...rest} />;
}
