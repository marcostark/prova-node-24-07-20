import { Router } from "express";
import { createUserController } from "./useCases/CreateUser"
import { listUserController } from "./useCases/ListUser"

const routes = Router()

routes.get('/', (request, response) => {
    response.json({message: "Hello world!"})
})

routes.post('/api/users', (request, response) => {
    return createUserController.create(request, response)
})

routes.get('/api/users', (request, response) => {
    return listUserController.findAll(request, response)
})

export { routes }