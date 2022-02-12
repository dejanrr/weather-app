import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./searchBox.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const { city, updateCity, fetchData } = useContext(WeatherContext);

  return (
    <div className="search-box">
      <div className="search-box-icon">
        <SearchIcon />
      </div>
      <form onSubmit={fetchData}>
        <input
          type="text"
          className="search-bar"
          value={city}
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Search for places..."
        />
      </form>
    </div>
  );
};

export default SearchBox;
