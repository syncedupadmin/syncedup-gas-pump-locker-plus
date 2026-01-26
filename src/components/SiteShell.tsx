'use client';

import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import PromoBanner from './PromoBanner';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D]">
      <PromoBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
