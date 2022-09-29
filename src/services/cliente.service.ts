import { ClienteRepository } from "../repositories/cliente.repository";
import { ClienteDto } from "../dto/cliente.dto";


export class ClienteService {
    constructor (private readonly clienteRepository: ClienteRepository){}

    public async registerCliente({nombre, apellido_paterno, apellido_materno, correo, telefono, rut}) {
        const clienteDto = new ClienteDto({nombre, apellido_paterno, apellido_materno, correo, telefono, rut});
        const clienteCreated = await this.clienteRepository.registerClient(clienteDto);
        return clienteCreated
    }

    public async getDetailCliente(uuid:string) {
        const cliente = await this.clienteRepository.findClientByID(uuid)
        return cliente
    }
    // public suma(a,b){
    //     return a+b
    // }
    
}