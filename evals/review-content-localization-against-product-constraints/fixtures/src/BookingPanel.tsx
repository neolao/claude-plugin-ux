import { useState } from "react";
import { formatTime, t } from "./i18n";
import { book, freeSlots, toast, Slot } from "./api";
import "./BookingPanel.css";

export function BookingPanel({ roomId, roomName }: { roomId: string; roomName: string }) {
  const slots = freeSlots(roomId);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [hours, setHours] = useState(0);

  const durationLine = hours === 0 ? "No hours selected" : t("booking.duration.count", { count: hours });

  return (
    <aside className="booking-panel">
      <h2>{t("booking.panel.title", { room: roomName })}</h2>
      <p className="booking-helper">{t("booking.slots.helper")}</p>
      {slots.length === 0 ? (
        <p>{t("booking.slots.empty")}</p>
      ) : (
        <ul className="booking-slots">
          {slots.map((s) => (
            <li key={s.id}>
              <button onClick={() => setSlot(s)}>{formatTime(s.start)}</button>
            </li>
          ))}
        </ul>
      )}
      <label>
        {t("booking.duration.label")}
        <input type="number" min="0" max="4" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
      </label>
      <p>{durationLine}</p>
      <button
        className="booking-confirm"
        disabled={!slot || hours === 0}
        onClick={() =>
          slot && book(roomId, slot, hours).then(() => toast(t("booking.toast.success", { room: roomName, start: formatTime(slot.start) })))
        }
      >
        {t("btnOk")}
      </button>
    </aside>
  );
}
