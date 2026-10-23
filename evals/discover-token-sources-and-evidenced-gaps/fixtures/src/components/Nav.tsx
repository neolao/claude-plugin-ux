import { NavLink } from "react-router-dom";
import { t } from "../i18n";

// Mounted once in App, above every route.
export function Nav() {
  const link = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-brand-700 font-semibold" : "text-gray-600";
  return (
    <nav className="flex gap-4 border-b px-4 py-2 dark:bg-gray-900">
      <NavLink to="/vans" className={link}>
        {t("nav.vans")}
      </NavLink>
      <NavLink to="/settings" className={link}>
        {t("nav.settings")}
      </NavLink>
    </nav>
  );
}
