// import { useState } from 'react'
import React ,{useEffect, useState}from 'react'
import Weather from './components/Weather'
import './App.css'
function App() {
    const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95fb9c1d9bee1e61a6701e7a24b32818&units=metric`
    );
    const json = await res.json();
    setData(json);
  };
  return (
    <div>
      <h1>Weather App</h1>
       <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city..." 
      />
        <button onClick={getWeather}>Search</button>
         
   {data && <Weather props={data} />}

    </div>
  )
}

export default App