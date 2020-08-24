import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";
import { UserRepositoryImpl } from "../../repositories/impl/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl()

const createUserUseCase = new CreateUserUseCase(
    userRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}
