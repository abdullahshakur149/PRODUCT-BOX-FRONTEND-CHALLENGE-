import ItemList from '../components/ItemList';

export default function ItemsPage() {
  // Data fetching and cart logic will be added soon
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">All Items</h1>
      <ItemList />
    </div>
  );
} 