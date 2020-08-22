import express from 'express';
import { routes } from './routes';

class App {
    
    public app: express.Application

    constructor() {
        this.app = express();
        this.app.use(routes)
    }
}

export default new App();
