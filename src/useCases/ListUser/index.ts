import ListUserController from "./ListUserController";
import ListUserUseCase from "./ListUserUseCase";
import { UserRepositoryImpl } from "../../repositories/impl/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl()

const listUserUseCase = new ListUserUseCase(
    userRepository
)

const listUserController = new ListUserController(
    listUserUseCase
)

export { listUserUseCase, listUserController}
