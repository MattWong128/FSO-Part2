import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const add = (personObj) => {
  return axios.post(baseUrl, personObj).then((res) => res.data);
};
const get = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

export default {
  add,
  get,
};
