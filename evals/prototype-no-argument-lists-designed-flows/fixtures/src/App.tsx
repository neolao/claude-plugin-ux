import { Routes, Route } from "react-router-dom";
import { BoardList } from "./boards/BoardList";
import { BoardDetail } from "./boards/BoardDetail";
import { BoardArchived } from "./boards/BoardArchived";
import { SettingsBoards } from "./settings/SettingsBoards";

export function App() {
  return (
    <Routes>
      <Route path="/boards" element={<BoardList />} />
      <Route path="/boards/:id" element={<BoardDetail />} />
      <Route path="/boards/:id/archived" element={<BoardArchived />} />
      <Route path="/settings/boards" element={<SettingsBoards />} />
    </Routes>
  );
}
