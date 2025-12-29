'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function AddToCartButton({ product, className = '', variant = 'primary' }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200';

  const variantStyles = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white',
    secondary: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  };

  return (
    <button
      onClick={handleClick}
      disabled={isAdded}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${isAdded ? 'opacity-80' : ''}`}
    >
      {isAdded ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </>
      )}
    </button>
  );
}
