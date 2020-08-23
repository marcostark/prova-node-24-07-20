import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    findByEmail(email: string) : Promise<any>
    save(user: UserModel): Promise<void>
    listAll():Promise<any>
}