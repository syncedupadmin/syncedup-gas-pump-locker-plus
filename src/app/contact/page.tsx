import Image from 'next/image';

export const metadata = {
  title: 'Contact Us | Gas Pump Locker Plus',
  description: 'Get in touch with Gas Pump Locker Plus. We\'re here to help with questions, orders, and wholesale inquiries.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image9.jpeg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-[0.3em]">
            Contact
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-[#1a1a18] border border-[#2a2a25] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2a2a25] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2a2a25] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2a2a25] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2a2a25] rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2a2a25] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>

                <p className="text-gray-500 text-sm text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/image10.jpeg"
                  alt="Customer Support"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[#1a1a18] border border-[#2a2a25] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm">support@gaspumplockersplus.com</p>
                </div>

                <div className="p-6 bg-[#1a1a18] border border-[#2a2a25] rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9AM - 5PM EST</p>
                </div>
              </div>

              <div className="p-6 bg-[#1a1a18] border border-[#2a2a25] rounded-xl">
                <h3 className="text-white font-semibold mb-4">Wholesale Inquiries</h3>
                <p className="text-gray-400 mb-4">
                  Interested in carrying Gas Pump Locker Plus in your store or fleet? We offer
                  competitive wholesale pricing and bulk discounts.
                </p>
                <ul className="space-y-2">
                  {[
                    'Volume discounts available',
                    'Custom branding options',
                    'Dedicated account support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1a1a18] border-t border-[#2a2a25]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long does shipping take?',
                a: 'Orders are processed within 1-2 business days. Standard shipping typically takes 3-5 business days within the continental US.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, contact us for a full refund or replacement.',
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes! Contact us for wholesale pricing on orders of 10 or more units. We also offer custom branding for large orders.',
              },
              {
                q: 'Is my payment information secure?',
                a: 'Absolutely. All payments are processed through Shopify\'s secure checkout. We never store your credit card information.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-[#0D0D0D] border border-[#2a2a25] rounded-xl">
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
