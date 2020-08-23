import {Request, Response } from 'express'
import RemoveUserUseCase from './RemoveUserUseCase';

class RemoveUserController {

    constructor(
        private removeUserUseCase: RemoveUserUseCase
    ){}

    remove(request: Request, response: Response) {
        const id = { _id : request.params.id }
        console.log(id)        
        return this.removeUserUseCase.remove(id)
            .then(users => response.status(200).json({'result': users}))
            .catch(err => response.status(400).json({'result': err}))        
    }    
}

export default RemoveUserController