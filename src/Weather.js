import React, { useState } from "react";
import Weather from "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props){
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        wind: Math.round(response.data.wind.speed),
        city: response.data.name,
        description: response.data.weather[0].description,
        feelslike: Math.round(response.data.main.feels_like)
    })
}

function search(){
 const apiKey = `f06bbc0616bd3ef71eb9f587864f4a58`;
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready) {
return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Hey, what's the weather?" className="form-control" autoFocus="on" onChange={handleCityChange}></input>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
         
        </div>
    );
} else {
 search();

 return(
     <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />
 );
}

 
}

/* 

import axios from "axios";
import React from "react";
import Loader from "react-loader-spinner";
import Weather from "./Weather.css"

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°`);
    }

    let apiKey = `f06bbc0616bd3ef71eb9f587864f4a58`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="Weather">
         Weather
         <h1>California</h1>
         <ul>
             <li>Sunday 12:50</li>
             <li>Sunny</li>
         </ul>
        <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        />
        </div>
    );
}









*/