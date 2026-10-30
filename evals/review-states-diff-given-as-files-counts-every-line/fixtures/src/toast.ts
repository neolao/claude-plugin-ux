export function showToast(message: string, kind: "success" | "error" = "success"): void {
  window.dispatchEvent(new CustomEvent("toast", { detail: { message, kind } }));
}
