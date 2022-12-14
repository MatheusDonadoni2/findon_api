import express, { json, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from '../../errors/AppError';
import { routes } from './routes';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: 'error',
            message: `Internal server error - ${err.message}`,
        });
    },
);

export { app }