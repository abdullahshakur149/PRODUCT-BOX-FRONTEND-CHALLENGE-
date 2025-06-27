'use client';
import AddItemForm from '@/app/components/AddItemForm';

export default function AddItemsPage() {
  return (
    <div className="py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Add a New Item</h1>
      <AddItemForm />
    </div>
  );
} 