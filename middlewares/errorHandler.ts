import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";

export class WeatherError extends Error{
    constructor(message: string){
        super(message);
        this.name = "WeatherError"
    }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    console.log(err.stack);
    if(err instanceof CustomError){
        console.log("name of the error : ", err.name);
        res.status(500).json({error : err.message, errorCode : err.errorcode});
    }
    else{
        res.status(500).json({error : "Erreur inatendue"});
    }
    next(err);
}