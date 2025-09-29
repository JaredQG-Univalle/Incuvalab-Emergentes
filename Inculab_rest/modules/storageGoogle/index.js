import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de Cloudinary
cloudinary.config({
  secure: true,
});

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Solo se permiten imágenes'), false);
    } else {
      cb(null, true);
    }
  }
});

const routes = express.Router();
const projectName = process.env.DATABASE_NAME || 'general';

// Subir archivo a Cloudinary
routes.post('/upload', upload.array('files'), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No se subieron archivos.' });
    }

    const uploadPromises = req.files.map(file => {
      return new Promise((resolve, reject) => {
        const uniqueFileName = `${uuidv4()}-${file.originalname}`;
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: `${projectName}/${uniqueFileName}`,
          },
          (error, result) => {
            if (error) {
              console.error('Error subiendo archivo:', error);
              reject(error);
            } else {
              resolve({
                url: result.secure_url,
                _id: result.public_id,
                name: result.original_filename,
                type: file.mimetype,
              });
            }
          }
        );
        uploadStream.end(file.buffer);
      });
    });

    const filesPublicData = await Promise.all(uploadPromises);
    res.status(200).json(filesPublicData);
  } catch (error) {
    console.error('Error en la subida:', error);
    res.status(500).json({ message: 'Error al subir los archivos', error });
  }
});

// Eliminar archivos desde el frontend
routes.post('/deleteMany', async (req, res) => {
  try {
    const { files } = req.body;
    if (!Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ message: 'No se proporcionaron archivos para eliminar.' });
    }

    await deleteFiles(files);
    res.status(200).json({ message: 'Imágenes eliminadas correctamente.' });
  } catch (error) {
    console.error('Error al eliminar archivos:', error);
    res.status(500).json({ message: 'Error al eliminar archivos.', error });
  }
});

export async function deleteFiles(files) {
  for (const file of files) {
    try {
      const url = file?.url;
      if (!url || typeof url !== 'string') continue;

      // Extraer el public_id correctamente desde la URL
      // Ejemplo: https://res.cloudinary.com/.../upload/v123/inculab/abc123.jpg
      const parts = url.split('/upload/');
      if (parts.length !== 2) continue;

      const pathWithVersion = parts[1]; // v123/inculab/abc123.jpg
      const segments = pathWithVersion.split('/'); // ["v123", "inculab", "abc123.jpg"]
      const path = segments.slice(1).join('/'); // "inculab/abc123.jpg"
      const publicId = path.split('.').slice(0, -1).join('.'); // "inculab/abc123"

      await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
      console.log(`✅ Imagen eliminada de Cloudinary: ${publicId}`);
    } catch (error) {
      console.error(`❌ Error eliminando imagen (${file?.url}):`, error.message);
    }
  }
}


export default routes;

