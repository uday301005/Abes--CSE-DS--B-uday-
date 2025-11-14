import React from 'react'
import './Weather.css'

function Weather({props}) {
  return (
    <div>
        <h2>Weather in {props.name}</h2>
        <p>Temperature: {props.main.temp}°C</p>
        <p>Condition: {props.weather[0].main}</p>
        <p>Humidity: {props.main.humidity}</p>
        <p>Wind Speed: {props.wind.speed}</p>
    </div>
  )
}

export default Weather