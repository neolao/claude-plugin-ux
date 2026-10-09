export interface Project { id: string; name: string }
export interface Member { id: string; name: string }

export async function fetchProject(id: string): Promise<Project> {
  const res = await fetch(`/api/projects/${id}`);
  if (!res.ok) throw new Error("project");
  return res.json();
}

export async function fetchMembers(id: string): Promise<Member[]> {
  const res = await fetch(`/api/projects/${id}/members`);
  if (!res.ok) throw new Error("members");
  return res.json();
}

export async function duplicateProject(id: string): Promise<Project> {
  const res = await fetch(`/api/projects/${id}/duplicate`, { method: "POST" });
  if (!res.ok) throw new Error("duplicate");
  return res.json();
}

export async function archiveProject(id: string): Promise<void> {
  const res = await fetch(`/api/projects/${id}/archive`, { method: "POST" });
  if (!res.ok) throw new Error("archive");
}
