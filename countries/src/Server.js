import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
  return axios.get(baseUrl).then((res) => res.data.map((country) => country.name.common));
};

export default {
  getAllCountries,
};
