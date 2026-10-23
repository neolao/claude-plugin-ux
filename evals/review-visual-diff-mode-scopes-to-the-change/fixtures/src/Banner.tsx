import "./styles.css";

export function Banner({ text }: { text: string }) {
  return <div className="legacy-banner">{text}</div>;
}
