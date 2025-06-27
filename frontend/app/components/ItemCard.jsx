export default function ItemCard({ item }) {
  if (!item) return null;
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-4 border border-gray-100">
      <img
        src={item.img || '/randostore-hero.svg'}
        alt={item.name}
        className="w-32 h-32 object-contain rounded mb-2 bg-gray-50"
        onError={e => { e.target.src = '/randostore-hero.svg'; }}
      />
      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
      <p className="text-lg text-blue-700 font-bold">${item.price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add to Cart</button>
    </div>
  );
} 