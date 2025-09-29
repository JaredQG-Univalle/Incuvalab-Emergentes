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
await connectDB();
if (process.env.NODE_ENV != "production") {
  //comentar despues de la primera vez
  updatePermission();///// Actualizar Permisos
  createAdminUser();
}
const corsOptions = {
  origin: (origin, callback) => {
    if (
      !origin || 
      origin === 'http://localhost:7011' || 
      /^http:\/\/192\.168\.\d{1,3}\.\d{1,3}(:\d+)?$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());

//Configurar Middlware personalizados
configureMiddleware(app);

// Importa las rutas de los modulos
app.use('/', routes);
app.use('/storage', storageRoutes);

const httpServer = http.createServer(app);
// Modified server startup
await new Promise((resolve) => {
  httpServer.listen({ port: PORT }, resolve)
});

if (process.env.NODE_ENV != 'production') {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
}