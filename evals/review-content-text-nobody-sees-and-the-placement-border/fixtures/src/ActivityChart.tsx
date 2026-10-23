import { useEffect, useRef } from "react";
import { t } from "./i18n";
import { activityPerMonth } from "./api";

// Rendered under the contact list on the Contacts screen.
export function ActivityChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const values = activityPerMonth();

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 240, 60);
    if (values.length === 0) {
      ctx.fillText("No activity yet", 4, 12);
      return;
    }
    values.forEach((v, i) => ctx.fillRect(i * 20, 60 - v, 16, v));
  }, [values]);

  return (
    <figure>
      <figcaption>{t("contacts.activity.title")}</figcaption>
      <canvas ref={ref} width="240" height="60" />
    </figure>
  );
}
