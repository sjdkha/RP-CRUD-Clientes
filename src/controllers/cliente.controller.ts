import { Request, Response } from "express";
import { ClienteService } from '../services/cliente.service';

export class ClienteController {
    constructor(private clienteService: ClienteService){
        this.insertController = this.insertController.bind(this)
        this.getController = this.getController.bind(this)
    }

    public async getController({ query }: Request, res: Response){
        const { uuid = '' } = query;
        const cliente = await this.clienteService.getDetailCliente(`${uuid}`);
        res.send({ cliente });
    }
    public async insertController({ body }: Request, res: Response){
        const cliente = await this.clienteService.registerCliente(body);
        res.send({ cliente });
    }
}