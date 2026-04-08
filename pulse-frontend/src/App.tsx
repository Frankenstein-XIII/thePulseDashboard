import { useWeatherSocket } from "./hooks/useWeatherSocket";
import WeatherChart from "./components/WeatherChart";

function App(){
  const chartData = useWeatherSocket();

  return(
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '40px' }}>
      {chartData.length>0 ?(
        <WeatherChart data = {chartData}/>
      ):(
        <div style={{color:'#fff'}}> Waiting for server to run! </div>
      )}
    </div>
  );
}

export default App;