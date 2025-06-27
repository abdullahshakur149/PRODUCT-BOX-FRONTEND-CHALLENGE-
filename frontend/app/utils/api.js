export async function fetchItems() {
  const res = await fetch('http://localhost:4000/items');
  if (!res.ok) {
    throw new Error('Failed to fetch items');
  }
  return res.json();
}

export async function addItem({ name, price, img }) {
  const res = await fetch('http://localhost:4000/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price: Number(price), img }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to add item');
  return data;
} 