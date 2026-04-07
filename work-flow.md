📍 Phase 1: The Pulse Hook (Initial Data & WebSocket)
Focus: Proving you can get data from the outside world into your terminal.
Task 1.1: Initialize the Project (Monorepo structure: /server and /client).
Task 1.2: Create a basic Node/TS server to fetch "Cold" data (initial prices) via axios from CoinGecko.
Task 1.3: Write a script to connect to the Binance WebSocket (wss://://binance.com) and log "Hot" prices to the console.
Review Goal: Can I see a live, updating BTC price in my terminal?

Task 1.1: Initialize the Project
What? Setting up a Monorepo structure where your frontend (/client) and backend (/server) live in one folder but stay independent.
Why? It keeps your code organized. You’ll be running two different environments (React and Node) at the same time, and they need to share types but have their own dependencies.
How? Create a root folder, then use mkdir for subfolders. Initialize npm in both and set up a basic tsconfig.json for the server.
Symbolic Annotation: mkdir the-pulse && cd the-pulse && mkdir server client
Task 1.2: Fetch "Cold" Data (Initial Prices)
What? Making a one-time HTTP request to get the current market price of Bitcoin.
Why? WebSockets only give you changes (the "ticks"). When a user first opens the app, the screen will be blank until a trade happens. "Cold" data fills that gap instantly.
How? Install axios in the /server folder. Write an async function that calls the CoinGecko simple/price endpoint and logs the result.
Symbolic Annotation: const res = await axios.get('https://coingecko.com')
Task 1.3: Connect to Binance WebSocket ("Hot" Data)
What? Opening a persistent "live wire" to Binance to receive every price movement as it happens.
Why? Real-time apps shouldn't refresh the page or spam APIs with requests. WebSockets allow Binance to "push" data to you the millisecond a trade occurs.
How? Use the ws library in Node. Connect to the Binance stream URL and create an .on('message') listener to parse the incoming data buffers.
Symbolic Annotation: ws.on('message', (data) => console.log(JSON.parse(data).p))


💓 Phase 2: The Heartbeat (Socket.io Relay)
Focus: Building the "Middleman" server that broadcasts to multiple users.
Task 2.1: Install and configure Socket.io on your Express server.
Task 2.2: Set up the "Relay" logic: When Binance sends a price to your server, your server io.emit() it to all connected web clients.
Task 2.3: Handle connection/disconnection logic to avoid memory leaks.
Review Goal: Can I open two browser tabs and see the exact same price update simultaneously?
📉 Phase 3: The Visualizer (React + Recharts)
Focus: Turning raw JSON numbers into a beautiful, moving UI.
Task 3.1: Scaffold the React (Vite + TS) frontend and connect it to your Relay server using socket.io-client.
Task 3.2: Implement a "Price Buffer" (a state array that holds the last 20–50 price points).
Task 3.3: Integrate Recharts. Map your price buffer to a <LineChart /> that "slides" as new data arrives.
Review Goal: Does the chart move smoothly without jumping or lagging the browser?
📡 Phase 4: The Watchlist (Dynamic Subscriptions)
Focus: Letting the user control the data stream.
Task 4.1: Build a "Search & Add" UI component to select different coins (ETH, SOL, DOGE).
Task 4.2: Implement socket.emit('subscribe', 'ethusdt') logic so the frontend can tell the server what it wants to see.
Task 4.3: Update the Server to dynamically open/close Binance streams based on active user interests.
Review Goal: Can I switch from BTC to ETH and see the chart update to the new coin's "Pulse" instantly?