import * as express from 'express';
import { routes } from './routes';

import database from './config/database';
import Controller from './useCases/CreateUser/CreateUserController'

class App {
    
    public app = express()
    private dataBase: database
    
    constructor(
    ) {
        this.app.use(express.json());
        this.dataBase = new database()
        this.dataBase.createConnection();
        this.app.use(routes)
    }
}

export default new App();
