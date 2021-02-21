import React from "react";

export default function Form() {
  return (
    <div className="form">
      <br />
      <div class="form-group row">
        <form id="search">
          <div class="col-xs-4">
            <input
              type="text"
              placeholder="Hey, what's the weather?"
              class="form-control"
              autofocus="on"
              id="search-input"
            />
          </div>
        </form>
      </div>
      <div class="btn-group">
        
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        
      
        <button
          type="button"
          class="btn btn-success"
          id="current-location-button"
          >
          Current location
        </button>
          
      </div>
      <ul class="factors">
        <li id="feels-like"></li>
        <li id="humidity"></li>
        <li id="wind"></li>
      </ul>
    </div>
  );
}
