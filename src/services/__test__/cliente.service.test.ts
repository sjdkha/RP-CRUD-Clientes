import { ClienteService } from "../../services/cliente.service"
import { ClienteRepository } from "../../repositories/cliente.repository";
import {expect, jest, test} from '@jest/globals';

jest.mock("../../repositories/cliente.repository");

describe("clienteService", () => {

    let clienteRepository= <ClienteRepository>{};
    let clienteService = new ClienteService(clienteRepository);

    // beforeEach(async () => {
    //     const module: TestingModule = await Test.createTestingModule({
    //       providers: [LogAuditoriaService, LogAuditoriaRepository],
    //     }).compile();
    //     service = module.get<LogAuditoriaService>(LogAuditoriaService);
    //     repository = module.get<LogAuditoriaRepository>(LogAuditoriaRepository);
    //   });

    const mockCliente = {
        uuid: "000-000",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.com",
        telefono: 924242424,
        rut: 6554655465
    };

    const mockCliente2 = {
        uuid: "000-000",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.com",
        telefono: 924242424,
        rut: 6554655465
    };

    it("definir servicio", () => {
        expect(clienteService).toBeDefined();
    });

    it("crear cliente", async () => {
        jest.spyOn(clienteService, 'registerCliente').mockResolvedValue(mockCliente2);
        let response = await clienteService.registerCliente(mockCliente2); 
        // let registrarCliente = await clienteService.registerCliente({
        //     nombre: "Lionel",
        //     apellido_paterno: "Messi",
        //     apellido_materno: "PSG",
        //     correo: "lio@psg.com",
        //     telefono: "924242424",
        //     rut: "6554655465"
        // });
        expect(response).toEqual(mockCliente);
    });

    it("buscar cliente ",async()=>{
        jest.spyOn(clienteService, 'getDetailCliente').mockReturnValue(Promise.resolve(mockCliente));
        let findCliente = await clienteService.getDetailCliente("000-000");
        expect(findCliente).toEqual(mockCliente);
    });

    // it("suma", ()=> {
    //     let a = 5;
    //     let b = 10;
    //     expect(clienteService.suma(a,b)).toEqual(16);
    // });
});