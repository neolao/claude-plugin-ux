export type ToastAction = { label: string; onClick: () => void };

// Called from the screens after an action succeeds or fails.
export function toast(kind: "success" | "error", message: string, action?: ToastAction): void {
  const node = document.createElement("div");
  node.className = `toast toast-${kind}`;
  node.setAttribute("role", kind === "error" ? "alert" : "status");
  const text = document.createElement("span");
  text.textContent = message;
  node.appendChild(text);
  if (action) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn toast-action";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      action.onClick();
      node.remove();
    });
    node.appendChild(button);
  }
  document.body.appendChild(node);
  window.setTimeout(() => node.remove(), 6000);
}
