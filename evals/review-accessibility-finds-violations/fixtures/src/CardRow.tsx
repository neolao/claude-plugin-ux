import { Card } from "./api";

export function CardRow({ card, onOpen }: { card: Card; onOpen: (id: string) => void }) {
  return (
    <div className="card-row" onClick={() => onOpen(card.id)}>
      <span className="card-title">{card.title}</span>
    </div>
  );
}
