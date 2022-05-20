import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { resolve } from 'path';

export class Server {
    private app: Application = express();
    private readonly PORT = 4500;

    constructor() {
        this.globalConfig();
        this.routeConfig();
        this.init();
    }

    private globalConfig() {
        dotenv?.config({
            path: resolve(__dirname + '/../environment/.env' )
        });
        this.app.use(cors());
    }

    private routeConfig() {
        this.app.use('/', (req: Request, res: Response) => {
            res.status(200).json({
                "status": 'ok'
            });
        });
    }

    private init() {
        this.app.listen(this.PORT,
            () => console.log(`Server is online on http://localhost:${this.PORT}`)
        )
    }
}

new Server();