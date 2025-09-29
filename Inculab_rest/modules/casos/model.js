import { Schema, model } from "mongoose";

const casosSchema = new Schema({
  titulo: {
    type: String,
    required: [true, "El título es obligatorio"],
    trim: true,
    maxlength: 255,
  },
  descripcion: {
    type: String,
    trim: true,
    maxlength: 5000,
  },
  fotos: [
    {
      type: Schema.Types.Mixed, // Cloudinary devuelve objeto dinámico
    }
  ],
  videos: {
    type: String,
    trim: true,
    maxlength: 1000,
    required: [true, "El video es obligatorio"],
  },
  id_categoria: {
    type: String,
    enum: ["YouTube", "Facebook"], // Sólo estas dos
    required: [true, "La categoría es obligatoria"],
  },
  fecha_video: {      // <-- Nuevo campo aquí
    type: Date,
    required: [true, "La fecha del video es obligatoria"],
  },
  last_user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true, // createdAt y updatedAt automáticos
});

// Métodos personalizados
casosSchema.methods = {
  // Puedes agregar métodos aquí luego si quieres
};

// Métodos estáticos del modelo
casosSchema.statics = {
  // Por ejemplo búsquedas avanzadas
};

// Consultas especiales
casosSchema.query = {
  // Consultas específicas si necesitas
};

export default model('Casos', casosSchema);
