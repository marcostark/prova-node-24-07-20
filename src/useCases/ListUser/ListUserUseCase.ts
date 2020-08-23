import { IUserRepository } from "../../repositories/IUserRepository";

class ListUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async listAll() {
        return await this.repository.listAll()
    }
}

export default ListUserUseCase