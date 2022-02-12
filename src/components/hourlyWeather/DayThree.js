import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./hourlyWeather.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DayThree = () => {
  const { weather, handleBackButton } = useContext(WeatherContext);

  return (
    <div className="hourly-weather-wrapper">
      <div className="hourly-weather-heading">
        <div className="back-icon" onClick={handleBackButton}>
          <ArrowBackIcon />
        </div>
        <div>
          <div className="forecast-date">
            {weather.forecast.forecastday[2].date.slice(8, 10)}.
            {weather.forecast.forecastday[2].date.slice(5, 7)}.
          </div>
        </div>
      </div>

      {/* row one */}

      <div className="hourly-weather-row">
        <div className="week-box">
          <div className="hourly-weather-title">00:00h</div>
          <div className="hourly-weather-icon">
            <img src={weather.forecast.forecastday[2].hour[0].condition.icon} />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[0].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">02:00h</div>
          <div className="hourly-weather-icon">
            <img src={weather.forecast.forecastday[2].hour[2].condition.icon} />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[2].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">04:00h</div>
          <div className="hourly-weather-icon">
            <img src={weather.forecast.forecastday[2].hour[4].condition.icon} />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[4].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">06:00h</div>
          <div className="hourly-weather-icon">
            <img src={weather.forecast.forecastday[2].hour[6].condition.icon} />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[6].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">08:00h</div>
          <div className="hourly-weather-icon">
            <img src={weather.forecast.forecastday[2].hour[8].condition.icon} />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[8].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">10:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[10].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[10].temp_c}°
          </div>
        </div>
      </div>

      {/* row two */}

      <div className="hourly-weather-row">
        <div className="week-box">
          <div className="hourly-weather-title">12:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[12].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[12].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">14:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[14].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[14].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">16:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[16].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[16].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">18:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[18].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[18].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">20:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[20].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[20].temp_c}°
          </div>
        </div>

        <div className="week-box">
          <div className="hourly-weather-title">22:00h</div>
          <div className="hourly-weather-icon">
            <img
              src={weather.forecast.forecastday[2].hour[22].condition.icon}
            />
          </div>
          <div className="hourly-weather-value">
            {weather.forecast.forecastday[2].hour[22].temp_c}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayThree;
