<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../services/api';

const orders = ref([]);
const products = ref([]);
const clients = ref([]);
const couriers = ref([]);

const form = ref({ clientId: '', items: [] });

const load = async () => {
  const [oRes, pRes, cRes, rRes] = await Promise.all([
    api.orders.list(),
    api.products.list(),
    api.clients.list(),
    api.couriers.list()
  ]);
  orders.value = oRes.data;
  products.value = pRes.data;
  clients.value = cRes.data;
  couriers.value = rRes.data;
};

const addItem = () => {
  form.value.items.push({ productId: products.value[0]?.id, quantity: 1, unitPrice: products.value[0]?.price });
};

const createOrder = async () => {
  await api.orders.create(form.value);
  form.value = { clientId: '', items: [] };
  await load();
};

onMounted(load);
</script>

<template>
  <div class="page-container">
    <h2>Pedidos</h2>

    <div class="form-container">
      <h3>Crear Nuevo Pedido</h3>
      <form @submit.prevent="createOrder" class="form-group">
        <div class="form-row">
          <select v-model="form.clientId" required>
            <option disabled value="">Seleccione un cliente</option>
            <option v-for="c in clients" :key="c.id" :value="c.id">{{ c.name }}</option>
          </select>
        </div>
        
        <div style="margin: 1.5rem 0;">
          <h4 style="color: var(--primary-green); margin-bottom: 1rem;">Items del Pedido</h4>
          <button type="button" @click="addItem" class="btn-secondary">➕ Agregar Item</button>
          
          <div v-for="(it, idx) in form.items" :key="idx" class="order-item">
            <div class="form-row">
              <select v-model="it.productId" required>
                <option disabled value="">Seleccione producto</option>
                <option v-for="p in products" :key="p.id" :value="p.id">
                  {{ p.name }} - ${{ p.price }}
                </option>
              </select>
              <input v-model.number="it.quantity" type="number" min="1" placeholder="Cantidad" required />
            </div>
          </div>
        </div>
        
        <button type="submit" :disabled="form.items.length === 0">✨ Crear Pedido</button>
      </form>
    </div>

    <div class="list-container">
      <h3>Lista de Pedidos</h3>
      <ul class="item-list">
        <li v-for="o in orders" :key="o.id" class="list-item">
          <div class="list-item-info">
            <strong style="font-size: 1.1rem; color: var(--dark-green);">
              Pedido #{{ o.id.substring(0, 8) }}
            </strong>
            <div style="margin-top: 0.5rem; color: var(--text-light);">
              💰 Total: ${{ o.total.toFixed(2) }} | 
              📅 {{ new Date(o.createdAt).toLocaleDateString() }}
            </div>
          </div>
          <span :class="`badge badge-${o.status}`">
            {{ o.status === 'pending' ? 'Pendiente' : 
               o.status === 'confirmed' ? 'Confirmado' : 
               o.status === 'preparing' ? 'Preparando' : 
               o.status === 'out_for_delivery' ? 'En camino' : 
               o.status === 'delivered' ? 'Entregado' : 'Cancelado' }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
