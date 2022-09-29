import {v4 as uuid} from "uuid"
import { ICliente } from "./cliente.interfaz";

export class ClienteDto implements ICliente {
    uuid: String;
    nombre: String;
    apellido_paterno: string;
    apellido_materno: string;
    correo: string;
    telefono: number;
    rut: number;
    
    constructor({ nombre, apellido_paterno, apellido_materno, correo, telefono, rut} : 
        {nombre: String;
        apellido_paterno: string;
        apellido_materno: string;
        correo: string;
        telefono: number;
        rut: number})
        {
        this.uuid = uuid()
        this.nombre = nombre
        this.apellido_paterno = apellido_paterno
        this.apellido_materno = apellido_materno
        this.correo = correo
        this.telefono = telefono
        this.rut = rut
    }
}