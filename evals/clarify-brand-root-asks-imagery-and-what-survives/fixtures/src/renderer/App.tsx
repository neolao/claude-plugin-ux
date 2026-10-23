import { useEffect } from "react";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CueSheet } from "./screens/CueSheet";
import { CueLibrary } from "./screens/CueLibrary";
import { Preferences } from "./screens/Preferences";

declare global {
  interface Window {
    cuecard: {
      onNavigate(handler: (route: string) => void): void;
      onTheme(handler: (theme: "light" | "dark") => void): void;
      onSave(handler: () => void): void;
      onOpen(handler: (file: string) => void): void;
    };
  }
}

// Routes are only reached through the menu bar (electron/main.ts); the renderer has no navigation bar.
function MenuBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.cuecard.onNavigate((route) => navigate(route));
    window.cuecard.onTheme((theme) => {
      document.documentElement.dataset.theme = theme;
    });
  }, [navigate]);
  return null;
}

export function App() {
  return (
    <HashRouter>
      <MenuBridge />
      <Routes>
        <Route path="/" element={<CueSheet />} />
        <Route path="/library" element={<CueLibrary />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </HashRouter>
  );
}
