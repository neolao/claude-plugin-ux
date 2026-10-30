export interface Van { id: string; name: string; position: string }

export async function fetchVans(): Promise<Van[]> {
  const res = await fetch("/api/vans");
  if (!res.ok) throw new Error("vans");
  return res.json();
}
