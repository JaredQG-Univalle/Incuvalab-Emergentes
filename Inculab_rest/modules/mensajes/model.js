import { Schema, model } from "mongoose";

const mensajesSchema = new Schema({
//initJSid_sender
id_sender: {
            type: Schema.Types.ObjectId,
            required: true,
            
            
            
            
            ref: "User",
            
            
            
        },
        
//endJSid_sender
//initJSid_receiver
id_receiver: {
            type: Schema.Types.ObjectId,
            
            
            
            
            
            ref: "User",
            
            
            
        },
        
//endJSid_receiver
//initJSmessage
message: {
            type: Schema.Types.String,
            
            
            
            
            
            
            trim: true,
        },
        
//endJSmessage
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
export default model('Mensajes',mensajesSchema);