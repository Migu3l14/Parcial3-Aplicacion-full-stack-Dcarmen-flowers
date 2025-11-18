<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../services/api';

const products = ref([]);
const form = ref({ name: '', price: 0, stock: 0 });

const load = async () => {
  const res = await api.products.list();
  products.value = res.data;
};

const createProduct = async () => {
  await api.products.create(form.value);
  form.value = { name: '', price: 0, stock: 0 };
  await load();
};

onMounted(load);
</script>

<template>
  <div class="page-container">
    <h2>Productos</h2>
    
    <div class="form-container">
      <h3>Agregar Nuevo Producto</h3>
      <form @submit.prevent="createProduct" class="form-group">
        <div class="form-row">
          <input v-model="form.name" placeholder="Nombre del producto" required />
          <input v-model.number="form.price" type="number" step="0.01" placeholder="Precio" min="0" required />
          <input v-model.number="form.stock" type="number" placeholder="Stock disponible" min="0" required />
        </div>
        <button type="submit">➕ Crear Producto</button>
      </form>
    </div>

    <div class="list-container">
      <h3>Lista de Productos</h3>
      <ul class="item-list">
        <li v-for="p in products" :key="p.id" class="list-item">
          <div class="list-item-info">
            <strong style="font-size: 1.1rem; color: var(--dark-green);">{{ p.name }}</strong>
            <div style="margin-top: 0.5rem; color: var(--text-light);">
              <span>💰 Precio: ${{ p.price.toFixed(2) }}</span> | 
              <span>📦 Stock: {{ p.stock }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
