import { IUserRepository } from "../../repositories/IUserRepository";

class RemoveUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async remove(id) {
        return await this.repository.remove(id)
    }
}

export default RemoveUserUseCase