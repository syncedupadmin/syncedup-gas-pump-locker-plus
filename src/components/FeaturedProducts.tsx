'use client';

import Link from 'next/link';
import { featuredProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Choose Your Protection
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Premium gas pump handle holders designed for everyday use.
            Keep your hands clean and protected at every fill-up.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-dark font-semibold transition-colors"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
