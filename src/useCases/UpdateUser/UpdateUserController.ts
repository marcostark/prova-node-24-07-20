import {Request, Response } from 'express'
import UpdateUserUseCase from './UpdateUserUseCase';

class UpdateUserController {

    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}

    update(request: Request, response: Response) {
        const id = { _id : request.params.id }
        const user = request.body
        console.log(user)
        return this.updateUserUseCase.update(id, user)
            .then(users => response.status(200).json({'result': users}))
            .catch(err => response.status(400).json({'result': err}))        
    }    
}

export default UpdateUserController