import Image from 'next/image';
import Link from 'next/link';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image0.jpeg"
            alt="Gas Pump Locker Plus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Multi-Purpose Tool
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
            Keep Your Hands <span className="text-brand-orange">Clean</span> at Every Fill-Up
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
            Our premium gas pump handle holders protect you from germs, grime, and gasoline.
            Designed for durability and everyday convenience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
            >
              Shop Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a1a18] border-y border-[#2a2a25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'Germ Protection' },
              { value: '10K+', label: 'Happy Customers' },
              { value: 'USA', label: 'Designed & Made' },
              { value: '5★', label: 'Customer Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-brand-orange">{stat.value}</div>
                <div className="mt-2 text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* How It Works */}
      <section className="py-20 bg-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/image4.jpeg"
                alt="How to use Gas Pump Locker Plus"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-brand-green text-white px-4 py-2 rounded-lg font-semibold">
                Easy to Use
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
                How It Works
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Simple Protection in Seconds
              </h2>
              <p className="mt-4 text-gray-400">
                Our gas pump handle holder is designed for maximum convenience.
                Just attach, pump, and go - keeping your hands clean has never been easier.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Attach the holder to any standard gas pump handle',
                  'Grip the comfortable handle to squeeze the trigger',
                  'Fill your tank without touching the dirty pump',
                  'Remove and store in your vehicle for next time',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
              >
                Get Yours Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I never realized how gross gas pump handles were until I started using this. Now I can't imagine filling up without it!",
                name: 'Sarah M.',
                role: 'Daily Commuter',
              },
              {
                quote: "Perfect for keeping in the car. My whole family uses them now. Great quality and super easy to use.",
                name: 'Mike T.',
                role: 'Father of Three',
              },
              {
                quote: "As a delivery driver, I fill up multiple times a day. This has been a game changer for keeping my hands clean.",
                name: 'James R.',
                role: 'Delivery Driver',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-[#1a1a18] border border-[#2a2a25] rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready for Cleaner Fill-Ups?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Join thousands of satisfied customers. Free shipping on orders over $25.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Shop All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
