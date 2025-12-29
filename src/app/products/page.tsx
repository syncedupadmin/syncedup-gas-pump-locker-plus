import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Products | Gas Pump Locker Plus',
  description: 'Shop our premium gas pump handle holders. Keep your hands clean and protected at every fill-up.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image5.jpeg"
            alt="Our Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
            Shop
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Our Products
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Premium gas pump handle holders designed for everyday protection.
            Every product comes with our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-[#1a1a18] border-y border-[#2a2a25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Quality Guarantee',
                description: '100% satisfaction or your money back',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: 'Free Shipping',
                description: 'On orders over $25',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast Delivery',
                description: 'Ships within 1-2 business days',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Support',
                description: 'Friendly customer service',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Will this fit all gas pump handles?',
                a: 'Yes! Our holders are designed to fit standard gas pump handles found at most gas stations across the US.',
              },
              {
                q: 'How do I clean my Gas Pump Locker Plus?',
                a: 'Simply wipe with a damp cloth or use any household disinfectant. The durable material is resistant to gasoline and most cleaning chemicals.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your purchase, contact us for a full refund or replacement.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Currently, we only ship within the continental United States. International shipping is coming soon!',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-[#1a1a18] border border-[#2a2a25] rounded-xl">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
