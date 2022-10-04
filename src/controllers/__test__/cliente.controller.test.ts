import { ClienteController } from "../../controllers/cliente.controller";
import { MockRepository } from "../../repositories/mock.cliente.repo";
import { ICliente } from "../../dto/cliente.interfaz";

import { ClienteService } from "../../services/cliente.service"
import { ClienteRepository } from "../../repositories/cliente.repository";
import { Request, Response, NextFunction } from "express";
import {expect, jest, test} from '@jest/globals';

jest.mock("../../repositories/cliente.repository");

describe("clienteService", () => {

    let clienteRepository = <ClienteRepository>{};
    let clienteService = new ClienteService(clienteRepository);

    let clienteController = new ClienteController(clienteService);
    
    // const mockCliente = {
    //     uuid: "000-000",
    //     nombre: "Lionel",
    //     apellido_paterno: "Messi",
    //     apellido_materno: "PSG",
    //     correo: "lio@psg.com",
    //     telefono: 924242424,
    //     rut: 6554655465
    // };

    const mockCliente2 = {
        uuid: "000-000",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.com",
        telefono: 924242424,
        rut: 6554655465
    };

    const MOCK_ARRAY_CLIENTE = [
        {
        uuid: "000-000",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.com",
        telefono: "924242424",
        rut: "6554655465"
    },
    {
        uuid: "000-001",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.cl",
        telefono: "924242424",
        rut: "6554655466"
    }];

    it("definir servicio", () => {
        expect(clienteService).toBeDefined();
    });

    it("definir controlador", () => {
        expect(clienteController).toBeDefined();
    });
    
    describe("crear cliente", async () => {
        let resultado;
        let mockResponse: Partial<Response>;
        const mockCliente = {
            uuid: "000-000",
            nombre: "Lionel",
            apellido_paterno: "Messi",
            apellido_materno: "PSG",
            correo: "lio@psg.com",
            telefono: 924242424,
            rut: 6554655465
        };

        beforeEach(async () => {
            //Falta corregir el resolve
            //jest.spyOn(clienteController, 'insertController').mockResolvedValue(mockCliente);
            resultado = await clienteController.insertController.resolve(({data: {mockCliente2}}));
        });
        test('debe llamar al servicio crear cliente', () => {
            expect(clienteService.registerCliente).toHaveBeenCalled();
        });
        test('debe retornar el cliente creado', () => {
            expect(resultado).toEqual(mockCliente);
        });
    });
});


// xdescribe('Get - datos', () => {
//     it('comparando datos', () => {
//         const expected = 'Hola hola';
//         const result = 'Hola hola';
//         expect(result).toStrictEqual(expected);
//     });
// });

// describe("controlador.getController", () => {
//     let controller: ClienteController;
//     it("deberia tener un metodo get en el controlador", async () => {
//         expect(typeof controller.getController).toBe("function");
//     });

    // it("deberia tener un metodo para obtener todos los datos", () => {
    //     expect(controller.getController).toBeTruthy();
    // });

    // const MOCK_CLIENTE = {
    //     uuid: "000-000",
    //     nombre: "Lionel",
    //     apellido_paterno: "Messi",
    //     apellido_materno: "PSG",
    //     correo: "lio@psg.com",
    //     telefono: "924242424",
    //     rut: "6554655465"
    // }
    // xit('should be defined', () => {
    //     expect(repository.findClientByID("000-000")).toStrictEqual(MOCK_CLIENTE.uuid);
    // });

    // jest.mock("../repositories/mock.cliente.repo");
    // xit('listado de clientes', () => {
    //     let clienterepo = new MockRepository();
    //     clienterepo.listClients.mockResolverValue(MOCK_CLIENTE);

    //     expect().to
    // });

    // it(("buscar x id "), () => {
    //     expect(controller.getController("6320d52939b3540b60ff3d13")).toHaveBeenCalled();
    // });
    //     let obtener = controller.getController;
    //     it("deberia encontrar un cliente x id", async () => {
    //     const req = "6320d52939b3540b60ff3d13";
    //     await obtener(req,res);
    //     expect(ItemModel.findById).toBeCalledWith("6320d52939b3540b60ff3d13");
    // });

//});

    // let id;
    // beforeEach(async () => {
    //     id = await controller.getController();
    // });
