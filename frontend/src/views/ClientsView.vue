<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../services/api';

const clients = ref([]);
const form = ref({ name: '', phone: '' });

const load = async () => {
  const res = await api.clients.list();
  clients.value = res.data;
};

const createClient = async () => {
  await api.clients.create(form.value);
  form.value = { name: '', phone: '' };
  await load();
};

onMounted(load);
</script>

<template>
  <div class="page-container">
    <h2>Clientes</h2>
    
    <div class="form-container">
      <h3>Agregar Nuevo Cliente</h3>
      <form @submit.prevent="createClient" class="form-group">
        <div class="form-row">
          <input v-model="form.name" placeholder="Nombre completo" required />
          <input v-model="form.phone" placeholder="Teléfono" required />
        </div>
        <button type="submit">➕ Crear Cliente</button>
      </form>
    </div>

    <div class="list-container">
      <h3>Lista de Clientes</h3>
      <ul class="item-list">
        <li v-for="c in clients" :key="c.id" class="list-item">
          <div class="list-item-info">
            <strong style="font-size: 1.1rem; color: var(--dark-green);">{{ c.name }}</strong>
            <div style="margin-top: 0.5rem; color: var(--text-light);">
              📞 {{ c.phone }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
