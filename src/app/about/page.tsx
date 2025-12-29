import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Gas Pump Locker Plus',
  description: 'Learn about Gas Pump Locker Plus and our mission to provide clean, hygienic fueling solutions.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image6.jpeg"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
            Our Story
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Clean Hands, Every Time
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Born from a simple idea: nobody should have to touch dirty gas pump handles.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
                Our Mission
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                Protecting Your Health, One Fill-Up at a Time
              </h2>
              <p className="mt-4 text-gray-400">
                Studies have shown that gas pump handles are among the dirtiest surfaces we encounter
                in our daily lives. They harbor bacteria, viruses, and all sorts of grime that we
                then transfer to our steering wheels, door handles, and ultimately, ourselves.
              </p>
              <p className="mt-4 text-gray-400">
                We created Gas Pump Locker Plus to solve this problem once and for all. Our
                multi-purpose tool provides a simple, effective barrier between your hands and
                those dirty pump handles.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/image7.jpeg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every product is made with premium, durable materials that withstand daily use and last for years.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We stand behind every product with our 100% satisfaction guarantee.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Innovation',
                description: 'We continuously improve our designs based on customer feedback and the latest in ergonomic research.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-[#0D0D0D] border border-[#2a2a25] rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-2">
              <Image
                src="/images/image8.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-4 py-2 rounded-lg font-semibold">
                Made in USA
              </div>
            </div>

            <div className="lg:order-1">
              <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
                How It Started
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                From Idea to Reality
              </h2>
              <p className="mt-4 text-gray-400">
                It all started at a gas station on a cold winter day. Our founder, like so many
                others, dreaded having to grip that dirty, frozen pump handle. There had to be
                a better way.
              </p>
              <p className="mt-4 text-gray-400">
                After months of prototyping and testing, Gas Pump Locker Plus was born. A simple,
                elegant solution to an everyday problem that affects millions of drivers.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Designed in the USA',
                  'Made with premium materials',
                  'Tested by real customers',
                  'Continuously improved based on feedback',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Try It Yourself?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Join thousands of happy customers who never touch dirty pump handles again.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
