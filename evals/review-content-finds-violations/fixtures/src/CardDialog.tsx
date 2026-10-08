import { t } from "./i18n";

export function CardDialog({ onClose }: { onClose: () => void }) {
  return (
    <dialog open>
      <h2>{t("card.add")}</h2>
      <input aria-label={t("card.add")} />
      <button onClick={onClose}>OK</button>
    </dialog>
  );
}
