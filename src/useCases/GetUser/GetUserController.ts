import {Request, Response } from 'express'
import GetUserUseCase from './GetUserUseCase';

class GetUserController {

    constructor(
        private getUserUseCase: GetUserUseCase
    ){}

    getUser(request: Request, response: Response) {
        const id = { _id : request.params.id }
        return this.getUserUseCase.getUser(id)
            .then(users => response.status(200).json({'result': users}))
            .catch(err => response.status(400).json({'result': err}))        
    }    
}

export default GetUserController