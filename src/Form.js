import React from "react";

export default function Form() {
  return (
    <div className="form">
      <br />
      <div class="">
        <form id="search">
          <div class="">
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
      <div class="">
        <div class="">
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <div class="">
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
