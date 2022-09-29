import { ICliente } from '../dto/cliente.interfaz';
import { ClienteRepository } from './cliente.repository';
import ClienteModel from "../models/cliente.schema";

export class MongoRepository implements ClienteRepository {
    async findClientByID(uuid: string): Promise<any> {
        const cliente = await ClienteModel.findOne({uuid})
        return cliente
    }
    async registerClient(clienteNew: ICliente): Promise<any> {
        const cliente = await ClienteModel.create(clienteNew)
        return cliente
    }
    async listClients(): Promise<any> {
        const cliente = await ClienteModel.find()
        return cliente
    }
}