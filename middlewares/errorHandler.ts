import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";
import logger from "./logger";

export class WeatherError extends Error{
    constructor(message: string){
        super(message);
        this.name = "WeatherError"
    }
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    console.log(err.stack);
    console.log("erreur");
    if(err instanceof CustomError){
        logger.error(`error message : ${err.message} - code : ${err.errorcode} - name : ${err.name}`)
        console.log("name of the error : ", err.name);
        res.status(500).json({error : err.message, errorCode : err.errorcode});
    }
    else{
        logger.error(`Erreur inatendue : ${err.message}`);
        res.status(500).json({error : "Erreur inatendue"});
    }
    next(err);
}