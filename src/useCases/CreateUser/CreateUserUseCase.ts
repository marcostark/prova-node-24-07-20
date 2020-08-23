import { IUserRepository } from "../../repositories/IUserRepository";
import { UserModel } from "../../models/UserModel";

class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async execute(data: UserModel) {
        // Verificar se já existe usuário com o mesmo email

        const user = new UserModel(data);
        await this.repository.save(user)

    }
}

export default CreateUserUseCase