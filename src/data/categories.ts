
export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: 'phone',
    count: 156
  },
  {
    id: 'laptops',
    name: 'Laptops & Computers',
    icon: 'laptop',
    count: 84
  },
  {
    id: 'guitars',
    name: 'Guitars',
    icon: 'guitar',
    count: 67
  },
  {
    id: 'audio',
    name: 'Audio Equipment',
    icon: 'headphones',
    count: 112
  },
  {
    id: 'keyboards',
    name: 'Keyboards & Pianos',
    icon: 'music',
    count: 45
  },
  {
    id: 'tvs',
    name: 'TVs & Monitors',
    icon: 'tv',
    count: 38
  },
  {
    id: 'cameras',
    name: 'Cameras',
    icon: 'camera',
    count: 29
  },
  {
    id: 'drums',
    name: 'Drums & Percussion',
    icon: 'music-2',
    count: 24
  }
];
