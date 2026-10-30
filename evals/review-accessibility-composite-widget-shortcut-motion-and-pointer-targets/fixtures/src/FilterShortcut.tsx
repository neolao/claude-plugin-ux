import { useEffect } from "react";

export function FilterShortcut({ onOpenFilter }: { onOpenFilter: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "f") {
        e.preventDefault();
        onOpenFilter();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenFilter]);

  return null;
}
