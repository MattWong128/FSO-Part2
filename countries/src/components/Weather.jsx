import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "02d5025c3384c3caa87f8b3c95b43491";

const getCountryCoordinates = (country) => {
  const capital = country.capital[0];
  const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${capital}&appid=${API_KEY}`;
  return axios.get(geoURL).then((res) => {
    const lat = res.data[0].lat;
    const lon = res.data[0].lon;
    return { lat, lon };
  });
};
const getWeather = (country) => {
  const request = getCountryCoordinates(country).then((coords) => {
    const lat = coords.lat;
    const lon = coords.lon;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    return axios.get(weatherUrl).then((res) => res.data);
  });
  return request;
};
const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getWeather(country).then((weather) => setWeather(weather));
  }, []);
  return (
    <div>
      <p>Temperature {weather.main.temp} Celcius</p>
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};
export default Weather;
