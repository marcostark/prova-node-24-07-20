import {Request, Response } from 'express'
import CreateUserUseCase from './CreateUserUseCase';
import { UserModel } from '../../models/UserModel';

class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async create(request: Request, response: Response): Promise<Response> {
        const {name, email, password}  = request.body
        try {
            this.createUserUseCase.execute({name, email, password})
            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Error"
            })
        }
    }    
}

export default CreateUserController