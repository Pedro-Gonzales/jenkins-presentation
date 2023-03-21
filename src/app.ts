import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config({
    path:  ".env",
  });

export const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(express.json());

app.use((err:Error, request: Request, response: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return response.status(400).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
})
