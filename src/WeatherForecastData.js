import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastData(props){
    function hours(){
        let data = new Date(props.data.dt * 1000)
        let hours = data.getHours()
        return `${hours}:00`;
    }

function temperature() {
 let temperature = Math.round(props.data.main.temp);
 return `${temperature}°C `;   
}

    return (
    
    <div className="WeatherForecastData col">
    {hours()}
    <WeatherIcon code={props.data.weather[0].icon}/>
    {temperature()}     
    </div>
    );
}