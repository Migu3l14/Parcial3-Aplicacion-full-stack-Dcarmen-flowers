import { v4 as uuid } from 'uuid';

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  imageUrl?: string;
};

export type Client = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
};

export type Courier = {
  id: string;
  name: string;
  phone: string;
  status: 'available' | 'busy' | 'inactive';
};

export type OrderItem = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export type Order = {
  id: string;
  clientId: string;
  courierId?: string | null;
  createdAt: string;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  items: OrderItem[];
  note?: string;
};

const products: Product[] = [
  { id: uuid(), name: 'Ramo clásico', description: 'Rosas rojas', price: 30, stock: 10, imageUrl: '' },
  { id: uuid(), name: 'Centro floral', description: 'Para eventos', price: 50, stock: 5, imageUrl: '' }
];

const clients: Client[] = [
  { id: uuid(), name: 'Cliente ejemplo', phone: '+573001112233', email: 'cliente@ej.com', address: 'Calle 123' }
];

const couriers: Courier[] = [
  { id: uuid(), name: 'Repartidor 1', phone: '+573001110000', status: 'available' }
];

const orders: Order[] = [];

export const store = {
  products,
  clients,
  couriers,
  orders
};
