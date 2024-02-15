import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.WEATHER_API_KEY || "defaultKey";
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "production";