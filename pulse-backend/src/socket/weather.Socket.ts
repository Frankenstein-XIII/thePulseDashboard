import { Server } from "socket.io";
import { fetchNanjingWeather } from "../services/weather.Services";


export const steupWeatherSocket = (io: Server) =>{
    console.log("Socket Logic is Initialized.")
    io.on('connection', async(socket) =>{
        console.log("Client connected to Pulse:...");

        try{
            const data = await fetchNanjingWeather();
            socket.emit("weather_initial", data);
        }
        catch(err){
            console.error("Initial fetch failed:", err);
        }

        const interval = setInterval(async() =>{
            try{
                const data = await fetchNanjingWeather();
                socket.emit("weather_update", data);
            }
            catch(error){
                console.error("Pulse failed: ", error)
            }
        }, 200);

        socket.on('disconnet', ()=>{
            clearInterval(interval);
            console.log("client disconnected");
        });
    });
}