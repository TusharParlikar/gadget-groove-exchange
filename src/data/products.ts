
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  image: string;
  description: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  location: string;
  datePosted: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Vintage Fender Stratocaster',
    price: 899.99,
    category: 'guitars',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=800',
    description: 'A classic Fender Stratocaster from the 90s. Great condition with minor wear. Includes original case.',
    seller: {
      id: 'seller1',
      name: 'Mike Johnson',
      rating: 4.8
    },
    location: 'Koregaon Park, Pune - 411001',
    datePosted: '2025-04-15',
    featured: true
  },
  {
    id: '2',
    name: 'MacBook Pro 2023',
    price: 1499.99,
    category: 'laptops',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800',
    description: 'Apple MacBook Pro M2, 16GB RAM, 512GB SSD. Only used for 3 months. Comes with original box and charger.',
    seller: {
      id: 'seller2',
      name: 'Sarah Kim',
      rating: 4.9
    },
    location: 'Hinjewadi, Pune - 411057',
    datePosted: '2025-04-20',
    featured: true
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4 Headphones',
    price: 199.99,
    category: 'audio',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800',
    description: 'Sony noise-cancelling headphones. Great sound quality, battery still holds charge well.',
    seller: {
      id: 'seller3',
      name: 'David Chen',
      rating: 4.7
    },
    location: 'Kothrud, Pune - 411038',
    datePosted: '2025-04-18'
  },
  {
    id: '4',
    name: 'Yamaha P-125 Digital Piano',
    price: 549.99,
    category: 'keyboards',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800',
    description: 'Yamaha P-125 88-key weighted digital piano. Barely used, perfect condition.',
    seller: {
      id: 'seller4',
      name: 'Rachel Green',
      rating: 4.6
    },
    location: 'Aundh, Pune - 411007',
    datePosted: '2025-04-10',
    featured: true
  },
  {
    id: '5',
    name: 'Samsung 50" 4K Smart TV',
    price: 399.99,
    category: 'tvs',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800',
    description: '50-inch Samsung 4K Smart TV from 2022. Works perfectly, selling because upgrading.',
    seller: {
      id: 'seller5',
      name: 'Alex Morgan',
      rating: 4.5
    },
    location: 'Viman Nagar, Pune - 411014',
    datePosted: '2025-04-12'
  },
  {
    id: '6',
    name: 'Shure SM58 Microphone',
    price: 79.99,
    category: 'audio',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=800',
    description: 'Industry standard Shure SM58 dynamic microphone. Great condition, includes pouch and clip.',
    seller: {
      id: 'seller6',
      name: 'John Smith',
      rating: 4.7
    },
    location: 'Hadapsar, Pune - 411028',
    datePosted: '2025-04-14'
  },
  {
    id: '7',
    name: 'iPhone 14 Pro',
    price: 799.99,
    category: 'phones',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1664478546384-d57efe9ffb991?q=80&w=800',
    description: 'iPhone 14 Pro 256GB, graphite color. Small scratch on back, otherwise perfect condition. Unlocked for all carriers.',
    seller: {
      id: 'seller7',
      name: 'Emma Wilson',
      rating: 4.8
    },
    location: 'Baner, Pune - 411045',
    datePosted: '2025-04-17',
    featured: true
  },
  {
    id: '8',
    name: 'Ludwig Drum Kit',
    price: 899.99,
    category: 'drums',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1543443258-92b04ad5ec5b?q=80&w=800',
    description: 'Complete Ludwig drum kit. Includes kick, snare, two toms, floor tom, hi-hat, crash and ride cymbals.',
    seller: {
      id: 'seller8',
      name: 'Mark Davis',
      rating: 4.9
    },
    location: 'Shivaji Nagar, Pune - 411005',
    datePosted: '2025-04-19'
  }
];
