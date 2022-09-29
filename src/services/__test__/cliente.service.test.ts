import { ClienteService } from "../cliente.service"
import { ClienteRepository } from "../../repositories/cliente.repository";

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

    it("crear cliente", async () => {
        let registrarCliente = await clienteService.registerCliente({
            nombre: "Lionel",
            apellido_paterno: "Messi",
            apellido_materno: "PSG",
            correo: "lio@psg.com",
            telefono: "924242424",
            rut: "6554655465"
        });
        expect(registrarCliente).toEqual(mockCliente);
    });

    //validar como pasar datos a travez de una interface
    it("buscar cliente ",async()=>{
        let findCliente = await clienteService.getDetailCliente("000-000");

        expect(findCliente).toEqual(mockCliente);
    });
});