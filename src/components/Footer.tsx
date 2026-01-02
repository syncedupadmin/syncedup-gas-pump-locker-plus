import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Gas Pump Locker Plus"
                width={150}
                height={150}
                className="rounded-full w-14 h-14"
              />
              <span className="text-lg font-bold text-white">Gas Pump Locker Plus</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Premium gas pump handle holders designed for clean, hygienic fueling.
              Our multi-purpose tools keep your hands protected at every fill-up.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:+19177420044" className="hover:text-brand-orange transition-colors">
                  (917) 742-0044
                </a>
              </li>
              <li>support@gaspumplockersplus.com</li>
              <li>Mon-Fri: 9AM - 5PM EST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a25] text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gas Pump Locker Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
