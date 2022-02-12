import React from "react";
import "./App.css";
import { WeatherState } from "./Context/WeatherContext";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <div>
      <WeatherState>
        <Container />
      </WeatherState>
    </div>
  );
};

export default App;
