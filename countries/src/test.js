import React from "react";
import axios from "axios";

const getCountryCoordinates = (country) => {
  const API_KEY = "02d5025c3384c3caa87f8b3c95b43491";
  const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&appid=${API_KEY}`;

  return axios.get(geoURL).then((res) => {
    const lat = res.data[0].lat;
    const lon = res.data[0].lon;
    return { lat, lon };
  });
};
const Weather = (country) => {
  return getCountryCoordinates(country).then((coordinates) => {
    const lat = coordinates.lat;
    const lon = coordinates.lon;
    console.log(lat, lon);
    // return (
    //   <div>
    //     {lat} {lon}
    //   </div>
    // );
  });
};
Weather("Helsinki");
