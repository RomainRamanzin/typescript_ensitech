import express, { NextFunction, Request, Response } from "express";
import { WeatherController } from "./controllers/weatherController";
import { errorHandler } from "./middlewares/errorHandler";
import logger from "./middlewares/logger";
import { logResponse } from "./middlewares/logResponse";
import { logRequest } from "./middlewares/logRequest";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const weatherController = new WeatherController(process.env.WEATHER_API_KEY || "defaultKey")

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(errorHandler);
app.use(logRequest);
app.use(logResponse);

// Route de test
app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World");
});


// route pour récupérer les données météo
app.get("/weather/:city", async (req: Request, res: Response, next: NextFunction) => {
    await weatherController.getWeatherByCity(req, res, next);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.info(`Server is running on port ${PORT}`);
});