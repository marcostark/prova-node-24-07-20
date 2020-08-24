import {body, validationResult } from "express-validator"
import { Response, Request, NextFunction } from "express"

class Validator {
    userValidationRules = [
        body("name").notEmpty().withMessage("Informe um nome"),
        body("email").isEmail().withMessage("Informa um email válido"),
        body("password").isLength({min: 6}).withMessage("A senha deve ter mínimo 6 caracteres")
    ]

    async validate(request: Request, response: Response, next: NextFunction) {
        const errors = validationResult(request)
        if(errors.isEmpty()) {
            return next()
        }

        const extractErrors = []
        errors.array().map(err => extractErrors.push({[err.param]: err.msg}))
        return response.status(422).json({
            errors: extractErrors
        })
    }
}

export default Validator