import React from "react";

import "./WeatherData.css";

export default function WeatherData() {
  return (
    <div className="WeatherData">
      <div className="currentWeatherIcon">
        <img src="./media/partlycloudy.png" alt="partly cloudy" />
      </div>
      <div className="currentTemp">
        18
        <sup>℃</sup>
      </div>

      <div>
        <div className="conditions">Conditions: Partly Cloudy</div>
        <div className="humidity">Humidity: 85% </div>
        <div className="wind">Wind: 3kmh</div>
      </div>
    </div>
  );
}
