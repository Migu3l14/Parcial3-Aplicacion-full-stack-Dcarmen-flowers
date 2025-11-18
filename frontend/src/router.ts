import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProductsView from './views/ProductsView.vue';
import ClientsView from './views/ClientsView.vue';
import CouriersView from './views/CouriersView.vue';
import OrdersView from './views/OrdersView.vue';
import LoginView from './views/LoginView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/clients', component: ClientsView },
  { path: '/couriers', component: CouriersView },
  { path: '/orders', component: OrdersView },
  { path: '/login', component: LoginView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
