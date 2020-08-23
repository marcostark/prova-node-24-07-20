import { IUserRepository } from "../IUserRepository";
import { UserModel } from "../../models/UserModel";
import User  from "../../schemas/User"

export class UserRepositoryImpl implements IUserRepository {
    async findByEmail(email: string): Promise<any> {
        const user = User.find({email})
        return user
    }

    async listAll(): Promise<any> {
        return User.find({}) 
    }
    
    async save(user: UserModel): Promise<void> {
        User.create(user)
    }

    async getUser(id: String): Promise<any> {
        return User.find(id)
    }

    async remove(id: String): Promise<any> {
        return User.findOneAndDelete(id)
    }

    async update(id, data): Promise<any> {
        return User.findOneAndUpdate(id, data, {
            new: true, useFindAndModify: false 
        })
    }
}
