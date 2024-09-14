import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thu 19
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          10
        </div>
      </div>
    </div>
  );
}
