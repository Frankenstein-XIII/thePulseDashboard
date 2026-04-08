# Phase 1: The Sky Hook (Local API Integration)
What? Establishing a reliable connection to a local weather provider (like QWeather or Open-Meteo) to fetch current conditions.
Why? To ensure the server can successfully reach a data source and parse the JSON response for specific local metrics (Temp, Humidity, UV Index).
How? Use axios to hit the weather service's REST API using your API key and the City ID for Nanjing (101190101).
Symbolic Annotation:
axios.get('https://qweather.com')

# Phase 2: The Atmosphere (Socket.io Relay)
What? Creating a server-side "Ticker." Since weather doesn't change every millisecond like BTC, the server will fetch data every few minutes and "push" updates to the browser via Socket.io.
Why? It mimics real-time behavior. Instead of the browser asking for updates, the server "announces" them, keeping all connected users in sync.
How? Use setInterval on the Express server to fetch new data every 10 minutes and io.emit('weatherUpdate', data) to broadcast it.
Symbolic Annotation:
setInterval(async () => { const data = await fetchWeather(); io.emit('pulse', data); }, 600000);

# Phase 3: The Forecast (Live Charts & UI)
What? Building a React dashboard that visualizes temperature fluctuations and wind speeds using Recharts.
Why? To see the "Pulse" of the day. A line chart showing the temperature trend is more informative than a single static number.
How? Use socket.io-client in React to listen for the server's pulse. Store the incoming data in a state array and map it to a <AreaChart /> for a smooth visual effect.
Symbolic Annotation:
<AreaChart data={weatherHistory}><Area dataKey="temp" fill="#8884d8" /></AreaChart>


# Phase 4: The Horizon (Multi-City Watchlist)
What? Allowing the user to add and switch between different cities (e.g., Nanjing, Shanghai, Beijing).
Why? Teaches dynamic state management and how to handle multiple data streams on the same dashboard.
How? Create a search bar that uses a GeoAPI to find city IDs. When a user selects a city, use socket.emit('joinCity', 'cityId') to tell the server to start tracking that specific location.
Symbolic Annotation:
socket.emit('subscribe_city', '101010101'); // Beijing ID