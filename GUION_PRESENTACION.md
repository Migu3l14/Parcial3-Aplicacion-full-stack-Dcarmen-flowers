# Guion de Presentación - D'CARMEN FLOWERS

## 1. INTRODUCCIÓN (30 segundos)

"Buenos días/tardes. Hoy presento **D'CARMEN FLOWERS**, una aplicación full-stack para la gestión integral de una floristería. El sistema permite administrar productos, clientes, repartidores y pedidos con un flujo completo desde la creación hasta la entrega."

---

## 2. ESTRUCTURA DEL CÓDIGO (2 minutos)

### Arquitectura General
"La aplicación sigue una **arquitectura de separación frontend-backend**:

- **Backend**: API REST desarrollada en **TypeScript** con **Express.js**
- **Frontend**: Single Page Application (SPA) con **Vue 3** y **Vite**
- **Comunicación**: REST API con documentación Swagger integrada"

### Estructura del Backend
```
backend/
├── src/
│   ├── app.ts          # Configuración principal de Express
│   ├── server.ts       # Punto de entrada del servidor
│   ├── data/
│   │   └── store.ts    # Almacenamiento en memoria (simula BD)
│   ├── routes/         # 5 módulos de rutas:
│   │   ├── products.routes.ts
│   │   ├── clients.routes.ts
│   │   ├── couriers.routes.ts
│   │   ├── orders.routes.ts
│   │   └── auth.routes.ts
│   └── config/
│       └── swagger.ts  # Documentación API
```

"El backend está organizado por **módulos de rutas**, cada uno maneja una entidad específica. Usamos un **store en memoria** para simular una base de datos, lo que facilita el desarrollo y las pruebas."

### Estructura del Frontend
```
frontend/
├── src/
│   ├── App.vue         # Componente raíz con navegación
│   ├── main.ts         # Punto de entrada
│   ├── router.ts       # Configuración de rutas Vue Router
│   ├── services/
│   │   └── api.ts      # Cliente HTTP centralizado (Axios)
│   └── views/          # 6 vistas principales:
│       ├── HomeView.vue
│       ├── ProductsView.vue
│       ├── ClientsView.vue
│       ├── CouriersView.vue
│       ├── OrdersView.vue
│       └── LoginView.vue
```

"El frontend usa **Vue Router** para navegación y un **servicio API centralizado** que encapsula todas las llamadas HTTP, facilitando el mantenimiento y la consistencia."

---

## 3. DECISIONES DE DISEÑO (2 minutos)

### 3.1 Arquitectura RESTful
"Implementamos una **API RESTful** siguiendo convenciones estándar:
- Endpoints organizados por recursos (`/api/products`, `/api/orders`)
- Métodos HTTP semánticos (GET, POST, PATCH, DELETE)
- Códigos de estado HTTP apropiados (200, 201, 400, 404)"

### 3.2 Documentación con Swagger
"Integramos **Swagger/OpenAPI** para documentación automática de la API. Esto permite:
- Explorar endpoints en `/api-docs`
- Probar la API directamente desde el navegador
- Generar clientes automáticamente"

### 3.3 Control de Inventario Automático
"Al crear un pedido, el sistema **valida y actualiza automáticamente el stock**:
- Verifica disponibilidad antes de confirmar
- Reduce el inventario al crear el pedido
- Previene ventas de productos sin stock"

### 3.4 Sistema de Estados de Pedidos
"Implementamos un **flujo de estados** para pedidos:
- `pending` → `confirmed` → `preparing` → `out_for_delivery` → `delivered`
- Permite rastrear el pedido en cada etapa
- Facilita la asignación de repartidores"

### 3.5 Separación de Responsabilidades
"**Backend**: Lógica de negocio, validaciones y persistencia
**Frontend**: Presentación, interacción de usuario y llamadas API
**Servicio API**: Abstracción de comunicación HTTP"

### 3.6 TypeScript en Backend
"Usamos **TypeScript** para:
- Detección temprana de errores
- Mejor autocompletado y documentación
- Código más mantenible"

---

## 4. DEMOSTRACIÓN FUNCIONAL (3-4 minutos)

### 4.1 Inicio y Navegación
"Primero, muestro la aplicación en ejecución:
- **Página de inicio** con información general
- **Navegación** entre secciones (Productos, Clientes, Repartidores, Pedidos)
- Diseño responsive con temática de floristería"

### 4.2 Gestión de Productos
"En la sección de Productos:
1. **Listar productos** existentes con stock disponible
2. **Crear nuevo producto**: nombre, descripción, precio, stock
3. **Actualizar** información de productos
4. **Eliminar** productos (si no tienen pedidos asociados)"

### 4.3 Gestión de Clientes
"En Clientes:
1. **Ver lista** de clientes registrados
2. **Agregar cliente**: nombre, teléfono, email, dirección
3. Los clientes se usan al crear pedidos"

### 4.4 Gestión de Repartidores
"En Repartidores:
1. **Listar repartidores** con su estado (disponible, ocupado, inactivo)
2. **Crear repartidor** con nombre y teléfono
3. Los repartidores se asignan a pedidos en proceso"

### 4.5 Flujo Completo de Pedidos (DEMO PRINCIPAL)
"**Este es el flujo más importante**:

**Paso 1 - Crear Pedido:**
- Seleccionar cliente
- Agregar productos con cantidades
- El sistema calcula el total automáticamente
- Validación: verifica stock disponible
- Al confirmar, **reduce el inventario automáticamente**

**Paso 2 - Gestionar Estados:**
- El pedido inicia en estado `pending`
- Cambiar a `confirmed` → `preparing` → `out_for_delivery`
- Asignar repartidor en cualquier momento
- Finalizar con estado `delivered`

**Paso 3 - Verificar Impacto:**
- Mostrar que el stock del producto se redujo
- Ver el pedido en la lista con su estado actual
- Filtrar pedidos por estado"

### 4.6 Documentación API
"Abrir `/api-docs` en el navegador:
- Mostrar la documentación interactiva de Swagger
- Probar un endpoint directamente (ej: GET /api/products)
- Ver los esquemas de datos definidos"

---

## 5. CARACTERÍSTICAS DESTACADAS (1 minuto)

"**Puntos clave del sistema:**

✅ **11 endpoints REST** completamente documentados
✅ **Control automático de inventario** - previene sobreventas
✅ **Sistema de estados** para rastreo de pedidos
✅ **Interfaz moderna** con Vue 3 y diseño responsive
✅ **Documentación interactiva** con Swagger
✅ **Arquitectura escalable** - fácil agregar nuevas funcionalidades
✅ **TypeScript** para mayor robustez del código"

---

## 6. CONCLUSIÓN (30 segundos)

"En resumen, D'CARMEN FLOWERS es una aplicación completa que demuestra:
- Separación clara entre frontend y backend
- Buenas prácticas de desarrollo (REST, documentación, TypeScript)
- Funcionalidades reales de negocio (inventario, estados, asignación)

**¿Preguntas?**"

---

## NOTAS PARA LA DEMOSTRACIÓN

### Preparación Previa:
1. Tener ambos servidores corriendo:
   - Backend: `cd backend && npm run dev` (puerto 3000)
   - Frontend: `cd frontend && npm run dev` (puerto 5173)

2. Tener datos de ejemplo:
   - Al menos 2-3 productos con stock
   - 2-3 clientes registrados
   - 1-2 repartidores disponibles

### Orden Recomendado de Demo:
1. Mostrar estructura de carpetas (rápido)
2. Abrir aplicación en navegador
3. Navegar por las secciones (rápido)
4. **Enfocarse en el flujo completo de pedidos** (detallado)
5. Mostrar documentación Swagger
6. Preguntas

### Puntos a Resaltar Durante la Demo:
- **Control de inventario**: "Vean cómo al crear el pedido, el stock se reduce automáticamente"
- **Validaciones**: "Si intento pedir más de lo disponible, el sistema lo previene"
- **Estados**: "Puedo rastrear el pedido desde creación hasta entrega"
- **Documentación**: "La API está completamente documentada y probada"

---

## TIEMPO TOTAL ESTIMADO: 8-10 minutos

- Introducción: 30 seg
- Estructura: 2 min
- Decisiones: 2 min
- Demo: 3-4 min
- Características: 1 min
- Conclusión: 30 seg

