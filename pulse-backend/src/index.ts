import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import {steupWeatherSocket} from './socket/weather.Socket';
import { createServer } from 'node:http';

const app = express();
app.use(cors());


const httpServer = createServer(app);
const io = new Server(httpServer, {cors: {origin: "http://localhost:5173"}
});

steupWeatherSocket(io)

const PORT = 3001;

httpServer.listen(PORT, async() =>{
    console.log(`Weather Pulse Server is running on http://localhost:${PORT}`);
});