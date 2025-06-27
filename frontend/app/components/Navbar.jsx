'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="w-full bg-blue-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition">RandoStore</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link href="/items" className="hover:underline underline-offset-4 transition">Items</Link>
            <Link href="/add-items" className="hover:underline underline-offset-4 transition">Add Item</Link>
            <Link href="/checkout" className="hover:underline underline-offset-4 transition">Checkout</Link>
            {/* Cart Icon */}
            <Link href="/checkout" className="relative ml-4">
              <span className="inline-block align-middle">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                </svg>
              </span>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full px-2 py-0.5 border border-white">
                {cartCount}
              </span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-2 pt-2 pb-3 space-y-1">
          <Link href="/items" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Items</Link>
          <Link href="/add-items" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Add Item</Link>
          <Link href="/checkout" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">Checkout</Link>
          <Link href="/checkout" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 relative">
            <span className="inline-block align-middle mr-2">
              <svg className="w-6 h-6 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
              </svg>
            </span>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full px-2 py-0.5 border border-white">
              {cartCount}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
} 