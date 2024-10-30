import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from './Images/logo.png';
import wind from './Images/wind.png';
import cloudIcon from './Images/cloudy.png'
import snowIcon from './Images/snow.avif';
import rainIcon from './Images/rain.png';
import clearIcon from './Images/clear.webp'
import hazeIcon from './Images/Haze.png';

import './Weather.css'
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";


const Weather = () => {
  const [user, setUser] = useState({});
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const weatherIcons = {
    Clear: clearIcon,
    Clouds: cloudIcon,
    Rain: rainIcon,
    Snow: snowIcon,
    Wind: wind,
    Haze: hazeIcon,
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
        );
        setUser(res.data);
        toast.success('Data fetched successfully!');
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch data');
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCity(search);
    if (user.weather.description="cloud"){
      {cloudIcon}
    } // Set city on form submit
  };
  console.log(user.wind);

  const kelvinToCelsius = (tempK) => (tempK - 273.15).toFixed(2);
  const kelvinToFahrenheit = (tempK) => ((tempK - 273.15) * 9 / 5 + 32).toFixed(2);

  return (
    <div id='box'>
      <div className='heading'>
      <img src={logo} alt="Logo" id='logo' className='head'/>
      <h1 className='head head2'>Weather App</h1>
      </div>

      <div style={{textAlign: "center"}}>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="city">Enter City Name: </label> <br />
        <input
          type="text"
          placeholder="Enter city: "
          id="city"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit"><FaSearch /></button>
      </form>

      {user.name && (
        <div>
          <h2>Weather in {user.name}</h2>

          {user.weather && user.weather.map((weather, index) => (
            <div key={index}>
              <p> {weather.description}</p>
              {weatherIcons[weather.main] && (
                <img src={weatherIcons[weather.main]} alt={weather.main} className='stateicon' />
              )}
            </div>
          ))}

          {user.main && (
            <div>
              <p>Temperature: {kelvinToCelsius(user.main.temp)}°C / {kelvinToFahrenheit(user.main.temp)}°F</p>
            </div>
          )}
          <div>
          {user.main && (
            <div>
              {/* <img src={humidity} alt="humidity" style={{ height: "20px"}}/> */}
              <p className='child'><WiHumidity/> Humidity: {user.main.humidity}%</p>
            </div>
          )}
          {user.wind &&(
            <div>
              <p className='child'><WiStrongWind />Wind Speed: {(user.wind.speed * 3.6).toFixed(2)} km/h</p>
            </div>
          )}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Weather;






