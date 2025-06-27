'use client';

import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { fetchItems } from '../../utils/api';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">All Items</h1>
      {loading && <div className="text-center text-gray-500">Loading items...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && <ItemList items={items} />}
    </div>
  );
} 