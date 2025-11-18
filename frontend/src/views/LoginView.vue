<script setup lang="ts">
import { ref } from 'vue';
import api, { setToken } from '../services/api';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = ref({ username: '' });

const login = async () => {
  const res = await api.auth.login(form.value);
  setToken(res.data.token);
  router.push('/');
};
</script>

<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="form.username" placeholder="Nombre de usuario" required />
      <button type="submit" style="width: 100%;">🌺 Ingresar</button>
    </form>
  </div>
</template>
