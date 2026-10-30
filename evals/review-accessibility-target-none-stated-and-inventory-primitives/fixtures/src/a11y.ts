let region: HTMLElement | null = null;

function liveRegion(): HTMLElement {
  if (region) return region;
  region = document.createElement("div");
  region.setAttribute("aria-live", "polite");
  region.setAttribute("aria-atomic", "true");
  region.className = "visually-hidden";
  document.body.appendChild(region);
  return region;
}

export function announce(message: string): void {
  const el = liveRegion();
  el.textContent = "";
  window.setTimeout(() => {
    el.textContent = message;
  }, 50);
}
