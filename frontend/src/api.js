const API_BASE = import.meta.env.VITE_API_URL || "/api";

export async function fetchUsers() {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
}
