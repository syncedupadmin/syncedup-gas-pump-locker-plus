'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-[#1a1a18] border border-[#2a2a25] rounded-xl overflow-hidden hover:border-brand-orange/50 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square bg-[#0D0D0D] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-brand-green text-white text-xs font-semibold rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        <ul className="mb-4 space-y-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-[#2a2a25]">
          <span className="text-2xl font-bold text-brand-orange">${product.price.toFixed(2)}</span>
          <AddToCartButton product={product} className="text-sm px-4 py-2" />
        </div>
      </div>
    </div>
  );
}
