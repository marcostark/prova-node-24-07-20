import { IUserRepository } from "../../repositories/IUserRepository";
import { UserModel } from "../../models/UserModel";

class CreateUserUseCase {
    constructor(
        private repository: IUserRepository
    ){}

    async execute(data: UserModel) {
        // Verificar se já existe usuário com o mesmo email
        const userExists = await this.repository.findByEmail(data.email)

        // if (userExists) {
        //     throw new Error("User already exists")
        // }

        const user = new UserModel(data);
        await this.repository.save(user)
    }
}

export default CreateUserUseCase