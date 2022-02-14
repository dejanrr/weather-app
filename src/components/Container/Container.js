import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./container.css";
import Navbar from "../Navbar/Navbar.js";
import cityImg from "../../assets/city.jpg";
import TodayWeather from "../todayWeather/TodayWeather";
import Forecast from "../forecast/Forecast";
import Footer from "../Footer/Footer";
import Typical from "react-typical";
import DayOne from "../hourlyWeather/DayOne";
import DayTwo from "../hourlyWeather/DayTwo";
import DayThree from "../hourlyWeather/DayThree";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];

  return `${day}, ${month} ${date}`;
};

const Container = () => {
  const {
    weather,
    dayTwoVisible,
    dayOneVisible,
    dayThreeVisible,
  } = useContext(WeatherContext);

  return (
    <div className="main">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-box">
            {typeof weather != "undefined" ? (
              <div>
                <div className="weather-name">
                  {weather.location.name}, {weather.location.country}
                </div>
                <div className="city-temp">{weather.current.temp_c} °c</div>

                <div className="time">
                  {weather.location.localtime.slice(10)}
                </div>
                <div className="date">
                {weather.location.localtime.slice(8, 10)}.
                {weather.location.localtime.slice(5, 7)}.
                {weather.location.localtime.slice(0, 4)}.
                  {/* {dateBuilder(new Date())} */}</div>

                <div className="current-condition">
                  <div className="city-weather-icon">
                    <img
                      src={weather.current.condition.icon}
                      className="weather-icon"
                    />
                  </div>
                  <div className="current-condition-text">
                    {weather.current.condition.text}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="left-box-text">Weather App</div>
                <div className="left-box-subheading">
                  Check out today's <br />
                  weather information!
                </div>
              </>
            )}

            <div className="bottom-image">
              <img src={cityImg} width="250px" className="cityImg" />
            </div>
            <Footer />
          </div>

          <div className="right-box">
            <div className="header">
              <Navbar />
            </div>

            {typeof weather != "undefined" ? (
              <>
                <Forecast />

                {dayOneVisible === true ? <DayOne /> : ""}
                {dayTwoVisible === true ? <DayTwo /> : ""}
                {dayThreeVisible === true ? <DayThree /> : ""}

                <TodayWeather />
              </>
            ) : (
              <div className="text-wrapper">
                <div className="wrap">
                  <div className="page-text">
                    <Typical
                      steps={[
                        "Welcome!",
                        2000,
                        "Enter ZIP code or city name",
                        3000,
                      ]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </div>
                  <div className="page-subheading">e.g. ' London '</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
