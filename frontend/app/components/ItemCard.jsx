import { useCart } from './CartContext';

export default function ItemCard({ item }) {
  const { addToCart } = useCart();
  if (!item) return null;
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-4 border border-gray-100">
      <img
        src={item.img || '/randostore-hero.svg'}
        alt={item.name}
        className="w-32 h-32 object-contain rounded mb-2 bg-gray-50"
        onError={e => { e.target.src = '/randostore-hero.svg'; }}
      />
      <h2 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h2>
      <p className="text-lg text-blue-700 font-semibold mb-2">${item.price}</p>
      <button
        className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
} 