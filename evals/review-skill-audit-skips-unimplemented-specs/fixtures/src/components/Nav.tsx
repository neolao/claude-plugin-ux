import { NavLink } from "react-router-dom";
import { t } from "../i18n";

// The top navigation bar; the routes are in src/App.tsx.
export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <NavLink to="/boards" className="nav-link">{t("nav.boards")}</NavLink>
      <NavLink to="/settings/boards" className="nav-link">{t("nav.settings")}</NavLink>
    </nav>
  );
}
