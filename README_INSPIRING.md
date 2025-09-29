# README_inspiring.md

## Descripción
Este módulo corresponde a la parte de frontend y backend del sistema Incuvalab, específicamente al módulo *inspiring*.
Permite visualizar casos de éxito en formato de tarjetas (cards), acceder a videos de YouTube o Facebook y administrar el contenido a través de una interfaz de administración (CRUD).
Incluye lógica de backend, base de datos y conexión a almacenamiento en la nube.

## Requisitos

- Node.js v16 o superior
- npm v8 o superior
- MongoDB Atlas (cuenta y URI de conexión)
- Cuenta en Cloudinary (para el almacenamiento de imágenes)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## Pasos de instalación

1. Clona el repositorio principal:
   ```bash
   git clone https://github.com/Univalle-PSII/incuvalab.git
   ```

2. Ingresa a las carpetas del frontend y backend:
   ```bash
   cd incuvalab/react   # Frontend
   cd incuvalab/rest    # Backend
   ```

3. Instala las dependencias necesarias en ambos módulos:

   En frontend:
   ```bash
   cd incuvalab/react
   npm install
   ```

   En backend:
   ```bash
   cd incuvalab/rest
   npm install
   ```

4. Instala las librerías necesarias si no están en el package.json:

   Para MongoDB y Cloudinary en backend:
   ```bash
   npm install mongoose dotenv cloudinary multer express cors
   ```

## Configuración necesaria

1. Crea un archivo `.env` en la carpeta `/rest` con las siguientes variables:

   ```env
   MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/incuvalab
   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   PORT=7011
   ```

2. Asegúrate de tener habilitado el acceso a internet para conectarte a MongoDB Atlas y Cloudinary.

## Ejecución

1. Inicia el backend (desde la carpeta /rest):
   ```bash
   cd incuvalab/rest
   npm run server
   ```

2. En otra terminal, inicia el frontend (desde la carpeta /react):
   ```bash
   cd incuvalab/react
   npm run dev
   ```

3. Accede a la aplicación desde tu navegador en:
   ```
   http://localhost:7011
   ```

## Cómo verificar que funciona

- Al abrir la URL deberías ver un listado de cards con imágenes y botones que llevan a videos de YouTube o Facebook.
- Al hacer clic en una card, el video correspondiente debe reproducirse correctamente.
- Desde el panel de administración puedes realizar operaciones CRUD (crear, editar, eliminar cards).
- Las imágenes se deben subir correctamente (máximo 5 MB) a Cloudinary.
- Las cards de YouTube tienen un contador de visualizaciones.

---

**Autores del módulo:**  
Quinteros Garcia Jared, Ferrufino Orellana Franco, Guzman Huachini Pablo.