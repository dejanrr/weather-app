import axios from "axios";

export default {
  fetchWeather: (city) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=7`;
    return axios.get(url).then((info) => info.data);
  },
};