import React from "react";
import Weather from "./Weather.css"

export default function WeatherApp(){
 return(
        <div className="Weather">
            <form>
                <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Hey, what's the weather?" className="form-control" autoFocus="on"></input>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
         <h1>California</h1>
         <ul>
             <li>Sunday 12:50</li>
             <li>Sunny</li>
         </ul>
         <div className="row mt-3">
         <div className="col-6">
         <div className="clearfix">
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunnny" className="float-left"/>
         <div className="float-left">
         <span className="temperature">65</span>
         <span className="unit">°C</span>
         </div>
         </div>
         </div>
         <div className="col-6">
             <ul>
                 <li>Precipitation: 0%</li>
                 <li>Humidity: 19%</li>
                 <li>Wind: 0 mph</li>
             </ul>
         </div>
         </div>
        </div>
    );
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