import ItemCard from './ItemCard';

export default function ItemList({ items = [] }) {
  // Will map over items and render ItemCard for each
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.length === 0 ? (
        <div className="col-span-full text-center text-gray-500">No items found.</div>
      ) : (
        items.map(item => <ItemCard key={item.id} item={item} />)
      )}
    </div>
  );
} 