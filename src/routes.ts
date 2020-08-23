import { Router } from "express";
import { createUserController } from "./useCases/CreateUser"
import { listUserController } from "./useCases/ListUser"
import { getUserController } from "./useCases/GetUser"
import { removeUserController } from "./useCases/RemoveUser"
import { updateUserController } from "./useCases/UpdateUser"

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

routes.get('/api/users/:id', (request, response) => {
    return getUserController.getUser(request, response)
})

routes.delete('/api/users/:id', (request, response) => {
    return removeUserController.remove(request, response)
})

routes.put('/api/users/:id', (request, response) => {
    return updateUserController.update(request, response)
})


export { routes }