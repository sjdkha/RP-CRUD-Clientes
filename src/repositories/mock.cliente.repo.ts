import { ICliente } from '../dto/cliente.interfaz';
import { ClienteRepository } from '../repositories/cliente.repository';
import { MOCK_CLIENTE } from "../repositories/mocks.repo";

let mock_cliente = MOCK_CLIENTE;

export class MockRepository implements ClienteRepository {
    async findClientByID(uuid: string): Promise<any> {
        const cliente = mock_cliente
        return cliente;
    }
    async registerClient(clienteNew: ICliente): Promise<any> {
        const cliente = mock_cliente
        return cliente;
    }
    async listClients(): Promise<any> {
        const cliente = [mock_cliente, mock_cliente, mock_cliente]
        return cliente;
    }
}