import "./config.js";
import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import configureMiddleware from './middleware/index.js';
import { connectDB } from './utils/database.js';
import { updatePermission, createAdminUser } from './utils/update.js';
import routes from './modules/index.js';
import storageRoutes from './modules/storageGoogle/index.js';

const PORT = process.env.PORT || 4014;

const app = express();

// Configuración CORS para producción
const corsOptions = {
  origin: function (origin, callback) {
    // En producción, permite todos los orígenes o solo tu frontend
    if (process.env.NODE_ENV === 'production') {
      const allowedOrigins = [
        'https://lighthearted-ilama-a7bfbc.netlify.app',
        'http://localhost:3000',
        'http://localhost:7011'
      ];
      
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log('CORS blocked origin:', origin);
        callback(null, true); // Temporalmente permite todos para pruebas
      }
    } else {
      // En desarrollo, política más restrictiva
      if (!origin || origin.includes('localhost') || origin.includes('192.168')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(helmet());
app.use(cookieParser());

// Configurar Middleware personalizados
configureMiddleware(app);

// Importa las rutas de los módulos
app.use('/', routes);
app.use('/storage', storageRoutes);

// Ruta de salud para Render
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server MERN funcionando en Render!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Server Running',
    version: '1.0.0'
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error global:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
});

// Inicialización del servidor
async function startServer() {
  try {
    await connectDB();
    console.log('✅ MongoDB Connected');
    
    if (process.env.NODE_ENV !== "production") {
      // Comentar después de la primera vez
      await updatePermission(); // Actualizar Permisos
      await createAdminUser();
      console.log('✅ Development setup completed');
    }
    
    const httpServer = http.createServer(app);
    
    await new Promise((resolve) => {
      httpServer.listen({ port: PORT }, resolve);
    });
    
    console.log("🚀 Server ready at http://localhost:${PORT}/");
    console.log("🌐 Health check: http://localhost:${PORT}/api/health");
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();