import { IUserRepository } from "../IUserRepository";
import { UserModel } from "../../models/UserModel";
import User  from "../../schemas/User"

export class UserRepositoryImpl implements IUserRepository {
    async save(user: UserModel): Promise<void> {
        User.create(user)
    }

}
