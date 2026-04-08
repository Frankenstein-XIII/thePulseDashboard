import { Area, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, Legend, Line, ComposedChart, Bar
} from 'recharts';
import { ChartPoint } from '../types/weather';

interface Props{
    data: ChartPoint[];
}


const WeatherChart = ({data}: Props) =>{
    return (
      <div
        style={{
          width: "100%",
          height: 400,
          background: "#1e1e1e",
          padding: "10px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>
          Nanjing Weather Pulse
        </h2>
        <ResponsiveContainer width="100%" height="max-content" aspect={2}>
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" stroke="#888" />
            <YAxis
              yAxisId="left"
              stroke="#ff7300"
              label={{ value: "°C", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#0088fe"
              label={{ value: "km/h", angle: 90, position: "insideRight" }}
            />
            <YAxis
              yAxisId="percent"
              orientation="right"
              stroke="#00e676"
              hide
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                color: "#fff",
              }}
            />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              stroke="#ff7300"
              fillOpacity={1}
              fill="url(#colorTemp)"
              name="Temp (°C)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="windSpeed"
              stroke="#0088fe"
              dot={false}
              name="Wind (km/h)"
            />
            <Line
              yAxisId="percent"
              type="monotone"
              dataKey="humidity"
              stroke="#00e676"
              strokeDasharray="5 5"
              dot={false}
              name="Humidity (%)"
            />
            <Bar
              yAxisId="percent"
              dataKey="precipitation"
              fill="#2979ff"
              name="Rain (mm)"
              barSize={10}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
};

export default WeatherChart;