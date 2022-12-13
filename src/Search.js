import "./styles.css";
import React from "react";

import Weather from "./Weather";

export default function Search(props) {
  return (
    <div className="container">
      <div className="weather-app">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                id="city-input"
                className="form-control shadow-sm"
              />
            </div>
            <div>
              <button id="search" type="submit" className="btn btn-primary">
                Search
              </button>
              <button
                id="currentcity"
                type="button"
                className="btn btn-success"
              >
                Current
              </button>
            </div>
          </div>
          <Weather />
        </form>
      </div>
    </div>
  );
}
