import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controller";
import { MockRepository } from '../repositories/mock.cliente.repo';
import { ClienteService } from "../services/cliente.service";
import { MongoRepository } from "../repositories/mongo.repository";

const route = Router()

//Rutas para trabajar con mongo
//Se inicia el repositorio
const clienteRepo = new MongoRepository()
//Se inicia el service con la interfaz
const clienteService = new ClienteService(clienteRepo)
//Se inicia el cliente controller
const clienteController = new ClienteController(clienteService)


// // Rutas para probar los test con el MOCK de messi 
// // Se inicia el repositorio
// // const mockRepository = new MockRepository()
// // Se inicia el service con la interfaz
// // const clienteService = new ClienteService(mockRepository)
// // Se inicia el cliente controller
// // const clienteController = new ClienteController(clienteService)

/*
Ruta POST
*/
route.post(`/cliente`, clienteController.insertController)
/*
Ruta GET
*/

route.get(`/cliente`, clienteController.getController)

export default route