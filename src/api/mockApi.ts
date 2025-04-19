
import { Product, Order, CartItem, OrderStatus } from '@/types/types';
import { orders as initialOrders, products as initialProducts } from '@/data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// In-memory storage
let products = [...initialProducts];
let orders = [...initialOrders];

// Product APIs
export const getProducts = async (): Promise<Product[]> => {
  await delay(500); // Simulate network delay
  return [...products];
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  await delay(300);
  return products.find(product => product.id === id);
};

export const addProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  await delay(500);
  const newProduct = {
    ...product,
    id: `prod-${Math.floor(Math.random() * 10000)}`
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
  await delay(400);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Product not found');
  
  products[index] = { ...products[index], ...updates };
  return products[index];
};

export const deleteProduct = async (id: string): Promise<void> => {
  await delay(300);
  products = products.filter(p => p.id !== id);
};

// Order APIs
export const getOrders = async (): Promise<Order[]> => {
  await delay(500);
  return [...orders];
};

export const getOrder = async (id: string): Promise<Order | undefined> => {
  await delay(300);
  return orders.find(order => order.id === id);
};

export const createOrder = async (orderData: {
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  deliveryAddress: string;
  items: CartItem[];
}): Promise<Order> => {
  await delay(700);
  
  const total = orderData.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );
  
  const now = new Date().toISOString();
  
  const newOrder: Order = {
    id: `ord-${Math.floor(Math.random() * 10000)}`,
    ...orderData,
    total,
    status: 'pending',
    createdAt: now,
    updatedAt: now
  };
  
  orders.push(newOrder);
  
  // Update product stock
  orderData.items.forEach(item => {
    const product = products.find(p => p.id === item.product.id);
    if (product) {
      product.stock -= item.quantity;
    }
  });
  
  return newOrder;
};

export const updateOrderStatus = async (id: string, status: OrderStatus): Promise<Order> => {
  await delay(400);
  const index = orders.findIndex(o => o.id === id);
  if (index === -1) throw new Error('Order not found');
  
  orders[index] = { 
    ...orders[index], 
    status,
    updatedAt: new Date().toISOString()
  };
  
  return orders[index];
};
