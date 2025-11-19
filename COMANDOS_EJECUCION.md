# Comandos para Ejecutar la Aplicación

## ⚠️ IMPORTANTE
**NO ejecutes comandos npm desde el directorio raíz** (`parcial3/`). 
Debes ejecutarlos desde `backend/` o `frontend/` según corresponda.

---

## 🚀 Ejecutar Backend

Abre una terminal y ejecuta:

```bash
cd backend
npm install          # Solo la primera vez o si agregas dependencias
npm run dev          # Inicia el servidor en modo desarrollo
```

El backend estará disponible en:
- **Servidor**: http://localhost:3000
- **API Docs (Swagger)**: http://localhost:3000/api-docs

---

## 🎨 Ejecutar Frontend

Abre **otra terminal** (deja el backend corriendo) y ejecuta:

```bash
cd frontend
npm install          # Solo la primera vez o si agregas dependencias
npm run dev          # Inicia el servidor de desarrollo
```

El frontend estará disponible en:
- **Aplicación**: http://localhost:5173

---

## 📦 Comandos Útiles

### Backend
```bash
cd backend
npm run build       # Compila TypeScript a JavaScript
npm start           # Ejecuta la versión compilada (después de build)
```

### Frontend
```bash
cd frontend
npm run build       # Crea la versión de producción
npm run serve       # Previsualiza la versión de producción
```

---

## 🔧 Solución de Problemas

Si obtienes el error:
```
npm error enoent Could not read package.json
```

**Solución**: Asegúrate de estar en el directorio correcto:
- Para backend: `cd backend`
- Para frontend: `cd frontend`

---

## 📝 Nota

Este proyecto tiene una estructura **monorepo** donde cada parte (backend y frontend) tiene su propio `package.json` y debe ejecutarse de forma independiente.

