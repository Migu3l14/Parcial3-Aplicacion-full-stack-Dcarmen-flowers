<template>
  <div>
    <header class="app-header">
      <h1>D'CARMEN FLOWERS</h1>
      <nav class="nav-menu">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/products" class="nav-link">Productos</router-link>
        <router-link to="/clients" class="nav-link">Clientes</router-link>
        <router-link to="/couriers" class="nav-link">Repartidores</router-link>
        <router-link to="/orders" class="nav-link">Pedidos</router-link>
      </nav>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
