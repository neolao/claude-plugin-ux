export type VanStatus = "ok" | "late" | "offline";

export type Van = {
  plate: string;
  run: string;
  status: VanStatus;
  nextStop: string;
};

export async function listVans(): Promise<Van[]> {
  const response = await fetch("/api/vans");
  return response.json();
}

export async function getVan(plate: string): Promise<Van> {
  const response = await fetch(`/api/vans/${plate}`);
  return response.json();
}

export async function saveLateThreshold(minutes: number): Promise<void> {
  await fetch("/api/settings/late-threshold", {
    method: "PUT",
    body: JSON.stringify({ minutes }),
  });
}
