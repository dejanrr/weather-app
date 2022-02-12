import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./todayWeather.css";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import CompressIcon from "@mui/icons-material/Compress";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";

const TodayWeather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <>
      <div className="today-weather-wrapper">
        <div className="page-title">Today's highlights</div>
        <div className="today-weather">
          <div className="weather-box">
            <div className="weather-box-title">Wind speed</div>
            <div>
              <div className="weather-box-value">
                {weather.current.wind_kph}
              </div>
              km/h
            </div>
            <div className="weather-box-icon">
              <AirIcon />
            </div>
          </div>
          <div className="weather-box">
            <div className="weather-box-title">Clouds</div>
            <div className="weather-box-value">{weather.current.cloud}</div>
            <div className="weather-box-icon">
              <CloudIcon />
            </div>
          </div>
          <div className="weather-box">
            <div className="weather-box-title">Humidity</div>
            <div className="weather-box-value">{weather.current.humidity}</div>
            <div className="weather-box-icon">
              <ThermostatIcon />
            </div>
          </div>
        </div>
        <div className="today-weather">
          <div className="weather-box">
            <div className="weather-box-title">UV Index</div>
            <div className="weather-box-value">{weather.current.uv}</div>
            <div className="weather-box-icon">
              <SpeedIcon />
            </div>
          </div>
          <div className="weather-box">
            <div className="weather-box-title">Pressure</div>
            <div className="weather-box-value">
              {weather.current.pressure_mb}
            </div>
            hPa
            <div className="weather-box-icon">
              <CompressIcon />
            </div>
          </div>
          <div className="weather-box">
            <div className="weather-box-title">Visibility</div>
            <div className="weather-box-value">{weather.current.vis_km}</div>
            km
            <div className="weather-box-icon">
              <VisibilityIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeather;
