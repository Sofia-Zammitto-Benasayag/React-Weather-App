import React, { useState } from "react";
import axios from "axios";
import WeatherForecastStyle from "./WeatherForecastStyle.css";
import WeatherForecastData from "./WeatherForecastData";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded && props.city === forecast.city.name) {
        
        return (
            <div className="WeatherForecast row">
            
             {forecast.list.slice(0, 6).map(function (forecastItem){
                 return <WeatherForecastData data={forecastItem} />;
             })}   
            
            </div>
            );

     /*
     
     <WeatherForecastData data={forecast.list[0]}/>
            <WeatherForecastData data={forecast.list[1]}/>
            <WeatherForecastData data={forecast.list[2]}/>
            <WeatherForecastData data={forecast.list[3]}/>
            <WeatherForecastData data={forecast.list[4]}/>
            <WeatherForecastData data={forecast.list[5]}/> 
     */

    } else {

    const apiKey = `f06bbc0616bd3ef71eb9f587864f4a58`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
    }

    
}