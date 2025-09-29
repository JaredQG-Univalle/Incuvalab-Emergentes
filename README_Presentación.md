<!--
Este archivo README corresponde únicamente al módulo de presentación (frontend) del proyecto Incuvalab.
Ubicación: /Inculab_react
-->

# README_Presentación.md

## Descripción

Este módulo corresponde a la **parte de frontend** (presentación) del sistema Incuvalab. Permite visualizar e interactuar con la interfaz de usuario, navegar entre secciones y probar la experiencia visual del proyecto.  
No incluye lógica de backend ni conexión directa a bases de datos.

---

## Requisitos

- Node.js v16 o superior
- npm v8 o superior (o yarn)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

---

## Pasos de instalación

1. Clona el repositorio principal.
2. Ingresa a la carpeta del frontend:
   ```bash
   cd Inculab_react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
   o si prefieres usar yarn:
   ```bash
   yarn install
   ```

---

## Configuración necesaria

No se requiere configuración adicional para el entorno de desarrollo.  
Si en el futuro se conecta a una API o backend, revisa los archivos `.env.example` o la documentación interna.

---

## Ejecución

Para iniciar el frontend en modo desarrollo, ejecuta:

```bash
npm run dev
```
o
```bash
yarn dev
```

Esto levantará el servidor local, normalmente en [http://localhost:5173](http://localhost:5173).

---

## Cómo verificar que funciona

- Abre tu navegador y accede a la URL que aparece en la terminal (por defecto: [http://localhost:5173](http://localhost:5173)).
- Deberías ver la página principal de Incuvalab con el Navbar, las secciones principales y el Footer.
- Prueba navegar entre las diferentes secciones usando el menú.
- Si todo carga correctamente y puedes interactuar con los elementos, la instalación fue exitosa.

---

> **Nota:**  
> Este módulo es completamente frontend y puede funcionar de manera independiente.  
> Si tienes dudas, revisa la documentación interna o contacta al equipo de desarrollo.
