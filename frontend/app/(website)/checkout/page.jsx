'use client';

import { useCart } from '../../components/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart, removeFromCart, cartCount, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setCheckedOut(true);
  };

  if (checkedOut) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Thank you for your purchase!</h1>
        <p className="text-lg text-gray-700">Your cart has been checked out.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Your Cart</h1>
      {cartCount === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-8">
            {cart.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 py-4">
                <img src={item.img || '/randostore-hero.svg'} alt={item.name} className="w-20 h-20 object-contain rounded bg-gray-50" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-blue-700 font-bold">${item.price}</p>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="w-full py-3 bg-green-600 text-white text-lg font-bold rounded hover:bg-green-700 transition"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
} 