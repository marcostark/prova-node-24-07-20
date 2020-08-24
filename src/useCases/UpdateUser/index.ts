import UpdateUserController from "./UpdateUserController";
import UpdateUserUseCase from "./UpdateUserUseCase";
import { UserRepositoryImpl } from "../../repositories/impl/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl()

const updateUserUseCase = new UpdateUserUseCase(
    userRepository
)

const updateUserController = new UpdateUserController(
    updateUserUseCase
)

export { updateUserUseCase, updateUserController}
