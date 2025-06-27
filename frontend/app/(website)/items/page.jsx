'use client';

import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { fetchItems } from '../../utils/api';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    fetchItems()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error fetching items');
        setLoading(false);
      });
  }, []);

  // Filter items by name and price
  const filteredItems = items.filter(item => {
    const matchesName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesPrice = priceFilter ? Number(item.price) <= Number(priceFilter) : true;
    return matchesName && matchesPrice;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">All Items</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Filter by name..."
          className="border rounded px-3 py-2 w-full sm:w-1/2"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price..."
          className="border rounded px-3 py-2 w-full sm:w-1/2"
          value={priceFilter}
          onChange={e => setPriceFilter(e.target.value)}
          min="0"
        />
      </div>
      {loading && <div className="text-center text-gray-500">Loading items...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && <ItemList items={filteredItems} />}
    </div>
  );
} 