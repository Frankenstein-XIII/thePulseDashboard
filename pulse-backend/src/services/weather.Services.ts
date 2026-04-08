import axios from "axios";
import { WeatherData } from "../types/weather";

const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export const fetchNanjingWeather = async() : Promise<WeatherData> =>{
    const params = {
      latitude: 32.06,
      longitude: 118.78,
      hourly: "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m",
     forecast_days: 1,
     timezone: 'auto'
    };
    try{
        const {data} = await axios.get(BASE_URL, {params});
        return data.hourly;
    }
    catch(error){
        console.error("API call failed.", error);
        throw error;
    }
};