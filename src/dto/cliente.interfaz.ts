//Recursos importantes para el negocio, no dejar el _id que genera mongo para desacoplarse de la base de datos

export interface ICliente {
    uuid: String;
    nombre: String;
    apellido_paterno: string;
    apellido_materno: string;
    correo: string;
    telefono: number;
    rut: number;
}