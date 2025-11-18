# ENUNCIADO DEL PROYECTO
## Sistema de Gestión de Pedidos - D'CARMEN FLOWERS

### 1. DESCRIPCIÓN GENERAL

**D'CARMEN FLOWERS** es una aplicación web desarrollada para gestionar de manera integral los procesos de negocio de una floristería. El sistema permite administrar productos florales, clientes, repartidores y pedidos, facilitando el control operativo y mejorando la eficiencia en la atención al cliente.

### 2. OBJETIVOS DEL PROYECTO

#### 2.1 Objetivo General
Desarrollar un sistema web completo que permita a D'CARMEN FLOWERS gestionar de manera eficiente sus operaciones diarias, desde el registro de productos hasta la entrega de pedidos, proporcionando una interfaz intuitiva y una API REST bien documentada.

#### 2.2 Objetivos Específicos
- Implementar un sistema de gestión de productos florales con control de inventario
- Gestionar la base de datos de clientes con información de contacto
- Administrar el equipo de repartidores y su disponibilidad
- Crear y gestionar pedidos con cálculo automático de totales
- Controlar el estado de los pedidos durante todo el proceso de entrega
- Proporcionar documentación completa de la API mediante Swagger
- Ofrecer una interfaz de usuario moderna y responsive con temática de floristería

### 3. ALCANCE DEL PROYECTO

#### 3.1 Funcionalidades Principales

**Gestión de Productos:**
- Listar todos los productos disponibles
- Crear nuevos productos con información detallada (nombre, descripción, precio, stock, imagen)
- Actualizar información de productos existentes
- Control automático de inventario al procesar pedidos

**Gestión de Clientes:**
- Registrar nuevos clientes con datos de contacto
- Consultar lista completa de clientes
- Almacenar información de contacto (nombre, teléfono, email, dirección)

**Gestión de Repartidores:**
- Registrar repartidores del equipo de entrega
- Consultar disponibilidad de repartidores
- Gestionar estados: disponible, ocupado, inactivo

**Gestión de Pedidos:**
- Crear nuevos pedidos asociados a clientes
- Agregar múltiples productos con cantidades específicas
- Cálculo automático del total del pedido
- Control de stock al momento de crear el pedido
- Actualizar estado del pedido (pendiente, confirmado, preparando, en camino, entregado, cancelado)
- Asignar repartidores a pedidos
- Filtrar pedidos por estado

**Autenticación:**
- Sistema de login simplificado para acceso al sistema

#### 3.2 Limitaciones
- Los datos se almacenan en memoria (no hay persistencia en base de datos)
- No incluye sistema de pagos
- No incluye notificaciones automáticas
- No incluye reportes avanzados de ventas

### 4. ARQUITECTURA DEL SISTEMA

#### 4.1 Stack Tecnológico

**Backend:**
- **Lenguaje:** TypeScript
- **Framework:** Express.js
- **Documentación API:** Swagger/OpenAPI 3.0
- **Herramientas:** Node.js, ts-node-dev

**Frontend:**
- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Routing:** Vue Router 4
- **HTTP Client:** Axios
- **Estilos:** CSS personalizado con temática de floristería

#### 4.2 Estructura del Proyecto

```
parcial3/
├── backend/              # API REST en TypeScript
│   ├── src/
│   │   ├── app.ts       # Configuración principal de Express
│   │   ├── server.ts    # Punto de entrada del servidor
│   │   ├── config/      # Configuración de Swagger
│   │   ├── data/        # Modelos de datos y store en memoria
│   │   └── routes/      # Rutas de la API
│   └── package.json
├── frontend/             # Aplicación Vue 3
│   ├── src/
│   │   ├── views/       # Componentes de página
│   │   ├── services/    # Servicios de API
│   │   ├── router.ts    # Configuración de rutas
│   │   └── App.vue      # Componente raíz
│   └── package.json
└── docs/                # Documentación
    └── openapi.yaml     # Especificación OpenAPI
```

### 5. MODELOS DE DATOS

#### 5.1 Product
Representa los productos florales disponibles en la tienda.
- `id`: Identificador único
- `name`: Nombre del producto
- `description`: Descripción opcional
- `price`: Precio unitario
- `stock`: Cantidad disponible
- `imageUrl`: URL de la imagen (opcional)

#### 5.2 Client
Representa los clientes de la floristería.
- `id`: Identificador único
- `name`: Nombre completo
- `phone`: Teléfono de contacto
- `email`: Email (opcional)
- `address`: Dirección (opcional)

#### 5.3 Courier
Representa los repartidores del equipo de entrega.
- `id`: Identificador único
- `name`: Nombre completo
- `phone`: Teléfono de contacto
- `status`: Estado (available, busy, inactive)

#### 5.4 Order
Representa los pedidos realizados por los clientes.
- `id`: Identificador único
- `clientId`: Referencia al cliente
- `courierId`: Referencia al repartidor asignado (opcional)
- `createdAt`: Fecha de creación
- `total`: Total del pedido
- `status`: Estado del pedido
- `items`: Array de items del pedido
- `note`: Nota adicional (opcional)

#### 5.5 OrderItem
Representa un item dentro de un pedido.
- `productId`: Referencia al producto
- `quantity`: Cantidad solicitada
- `unitPrice`: Precio unitario al momento de la compra

### 6. ENDPOINTS DE LA API

La API REST cuenta con **11 endpoints** organizados en las siguientes categorías:

1. **Auth:** POST `/api/auth/login`
2. **Products:** GET, POST, PUT `/api/products`
3. **Clients:** GET, POST `/api/clients`
4. **Couriers:** GET, POST `/api/couriers`
5. **Orders:** GET, POST, PATCH `/api/orders`

La documentación completa está disponible en `/api-docs` mediante Swagger UI.

### 7. INTERFAZ DE USUARIO

La interfaz web está diseñada con una temática de floristería, utilizando:
- Paleta de colores suaves (verdes, rosas, cremas)
- Diseño responsive para diferentes dispositivos
- Navegación intuitiva entre secciones
- Formularios claros y fáciles de usar
- Visualización de datos en listas organizadas

### 8. REQUISITOS TÉCNICOS

#### 8.1 Requisitos del Sistema
- Node.js 18+ 
- npm 9+
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

#### 8.2 Dependencias Principales
- Backend: express, cors, uuid, swagger-ui-express, swagger-jsdoc
- Frontend: vue, vue-router, axios, vite, @vitejs/plugin-vue

### 9. INSTALACIÓN Y EJECUCIÓN

#### 9.1 Backend
```bash
cd backend
npm install
npm run dev
```
Servidor disponible en: `http://localhost:3000`
Documentación API: `http://localhost:3000/api-docs`

#### 9.2 Frontend
```bash
cd frontend
npm install
npm run dev
```
Aplicación disponible en: `http://localhost:5173`

### 10. CASOS DE USO PRINCIPALES

1. **Registrar un nuevo producto floral** en el catálogo
2. **Registrar un nuevo cliente** con sus datos de contacto
3. **Registrar un repartidor** en el equipo de entrega
4. **Crear un pedido** seleccionando cliente y productos
5. **Actualizar el estado de un pedido** durante el proceso de entrega
6. **Asignar un repartidor** a un pedido para su entrega
7. **Consultar pedidos** filtrados por estado

### 11. CONSIDERACIONES FUTURAS

Para una versión mejorada del sistema, se recomienda:
- Implementar persistencia de datos con base de datos (PostgreSQL, MongoDB)
- Agregar sistema de autenticación completo con roles
- Implementar notificaciones por email/SMS
- Agregar reportes avanzados y dashboard de métricas
- Integrar sistema de pagos
- Implementar búsqueda y filtros avanzados
- Agregar historial de cambios y auditoría

---

**Versión:** 1.0.0  
**Fecha:** 2024  
**Desarrollado para:** D'CARMEN FLOWERS

