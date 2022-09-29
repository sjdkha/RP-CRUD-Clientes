//se definen todos los metodos independientes de la capa de usuario
import { ICliente } from "../dto/cliente.interfaz";

export interface ClienteRepository {
    findClientByID(uuid:string):Promise<ICliente | null>;
    registerClient(cliente:ICliente):Promise<ICliente | null>;
    listClients():Promise<ICliente[] | null>;

}