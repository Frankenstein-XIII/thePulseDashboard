import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { WeatherData, ChartPoint } from "../types/weather";

const SOCKET_URL = 'http://localhost:3001';

export const useWeatherSocket = () =>{
    const [chartData, setChartData] = useState<ChartPoint[]>([]);
    useEffect(()=>{
        const socket = io(SOCKET_URL);

        const formatData = (raw: WeatherData): ChartPoint[] =>{
                return raw.time.map((t,  index) =>({
                    time: new Date(t).toLocaleTimeString([], {hour: '2-digit'}),
                    temperature: raw.temperature_2m[index],
                    humidity: raw.relative_humidity_2m[index],
                    precipitation: raw.precipitation[index],
                    weatherCode: raw.weather_code[index],
                    windSpeed: raw.wind_speed_10m[index]
                }));
        };
        socket.on('weather_initial', (data:WeatherData) =>{
            setChartData(formatData(data));
        });

        socket.on("weather_update", (data: WeatherData) =>{
            setChartData(formatData(data));
        });

        return () => {socket.disconnect();};
    }, []);

    return chartData;
}