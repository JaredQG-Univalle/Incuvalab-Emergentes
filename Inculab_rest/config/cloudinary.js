import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true, // Usar HTTPS, importante
});

export default cloudinary;
