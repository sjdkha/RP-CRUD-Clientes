import { Schema, model, } from "mongoose";

const ClienteSchema = new Schema(
    {
        nombre: { 
            type: String, 
            required: true,
            minlength: [ 1, 'El nombre debe contener 1 o más caracteres' ]
        },
        apellido_paterno: {
            type: String,
            required: true,
            minlength: [ 1, 'El nombre debe contener 1 o más caracteres' ]
        },
        apellido_materno: {
            type: String,
            required: true,
            minlength: [ 1, 'El nombre debe contener 1 o más caracteres' ]
        },
        uuid: {
            type: String,
            unique: true
        },
        correo: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: [true,'Correo requerido'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Porfavor ingresar email valido']
        },
        telefono: {
            type: Number,
            required: [true, 'Porfavor ingrese un numero de telefono valido'],
            allowBlank: false,
            defaultRegion: 'CL',
            parseOnGet: false,
            min: 555555555,
            max: 999999999,
            match: [ /^[0-9]{9}$/, 'El formato del número telefónico es incorrecto' ]
        },
        rut: {
            type: Number,
            required: true,
            unique: false
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ClienteModel = model("clientes", ClienteSchema);
export default ClienteModel;