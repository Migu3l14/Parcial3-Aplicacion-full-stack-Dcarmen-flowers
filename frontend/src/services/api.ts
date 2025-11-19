import axios from 'axios';
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000/api'
});

export default {
  products: {
    list: () => API.get('/products'),
    create: (payload: any) => API.post('/products', payload),
    update: (id: string, payload: any) => API.put(`/products/${id}`, payload),
    delete: (id: string) => API.delete(`/products/${id}`)
  },
  clients: {
    list: () => API.get('/clients'),
    create: (payload: any) => API.post('/clients', payload)
  },
  couriers: {
    list: () => API.get('/couriers'),
    create: (payload: any) => API.post('/couriers', payload)
  },
  orders: {
    list: (params?: any) => API.get('/orders', { params }),
    create: (payload: any) => API.post('/orders', payload),
    updateStatus: (id: string, status: string, courierId?: string) => API.patch(`/orders/${id}/status`, { status, courierId })
  },
  reports: {
    sales: (params?: any) => API.get('/reports/sales', { params })
  }
};
