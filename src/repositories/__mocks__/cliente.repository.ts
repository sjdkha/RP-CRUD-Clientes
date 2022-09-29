import { ICliente } from '../../dto/cliente.interfaz';

const mockCliente = {
    uuid: "000-000",
    nombre: "Lionel",
    apellido_paterno: "Messi",
    apellido_materno: "PSG",
    correo: "lio@psg.com",
    telefono: "924242424",
    rut: "6554655465"
};

export class ClienteRepository {
    async findClientByID(uuid: string): Promise<any> {
        const cliente = mockCliente
        return cliente;
    }
    async registerClient(clienteNew: ICliente): Promise<any> {
        const cliente = mockCliente
        return cliente;
    }
    async listClients(): Promise<any> {
        const cliente = [mockCliente, mockCliente, mockCliente]
        return cliente;
    }
}