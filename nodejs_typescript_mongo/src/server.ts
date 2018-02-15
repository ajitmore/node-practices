import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as compression from 'compression';
import * as cors from 'cors';
import PostRouter from './router/PostRouter';
import UserRouter from './router/UserRouter';
import { Router, Request, Response, NextFunction } from "express";

// Add routes

// server class

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        //Set up mongoose
        const MONGO_URI = 'mongodb://localhost/tes';
        mongoose.connect(MONGO_URI || process.env.MONGO_URI);

        // config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
    }

    private middleware(req: Request, res: Response, next: NextFunction): void {
        console.log('middleware');        
        if(req.headers.id === 'abc') {
            next();
        } else {
            res.sendStatus(401);
        }
    }

    public routes(): void {
        let router: express.Router;
        router = express.Router();

        //router.use(this.middleware);

        this.app.use('/', this.middleware);
        this.app.use('/api/v1/posts', PostRouter)
        this.app.use('/api/v1/users', UserRouter)
    }
}

export default new Server().app;