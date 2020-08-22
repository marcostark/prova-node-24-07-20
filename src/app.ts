import * as express from 'express';
import { routes } from './routes';

import database from './config/database';
import Controller from './controllers/UserController'

class App {
    
    public app: express.Application
    private dataBase: database
    
    constructor(
    ) {
        this.app = express();
        this.dataBase = new database()
        this.dataBase.createConnection();
        this.app.use(routes)
    }
}

export default new App();
