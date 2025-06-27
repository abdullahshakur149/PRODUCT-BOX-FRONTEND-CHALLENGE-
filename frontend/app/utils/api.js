export async function fetchItems() {
  const res = await fetch('http://localhost:4000/items');
  if (!res.ok) {
    throw new Error('Failed to fetch items');
  }
  return res.json();
} 