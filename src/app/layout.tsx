import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import SiteShell from '@/components/SiteShell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gas Pump Locker Plus | Multi-Purpose Tool',
  description: 'Premium gas pump handle holders for clean, hygienic fueling. Never touch a dirty pump handle again.',
  keywords: 'gas pump holder, pump handle cover, fuel pump tool, hygiene, automotive accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
