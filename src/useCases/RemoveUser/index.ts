import RemoveUserController from "./RemoveUserController";
import RemoveUserUseCase from "./RemoveUserUseCase";
import { UserRepositoryImpl } from "../../repositories/impl/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl()

const removeUserUseCase = new RemoveUserUseCase(
    userRepository
)

const removeUserController = new RemoveUserController(
    removeUserUseCase
)

export { removeUserUseCase, removeUserController}
