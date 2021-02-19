import React from "react";

export default function Header(){
  return (
    <div className="header">
      
    <h1>California</h1>
    <h2 id="date"> Saturday at 21:49 pm</h2>
    <h3>Clear skies</h3>
    <br />
    <p class="current-temperature">
    <img src="" alt="" id="icon" class="icon" />
    <span class="temperature" id="temperature"> -4 </span>
    <span class="units">
    <a href="#" id="celsius-link" class="active">°C </a> |
    <a href="#" id="fahrenheit-link"> °F </a>  
      </span>
    </p>
    </div>
  );
}