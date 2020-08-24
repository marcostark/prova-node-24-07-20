import { IUserRepository } from "../../repositories/IUserRepository";

class GetUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async getUser(id) {
        return await this.repository.getUser(id)
    }
}

export default GetUserUseCase