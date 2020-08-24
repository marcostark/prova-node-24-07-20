import { IUserRepository } from "../../repositories/IUserRepository";
import { UserModel } from "../../models/UserModel";

class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async execute(data: UserModel) {
        // TODO verificar se já existe um usuário com o email cadastrado
        
        const user = new UserModel(data);
        await this.repository.save(user)
    }
}

export default CreateUserUseCase