import React, { useState, createContext } from "react";

import Api from "../services/weatherServices.js";
export const WeatherContext = createContext();

export const WeatherState = ({ children }) => {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState();
  const [forecastVisible, setForecastVisible] = useState(true);

  const [dayOneVisible, setDayOneVisible] = useState(false);
  const [dayTwoVisible, setDayTwoVisible] = useState(false);
  const [dayThreeVisible, setDayThreeVisible] = useState(false);

  const handleBackButton = () => {
    setDayOneVisible(false);
    setDayTwoVisible(false);
    setDayThreeVisible(false);
    setForecastVisible(true);
  };

  const fetchData = (e) => {
    e.preventDefault();
    handleBackButton();

    Api.fetchWeather(city).then((data) => {
      updateWeather(data);
      updateCity("");
      console.log(data);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        updateCity,
        weather,
        updateWeather,
        fetchData,

        forecastVisible,
        setForecastVisible,

        dayOneVisible,
        setDayOneVisible,

        dayTwoVisible,
        setDayTwoVisible,

        dayThreeVisible,
        setDayThreeVisible,

        handleBackButton,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
