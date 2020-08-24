import {Request, Response } from 'express'
import ListUserUseCase from './ListUserUseCase';
import { UserModel } from '../../models/UserModel';

class ListUserController {

    constructor(
        private listUserUseCase: ListUserUseCase
    ){}

    findAll(request: Request, response: Response) {
        return this.listUserUseCase.listAll()
            .then(users => response.status(200).json({'result': users}))
            .catch(err => response.status(400).json({'result': err}))        
    }    
}

export default ListUserController