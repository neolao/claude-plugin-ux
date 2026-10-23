// Called from the screens after an action succeeds or fails.
export function toast(kind: "success" | "error", message: string): void {
  const node = document.createElement("div");
  node.className = `toast toast-${kind}`;
  node.setAttribute("role", kind === "error" ? "alert" : "status");
  node.textContent = message;
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 6000);
}
