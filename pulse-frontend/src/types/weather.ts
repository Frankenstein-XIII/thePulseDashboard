export interface WeatherData {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  wind_speed_10m: number[];
  precipitation: number[];
  weather_code: number[];
}

export interface ChartPoint{
    time: string;
    temperature: number;
    humidity: number;
    precipitation: number;
    weatherCode : number; 
    windSpeed : number;
}