import { ClienteController } from "../../controllers/cliente.controller";
import { MockRepository } from "../../repositories/mock.cliente.repo";
import { ICliente } from "../../dto/cliente.interfaz";

import { ClienteService } from "../../services/cliente.service"
import { ClienteRepository } from "../../repositories/cliente.repository";
import { Request, Response, NextFunction } from "express";

jest.mock("../../repositories/cliente.repository");



describe("clienteService", () => {

    let clienteRepository= <ClienteRepository>{};
    let clienteService = new ClienteService(clienteRepository);

    const mockCliente = {
        uuid: "000-000",
        nombre: "Lionel",
        apellido_paterno: "Messi",
        apellido_materno: "PSG",
        correo: "lio@psg.com",
        telefono: "924242424",
        rut: "6554655465"
    };

    it("definir servicio", () => {
        expect(clienteService).toBeDefined();
    });

});







xdescribe('Get - datos', () => {
    it('comparando datos', () => {
        const expected = 'Hola hola';
        const result = 'Hola hola';
        expect(result).toStrictEqual(expected);
    });
});

// xdescribe("controlador.getController", () => {
//     let repository: MockRepository;
//     let data: ICliente;
//     let controller: ClienteController;
    // it("deberia tener un metodo get en el controlador", async () => {
    //     expect(typeof controller.getController).toBe("function");
    // });

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
