import React from "react";
import axios from "axios";

const getCountryCoordinates = (country) => {
  const capital = country.capital[0];
  const API_KEY = "02d5025c3384c3caa87f8b3c95b43491";
  const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${capital}&appid=${API_KEY}`;
  return axios.get(geoURL).then((res) => {
    const lat = res.data[0].lat;
    const lon = res.data[0].lon;
    return { lat, lon };
  });
};
const Weather = ({ country }) => {
  console.log(getCountryCoordinates(country));
  //   return getCountryCoordinates(country).then((coordinates) => {
  //     const lat = coordinates.lat;
  //     const lon = coordinates.lon;
  //     // return <div>{/* {lat} {lon} */}</div>;
  //   });
};
export default Weather;
