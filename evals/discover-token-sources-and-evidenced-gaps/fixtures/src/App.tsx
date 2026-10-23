import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { VanList } from "./vans/VanList";
import { VanDetail } from "./vans/VanDetail";
import { Settings } from "./settings/Settings";

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="p-4 lg:p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/vans" replace />} />
          <Route path="/vans" element={<VanList />} />
          <Route path="/vans/:plate" element={<VanDetail />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
