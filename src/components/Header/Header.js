import React, { useContext } from "react";
import "./Header.scss";
import logo from "../../animations/logo.gif";
import { WeatherContext } from "../../context/weatherContext";
const Header = () => {
  const { getWeatherData, getCurrentLocationWeather, city, setCity } =
    useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData("city");
  };

  return (
    <div className="header">
      <span className="logo">
        <h1> Weather </h1>
        <img className="logo-animation" src={logo} alt="animated-logo" />
        <h1>Buddy</h1>
      </span>
      <span>
        <button
          id="gps-button"
          onClick={getCurrentLocationWeather}
          title="Current Location"
        >
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="city, state or pincode"
            pattern="[A-Za-z0-9 ]+$"
            minLength="3"
            maxLength="60"
            onChange={(e) => setCity(e.target.value)}
            name="searchValue"
            value={city}
            required
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass" title="Search"></i>
          </button>
        </form>
      </span>
    </div>
  );
};

export default Header;
