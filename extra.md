// fetching weather data for nanjing 
const getWeatherData = async() =>{
    try{
        const lat = 32.06;
        const lon = 118.78;

        // open-meteo api 
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=auto&forecast_days=7`;

        const response = await axios.get(url);
        console.log(response.data.current);
        const {hTime, hourly_temperature_2m, relative_humidity_2m, precipitation, weather_code, hourly_wind_speed_10m} = response.data.hourly;
        const {time, temperature_2m, wind_speed_10m} = response.data.current;

        console.log("Nanjing Weather Pulse");
        console.log("Time:", time)
        console.log(`Temperature: ${temperature_2m}`);
        console.log(`Wind Speed: ${wind_speed_10m}`)
    }catch (error){
            console.error("Error fetching data, Network issue!", error)
    }
};
