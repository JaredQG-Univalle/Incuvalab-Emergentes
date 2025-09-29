import { Schema, model } from "mongoose";

const proyectosSchema = new Schema(
  {
    //initJSnombre
    nombre: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },

    //endJSnombre
    //initJScarrera
    //carrera: {
      //type: Schema.Types.String,
      //required: true,
      //trim: true,
    //},

    //endJScarrera
    //initJStema
    //tema: {
      //type: Schema.Types.String,
      //required: true,
      //trim: true,
    //},

    //endJStema
    //initJSarea
    area: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },

    //endJSarea
    //initJSdescripcion_proyecto
    descripcion_proyecto: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },

    //endJSdescripcion_proyecto
    //initJScontacto
    contacto: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },

    //endJScontacto
    //initJSfotos
    fotos: [
      {
        type: Schema.Types.Mixed,
      },
    ],

    //endJSfotos
    //initJSvideo
    video: [
      {
        type: Schema.Types.Mixed,
      },
    ],
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    etapa_proyecto: {
      type: String,
      required: true,
      trim: true,
    },
    socios_buscados: [
      {
        type: String,
        trim: true,
      },
    ],
    otra_habilidad: {
      type: String,
      trim: true,
    },

    //endJSvideo
    //initJSpropietario
    propietario: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    //endJSpropietario
    //fields
    last_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, //createdAt updatedAt automatic
    methods: {
      //solo para el documento
    },
    statics: {
      //para todo el modelo
    },
    query: {
      //para odenar o hacer consultas especiales
    },
  }
);

export default model("Proyectos", proyectosSchema);
