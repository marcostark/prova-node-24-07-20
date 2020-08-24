import GetUserController from "./GetUserController";
import GetUserUseCase from "./GetUserUseCase";
import { UserRepositoryImpl } from "../../repositories/impl/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl()

const getUserUseCase = new GetUserUseCase(
    userRepository
)

const getUserController = new GetUserController(
    getUserUseCase
)

export { getUserUseCase, getUserController}
