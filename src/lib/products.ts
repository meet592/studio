export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
};

const products: Product[] = [
  {
    id: '1',
    slug: 'ceremonial-grade-matcha',
    name: 'Ceremonial Grade Matcha',
    description: 'The highest quality matcha for traditional tea ceremonies. Vibrant green color with a delicate, sweet, and umami flavor.',
    price: 34.99,
    imageId: 'product-ceremonial-matcha',
  },
  {
    id: '2',
    slug: 'culinary-grade-matcha',
    name: 'Culinary Grade Matcha',
    description: 'Perfect for lattes, smoothies, and baking. A robust flavor that pairs well with other ingredients.',
    price: 22.99,
    imageId: 'product-culinary-matcha',
  },
  {
    id: '3',
    slug: 'bamboo-matcha-whisk',
    name: 'Bamboo Matcha Whisk (Chasen)',
    description: 'An essential tool for preparing the perfect bowl of matcha. Handcrafted from a single piece of bamboo with 100 prongs.',
    price: 18.00,
    imageId: 'product-matcha-whisk',
  },
  {
    id: '4',
    slug: 'ceramic-matcha-bowl',
    name: 'Ceramic Matcha Bowl (Chawan)',
    description: 'A beautiful, handcrafted ceramic bowl designed for whisking and enjoying matcha. Each piece is unique.',
    price: 28.50,
    imageId: 'product-matcha-bowl',
  },
  {
    id: '5',
    slug: 'matcha-starter-kit',
    name: 'Matcha Starter Kit',
    description: 'Everything you need to begin your matcha journey. Includes Ceremonial Grade Matcha, a bamboo whisk, and a ceramic bowl.',
    price: 75.00,
    imageId: 'product-starter-kit',
  },
  {
    id: '6',
    slug: 'hojicha-powder',
    name: 'Hojicha Powder',
    description: 'Roasted green tea powder with a nutty, toasty flavor and reddish-brown color. Naturally low in caffeine.',
    price: 19.99,
    imageId: 'product-hojicha-powder',
  },
  {
    id: '7',
    slug: 'genmaicha-tea',
    name: 'Genmaicha with Matcha',
    description: 'A traditional Japanese green tea combined with roasted brown rice and a touch of matcha. Savory and nutty flavor.',
    price: 15.99,
    imageId: 'product-genmaicha-tea',
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
