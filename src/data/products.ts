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
    id: 'standard-holder',
    name: 'Standard Handle Holder',
    description: 'Our classic gas pump handle holder. Durable, lightweight, and easy to use. Perfect for everyday drivers who want to keep their hands clean.',
    price: 9.99,
    image: '/images/image1.jpeg',
    badge: 'Best Seller',
    features: [
      'Fits most standard gas pump handles',
      'Lightweight and portable',
      'Easy one-hand operation',
      'Durable ABS plastic construction',
    ],
  },
  {
    id: 'premium-holder',
    name: 'Premium Handle Holder',
    description: 'Enhanced grip with antimicrobial coating. Our premium option for those who demand the best in hygiene and comfort.',
    price: 14.99,
    image: '/images/image2.jpeg',
    badge: 'Most Popular',
    features: [
      'Antimicrobial coating',
      'Ergonomic grip design',
      'Extended handle for leverage',
      'Premium materials',
    ],
  },
  {
    id: 'deluxe-kit',
    name: 'Deluxe 2-Pack Kit',
    description: 'Two premium holders with a convenient carrying case. Perfect for families or keeping one in each vehicle.',
    price: 24.99,
    image: '/images/image3.jpeg',
    badge: 'Best Value',
    features: [
      'Includes 2 premium holders',
      'Zippered carrying case',
      'Great for multiple vehicles',
      'Save over buying separately',
    ],
  },
];

export const featuredProducts = products;
