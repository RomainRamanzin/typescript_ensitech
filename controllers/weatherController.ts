import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/ApiError';

export class WeatherController {
    private API_KEY: string;

    constructor(apiKey: string){
        this.API_KEY = apiKey;
    }

    public async getWeatherByCity(req: Request, res: Response, next: NextFunction):Promise<void>{
        const city: string = req.params.city;
        try{
            const response : AxiosResponse = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}`
            );
            const data = response.data;
            res.json(data);
        }
        catch(error){
            next(new ApiError("Erreur lors de la récupération des données météo"));
        }
    }
}