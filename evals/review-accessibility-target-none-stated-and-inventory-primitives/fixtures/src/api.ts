export interface Job { id: string; number: string; address: string; blocked: boolean }

export async function searchJobs(query: string): Promise<Job[]> {
  const res = await fetch(`/api/jobs?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("jobs");
  return res.json();
}
