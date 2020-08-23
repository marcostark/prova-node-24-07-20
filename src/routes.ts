import { Router } from "express";
import { createUserController } from "./useCases/CreateUser"

const routes = Router()

routes.get('/', (request, response) => {
    response.json({message: "Hello world!"})
})

routes.post('/api/users', (request, response) => {
    return createUserController.create(request, response)
})

export { routes }