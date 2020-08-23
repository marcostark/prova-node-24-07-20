import * as express from 'express';
import { routes } from './routes';
import * as bodyParser from 'body-parser'

import database from './config/database';
import Controller from './useCases/CreateUser/CreateUserController'

class App {
    
    public app = express()
    private dataBase: database
    
    constructor(
    ) {
        this.app.use(express.json());
        this.middleware()
        this.dataBase = new database()
        this.dataBase.createConnection();
        this.app.use(routes)
    }

    middleware() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
    }
}

export default new App();
