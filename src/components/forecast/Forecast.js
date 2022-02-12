import React, { useContext, useState } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./forecast.css";

const Forecast = () => {
  const {
    weather,
    forecastVisible,
    dayTwoVisible,
    setDayTwoVisible,
    setDayOneVisible,
    dayThreeVisible,
    setForecastVisible,
    setDayThreeVisible,
  } = useContext(WeatherContext);

  const showDayOne = () => {
    setDayOneVisible(true);
    setForecastVisible(false);
  };

  const showDayTwo = () => {
    setDayTwoVisible(true);
    setForecastVisible(false);
  };

  const showDayThree = () => {
    setDayThreeVisible(true);
    setForecastVisible(false);
  };

  return (
    <>
      {forecastVisible === true ? (
        <div className="week-temp-box">
          <div>
            <div className="forecast-title">3-day forecast</div>
            <div className="forecast-subheading">
              Click on the box to see the hourly weather for that day
            </div>
          </div>
          <div className="week-box-row">
            <div className="week-box" onClick={showDayOne}>
              <div className="forecast-date">
                {weather.forecast.forecastday[0].date.slice(8, 10)}.
                {weather.forecast.forecastday[0].date.slice(5, 7)}.
              </div>
              <div>
                <img
                  src={weather.forecast.forecastday[0].day.condition.icon}
                  className="weather-icon"
                />
              </div>
              <div className="max-min-temp-row">
                <div className="max-temp-text">
                  {weather.forecast.forecastday[0].day.maxtemp_c}°
                </div>
                &nbsp;
                <div className="min-temp-text">
                  {weather.forecast.forecastday[0].day.mintemp_c}°
                </div>
              </div>
            </div>

            <div className="week-box" onClick={showDayTwo}>
              <div className="forecast-date">
                {weather.forecast.forecastday[1].date.slice(8, 10)}.
                {weather.forecast.forecastday[1].date.slice(5, 7)}.
              </div>
              <div>
                <img
                  src={weather.forecast.forecastday[1].day.condition.icon}
                  className="weather-icon"
                />
              </div>
              <div className="max-min-temp-row">
                <div className="max-temp-text">
                  {weather.forecast.forecastday[1].day.maxtemp_c}°
                </div>
                &nbsp;
                <div className="min-temp-text">
                  {weather.forecast.forecastday[1].day.mintemp_c}°
                </div>
              </div>
            </div>

            <div className="week-box" onClick={showDayThree}>
              <div className="forecast-date">
                {weather.forecast.forecastday[2].date.slice(8, 10)}.
                {weather.forecast.forecastday[2].date.slice(5, 7)}.
              </div>
              <div>
                <img
                  src={weather.forecast.forecastday[2].day.condition.icon}
                  className="weather-icon"
                />
              </div>
              <div className="max-min-temp-row">
                <div className="max-temp-text">
                  {weather.forecast.forecastday[2].day.maxtemp_c}°
                </div>
                &nbsp;
                <div className="min-temp-text">
                  {weather.forecast.forecastday[2].day.mintemp_c}°
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Forecast;
