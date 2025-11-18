# D'CARMEN FLOWERS - Gestor de Pedidos

## Descripción
Aplicación web completa para gestionar productos, clientes, repartidores y pedidos para D'CARMEN FLOWERS.

## Estructura
- `backend/` — API REST en TypeScript + Express con documentación Swagger
- `frontend/` — SPA en Vue 3 (Vite) con diseño temático de floristería
- `docs/` — Documentación del proyecto
  - `ENUNCIADO.md` — Enunciado completo del proyecto
  - `DIAGRAMA_CLASES.md` — Diagrama de clases y descripción de entidades
  - `diagrama_clases.puml` — Archivo PlantUML del diagrama
  - `openapi.yaml` — Especificación OpenAPI

## Documentación

- **[Enunciado del Proyecto](docs/ENUNCIADO.md)** - Descripción completa, objetivos, alcance y requisitos
- **[Diagrama de Clases](docs/DIAGRAMA_CLASES.md)** - Modelo de datos y relaciones entre entidades

## Ejecutar

### Backend
```bash
cd backend
npm install
npm run dev
```
- Servidor: http://localhost:3000
- Documentación API: http://localhost:3000/api-docs

### Frontend
```bash
cd frontend
npm install
npm run dev
```
- Aplicación: http://localhost:5173

## Características

- ✅ 11 endpoints REST documentados con Swagger
- ✅ Interfaz moderna con temática de floristería
- ✅ Gestión completa de productos, clientes, repartidores y pedidos
- ✅ Control automático de inventario
- ✅ Sistema de estados para pedidos
- ✅ Diseño responsive
