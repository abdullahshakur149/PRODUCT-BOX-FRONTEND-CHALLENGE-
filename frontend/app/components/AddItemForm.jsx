'use client';

import { useState } from 'react';

export default function AddItemForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('http://localhost:4000/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price: Number(price), img }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add item');
      setMessage(data.message ? `Success: ${data.message}` : 'Item added successfully!');
      setName('');
      setPrice('');
      setImg('');
      setTimeout(() => setMessage(''), 2500);
    } catch (err) {
      setMessage(err.message || 'Error adding item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 flex flex-col gap-4 max-w-md mx-auto">
      {message && (
        <div
          className={`text-center text-base font-semibold mb-2 ${
            message.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-500'
          }`}
          role="alert"
        >
          {message}
        </div>
      )}
      <label className="font-semibold text-gray-800">Name
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-2 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label className="font-semibold text-gray-800">Price
        <input
          type="number"
          className="w-full border border-gray-300 rounded px-2 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
          min="0"
        />
      </label>
      <label className="font-semibold text-gray-800">Image URL
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-2 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 bg-white"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded py-2 font-bold mt-2 hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Item'}
      </button>
    </form>
  );
}
