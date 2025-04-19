
import { Order, Product } from '@/types/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    description: 'Juicy, ripe tomatoes freshly harvested from our farm.',
    price: 2.99,
    unit: 'kg',
    image: '/tomato.jpg',
    category: 'vegetables',
    stock: 100
  },
  {
    id: '2',
    name: 'Organic Carrots',
    description: 'Sweet and crunchy organic carrots, perfect for salads and cooking.',
    price: 1.99,
    unit: 'kg',
    image: '/carrot.jpg',
    category: 'vegetables',
    stock: 150
  },
  {
    id: '3',
    name: 'Green Apples',
    description: 'Crisp and tart green apples, great for snacking or baking.',
    price: 3.49,
    unit: 'kg',
    image: '/apple.jpg',
    category: 'fruits',
    stock: 75
  },
  {
    id: '4',
    name: 'Fresh Spinach',
    description: 'Nutrient-rich spinach leaves, washed and ready to use.',
    price: 2.49,
    unit: 'bunch',
    image: '/spinach.jpg',
    category: 'vegetables',
    stock: 80
  },
  {
    id: '5',
    name: 'Red Onions',
    description: 'Medium-sized red onions with a mild, sweet flavor.',
    price: 1.79,
    unit: 'kg',
    image: '/onion.jpg',
    category: 'vegetables',
    stock: 120
  },
  {
    id: '6',
    name: 'Ripe Bananas',
    description: 'Sweet and perfectly ripe bananas.',
    price: 1.99,
    unit: 'kg',
    image: '/banana.jpg',
    category: 'fruits',
    stock: 90
  },
  {
    id: '7',
    name: 'Fresh Cucumbers',
    description: 'Crisp cucumbers, perfect for salads and sandwiches.',
    price: 1.29,
    unit: 'each',
    image: '/cucumber.jpg',
    category: 'vegetables',
    stock: 110
  },
  {
    id: '8',
    name: 'Sweet Oranges',
    description: 'Juicy, sweet oranges packed with vitamin C.',
    price: 2.99,
    unit: 'kg',
    image: '/orange.jpg',
    category: 'fruits',
    stock: 65
  }
];

export const orders: Order[] = [
  {
    id: 'ord-001',
    buyerName: 'John Doe',
    buyerEmail: 'john@example.com',
    buyerPhone: '555-123-4567',
    deliveryAddress: '123 Main St, Anytown, CA 12345',
    items: [
      { product: products[0], quantity: 5 },
      { product: products[2], quantity: 3 }
    ],
    total: 25.42,
    status: 'pending',
    createdAt: '2023-11-25T10:30:00Z',
    updatedAt: '2023-11-25T10:30:00Z'
  },
  {
    id: 'ord-002',
    buyerName: 'Jane Smith',
    buyerEmail: 'jane@example.com',
    buyerPhone: '555-987-6543',
    deliveryAddress: '456 Elm St, Somewhere, NY 67890',
    items: [
      { product: products[1], quantity: 2 },
      { product: products[3], quantity: 1 },
      { product: products[5], quantity: 4 }
    ],
    total: 15.94,
    status: 'delivered',
    createdAt: '2023-11-20T14:45:00Z',
    updatedAt: '2023-11-22T09:15:00Z'
  },
  {
    id: 'ord-003',
    buyerName: 'Bob Johnson',
    buyerEmail: 'bob@example.com',
    buyerPhone: '555-555-5555',
    deliveryAddress: '789 Oak Ave, Elsewhere, TX 54321',
    items: [
      { product: products[4], quantity: 3 },
      { product: products[6], quantity: 5 }
    ],
    total: 11.82,
    status: 'processing',
    createdAt: '2023-11-24T08:20:00Z',
    updatedAt: '2023-11-24T16:10:00Z'
  }
];
