import "./styles.css";

export function MemberCard({ name, role, tags }: { name: string; role: string; tags: string[] }) {
  return (
    <article className="member-card">
      <h3 className="member-card-name">{name}</h3>
      <p className="member-card-role">{role}</p>
      {tags.map((t) => (
        <button key={t} className="tag-chip">{t}</button>
      ))}
    </article>
  );
}
