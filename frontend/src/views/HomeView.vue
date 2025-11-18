<template>
  <div class="page-container">
    <h2>Bienvenido a D'CARMEN FLOWERS</h2>
    <p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem;">
      Sistema de gestión de pedidos para tu floristería. Administra productos, clientes, repartidores y pedidos de manera fácil y eficiente.
    </p>
    <div class="grid grid-2">
      <div class="card">
        <h3>🌹 Productos</h3>
        <p>Gestiona tu catálogo de flores y arreglos florales</p>
        <router-link to="/products" class="btn" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
          Ver Productos
        </router-link>
      </div>
      <div class="card">
        <h3>👥 Clientes</h3>
        <p>Administra la información de tus clientes</p>
        <router-link to="/clients" class="btn" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
          Ver Clientes
        </router-link>
      </div>
      <div class="card">
        <h3>🚚 Repartidores</h3>
        <p>Gestiona tu equipo de repartidores</p>
        <router-link to="/couriers" class="btn" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
          Ver Repartidores
        </router-link>
      </div>
      <div class="card">
        <h3>📦 Pedidos</h3>
        <p>Crea y gestiona los pedidos de tus clientes</p>
        <router-link to="/orders" class="btn" style="margin-top: 1rem; display: inline-block; text-decoration: none;">
          Ver Pedidos
        </router-link>
      </div>
    </div>
  </div>
</template>
