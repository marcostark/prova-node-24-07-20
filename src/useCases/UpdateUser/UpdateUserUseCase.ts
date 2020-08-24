import { IUserRepository } from "../../repositories/IUserRepository";

class UpdateUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async update(id, data) {
        return await this.repository.update(id, data)
    }
}

export default UpdateUserUseCase