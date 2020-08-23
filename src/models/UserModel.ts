import { Document } from "mongoose";

export class UserModel {

    public name: string;
    public email: string;
    public password: string

    constructor(props: Omit<UserModel, 'id'>) {
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }

}