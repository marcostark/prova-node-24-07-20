import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    findByEmail(email: string) : Promise<any>
    save(user: UserModel): Promise<void>
    listAll():Promise<any>
    getUser(id: string):Promise<any>
    remove(id: string):Promise<any>
}