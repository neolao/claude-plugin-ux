import { useEffect, useState } from "react";
import { fetchProject, fetchMembers, duplicateProject, archiveProject, Project, Member } from "./api";
import { showToast } from "./toast";

export function ProjectPage({ id }: { id: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [archiving, setArchiving] = useState(false);

  useEffect(() => {
    fetchProject(id).then(setProject);
    fetchMembers(id).then(setMembers);
  }, [id]);

  async function handleArchive() {
    setArchiving(true);
    try {
      await archiveProject(id);
      showToast("Project archived");
    } catch {
      showToast("Archiving failed. Try again.", "error");
    } finally {
      setArchiving(false);
    }
  }

  if (project === null) return <p>Loading project…</p>;

  return (
    <section>
      <h1>{project.name}</h1>
      <button onClick={() => duplicateProject(id)}>Duplicate</button>
      <button onClick={handleArchive} disabled={archiving}>Archive</button>
      <ul>
        {members.map((m) => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </section>
  );
}
