import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row forecastWeekday"> MON</div>
            <div className="row forecastIcon">
              <img src="./media/sunny.png" alt="" />
            </div>
            <div className="row forecastTemp"> 17° | 9° </div>
          </div>

          <div className="col">
            <div className="row forecastWeekday"> TUE</div>
            <div className="row forecastIcon">
              <img src="./media/sunny.png" alt="" />
            </div>
            <div className="row forecastTemp"> 17° | 9° </div>
          </div>

          <div className="col">
            <div className="row forecastWeekday"> WED</div>
            <div className="row forecastIcon">
              <img src="./media/sunny.png" alt="" />
            </div>
            <div className="row forecastTemp"> 17° | 9° </div>
          </div>

          <div className="col">
            <div className="row forecastWeekday"> THU</div>
            <div className="row forecastIcon">
              <img src="./media/sunny.png" alt="" />
            </div>
            <div className="row forecastTemp"> 17° | 9° </div>
          </div>

          <div className="col">
            <div className="row forecastWeekday"> FRI</div>
            <div className="row forecastIcon">
              <img src="./media/sunny.png" alt="" />
            </div>
            <div className="row forecastTemp"> 17° | 9° </div>
          </div>
        </div>
      </div>
    </div>
  );
}
