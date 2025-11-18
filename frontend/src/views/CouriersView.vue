<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../services/api';

const couriers = ref([]);
const form = ref({ name: '', phone: '' });

const load = async () => {
  const res = await api.couriers.list();
  couriers.value = res.data;
};

const createCourier = async () => {
  await api.couriers.create({ ...form.value, status: 'available' });
  form.value = { name: '', phone: '' };
  await load();
};

onMounted(load);
</script>

<template>
  <div class="page-container">
    <h2>Repartidores</h2>
    
    <div class="form-container">
      <h3>Agregar Nuevo Repartidor</h3>
      <form @submit.prevent="createCourier" class="form-group">
        <div class="form-row">
          <input v-model="form.name" placeholder="Nombre completo" required />
          <input v-model="form.phone" placeholder="Teléfono" required />
        </div>
        <button type="submit">➕ Crear Repartidor</button>
      </form>
    </div>

    <div class="list-container">
      <h3>Lista de Repartidores</h3>
      <ul class="item-list">
        <li v-for="c in couriers" :key="c.id" class="list-item">
          <div class="list-item-info">
            <strong style="font-size: 1.1rem; color: var(--dark-green);">{{ c.name }}</strong>
            <div style="margin-top: 0.5rem; color: var(--text-light);">
              📞 {{ c.phone }}
            </div>
          </div>
          <span :class="`badge badge-${c.status === 'available' ? 'available' : c.status === 'busy' ? 'busy' : 'cancelled'}`">
            {{ c.status === 'available' ? 'Disponible' : c.status === 'busy' ? 'Ocupado' : 'Inactivo' }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
