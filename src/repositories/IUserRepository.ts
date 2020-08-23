import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    save(user: UserModel): Promise<void>
}