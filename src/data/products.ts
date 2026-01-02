export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  features: string[];
  shopifyVariantId?: string; // Will be set after Shopify setup
}

export const products: Product[] = [
  {
    id: 'gas-pump-locker-plus',
    name: 'Gas Pump Locker Plus',
    description: 'The ultimate multi-purpose gas pump handle holder. Premium construction with antimicrobial coating for clean, hygienic fueling every time. Never touch a dirty pump handle again.',
    price: 29.00,
    image: '/images/image1.jpeg',
    badge: 'Best Seller',
    features: [
      'Fits all standard gas pump handles',
      'Antimicrobial coating for hygiene',
      'Ergonomic grip design',
      'Durable premium construction',
      'Lightweight and portable',
      'Easy one-hand operation',
    ],
  },
];

export const featuredProducts = products;
