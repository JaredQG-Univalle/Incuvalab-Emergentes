import { Schema, model } from "mongoose";

const matchesSchema = new Schema({
//initJSid_propietario
id_propietario: {
            type: Schema.Types.ObjectId,
            
            
            
            
            
            ref: "User",
            
            
            
        },
        
//endJSid_propietario
//initJSid_usuario_interesado
id_usuario_interesado: {
            type: Schema.Types.ObjectId,
            
            
            
            
            
            ref: "User",
            
            
            
        },
        
//endJSid_usuario_interesado
//initJSid_proyecto
id_proyecto: {
            type: Schema.Types.ObjectId,
            required: true,
            
            
            
            
            ref: "Proyectos",
            
            
            
        },
        
//endJSid_proyecto
//fields
    last_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true, //createdAt updatedAt automatic
    methods: {
        //solo para el documento
    },
    statics: {
        //para todo el modelo
    },
    query: {
        //para odenar o hacer consultas especiales
    }
});
export default model('Matches',matchesSchema);