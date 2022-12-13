import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="weatherapp">
      <h1 id="city">Perth, Australia</h1>
      <ul>
        <li id="date"></li>
        <li id="description">Partly Cloudy</li>
      </ul>
      <div class="row">
        <div class="col-6">
          <div class="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              class="weather-icon float-left"
            />
            <div class="float-left">
              <span class="temperature" id="temperature">
                19
              </span>
              <span class="units">
                <a href="#" id="celsius-link">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li id="precipitation">Precipitation: 0%</li>
            <li id="humidity">Humidity: 77%</li>
            <li id="wind">Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
